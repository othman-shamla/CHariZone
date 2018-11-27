/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import './style.css';

class NotFound extends Component {
  state = {
    remainingTime: 5,
  };

  componentDidMount() {
    const { history } = this.props;
    setInterval(() => {
      const { remainingTime } = this.state;
      this.setState({ remainingTime: remainingTime - 1 });
      if (remainingTime === 0) {
        history.push('/');
      }
    }, 1000);
  }

  render() {
    const { remainingTime } = this.state;
    return (
      <React.Fragment>
        <section className="confirmationPageSection">
          <h2 className="confirmationPageTitle">Thanks for getting in touch</h2>
          <h3 className="confirmationPageTitleSub">
            {`Redirect in... ${remainingTime}`}
          </h3>
          <div className="circle1" />
          <div className="circle2" />
          <div className="circle4" />
          <div className="circle5" />
        </section>
      </React.Fragment>
    );
  }
}

export default NotFound;
