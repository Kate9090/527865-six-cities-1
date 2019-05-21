import React from "react";
import PropTypes from 'prop-types';

import Stateless from '../stateless/stateless.jsx';
// import offerCity from "../../mocks/offers-city";

const App = (props) => {
  const {offer, offerCity, ClickOnTitle} = props;
  return <Stateless offer={offer} offerscity={offerCity} onTitleClick={ClickOnTitle} />;
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
  offerCity: PropTypes.arrayOf(PropTypes.shape({
    offerCoord: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  })).isRequired,
  ClickOnTitle: PropTypes.func,
  onClick: PropTypes.func,
};
export default App;
