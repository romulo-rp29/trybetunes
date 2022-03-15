import React, { Component } from 'react';

export default class MusicCard extends Component {
  render() {
    const { trackName, previewUrl } = this.state;
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
      </div>
    );
  }
}
