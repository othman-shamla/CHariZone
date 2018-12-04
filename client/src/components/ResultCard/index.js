import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class ResultCard extends Component {
  // state = {  }
  render() {
    return (
      <div className="div--card-result">
        <Link to="/" className="div--name-des">
          <h2>The childhood trust</h2>
          <p>
            "The objects of the childhood trust are to prevent or relieve
            poverty in particular a more.."
          </p>
        </Link>
        <div className="div--logo">
          <img
            src="https://www.atlrewards.net/cwa-nearby-areas-portlet/images/nologo.png"
            alt="logo default"
          />
          <div className="div--hidden">
            <h1>asmaa</h1>
          </div>
        </div>
        <div className="div--two-button">
          <button type="button">Donate</button>
          <button type="button">Compare</button>
        </div>
      </div>
    );
  }
}

export default ResultCard;
