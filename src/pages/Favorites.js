import React from 'react';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import { addSong } from '../services/favoriteSongsAPI';

export default class Favourites extends React.Component {
  constructor() {
    super();
    this.state = {
      trackId: '',
      favorites: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { trackId } } } = this.props;
    this.setState({
      trackId: '',
      favorites: [],
      loading: true,
    }, async () => {
      const musics = await addSong(trackId);
      const favorites = musics.filter((_music, index) => index);
      this.setState({
        trackId: musics[0].trackId,
        favorites,
        loading: false,
      });
    });
  }

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
