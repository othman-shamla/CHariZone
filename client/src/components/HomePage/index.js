import React, { Component } from 'react';

import './index.css';
import LandingPage from './LandingPage';
import Works from './Works';
import Slide from './Slide';
import ContactUs from './ContactUs';
import Footer from './Footer';

const HomePage = () => (
  <div>
    <LandingPage />
    <Works />
    <Slide />
    <ContactUs />
    <Footer />
  </div>
);
export default HomePage;
