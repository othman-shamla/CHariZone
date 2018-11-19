import CircularProgressbar from 'react-circular-progressbar';
import React, { Component } from 'react';
import './index.css';

import CompareTable from './CompareTable';
import Header from '../Header';
import Footer from '../Footer';

class Comparison extends Component {
  render() {
    const percentage = 66;
    return (
      <React.Fragment>
        <Header />
        <div className="compare-body">
          <div className="compare-box">
            <div className="circule">
              <img
                alt="counter logo"
                className="counter-img"
                src="https://files.gitter.im/ChariZone/Lobby/Qyjb/line-chart-_4_.png"
              />
              <span className="charity-counter">
                <h3 className="compare-num">3</h3>
              </span>
            </div>
            <div className="charty-names">
              <h3 className="page-desc">Charity To Compare : </h3>
              <h4 className="charityc-name charityc-name-hovered">
                BLISS -THE NATIONAL CHARITY{' '}
              </h4>
              <h4 className="charityc-name">ACTION FOR CHILDREN</h4>
              <h4 className="charityc-name">BECOME CHARITY</h4>
            </div>
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
            <CompareTable />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Comparison;
