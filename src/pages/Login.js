/* eslint-disable react/prop-types */
import React from 'react';

export default class Login extends React.Component {
  render() {
    return (
      <div data-testid="page-login">
        Login TrybeTunes
        <form data-testid="login-name-input">
          <input
            className="form-name"
            data-testid="login-name-input"
            type="text"
            minLength="3"
            required
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}
