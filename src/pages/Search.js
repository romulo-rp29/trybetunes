import React from 'react';
import AlbumCard from '../Components/AlbumCard';
import Header from '../Components/Header';
import Loading from '../Components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      isSearchButtonDisabled: true,
      artistSearch: '',
      artistName: '',
      loading: false,
      albums: [],
    };
  }

  onSearchButtonClick = async () => {
    const { artistSearch } = this.state;
    this.setState({ loading: true });
    const results = await searchAlbumsAPI(artistSearch);
    this.setState({
      albums: results,
      artistName: artistSearch,
      artistSearch: '',
      loading: false,
    });
  }

  onInputChangeSearch = ({ target }) => {
    const minSearchLength = 2;
    if (target.value.length >= minSearchLength) {
      this.setState({
        isSearchButtonDisabled: false,
        artistSearch: target.value,
      });
    } else {
      this.setState({
        isSearchButtonDisabled: true,
        artistSearch: target.value,
      });
    }
  }

  render() {
    const { artistName, isSearchButtonDisabled, artistSearch, albums,
      loading } = this.state;

    return (
      <div>
        <Header />
        <p>TrybeTunes Search</p>
        {
          loading ? <Loading />
            : (
              <form data-testid="page-search">
                <input
                  name="search"
                  data-testid="search-artist-input"
                  onChange={ this.onInputChangeSearch }
                  value={ artistSearch }
                />
                <button
                  type="button"
                  data-testid="search-artist-button"
                  disabled={ isSearchButtonDisabled }
                  onClick={ this.onSearchButtonClick }
                >
                  Pesquisar
                </button>
              </form>
            )
        }
        <h3>
          {`Resultado de álbuns de: ${artistName}`}
        </h3>
        { albums.length ? (
          albums.map((album) => (
            <AlbumCard
              key={ album.collectionId }
              artistName={ album.artistName }
              collectionName={ album.collectionName }
              artworkUrl100={ album.artworkUrl100 }
              collectionId={ album.collectionId }
            />))
        )
          : (<span>Nenhum álbum foi encontrado</span>) }
      </div>
    );
  }
}
