import React from "react";
import PropTypes from 'prop-types';

import Stateless from '../stateless/stateless.jsx';

const App = (props) => {
  const {arrayOfChoices, ClickOnTitle} = props;
  return <Stateless arrayOfHotelList={arrayOfChoices} onTitleClick={ClickOnTitle} />;
};

App.propTypes = {
  arrayOfChoices: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number,
    name: PropTypes.string
  })).isRequired,
  ClickOnTitle: PropTypes.func,
  onClick: PropTypes.func,
};
export default App;
