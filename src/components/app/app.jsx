import React from "react";
import PropTypes from 'prop-types';

import Stateless from '../stateless/stateless.jsx';

const App = ({offer}) => {
  const {arrayOfChoices} = offer;
  return <Stateless choice={arrayOfChoices}/>;
};

App.propTypes = {
  offer: PropTypes.shape({
    arrayOfChoices: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      stars: PropTypes.number,
      name: PropTypes.string
    })).isRequired,
  }).isRequired,

  onClick: PropTypes.func,
};
export default App;
