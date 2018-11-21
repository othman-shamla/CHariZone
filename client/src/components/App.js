import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';

import HomePage from './HomePage';
import SearchReaslt from './SearchReaslt';
import CharityDetalis from './CharityDetalis';
import Category from './Category';
import Header from './Header';
import Footer from './Footer';
import Comparison from './Comparison';
import Filter from './HomePage/LandingPage/Filter';

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchReaslt} />
	      <Route exact path='/charity' component={CharityDetalis} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/compare" component={Comparison} />
        <Route exact path="/filter" component={Filter} />
      </Switch>
    </>
  </BrowserRouter>
);
export default App;
