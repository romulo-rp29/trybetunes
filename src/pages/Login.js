import React from 'react';
import PropsTypes from 'prop-types';

export default class Login extends React.Component {
  render() {
    const {
      userName,
      isEnterButtonDisabled,
      onInputChange,
      handleEnterButtonClick,
    } = this.props;

    return (
      <div data-testid="page-login">
        Login TrybeTunes
        <form>
          <input
            name="userName"
            data-testid="login-name-input"
            onChange={ onInputChange }
            value={ userName }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ isEnterButtonDisabled }
            onClick={ handleEnterButtonClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  userName: PropsTypes.string.isRequired,
  isEnterButtonDisabled: PropsTypes.bool.isRequired,
  onInputChange: PropsTypes.func.isRequired,
  handleEnterButtonClick: PropsTypes.func.isRequired,
};
