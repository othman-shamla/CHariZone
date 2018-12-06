/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
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
        <React.Fragment>
          <h1>
            No charities found, Go back to{' '}
            <Link className="link-not-found" to="/">
              Home page
            </Link>
          </h1>
        </React.Fragment>
      )}
    </div>
  );
};

export default HeaderSearch;
