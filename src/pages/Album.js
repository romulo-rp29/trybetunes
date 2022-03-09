import React from 'react';
import Header from '../Components/Header';
import Loading from '../Components/Loading';

export default class Album extends React.Component {
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
      <div data-testid="page-album">
        <Header />
        {
          loading ? <Loading />
            : (<p>TrybeTunes Album</p>)
        }
      </div>
    );
  }
}
