import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

import City from '../city/city.jsx';
import {getCities} from '../../reducer/data/selectors';


const CitiesTopMenu = (props) => {
  const {cities, onCardClick, onCardMouseOut, current} = props;

  const _renderCitiesTopMenu = () => {

    return <ul className="locations__list tabs__list">
      {cities.map((it, i) => (
        <City cities={cities} onCardClick={onCardClick} current={current} onCardMouseOut={onCardMouseOut} key={`city-${i}`} city={it} idx={i} />
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
  onCardMouseOut: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  current: PropTypes.string,
};

export {CitiesTopMenu};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cities: getCities(state),
});

export default connect(
    mapStateToProps
)(CitiesTopMenu);
