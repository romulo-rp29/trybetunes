import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AlbumCard extends Component {
  render() {
    const { artistName, collectionName, artworkUrl100, collectionId } = this.props;
    return (
      <section>
        <Link
          to={ `/album/${collectionId}` }
          data-testid={ `link-to-album-${collectionId}` }
          albumId={ collectionId }
        >
          <div>
            <img src={ artworkUrl100 } alt={ collectionName } />
            <h3>{ collectionName }</h3>
            <h5>{ artistName }</h5>
          </div>
        </Link>
      </section>
    );
  }
}

AlbumCard.propTypes = {
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
  collectionId: PropTypes.string.isRequired,
};
