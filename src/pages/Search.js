import React from 'react';

export default class Search extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div data-testid="page-search">
        <p>TrybeTunes Search</p>
      </div>
    );
  }
}
