// Client-side Google sign-in gate for static pages.
//
// IMPORTANT: This is a UI gate, not real security. The HTML/JS source is
// public on GitHub Pages and can be fetched directly. Use this only to keep
// pages out of casual sight.
//
// Usage: include in <head> after auth-config.js:
//   <script src="../auth-config.js"></script>
//   <script src="../auth.js"></script>

(function () {
  // ── 1. Hide page content immediately to avoid flashing ──────────────
  var style = document.createElement("style");
  style.textContent = [
    "body { visibility: hidden; }",
    "body.auth-ok { visibility: visible; }",
    "body.auth-gate { visibility: visible; }",
    "body.auth-gate > *:not(#auth-overlay) { display: none !important; }",
    "#auth-overlay {",
    "  position: fixed; inset: 0;",
    "  background: radial-gradient(ellipse at top, #fde4d3, #fbf7f1 60%);",
    "  display: flex; align-items: center; justify-content: center;",
    "  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans KR', sans-serif;",
    "  z-index: 9999;",
    "}",
    "#auth-overlay .card {",
    "  background: white; border: 1px solid #e8dfd0; border-radius: 18px;",
    "  padding: 2.5rem 2.25rem; max-width: 380px; width: calc(100% - 2rem);",
    "  text-align: center;",
    "  box-shadow: 0 8px 30px rgba(42,37,32,0.08);",
    "}",
    "#auth-overlay h1 { font-size: 1.4rem; margin: 0 0 0.5rem; color: #2a2520; }",
    "#auth-overlay p  { font-size: 0.9rem; color: #6b6259; margin: 0 0 1.5rem; line-height: 1.5; }",
    "#auth-overlay .gbtn-wrap { display: flex; justify-content: center; margin-bottom: 0.75rem; }",
    "#auth-overlay .err { color: #c0392b; font-size: 0.82rem; margin-top: 0.75rem; min-height: 1rem; }",
    "#auth-overlay .footer { font-size: 0.72rem; color: #9e9389; margin-top: 1.25rem; }",
    "#auth-userbar {",
    "  position: fixed; top: 12px; right: 12px;",
    "  display: flex; align-items: center; gap: 0.5rem;",
    "  background: rgba(255,255,255,0.92); backdrop-filter: blur(6px);",
    "  border: 1px solid #e8dfd0; border-radius: 99px;",
    "  padding: 0.3rem 0.4rem 0.3rem 0.85rem;",
    "  font: 12px -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans KR', sans-serif;",
    "  color: #2a2520; box-shadow: 0 2px 10px rgba(42,37,32,0.06);",
    "  z-index: 9998;",
    "}",
    "#auth-userbar img { width: 22px; height: 22px; border-radius: 50%; }",
    "#auth-userbar button {",
    "  background: none; border: none; cursor: pointer;",
    "  font: inherit; color: #6b6259; padding: 0.2rem 0.5rem; border-radius: 99px;",
    "}",
    "#auth-userbar button:hover { background: #f4ede1; color: #2a2520; }"
  ].join("\n");
  (document.head || document.documentElement).appendChild(style);

  // ── 2. Storage / token helpers ──────────────────────────────────────
  var STORAGE_KEY = "babytime.auth.v1";

  function decodeJwt(token) {
    try {
      var p = token.split(".")[1];
      p = p.replace(/-/g, "+").replace(/_/g, "/");
      while (p.length % 4) p += "=";
      var json = decodeURIComponent(
        atob(p).split("").map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        }).join("")
      );
      return JSON.parse(json);
    } catch (e) {
      return null;
    }
  }

  function isValid(payload) {
    if (!payload || !window.AUTH_CONFIG) return false;
    var cfg = window.AUTH_CONFIG;
    if (payload.aud !== cfg.clientId) return false;
    if (payload.iss !== "https://accounts.google.com" && payload.iss !== "accounts.google.com") return false;
    if (!payload.exp || payload.exp * 1000 <= Date.now()) return false;
    if (cfg.allowedEmails && cfg.allowedEmails.length > 0) {
      if (!payload.email || cfg.allowedEmails.indexOf(payload.email) === -1) return false;
    }
    return true;
  }

  function loadSession() {
    try {
      var raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var session = JSON.parse(raw);
      if (!isValid(session.payload)) {
        sessionStorage.removeItem(STORAGE_KEY);
        return null;
      }
      return session;
    } catch (e) {
      return null;
    }
  }

  function saveSession(token, payload) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ token: token, payload: payload }));
  }

  function signOut() {
    sessionStorage.removeItem(STORAGE_KEY);
    if (window.google && google.accounts && google.accounts.id) {
      try { google.accounts.id.disableAutoSelect(); } catch (e) {}
    }
    var redirect = (window.AUTH_CONFIG && window.AUTH_CONFIG.signOutRedirect) || location.href;
    location.href = redirect;
  }

  // ── 3. UI: gate overlay & user bar ──────────────────────────────────
  function showGate(errorMessage) {
    var overlay = document.getElementById("auth-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "auth-overlay";
      overlay.innerHTML =
        '<div class="card">' +
          '<h1>로그인이 필요합니다</h1>' +
          '<p>이 페이지를 보려면 Google 계정으로 로그인해 주세요.</p>' +
          '<div class="gbtn-wrap"><div id="g-btn"></div></div>' +
          '<div class="err" id="auth-err"></div>' +
          '<div class="footer">mihnjong-l dashboard catalog</div>' +
        '</div>';
      document.body.appendChild(overlay);
    }
    document.body.classList.add("auth-gate");
    document.body.classList.remove("auth-ok");
    if (errorMessage) {
      var err = document.getElementById("auth-err");
      if (err) err.textContent = errorMessage;
    }
    initGoogleButton();
  }

  function showUserBar(payload) {
    var bar = document.getElementById("auth-userbar");
    if (bar) bar.remove();
    bar = document.createElement("div");
    bar.id = "auth-userbar";
    var avatar = payload.picture
      ? '<img src="' + payload.picture + '" alt="">'
      : "";
    bar.innerHTML =
      avatar +
      '<span>' + (payload.email || payload.name || "signed in") + '</span>' +
      '<button type="button" title="Sign out">sign out</button>';
    document.body.appendChild(bar);
    bar.querySelector("button").addEventListener("click", signOut);
  }

  function admit(payload) {
    document.body.classList.remove("auth-gate");
    document.body.classList.add("auth-ok");
    var overlay = document.getElementById("auth-overlay");
    if (overlay) overlay.remove();
    showUserBar(payload);
  }

  // ── 4. Google Identity Services bootstrap ───────────────────────────
  var gisLoaded = false;
  function loadGis(cb) {
    if (gisLoaded || (window.google && google.accounts && google.accounts.id)) {
      gisLoaded = true; cb(); return;
    }
    var s = document.createElement("script");
    s.src = "https://accounts.google.com/gsi/client";
    s.async = true; s.defer = true;
    s.onload = function () { gisLoaded = true; cb(); };
    s.onerror = function () {
      var err = document.getElementById("auth-err");
      if (err) err.textContent = "Google 로그인 스크립트를 불러올 수 없습니다.";
    };
    document.head.appendChild(s);
  }

  function handleCredential(response) {
    var token = response && response.credential;
    if (!token) return;
    var payload = decodeJwt(token);
    if (!isValid(payload)) {
      var err = document.getElementById("auth-err");
      if (err) {
        if (window.AUTH_CONFIG && window.AUTH_CONFIG.allowedEmails && window.AUTH_CONFIG.allowedEmails.length) {
          err.textContent = "이 계정은 허용 목록에 없습니다.";
        } else {
          err.textContent = "유효하지 않은 토큰입니다.";
        }
      }
      return;
    }
    saveSession(token, payload);
    admit(payload);
  }

  function initGoogleButton() {
    if (!window.AUTH_CONFIG || !window.AUTH_CONFIG.clientId ||
        window.AUTH_CONFIG.clientId.indexOf("PASTE_YOUR") === 0) {
      var err = document.getElementById("auth-err");
      if (err) err.textContent = "auth-config.js에 Client ID를 설정해 주세요.";
      return;
    }
    loadGis(function () {
      try {
        google.accounts.id.initialize({
          client_id: window.AUTH_CONFIG.clientId,
          callback: handleCredential,
          auto_select: false,
          cancel_on_tap_outside: false,
          // FedCM avoids the popup+postMessage flow that COOP blocks.
          // Required by Chrome 134+ regardless.
          use_fedcm_for_prompt: true,
          itp_support: true
        });
        var btn = document.getElementById("g-btn");
        if (btn) {
          google.accounts.id.renderButton(btn, {
            theme: "outline", size: "large", shape: "pill", text: "signin_with"
          });
        }
        // Intentionally no prompt() — One Tap depends on FedCM, which can
        // reject with AbortError when in cool-down or unavailable, and we
        // don't need it: the rendered button is enough.
      } catch (e) {
        var err = document.getElementById("auth-err");
        if (err) err.textContent = "초기화 실패: " + e.message;
      }
    });
  }

  // ── 5. Boot ─────────────────────────────────────────────────────────
  function boot() {
    var session = loadSession();
    if (session) admit(session.payload);
    else showGate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
