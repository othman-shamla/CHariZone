import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';

import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import SearchReaslt from './SearchReaslt';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/search" component={SearchReaslt} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
