import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer';

import Stateless from '../stateless/stateless.jsx';

const App = (props) => {
  const {offerCities, onUserAnswer, ClickOnTitle, city, offerOfCity} = props;

  // console.log(city);
  return <Stateless
    onUserChoose={onUserAnswer} cityForRender={city} offer={offerOfCity} offerscities={offerCities} onTitleClick={ClickOnTitle} />;
};

App.propTypes = {
  offerCities: PropTypes.arrayOf(PropTypes.shape({
    city: PropTypes.string.isRequired,
    offerCoord: PropTypes.array.isRequired,
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
