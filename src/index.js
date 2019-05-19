import React from "react";
import ReactDOM from "react-dom";

import offer from "./mocks/offers";

import App from './components/app/app.jsx';

const init = (hotelOffers) => {

  ReactDOM.render(
      <App
        offer={hotelOffers}
        ClickOnTitle={() => {
          // console.log(`click on the hotel's title`);
        }
        }
      />, document.querySelector(`.main`));
};

init(offer);
