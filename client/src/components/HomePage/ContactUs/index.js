import React from 'react';

import './index.css';

const ContactUS = () => (
  <React.Fragment>
    <section className="ending-section">
      <div className="contact-us">
        <h2>Contact US</h2>
        <input type="text" placeholder="Title" className="input" />
        <input type="text" placeholder="Email" className="input" />
        <textarea placeholder="Message" className="input" />
        <button type="button">Send</button>
      </div>
    </section>
  </React.Fragment>
);

export default ContactUS;
