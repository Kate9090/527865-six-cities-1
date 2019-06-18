import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/user/user';

const City = (props) => {

  const _handleUserChoose = (city, num, cities, evt) => {
    evt.preventDefault();
    props.onUserAnswer(city, num, cities);
    props.onCardClick(city);
  };

  const {city, idx, cities} = props;

  return <li className="locations__item">
    <a onClick={(e) => _handleUserChoose(city, idx, cities, e)}
      className={props.current === city ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`}
      href="#">
      <span>{city}</span>
    </a>
  </li>;
};

City.propTypes = {
  onUserAnswer: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onCardMouseOut: PropTypes.func.isRequired,
  current: PropTypes.string,
  cities: PropTypes.arrayOf(PropTypes.string),
};

export {City};

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer: (city, num, cities) => {
    dispatch(ActionCreator.selectCity(city, num, cities));
  },
});

export default connect(
    null,
    mapDispatchToProps
)(City);
