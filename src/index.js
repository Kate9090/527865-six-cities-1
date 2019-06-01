import React from "react";
import ReactDOM from "react-dom";

import {Provider} from 'react-redux';
import {reducer} from './reducer';
import {createStore} from 'redux';

import App from './components/app/app.jsx';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const init = () => {

  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, document.querySelector(`.main`));
};

init();
