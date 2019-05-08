import React from "react";
import ReactDOM from "react-dom";

import App from './components/app/app.jsx';

const init = () => {

  ReactDOM.render(
      <App
        bookLists={[
          `Beautiful &amp; luxurious apartment at great location`,
          `Wood and stone place`,
          `Canal View Prinsengracht`,
          `Nice, cozy, warm big bed apartment`
        ]}
      />, document.querySelector(`.main`));
};

init();
