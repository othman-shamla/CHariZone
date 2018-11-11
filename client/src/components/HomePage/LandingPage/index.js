import React, { Component } from 'react';

import './index.css';

class LandingPage extends Component {
  state={
    toggle: false
  }

  move() {
    this.setState({toggle: !this.state.toggle })
  }

  render() {   
    const spanStyle = {
      color: '#F89963',
    }

    return (
    <React.Fragment>
       <header>
    <nav>
    <div className={this.state.toggle ? "icon change" : "icon"} 
    onClick={() =>this.move()}>
        <div className="hamburger">
        </div>
        <div className="items" id="items">
            <a href="#">HOW IT WORKS</a>
            <a href="#">CATEGORIES</a>
            <a href="#">ADVANCED SEARCH</a>
            <a href="#">CONTACT US</a>
        </div>
    </div>
</nav>
</header>
    <section className="landing-page">
        <div className="logo">
            <div className="logoOne"><p>CHARI
              <span style= {spanStyle} >ZONE</span>
              </p></div>
            <div className="subLogo"><p>All charities in one place</p></div>
        </div>
        <div className="search">
            <input placeholder="By Keyword, Name"/> 
            <button><i class="fas fa-search"></i></button>
            <h3>Advanced Search</h3>
        </div>
    </section>
    </React.Fragment>
    );
  }
}

export default LandingPage;
