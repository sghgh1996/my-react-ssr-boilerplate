// Startup point of the client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {renderRoutes} from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers/index';

// Store for client side
const store = createStore(
    reducers,
    window.INITIAL_STATE,
    applyMiddleware(thunk)
);
// Just in browser
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>{renderRoutes(Routes)}</div>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
