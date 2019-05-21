import React from "react";
import ReactDOM from "react-dom";

import offer from "./mocks/offers";
import offerCity from "./mocks/offers-city";


import {Provider} from 'react-redux';
import {reducer} from './reducer';
import {createStore} from 'redux';

import App from './components/app/app.jsx';

const store = createStore(reducer);

const init = (hotelOffers, cityOffers) => {

  ReactDOM.render(<Provider store={store}>
    <App
      offer={hotelOffers}
      offerCity={cityOffers}
      ClickOnTitle={() => {
        // console.log(`click on the hotel's title`);
      }
      }
    />
  </Provider>, document.querySelector(`.main`));
};

init(offer, offerCity);
