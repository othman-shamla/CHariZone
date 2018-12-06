/* eslint-disable react/prop-types */
import React from 'react';

import './style.css';

const CategoryDetails = props => {
  const { id, title, text, background } = props;
  const styleDiv = {
    backgroundImage: `url(${background})`,
  };
  return (
    <div key={id} className="category-div" style={styleDiv}>
      <div className="div-hidden-color">
        <h1 className="category-title">{title}</h1>
        <p className="category-text">{text}</p>
      </div>
    </div>
  );
};

export default CategoryDetails;
