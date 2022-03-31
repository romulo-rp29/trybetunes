import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import { getUser, updateUser } from '../services/userAPI';

// Revisitado Live lectures 11.2
export default class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      name: '',
      email: '',
      bio: '',
      img: '',
      saved: false,
      btnDisabled: true,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    }, async () => {
      const user = await getUser();
      this.setState({
        loading: false,
        name: user.name,
        email: user.email,
        bio: user.description,
        img: user.image,
      }, this.validateForm);
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.validateForm);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, bio, img } = this.state;
    const info = {
      name,
      email,
      description: bio,
      image: img,
    };
    this.setState({
      loading: true,
    }, async () => {
      await updateUser(info);
      this.setState({
        saved: true,
      });
    });
  }

  validateForm = () => {
    const { name, email, bio, img } = this.state;
    const btnDisabled = false;

    if (name.length && email.length && bio.length && img.length) {
      this.setState({
        btnDisabled,
      });
    }
  }

  render() {
    const { name, email, bio, img, loading, btnDisabled, saved } = this.state;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        <div>
          { loading ? <Loading /> : (
            <form>
              Nome
              <label htmlFor="name">
                <input
                  data-testid="edit-input-name"
                  type="text"
                  name="name"
                  id="name"
                  value={ name }
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="email">
                E-mail
                <input
                  data-testid="edit-input-email"
                  type="email"
                  name="email"
                  id="email"
                  value={ email }
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="bio">
                Descrição
                <input
                  type="text"
                  value={ bio }
                  name="bio"
                  id="bio"
                  onChange={ this.handleChange }
                  data-testid="edit-input-description"
                />
              </label>
              <label htmlFor="img">
                Imagem de usuário
                <input
                  type="text"
                  data-testid="edit-input-image"
                  value={ img }
                  name="img"
                  id="img"
                  onChange={ this.handleChange }
                />
              </label>
              <button
                type="submit"
                data-testid="edit-button-save"
                disabled={ btnDisabled }
                onClick={ this.handleSubmit }
              >
                Enviar

              </button>
            </form>
          )}
        </div>
        {saved && <Redirect to="/profile" />}
      </div>
    );
  }
}
