import React from "react";
import ReactDOM from "react-dom";

import thunk from 'redux-thunk';

import {Provider} from 'react-redux';
import {reducer} from './reducer/index';

import {createStore, applyMiddleware} from 'redux';
import {compose} from 'recompose';

import {configureAPI} from './api';

import App from './components/app/app.jsx';

import {Operation} from './reducer/data/data';

const init = () => {
  const api = configureAPI((...args) => store.dispatch(...args));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  store.dispatch(Operation.loadHotels());

  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.querySelector(`.main`));
};

init();
