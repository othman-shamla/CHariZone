/* eslint-disable react/prop-types */
import React from 'react';

import './style.css';

const CategoryDetails = props => {
  const { id, title, text } = props;
  return (
    <div key={id} className="category-div">
      <h1 className="category-title">{title}</h1>
      <p className="category-text">{text}</p>
    </div>
  );
};

export default CategoryDetails;
