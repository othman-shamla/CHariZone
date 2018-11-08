import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/footer" component={Footer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
