import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import City from '../city/city.jsx';

import withActiveItem from '../../hocs/with-active-item/with-active-item.js';
const WrappedCity = withActiveItem(City);


const CitiesTopMenu = (props) => {
  const {cities, onCityClick} = props;

  return <ul className="locations__list tabs__list">
    {cities.map((it, i) => (
      <WrappedCity key={`city-${i}`} setActiveItem={onCityClick} cityObject={it} idx={i} />
    )
    )}
  </ul>;
};

CitiesTopMenu.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    offerCoord: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  })).isRequired,
  onCityClick: PropTypes.func.isRequired,
};

export {CitiesTopMenu};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cities: state.cityListArray,

});

export default connect(
    mapStateToProps
)(CitiesTopMenu);
