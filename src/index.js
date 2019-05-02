import React from "react";
import ReactDOM from "react-dom";

import Stateless from './components/stateless/stateless';

const App = () => {
  return <Stateless />;
};

const init = () => {

  ReactDOM.render(
      <App />, document.querySelector(`.main`));
};

init();
