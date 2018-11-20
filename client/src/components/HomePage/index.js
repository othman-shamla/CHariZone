import React, { Component } from 'react';

import './index.css';
import LandingPage from './LandingPage';
import Works from './Works';
import Slide from './Slide';
import ContactUs from './ContactUs';
import Footer from '../Footer';

class HomePage extends Component {
  render() {
    return (
      <>
        <LandingPage />
        <Works />
        <Slide />
        <ContactUs />
        <Footer />
      </>
    );
  }
}

export default HomePage;
