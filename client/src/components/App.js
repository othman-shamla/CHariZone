import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './HomePage';
import Header from './Header';
import Comparison from './Comparison';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/compare" component={Comparison} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
