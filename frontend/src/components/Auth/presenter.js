import React from "react";
import styles from "./styles.scss";
import LoginForm from "components/LoginForm";
import SignupForm from "components/SignupForm";

const Auth = (props, context) => (
  <main className="auth">
    <div className="column">
      <div className="white-box form-box">
        {props.action === "login" && <LoginForm />}
        {props.action === "signup" && <SignupForm />}
      </div>
      <div className="white-box">
      {props.action === "signup" && (
        <p>
          Have an account?{" "}
          <span className="change-link" onClick={props.changeAction}>
            Log in
          </span>
        </p>
      )}

      {props.action === "login" && (
        <p>
          Don't have an account?{" "}
          <span className="change-link" onClick={props.changeAction}>
            Sign up
          </span>
        </p>
      )}
      </div>
      <div className="app-box">
        <span>Get the app</span>
        <div className="appstores">
          <img
            src={require("images/android_download.png")}
            alt="Download it on the Google Play"
          />
          <img
            src={require("images/ios_download.png")}
            alt="Download it on the App Store"
          />
        </div>
      </div>
    </div>
  </main>
);

export default Auth;