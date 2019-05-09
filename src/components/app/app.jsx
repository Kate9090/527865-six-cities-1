import React from "react";
import PropTypes from 'prop-types';

import Stateless from '../stateless/stateless.jsx';

const App = (props) => {
  const {choices, onClick} = props;
  return <Stateless choice={choices} onChoice={onClick}/>;
};

App.propTypes = {
  choices: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,

  onClick: PropTypes.func.isRequired,
};
export default App;
