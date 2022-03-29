import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      favorited: true,
    };
  }

  componentDidMount = () => {
  }

  handleChange = () => {
  }

  render() {
    const { music: { trackName, previewUrl, trackId } } = this.props;
    const { loading, favorited } = this.state;
    this.state = {
      loading,
      favorited,
    };
    return (
      <div>
        { loading && <Loading />}
        <h3>{ trackName }</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>
            audio
          </code>
          .
        </audio>
        <label htmlFor={ trackId }>
          <input
            type="checkbox"
            id={ trackId }
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ this.handleChange }
            checked={ favorited }
          />
          Favorita
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.string.isRequired,
  }),
};
MusicCard.defaultProps = {
  music: {},
};
