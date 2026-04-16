// Google OAuth client config for the dashboard catalog.
//
// Setup steps:
// 1. Go to https://console.cloud.google.com/ and create (or pick) a project.
// 2. APIs & Services → OAuth consent screen → External → fill in App name,
//    support email, developer email. You can leave scopes empty (we only use
//    the basic profile/email returned by Google Identity Services).
// 3. APIs & Services → Credentials → Create Credentials → OAuth client ID:
//      • Application type: Web application
//      • Name: mihnjong-l dashboard
//      • Authorized JavaScript origins:
//          http://localhost:8000
//          http://localhost:8080
//          https://mihnjong-l.github.io
//      • Authorized redirect URIs: (leave empty — GIS uses postMessage)
// 4. Copy the Client ID (looks like 1234-abc.apps.googleusercontent.com)
//    and paste it below.
//
// The Client ID is NOT a secret — it's safe to commit. (Client *secrets* are.)

window.AUTH_CONFIG = {
  // TODO: replace with your real Client ID
  clientId: "1026854573778-9d9iulkgdvu7frqj2tsahcru9bghg2od.apps.googleusercontent.com",

  // Optional allowlist. Leave [] to allow any Google account.
  // Example: ["you@gmail.com", "spouse@gmail.com"]
  allowedEmails: ["mihnjong@gmail.com", "bokyung.seo.ai@gmail.com"],

  // Where to send users after sign-out (relative to current page)
  signOutRedirect: null,

  // HTTPS endpoint of the get-decryption-key Cloud Function.
  // Set this AFTER deploying functions/get-decryption-key — see its README.
  // Example: "https://us-central1-your-project.cloudfunctions.net/get-decryption-key"
  keyEndpoint: "https://get-decryption-key-san4ktel2q-uc.a.run.app"
};
