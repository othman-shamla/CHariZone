/* eslint-disable react/prop-types */
// component to card in charity result search
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class CardResult extends Component {
  render() {
    const {
      idChirty,
      key0,
      name,
      text,
      isActive,
      logo,
      classification,
      website,
      onClick,
    } = this.props;
    return (
      <div className="container" key={key0}>
        <div className="card-details">
          <Link className="link-card" to={`/charity/${idChirty}`}>
            {name}
          </Link>
          <p className="information">" {text} "</p>
          <div className="control">
            <button
              type="button"
              className={isActive ? 'btn active' : 'btn'}
              onClick={() => onClick()}
            >
              <span className="add">{!isActive ? 'ADD' : 'DEL'}</span>
              <span className="add-cart">
                {!isActive ? (
                  <i className="fa fa-plus-square" aria-hidden="true" />
                ) : (
                  <i className="fa fa-minus-square" aria-hidden="true" />
                )}
              </span>
              <span className="compare">Compare</span>
            </button>
          </div>
        </div>
        <div className="card-image">
          <img src={logo} alt="Logo defult" />
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
        </div>
      </div>
    );
  }
}

export default CardResult;
