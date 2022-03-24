import React from 'react';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
// import { addSong } from '../services/favoriteSongsAPI';

export default class Favorites extends React.Component {
  render() {
    const {
      loading,
    } = this.state;

    return (
      <div data-testid="page-favorites">
        <Header />
        {
          loading ? <Loading />
            : (<p>TrybeTunes Favorites</p>)
        }
      </div>
    );
  }
}
