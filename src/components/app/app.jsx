import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer';

import Stateless from '../stateless/stateless.jsx';
// import offerCity from "../../mocks/offers-city";

const App = (props) => {
  const {offerCity, onUserAnswer, ClickOnTitle, city, offerOfCity} = props;

  // console.log(city);
  return <Stateless
    onUserChoose={onUserAnswer} cityForRender={city} offer={offerOfCity} offerscity={offerCity} onTitleClick={ClickOnTitle} />;
};

App.propTypes = {
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
  onUserAnswer: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offerOfCity: state.offerInCity,
});

const mapDispatchToProps = (dispatch) => ({

  onUserAnswer: (userAnswer) => {
    dispatch(ActionCreator[`NEW_CITY`](userAnswer));
  },
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
