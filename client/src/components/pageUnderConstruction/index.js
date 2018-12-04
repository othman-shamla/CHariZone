import React from 'react';
import './style.css';
import Header from '../Header';

const pageUnderConstruction = () => (
  <React.Fragment>
    <Header />
    <section className="notFoundSection">
      <h2 className="notFoundTitleSub">Page Under Construction</h2>
      <div className="circle1" />
      <div className="circle2" />
      <div className="circle4" />
      <div className="circle5" />
    </section>
  </React.Fragment>
);

export default pageUnderConstruction;
