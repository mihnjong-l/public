// decrypt.js — fetches the AES key from the Cloud Function (after auth.js
// has admitted the user) and exposes a window.decryptBlob(blob) helper that
// returns the plaintext string for an encrypted JSON blob.
//
// Pages opt in by:
//   1. Including this script after auth.js
//   2. Calling window.decryptBlob(window.__ENC_DATA__) when ready
//   3. Or listening for the "data-ready" custom event if they use the
//      auto-decrypt convention (window.__ENC_DATA__ on page load).

(function () {
  const KEY_CACHE = "babytime.dkey.v1";
  const SESSION_KEY = "babytime.auth.v1";
  let cachedKeyBytes = null;

  function b64ToBytes(b64) {
    const bin = atob(b64);
    const out = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  function readSession() {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_KEY) || "null");
    } catch (e) {
      return null;
    }
  }

  async function fetchKey() {
    if (cachedKeyBytes) return cachedKeyBytes;

    const cached = sessionStorage.getItem(KEY_CACHE);
    if (cached) {
      cachedKeyBytes = b64ToBytes(cached);
      return cachedKeyBytes;
    }

    const cfg = window.AUTH_CONFIG || {};
    if (!cfg.keyEndpoint || cfg.keyEndpoint.indexOf("PASTE_") === 0) {
      throw new Error("AUTH_CONFIG.keyEndpoint is not set");
    }

    const session = readSession();
    if (!session || !session.token) {
      throw new Error("not signed in");
    }

    const resp = await fetch(cfg.keyEndpoint, {
      method: "GET",
      headers: { Authorization: "Bearer " + session.token },
    });
    if (!resp.ok) {
      const body = await resp.text().catch(() => "");
      throw new Error("key fetch failed: " + resp.status + " " + body);
    }
    const data = await resp.json();
    if (!data.key) throw new Error("no key in response");

    sessionStorage.setItem(KEY_CACHE, data.key);
    cachedKeyBytes = b64ToBytes(data.key);
    return cachedKeyBytes;
  }

  async function decryptBlob(blob) {
    if (!blob || !blob.iv || !blob.ct) {
      throw new Error("invalid encrypted blob");
    }
    const keyBytes = await fetchKey();
    const cryptoKey = await crypto.subtle.importKey(
      "raw",
      keyBytes,
      { name: "AES-GCM" },
      false,
      ["decrypt"]
    );
    const iv = b64ToBytes(blob.iv);
    const ct = b64ToBytes(blob.ct);
    const pt = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: iv },
      cryptoKey,
      ct
    );
    return new TextDecoder().decode(pt);
  }

  // Auto-decrypt convention: if a page declares window.__ENC_DATA__ before
  // including this script, we'll decrypt it once auth admits the user and
  // dispatch a "data-ready" event with the parsed JSON on document.
  async function autoDecrypt() {
    if (typeof window.__ENC_DATA__ === "undefined") return;
    try {
      const text = await decryptBlob(window.__ENC_DATA__);
      let parsed;
      try { parsed = JSON.parse(text); } catch (e) { parsed = text; }
      window.DATA = parsed;
      document.dispatchEvent(
        new CustomEvent("data-ready", { detail: parsed })
      );
    } catch (e) {
      console.error("[decrypt.js] auto-decrypt failed:", e);
      document.dispatchEvent(
        new CustomEvent("data-error", { detail: e })
      );
    }
  }

  window.decryptBlob = decryptBlob;
  window.fetchDecryptionKey = fetchKey;

  // Wait for auth to admit the user (body.auth-ok) before auto-decrypting.
  // Race-safe: re-checks the class on every transition because auth.js may
  // have already added auth-ok by the time we get a chance to observe.
  function waitForAuth() {
    function isAdmitted() {
      return document.body && document.body.classList.contains("auth-ok");
    }
    if (isAdmitted()) { autoDecrypt(); return; }

    const obs = new MutationObserver(function () {
      if (isAdmitted()) { obs.disconnect(); autoDecrypt(); }
    });

    function startObserving() {
      // Re-check synchronously before observing — auth.js's DOMContentLoaded
      // listener fires before ours and may have already admitted us via a
      // restored sessionStorage session.
      if (isAdmitted()) { autoDecrypt(); return; }
      obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    }

    if (document.body) {
      startObserving();
    } else if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", startObserving);
    } else {
      // Body should exist by now; defer one tick to be safe.
      setTimeout(startObserving, 0);
    }
  }

  waitForAuth();
})();
