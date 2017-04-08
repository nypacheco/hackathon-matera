import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './src/components/App';
import Home from './src/components/Home';
import LoginPage from './src/components/login/LoginPage';
import LoggedPage from './src/components/logged/LoggedPage';
import BalancePage from './src/components/balance/BalancePage';
import ExtractPage from './src/components/extract/ExtractPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={LoginPage}/>
    <Route path="logged" component={LoggedPage}/>
    <Route path="balance" component={BalancePage}/>
    <Route path="extract" component={ExtractPage}/>
  </Route>
);