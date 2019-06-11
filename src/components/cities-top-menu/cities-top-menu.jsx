import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import City from '../city/city.jsx';
import {getCities} from "../../reducer/data/selectors";


import withActiveCard from '../../hocs/with-active-card/with-active-card';
const WrappedCity = withActiveCard(City);

const CitiesTopMenu = (props) => {
  const {cities, onCardClick, onCardMouseOut} = props;

  const _renderCitiesTopMenu = () => {

    return <ul className="locations__list tabs__list">
      {cities.map((it, i) => (
        <WrappedCity onCardClick={onCardClick} onCardMouseOut={onCardMouseOut} key={`city-${i}`} city={it} idx={i} />
      )
      )}
    </ul>;
  };

  return <>
  {_renderCitiesTopMenu()}
  </>;
};

CitiesTopMenu.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string),
  onCardMouseOut: PropTypes.func,
  onCardClick: PropTypes.func,
};

export {CitiesTopMenu};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cities: getCities(state),
});

export default connect(
    mapStateToProps
)(CitiesTopMenu);
