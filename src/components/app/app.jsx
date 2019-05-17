import React from "react";
import PropTypes from 'prop-types';

import Stateless from '../stateless/stateless.jsx';

const App = (props) => {
  const {offer, ClickOnTitle} = props;
  return <Stateless offer={offer} onTitleClick={ClickOnTitle} />;
};

App.propTypes = {
  offer: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number,
    name: PropTypes.string,
    offerCoord: PropTypes.array.isRequired,
  })).isRequired,
  ClickOnTitle: PropTypes.func,
  onClick: PropTypes.func,
};
export default App;
