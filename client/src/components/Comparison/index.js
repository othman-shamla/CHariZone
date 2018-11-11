import React, { Component } from 'react';
import './index.css';

class Comparison extends Component {
  render() {
    return (
      <div className="compare-body">
        <div className="compare-box">
          <div className="circule">
            <img
              alt="counter logo"
              className="counter-img"
              src="https://files.gitter.im/ChariZone/Lobby/Qyjb/line-chart-_4_.png"
            />
          </div>
          <div className="charty-names" />
        </div>

        <div className="compare-container">
          <div className="logos">
            <span className="basic-logo logo-span">
              <img
                alt="basic logo"
                className="basic-img"
                src="https://imgur.com/labp2lA.png"
              />
            </span>

            <span className="financial-logo logo-span">
              <img
                alt="financial logo"
                className="financial-img"
                src="https://imgur.com/byldMLA.png"
              />
            </span>
            <span className="governance-logo logo-span">
              <img
                alt="governance logo"
                className="governance-img"
                src="https://imgur.com/uK6GWci.png"
              />
            </span>
            <span className="impact-logo logo-span">
              <img
                alt="impact logo"
                className="impact-img"
                src="https://imgur.com/1jG8geW.png"
              />
            </span>
          </div>
          <div className="compare-div">
            <div className="column-div" />
            <div className="content-div">
            <div className="charity-column" />
            <div className="charity-column" />
            <div className="charity-column" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comparison;
