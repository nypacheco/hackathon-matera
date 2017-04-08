import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './src/components/App';
import Home from './src/components/Home';
import LoginPage from './src/components/login/LoginPage';
import Link1 from './src/components/links/Link1';
import Link2 from './src/components/links/Link2';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="login" component={LoginPage}/>
    <Route path="link2" component={Link2}/>
  </Route>
);