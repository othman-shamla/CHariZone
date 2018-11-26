/* eslint-disable react/prop-types */
import React from 'react';

import './style.css';

const HeaderSearch = props => {
  const { numberOfResult } = props;
  return (
    <div className="div-header">
      {+numberOfResult > 0 ? (
        <React.Fragment>
          <h1>Search Results</h1>
          <p>{numberOfResult} Results Found</p>
        </React.Fragment>
      ) : (
        <h1>Oppes no result!</h1>
      )}
    </div>
  );
};

export default HeaderSearch;
