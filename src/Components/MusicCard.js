import React, { Component } from 'react';

export default class MusicCard extends Component {
  render() {
<<<<<<< HEAD
<<<<<<< HEAD
    const { music: { trackName, previewUrl, trackId } } = this.props;
=======
    const { trackName, previewUrl } = this.state;
>>>>>>> parent of 96a1c84... completed req7
=======
    const { music: { trackName, previewUrl } } = this.props;
>>>>>>> parent of 73d8d4a... feat: MusicCard, Favorites
    return (
      <div>
        <h3>{ trackName }</h3>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>
            audio
          </code>
          .
        </audio>
<<<<<<< HEAD
        <label htmlFor={ trackId }>
          <input
            type="checkbox"
            id={ trackId }
            data-testid={ `checkbox-music-${trackId}` }
            // onChange={}
            // checked={}
          />
          Favorita
        </label>
=======
>>>>>>> parent of 73d8d4a... feat: MusicCard, Favorites
      </div>
    );
  }
}
<<<<<<< HEAD

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
  }),
};
MusicCard.defaultProps = {
  music: {},
};
=======
>>>>>>> parent of 96a1c84... completed req7
