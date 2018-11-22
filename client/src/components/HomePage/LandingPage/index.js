import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Joi from 'joi-browser';
import swal from 'sweetalert';
import './index.css';
import Filter from './Filter';

class LandingPage extends Component {
  state = {
    toggle: false,
    AdvanceSearch: false,
    defaultShow: true,
    keyword: '',
  };

  validate = value => {
    const schema = Joi.string().alphanum();
    const { error } = Joi.validate(value, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = event => {
    const { value } = event.target;
    const error = this.validate(value);
    if (error) {
      swal('Oops!', 'Error in input felid ', 'error');
    } else {
      this.setState({ keyword: value });
    }
  };

  showAdvanceModel = () => {
    this.setState({ AdvanceSearch: true, defaultShow: false });
  };

  hideAdvanceModel = () => {
    this.setState({ AdvanceSearch: false, defaultShow: true });
  };

  move() {
    this.setState(prevState => ({
      toggle: !prevState.toggle,
    }));
  }

  render() {
    const { toggle, defaultShow, keyword } = this.state;
    // const { Show } = this.props;
    const spanStyle = {
      color: '#F89963',
    };
    return (
      <React.Fragment>
        <header>
          <nav>
            <div
              role="button"
              className={toggle ? 'icon change' : 'icon'}
              onClick={() => this.move()}
            >
              <div className="hamburger" />
              <div className="items" id="items">
                <a href="#Works">HOW IT WORKS</a>
                <a href="#Slider">CATEGORIES</a>
                <a href="#advanced">ADVANCED SEARCH</a>
                <a href="#Contact">CONTACT US</a>
              </div>
            </div>
          </nav>
        </header>
        <section className="landing-page">
          <div className="rgba">
            {defaultShow && (
              <div className="to-hide">
                <div className="logo">
                  <div className="logoOne">
                    <p>
                      CHARI
                      <span style={spanStyle}>ZONE</span>
                    </p>
                  </div>
                  <div className="subLogo">
                    <p>All charities in one place</p>
                  </div>
                </div>
                <div className="search">
                  <input
                    placeholder="By Keyword, Name"
                    value={keyword}
                    onChange={this.handleChange}
                  />
                  <Link to={`/search?${keyword}`}>
                    <button type="button">
                      <i className="fa fa-search" />
                    </button>
                  </Link>
                  <h3 onClick={this.showAdvanceModel}>Advanced Search</h3>
                  <a name="advanced" title="advanced"/>
                </div>
              </div>
            )}
            {this.state.AdvanceSearch && (
              <Filter Hide={this.hideAdvanceModel} />
            )}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default LandingPage;
