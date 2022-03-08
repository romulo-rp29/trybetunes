import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Loading from './Components/Loading';
import { createUser } from './services/userAPI';

export default class App extends React.Component {
  constructor() {
    super();
    const user = localStorage.getItem('user');
    this.state = {
      userName: '',
      isEnterButtonDisabled: true,
      loggedIn: true,
      search: user,
    };
  }

  handleFillLogin = async () => {
    const { userName } = this.state;
    await createUser({ name: userName });
    this.setState({
      userName: '',
      loggedIn: true,
    });
  }

  handleEnterButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      loggedIn: false,
      search: true,

    }, this.handleFillLogin);
  }

  onInputChange = ({ target: { value } }) => {
    const minUserNameLength = 3;
    if (value.length >= minUserNameLength) {
      this.setState({
        userName: value,
        isEnterButtonDisabled: false,
      });
    } else {
      this.setState({
        userName: value,
        isEnterButtonDisabled: true,
      });
    }
  }

  render() {
    const { userName, isEnterButtonDisabled, loggedIn, search } = this.state;
    return (
      <Switch>

        <Route exact path="/search">
          {loggedIn
            ? <Search />
            : <Loading />}
        </Route>

        <Route exact path="/">
          {search ? <Redirect to="/search" /> : (<Login
            userName={ userName }
            isEnterButtonDisabled={ isEnterButtonDisabled }
            onInputChange={ this.onInputChange }
            handleEnterButtonClick={ this.handleEnterButtonClick }
          />)}

        </Route>

        <Route
          exact
          path="/album/:id"
          render={ (props) => <Album { ...props } /> }
        />

        <Route
          exact
          path="/favorites"
          render={ (props) => <Favorites { ...props } /> }
        />

        <Route
          exact
          path="/profile"
          render={ (props) => <Profile { ...props } /> }
        />

        <Route
          exact
          path="/profile/edit"
          render={ (props) => <ProfileEdit { ...props } /> }
        />

        <Route
          exact
          render={ (props) => <NotFound { ...props } /> }
        />

      </Switch>
    );
  }
}
