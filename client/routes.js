import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Greetings from './components/Greetings';
import Link1 from './components/links/Link1';
import Link2 from './components/links/Link2';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings} />
    <Route path="link1" component={Link1}/>
    <Route path="link2" component={Link2}/>
  </Route>
);