/* eslint-disable react/prop-types */
import React from 'react';

import './style.css';

const CharityCount = props => {
  const { count } = props;
  return (
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
  );
};

export default CharityCount;
