import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducers';

import routes from './routes'

const store = createStore(
    rootReducers
);

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById('app')
);