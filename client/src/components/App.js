import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';

import HomePage from './HomePage';
import SearchReaslt from './SearchReaslt';
import CharityDetalis from './CharityDetalis';
import Category from './Category';
import Comparison from './Comparison';
import NotFound from './NotFound';
import confirmationPage from './confirmationPage';
import pageUnderConstruction from './pageUnderConstruction';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/search" component={SearchReaslt} />
      <Route exact path="/charity/:id" component={CharityDetalis} />
      <Route exact path="/category" component={Category} />
      <Route exact path="/compare" component={Comparison} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/contact-thanks" component={confirmationPage} />
      <Route path="/under-construction" component={pageUnderConstruction} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
);
export default App;
