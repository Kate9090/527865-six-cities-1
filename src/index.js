import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import React from "react";
import ReactDOM from "react-dom";

import thunk from 'redux-thunk';

import {compose} from 'recompose';

import {configureAPI} from './api';

import App from './components/app/app.jsx';

import reducer from './reducer/index';

import {Operation} from './reducer/data/data';
import {Operation as UserOperation} from './reducer/user/user';

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
  store.dispatch(UserOperation.checkAuthorization());

  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.querySelector(`.main`));
};

init();
