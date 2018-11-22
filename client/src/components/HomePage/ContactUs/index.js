import React from 'react';

import './index.css';

const ContactUS = () => (
  <React.Fragment>
    <section className="ending-section">
      <div className="overlay">
        <h1 className="titleTitle">CONTACT US</h1>
        <a name="Contact" title="slider" />
        <div className="contactInnerContainer">
        <div className="contactUs">
        <input
            type="text"
            placeholder="Enter Your Email"
            className="inputField"
          />
          <input
            type="text"
            placeholder="Enter Message Title"
            className="inputField"
          />
          <textarea
            placeholder="Enter Your Message"
            className="inputField textArea"
          />
          <button type="button" className="contactButton">
            Send
          </button>
        </div>
        <div className="contactUs">
          <div className="contact-div">
            <img src="https://imgur.com/vPSLDju.png" alt="icon"/>
            <h3>+999-9999-9999</h3>
          </div>
          <div className="contact-div">
            <img src="https://imgur.com/tkLsAgy.png" alt="icon"/>
            <h3>sara-cahriZone@gmail.com</h3>
          </div>
          <div className="contact-div">
            <img src="https://imgur.com/hahEuHs.png" alt="icon"/>
            <h3>@ChariZone</h3>
          </div>
          </div>
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default ContactUS;
