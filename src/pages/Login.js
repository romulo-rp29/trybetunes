/* eslint-disable react/prop-types */
import React from 'react';
import './Login.css';

export default class Login extends React.Component {
  render() {
    console.log(this.props);
    const { createUser, userName, isEnterButtonDisabled, onInputChange } = this.props;
    return (
      <div className="login" data-testid="page-login">
        <div className="loginLogo">Login TrybeTunes</div>
        <form className="loginForm" data-testid="login-name-input">
          <input
            className="loginUserName"
            name="userName"
            data-testid="login-name-input"
            type="text"
            onChange={ onInputChange }
            value={ userName }
          />
          <button
            className="loginButton"
            type="submit"
            data-testid="login-submit-button"
            onClick={ createUser }
            disabled={ isEnterButtonDisabled }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
