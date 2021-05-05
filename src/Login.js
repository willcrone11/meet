import React from "react";

function Login() {
  return (
    <div className="App">
      <h1>Welcome to devel_Up+, the Web Development Meet app!</h1>
      <h4>
      Log in to see upcoming events around the world for
      full-stack
      developers
      </h4>
      <div className="button_cont" align="center">
        <div class="google-btn">
          <div class="google-icon-wrapper">
            <img
              class="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="Google sign-in"
            />
          </div>
          <a
          href="https://accounts.google.com/o/oauth2/v2/auth/identifier?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=36721240947-ga3kcvoir0t2rghlcqp83iv9gb1c831r.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fwillcrone11.github.io%2Fmeet%2F&flowName=GeneralOAuthFlow"
          rel="nofollow noopener"
          class="btn-text"
          >
            <b>Sign in with Google</b>
          </a>
        </div>
      </div>
      <a
        href="https://willcrone11.github.io/meet/devel_Up+PrivacyPolicy.html"
        rel="nofollow noopener"
      >
      Privacy policy
      </a>
    </div>
  );
}

export default Login;