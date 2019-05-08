import React from "react";
import PropTypes from 'prop-types';

import Stateless from '../stateless/stateless.jsx';

const App = (props) => {
  const {offers} = props;
  return <Stateless bookList={offers}/>;
};

App.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default App;
