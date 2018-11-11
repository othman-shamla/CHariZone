import React, { Component } from 'react';

import './style.css';

class CharityCount extends Component {
  render() {
    const { count } = this.props;
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
  }
}

export default CharityCount;
