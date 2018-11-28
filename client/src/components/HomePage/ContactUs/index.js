import React from 'react';

import './index.css';

const ContactUS = () => (
  <React.Fragment>
    <section className="ending-section">
      <div className="overlayContact">
        <h1 className="titleTitle">CONTACT US</h1>
        <div className="contactInnerContainer">
        <a name="Contact" title="Contact" />
          <div className="contactUsSection">
            {/* TODO == add client email */}
            <form
              action="https://formspree.io/Sam8O.o@hotmail.com"
              method="POST"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="inputFieldContect"
              />
              <input
                type="hidden"
                name="_next"
                value="https://charizone0.herokuapp.com/contact-thanks"
              />
              <input
                type="text"
                name="title"
                placeholder="Enter Message Title"
                className="inputFieldContect"
              />
              <textarea
                name="message"
                placeholder="Enter Your Message"
                className="inputFieldContect textAreaContact"
              />
              <button type="submit" className="contactButton">
                Send
              </button>
            </form>
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
