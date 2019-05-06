import React from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

import Stateless from './components/stateless/stateless.jsx';

const App = (props) => {
  const {bookLists} = props;
  return <Stateless bookList={bookLists}/>;
};

App.propTypes = {
  bookLists: PropTypes.array
};

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
