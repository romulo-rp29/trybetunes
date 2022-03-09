import React from 'react';
import Header from '../Components/Header';
import Loading from '../Components/Loading';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      loading: false,
      isSearchButtonDisabled: true,
    };
  }

  handleFillSearch = async () => {
    const { artistName } = this.state;
    await searchAlbumsAPI({ name: artistName });
    this.setState({
      artistName: '',
      loading: false,
    });
  }

  handleSearchButtonClick = (event) => {
    event.preventDefault();
    this.setState({
      loading: false,

    }, this.handleFillSearch);
  }

  onInputChangeSearch = ({ target: { value } }) => {
    const minSearchLength = 2;
    if (value.length >= minSearchLength) {
      this.setState({
        artistName: value,
        isSearchButtonDisabled: false,
      });
    } else {
      this.setState({
        artistName: value,
        isSearchButtonDisabled: true,
      });
    }
  }

  render() {
    const { artistName, isSearchButtonDisabled,
      handleSearchButtonClick } = this.state;

    const {
      loading,
    } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        {
          loading ? <Loading />
            : (
              <div>
                <p>TrybeTunes Search</p>
                <form>
                  <input
                    name="search"
                    data-testid="search-artist-input"
                    onChange={ this.onInputChangeSearch }
                    value={ artistName }
                  />
                  <button
                    type="submit"
                    data-testid="search-artist-button"
                    disabled={ isSearchButtonDisabled }
                    onClick={ handleSearchButtonClick }
                  >
                    Pesquisar
                  </button>
                </form>
              </div>
            )
        }
      </div>
    );
  }
}
