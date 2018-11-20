import React, { Component } from 'react';

import './index.css';

class Works extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="about-us">
        <h1 className="cardTitle">How it works</h1>
         <div className="innerCards">
          <div className="inner">
          <div className="iconContainer"><img src="https://image.flaticon.com/icons/svg/1141/1141964.svg" className="cardIcon"/></div>
          <span className="cardContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          </div>
          <div className="inner">
          <div className="iconContainer"><img src="https://image.flaticon.com/icons/svg/60/60954.svg" className="cardIcon"/></div>
          <span className="cardContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          </div>
          <div className="inner">
          <div className="iconContainer"><img src="https://image.flaticon.com/icons/svg/503/503011.svg" className="cardIcon"/></div>
          <span className="cardContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
          </div>
         </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Works;


 