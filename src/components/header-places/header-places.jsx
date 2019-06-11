import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getSelectCity} from '../../reducer/user/selectors';
import {getDefaultCity, getCities} from '../../reducer/data/selectors';

const HeaderPlaces = (props) => {
  const {activeCity, cities, offers} = props;

  return <>
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{activeCity === `` ?
      offers.filter((it) => it.city.name === cities[0]).length
      : offers.filter((it) => it.city.name === activeCity).length} places to stay in {activeCity === `` ? cities[0] : activeCity}</b>
  </>;
};

HeaderPlaces.propTypes = {
  activeCity: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,
  })).isRequired,
};

export {HeaderPlaces};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCity: getSelectCity(state),
  defaultCity: getDefaultCity(state),
  cities: getCities(state),
});

export default connect(
    mapStateToProps
)(HeaderPlaces);
