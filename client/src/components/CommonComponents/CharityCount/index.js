/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class CharityCount extends Component {
  state = {
    CharityList: [],
  };

  static getDerivedStateFromProps() {
    const CharityList = JSON.parse(localStorage.getItem('listCharity'));
    return { CharityList };
  }

  render() {
    const { CharityList } = this.state;
    const select = CharityList || [];
    const count = select.length;
    let str = '/compare?';
    str += `${select.map((x, i) => `charity${i + 1}=${x}`).join('&')}`;
    return (
      <Link to={count > 1 && str}>
        <div className="count-charity">
          <div className="tooltip">
            <img
              className="img-charity"
              src="https://imgur.com/UjU4ZGb.png"
              alt="img charity"
            />
            <div className="count">
              <strong>{count}</strong>
            </div>
            <span className="tooltiptext place">
              {count > 1 ? (
                <span>compare</span>
              ) : (
                <span>
                  Add and compare at least <strong>two maximum three</strong>
                </span>
              )}
            </span>
          </div>
        </div>
      </Link>
    );
  }
}

export default CharityCount;
