import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import MusicCard from '../Components/MusicCard';
import getMusics from '../services/musicsAPI';

export default class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      collectionName: '',
      musics: [],
      loading: false,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.setState({
      loading: true,
    }, async () => {
      const collection = await getMusics(id);
      const musics = collection.filter((_music, index) => index);
      this.setState({
        artistName: collection[0].artistName,
        collectionName: collection[0].collectionName,
        musics,
        loading: false,
      });
    });
  }

  render() {
    const { artistName, collectionName, musics, loading } = this.state;
    return (
      <div>
        { loading ? <Loading />
          : (
            <div data-testid="page-album">
              <Header />
              <h1 data-testid="artist-name">{ artistName }</h1>
              <h2 data-testid="album-name">{ collectionName }</h2>
              {loading
                ? <Loading />
                : musics.map((music) => (
                  <MusicCard key={ music.trackId } music={ music } />))}
            </div>
          )}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }),
};
Album.defaultProps = {
  match: {},
};
