import React, { Component } from 'react';
import './index.css';

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="div-logo">
          <span className="span-name">
            <h1>
              chari<span className="colored-name">zone</span>
            </h1>
          </span>
          <span className="description">
            <h2> all charities in one place</h2>
          </span>
        </div>
        <div className="icon" />
      </div>
    );
  }
}

export default Header;
