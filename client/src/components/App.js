import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';
import './App.css';

import HomePage from './HomePage';
import SearchReaslt from './SearchReaslt';
import CharityDetalis from './CharityDetalis';
import Category from './Category';
import Comparison from './Comparison';

const App = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchReaslt} />
	      <Route exact path='/charity' component={CharityDetalis} />
        <Route exact path="/category" component={Category} />
        <Route exact path="/compare" component={Comparison} />
      </Switch>
    </>
  </BrowserRouter>
);
export default App;
