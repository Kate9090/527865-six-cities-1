import React from "react";
import PropTypes from 'prop-types';

import Stateless from '../stateless/stateless.jsx';

const App = (props) => {
  const {arrayOfChoices} = props;
  return <Stateless arrayOfHotelList={arrayOfChoices}/>;
};

App.propTypes = {
  arrayOfChoices: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number,
    name: PropTypes.string
  })).isRequired,

  onClick: PropTypes.func,
};
export default App;
