/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ResultCard = props => {
  const {
    idChirty,
    key0,
    name,
    text,
    isActive,
    logo,
    onClickCompare,
    onClickDonate,
    financial,
    governance,
    impact,
  } = props;
  return (
    <div className="div--card-result" key={key0}>
      <Link to={`/charity/${idChirty}`} className="div--logo">
        <img src={logo} alt="logo default" />
        <div className="div--hidden">
          <ul>
            <li>
              Financial: <span>{financial}</span>
            </li>
            <li>
              Governance: <span>{governance}</span>
            </li>
            <li>
              Impact: <span>{impact}</span>
            </li>
          </ul>
        </div>
      </Link>
      <Link to={`/charity/${idChirty}`} className="div--name-des">
        <h2>{name}</h2>
        <p>" {text} "</p>
      </Link>
      <div className="div--two-button">
        <button type="button" onClick={() => onClickDonate()}>
          Donate
        </button>
        <button
          type="button"
          className={isActive ? 'active' : null}
          onClick={() => onClickCompare()}
        >
          Compare
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
