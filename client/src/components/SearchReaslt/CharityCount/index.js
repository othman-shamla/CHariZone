/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const CharityCount = props => {
  const { count, select } = props;
  return (
    <Link to={`/Comparison/${select}`}>
      <div className="count-charity">
        <img
          className="img-charity"
          src="https://image.flaticon.com/icons/svg/1170/1170651.svg"
          alt="img charity"
        />
        <div className="count">
          <strong>{count}</strong>
        </div>
      </div>
    </Link>
  );
};

export default CharityCount;
