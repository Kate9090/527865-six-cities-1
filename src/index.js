import React from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";

import Stateless from './components/stateless/stateless.jsx';

const App = (props) => {
  const {bookList} = props;
  return <Stateless
    {...bookList.map((it, i) => <Stateless bookList={it} key={i} />)}
  />;
};

App.propTypes = {
  bookList: PropTypes.array
};

const init = () => {

  ReactDOM.render(
      <App
        bookList={[
          `Beautiful &amp; luxurious apartment at great location`,
          `Wood and stone place`,
          `Canal View Prinsengracht`,
          `Nice, cozy, warm big bed apartment`
        ]}
      />, document.querySelector(`.main`));
};

init();
