import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

const CitiesTopMenu = (props) => {
  const {cities, onUserAnswer} = props;

  const handleUserChoose = (city, num, evt) => {
    evt.preventDefault();
    onUserAnswer(city, num);
  };

  return <ul className="locations__list tabs__list">
    {cities.map((it, i) => (
      // <CityFromTopMenu key={`city-${i}`}/>
      <li className="locations__item" key={`city-${i}`}>
        <a onClick={(e) => handleUserChoose(it.city, i, e)} className="locations__item-link tabs__item" href="#">
          <span>{it.city}</span>
        </a>
      </li>
    )
    )}
  </ul>;
};

CitiesTopMenu.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    offerCoord: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  })).isRequired,
  onUserAnswer: PropTypes.func,
};

export {CitiesTopMenu};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cities: state.cityListArray,
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer: (userAnswer) => {
    dispatch(ActionCreator[`NEW_CITY`](userAnswer));
  },
});

export default connect(
    mapStateToProps, mapDispatchToProps
)(CitiesTopMenu);
