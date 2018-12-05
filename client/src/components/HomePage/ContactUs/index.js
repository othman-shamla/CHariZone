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
        </div>
      </div>
    </section>
  </React.Fragment>
);

export default ContactUS;
