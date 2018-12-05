import React, { Component } from 'react';

import './index.css';

class Works extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="about-us">
          <a name="Works" title="works" />
          <h1 className="cardTitle">How it works</h1>
          <div className="innerCards">
            <div className="inner">
              <div className="iconContainer">
                <img
                  src="https://imgur.com/YALJ9NO.png"
                  className="cardIcon"
                  alt="icon"
                />
              </div>
              <h4 className="worksInnerTitle">Search</h4>
              <span className="cardContent">For a charity or a cause</span>
            </div>
            <div className="inner">
              <div className="iconContainer">
                <img
                  src="https://imgur.com/K8AOJkS.png"
                  className="cardIcon"
                  alt="icon"
                />
              </div>
              <h4 className="worksInnerTitle">Compare</h4>
              <span className="cardContent">To find the best fit</span>
            </div>
            <div className="inner">
              <div className="iconContainer">
                <img
                  src="https://imgur.com/5SW2D6j.png"
                  className="cardIcon"
                  alt="icon"
                />
              </div>
              <h4 className="worksInnerTitle">Donate Confidently</h4>
              <span className="cardContent">and make a difference</span>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default Works;
