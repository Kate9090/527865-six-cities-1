import React from "react";
import ReactDOM from "react-dom";

import offer from "./mocks/offers";

import App from './components/app/app.jsx';

const init = (hotelOffers) => {

  ReactDOM.render(
      <App
        arrayOfChoices={hotelOffers}
      />, document.querySelector(`.main`));
};

init(offer);
