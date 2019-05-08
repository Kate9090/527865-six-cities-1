import React from "react";
import ReactDOM from "react-dom";

import offers from "./mocks/offers";

import App from './components/app/app.jsx';

const init = (hotelOffers) => {

  ReactDOM.render(
      <App
        offers={hotelOffers}
        // bookLists={[
        //   `Beautiful &amp; luxurious apartment at great location`,
        //   `Wood and stone place`,
        //   `Canal View Prinsengracht`,
        //   `Nice, cozy, warm big bed apartment`
        // ]}
      />, document.querySelector(`.main`));
};

init(offers);
