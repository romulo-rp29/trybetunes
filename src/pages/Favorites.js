import React from 'react';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
<<<<<<< HEAD
// import { addSong } from '../services/favoriteSongsAPI';

export default class Favorites extends React.Component {
=======

export default class Favourites extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

>>>>>>> parent of 73d8d4a... feat: MusicCard, Favorites
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
