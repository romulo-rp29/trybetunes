import React from 'react';
import Header from '../Components/Header';
import Loading from '../Components/Loading';

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  render() {
    const {
      loading,
    } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {
          loading ? <Loading />
            : (<p>TrybeTunes Profile</p>)
        }
      </div>
    );
  }
}
