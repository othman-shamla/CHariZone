import React, { Component } from 'react';

import './style.css';

class HeaderSearch extends Component {
  render() {
    const { numberOfResult } = this.props;
    return (
      <div className="div-header">
        <h1>Search Results</h1>
        <button type="button">Filter</button>
        <p>{numberOfResult} Results Found</p>
      </div>
    );
  }
}

export default HeaderSearch;
