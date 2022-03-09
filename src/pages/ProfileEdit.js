import React from 'react';
import Header from '../Components/Header';
import Loading from '../Components/Loading';

export default class ProfileEdit extends React.Component {
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
      <div data-testid="page-profile-edit">
        <Header />
        {
          loading ? <Loading />
            : (<p>TrybeTunes Profile Edit</p>)
        }
      </div>
    );
  }
}
