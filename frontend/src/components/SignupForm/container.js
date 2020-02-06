import React, { Component } from "react";
import PropTypes from "prop-types";
import SignupForm from "./presenter";


class Container extends Component {
    state = {
        email: "",
        fullname: "",
        username: "",
        password: "",
    };

    static propTypes = {
        facebookLogin: PropTypes.func.isRequired,
        createAccount: PropTypes.func.isRequired
    };

    render() {
        const { email, fullname, username, password } = this.state;

        return (
            <SignupForm 
                handleInputChange={this._handleInputChange}
                handleSubmit={this._handleSubmit}
                handleFacebookLogin = {this._handleFacebookLogin}
                emailValue={email}
                fullnameValue={fullname}
                usernameValue={username}
                passwordValue={password}
            />
        )
    }

    _handleInputChange = event => {
        const { target: { value, name } } = event;
        this.setState({
            [name]: value
        });
    };

    _handleSubmit = event => {
        const { username, password, email } = this.state;
        const { createAccount } = this.props;

        event.preventDefault();

        createAccount(username, password, email);
    };

    _handleFacebookLogin = response => {
        const { facebookLogin } = this.props;
        facebookLogin(response.accessToken);
    };
}

export default Container;
