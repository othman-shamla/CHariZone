/* eslint-disable react/prop-types */
import React from 'react';

import './style.css';

const HeaderSearch = props => {
  const { numberOfResult } = props;
  return (
    <div className="div-header">
      <h1>Search Results</h1>
      <button type="button">Filter</button>
      <p>{numberOfResult} Results Found</p>
    </div>
  );
};

export default HeaderSearch;
