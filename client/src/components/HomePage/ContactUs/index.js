import React from 'react';

import './index.css';

const ContactUS = () => (
  <React.Fragment>
    <section className="ending-section">
      <div className="overlay">
        <h1 className="titleTitle">CONTACT US</h1>
        <div className="contactInnerContainer">
          <div className="contactUs">
            <form
              action="https://formspree.io/example@example.com"
              method="POST"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="inputField"
              />
              <input
                type="text"
                name="title"
                placeholder="Enter Message Title"
                className="inputField"
              />
              <textarea
                name="message"
                placeholder="Enter Your Message"
                className="inputField textArea"
              />
              <button type="submit" className="contactButton">
                Send
              </button>
            </form>
          </div>
          <div className="contactUs">
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
