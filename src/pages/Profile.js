import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import { getUser } from '../services/userAPI';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      name: '',
      email: '',
      bio: '',
      img: '',
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
      });
    });
  }

  render() {
    const {
      loading,
      name,
      email,
      bio,
      img,
    } = this.state;

    return (
      <div data-testid="page-profile">
        <Header />
        {
          loading ? <Loading />
            : (
              <div>
                <h1>TrybeTunes Profile</h1>
                <img
                  data-testid="profile-image"
                  src={ img }
                  alt="user"
                />
                <Link to="/profile/edit">Editar perfil</Link>
                <p>{name}</p>
                <p>{email}</p>
                <p>{bio}</p>
              </div>
            )
        }
      </div>
    );
  }
}
