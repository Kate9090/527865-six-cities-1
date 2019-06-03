import React from "react";
import ReactDOM from "react-dom";

import thunk from 'redux-thunk';

import {Provider} from 'react-redux';
import {reducer} from './reducer';
import {createStore, applyMiddleware} from 'redux';
import {compose} from 'recompose';

import configureAPI from './api';
const api = configureAPI((...args) => store.dispatch(...args));

import App from './components/app/app.jsx';
import Operation from './reducer';
store.dispatch(Operation.loadHotels());

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

const init = () => {

  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.querySelector(`.main`));
};

init();
