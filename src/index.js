import React from "react";
import ReactDOM from "react-dom";

import offer from "./mocks/offers";


import {Provider} from 'react-redux';
import {reducer} from './reducer';
import {createStore} from 'redux';

import App from './components/app/app.jsx';

const store = createStore(reducer);

const init = (hotelOffers) => {

  ReactDOM.render(<Provider store={store}>
    <App
      offer={hotelOffers}
      ClickOnTitle={() => {
        // console.log(`click on the hotel's title`);
      }
      }
    />
  </Provider>, document.querySelector(`.main`));
};

init(offer);
