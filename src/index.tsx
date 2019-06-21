import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import * as React from "react";
import ReactDOM from "react-dom";

import thunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';

import {compose} from 'recompose';

import {configureAPI} from './api';

import App from './components/app/app';

import reducer from './reducer/index';
import ActionCreator from './reducer/user/user';

import {Operation} from './reducer/data/data';
import {Operation as UserOperation} from './reducer/user/user';

const init = () => {
  const api = configureAPI((): void => store.dispatch(ActionCreator.requireAuthorization(false)));

  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api))
          // ,
          // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );

  store.dispatch(Operation.loadHotels());
  store.dispatch(UserOperation.checkAuthorization());

  ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.querySelector(`.main`));
};

init();
