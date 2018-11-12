import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import 'font-awesome/css/font-awesome.css';
import './App.css';

import HomePage from './HomePage';
import SearchReaslt from './SearchReaslt';
import CharityDetalis from './CharityDetalis';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/search" component={SearchReaslt} />
	      <Route exact path='/charity' component={CharityDetalis} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default App;
