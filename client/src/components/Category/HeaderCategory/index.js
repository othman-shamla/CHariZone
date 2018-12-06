/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const HeaderSearch = props => {
  const { numberOfResult, name } = props;
  return (
    <div className="div-header-category">
      {+numberOfResult > 0 ? (
        <React.Fragment>
          <h1>{name}</h1>
          <p>{numberOfResult} Results Found</p>
          <button type="button" className="sort-but">
            Sort
          </button>
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
