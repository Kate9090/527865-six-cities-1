import React from "react";
import PropTypes from 'prop-types';

import Stateless from './components/stateless/stateless.jsx';

const App = (props) => {
  const {bookLists} = props;
  return <Stateless bookList={bookLists}/>;
};

App.propTypes = {
  bookLists: PropTypes.array
};

export default App;
