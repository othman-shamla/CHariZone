import React from 'react';

import './index.css';

const ContactUS = () => (
  <React.Fragment>
    <section className="ending-section">
      <div className="overlayContact">
        <h1 className="titleTitle">CONTACT US</h1>
        <div className="contactInnerContainer">
          <div className="contactUsSection">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="inputFieldContect"
            />
            <input
              type="text"
              placeholder="Enter Message Title"
              className="inputFieldContect"
            />
            <textarea
              placeholder="Enter Your Message"
              className="inputFieldContect textAreaContact"
            />
            <button type="button" className="contactButton">
              Send
            </button>
          </div>
          <div className="contactUsSection">
            <div className="contact-div">
              <img src="https://imgur.com/vPSLDju.png" alt="icon" />
              <h3>+999-9999-9999</h3>
            </div>
            <div className="contact-div">
              <img src="https://imgur.com/tkLsAgy.png" alt="icon" />
              <h3>sara-cahriZone@gmail.com</h3>
            </div>
            <div className="contact-div">
              <img src="https://imgur.com/hahEuHs.png" alt="icon" />
              <h3>@ChariZone</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default ContactUS;
