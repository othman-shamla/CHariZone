/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import CircularProgressbar from 'react-circular-progressbar';
import React, { Component } from 'react';
import queryString from 'query-string';

import './index.css';

import Governance from './Governance';
import Financial from './Financial';
import Impact from './Impact';
import HomeInfo from './HomeInfo';
import Header from '../Header';
import Footer from '../HomePage/Footer';
import BoxIndicator from '../BoxIndicator';

class Comparison extends Component {
  state = {
    tabs: 1,
    arrayOfCharity: [],
  };

  componentDidMount() {
    const {
      location: { search },
    } = this.props;
    const values = queryString.parse(search);
    const urls = Object.keys(values)
      .filter(x => /charity[123]/.test(x))
      .map(charityIdKey => `/api/v1/charity/${values[charityIdKey]}`);
    this.getAllUrls(urls);
  }

  async getAllUrls(urls) {
    try {
      const data = await Promise.all(
        urls.map(url => fetch(url).then(res => res.json()))
      );
      this.setState({
        arrayOfCharity: data.map(x => x.data),
      });
    } catch (error) {
      throw error;
    }
  }

  changeTab = tab => {
    this.setState({
      tabs: tab,
    });
  };

  renderTab = () => {
    const { tabs, arrayOfCharity } = this.state;
    if (tabs === 2) {
      return <Financial arrayOfCharity={arrayOfCharity} />;
    }
    if (tabs === 3) {
      return <Governance arrayOfCharity={arrayOfCharity} />;
    }
    if (tabs === 4) {
      return <Impact arrayOfCharity={arrayOfCharity} />;
    }
    return <HomeInfo arrayOfCharity={arrayOfCharity} />;
  };

  render() {
    const { tabs } = this.state;
    return (
      <React.Fragment>
        <Header />

        <div className="compare-body">
          <div className="compare-container">
            <div className="logos">
              <span
                className={`logo-span ${tabs === 1 ? 'basic-logo' : ''}`}
                onClick={() => this.changeTab(1)}
              >
                <img
                  alt="basic logo"
                  className="basic-img"
                  src="https://imgur.com/labp2lA.png"
                />
                <span>Home</span>
              </span>

              <span
                className={`logo-span ${tabs === 2 ? 'basic-logo' : ''}`}
                onClick={() => this.changeTab(2)}
              >
                <img
                  alt="financial logo"
                  className="financial-img"
                  src="https://imgur.com/byldMLA.png"
                />
                <span>Financial</span>
              </span>
              <span
                className={`logo-span ${tabs === 3 ? 'basic-logo' : ''}`}
                onClick={event => this.changeTab(3)}
              >
                <img
                  alt="governance logo"
                  className="governance-img"
                  src="https://imgur.com/uK6GWci.png"
                />
                <span>Governance</span>
              </span>
              <span
                className={`logo-span ${tabs === 4 ? 'basic-logo' : ''}`}
                onClick={() => this.changeTab(4)}
              >
                <img
                  alt="impact logo"
                  className="impact-img"
                  src="https://imgur.com/1jG8geW.png"
                />
                <span>Impact</span>
              </span>
            </div>

            {this.renderTab()}
          </div>
        </div>
          <BoxIndicator/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Comparison;
