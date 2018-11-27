/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CharityList = props => {
  const { key, name, text, logo, classification, website, regno } = props;
  return (
    <div className="container-charity" key={key}>
      <div className="card-details">
        <Link to={`charity/${regno}`}>
          <h1>{name}</h1>
        </Link>
        <p className="information">" {text} "</p>
      </div>
      <div className="card-image">
        <img src={logo} alt="Logo defult" />
        <Link to={`charity/${regno}`}>
          <div className="info">
            <h2>The Description</h2>
            <ul>
              <li>
                <strong>Name: </strong>
                {name}
              </li>
              <li>
                <strong>Classification: </strong>
                {classification}
              </li>
              <li>
                <strong>Website: </strong>
                {website}
              </li>
            </ul>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CharityList;
