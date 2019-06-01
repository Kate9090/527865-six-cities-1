import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import City from '../city/city.jsx';

import withActiveCard from '../../hocs/with-active-card/with-active-card';
const WrappedCity = withActiveCard(City);


const CitiesTopMenu = (props) => {
  const {cities} = props;

  return <ul className="locations__list tabs__list">
    {cities.map((it, i) => (
      <WrappedCity key={`city-${i}`} cityObject={it} idx={i} />
    )
    )}
  </ul>;
};

CitiesTopMenu.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    offerCoord: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  })).isRequired,
};

export {CitiesTopMenu};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cities: state.cityListArray,
});

export default connect(
    mapStateToProps
)(CitiesTopMenu);
