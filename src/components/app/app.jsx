import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer';

import Stateless from '../stateless/stateless.jsx';
// import offerCity from "../../mocks/offers-city";

const App = (props) => {
  const {offerCity, ClickOnTitle, city, offerOfCity} = props;
  return <Stateless cityForRender={city} offer={offerOfCity} offerscity={offerCity} onTitleClick={ClickOnTitle} />;
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
  city: PropTypes.string.isRequired,
  offerOfCity: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number,
    name: PropTypes.string,
    offerCoord: PropTypes.array.isRequired,
  })).isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offerOfCity: state.offerInCity,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () =>
    dispatch(ActionCreator[`NEW_CITY`]()),

  onUserAnswer: (userAnswer) => {
    dispatch(ActionCreator[`NEW_CITY`](userAnswer));
  },
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

