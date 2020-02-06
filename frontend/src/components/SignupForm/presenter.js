import React from "react";
import Ionicon from "react-ionicons";
import PropTypes from "prop-types";
import FacebookLogin from "react-facebook-login";
import formStyles from "shared/formStyles.scss";


export const SignupForm = (props, context) => (
  <div className="form-component">
    <h3>Sign up to learn language.</h3>
    <FacebookLogin
        appId="178190336837752"
        autoLoad={false}
        fields="name,email,picture"
        callback={props.handleFacebookLogin}
        cssClass="facebook-link"
        icon="fa-facebook-official"
    >
    </FacebookLogin>
    <span className="divider">or</span>
    <form className="form" onSubmit={props.handleSubmit}>
        <input
            type="email"
            placeholder="Email"
            className="text-input"
            onChange={props.handleInputChange}
            name="email"
            value={props.emailValue}
        />
        <input
            type="text"
            placeholder="Full Name"
            className="text-input"
            onChange={props.handleInputChange}
            name="fullname"
            value={props.fullnameValue}
        />
        <input
            type="text"
            placeholder="Username"
            className="text-input"
            onChange={props.handleInputChange}
            name="username"
            value={props.usernameValue}
        />
        <input
            type="password"
            placeholder="Password"
            className="text-input"
            onChange={props.handleInputChange}
            name="password"
            value={props.passwordValue}
        />
        <input
            type="submit"
            value="Sign up"
            className="button"
        />
    </form>
    <p>
      By signing up, you agree to our <span>Terms & Privacy Policy</span>.
    </p>
  </div>
);

SignupForm.contextTypes = {
  t: PropTypes.func.isRequired
};

SignupForm.propTypes = {
  emailValue: PropTypes.string.isRequired,
  fullnameValue: PropTypes.string.isRequired,
  usernameValue: PropTypes.string.isRequired,
  passwordValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFacebookLogin: PropTypes.func.isRequired
};

export default SignupForm;
