import React from 'react';
import PropTypes from 'prop-types';

const CityList = (props) => {

  const {offersCity, handleSelectCity} = props;


  const _onUserChose = (evt, city) => {
    evt.preventDefault();
    handleSelectCity(city);
  };

  return <ul className="locations__list tabs__list">
    {offersCity.map((it, i) => (
      <li className="locations__item" key={`city-${i}`}>
        <a onClick={(e) => _onUserChose(e, it.city)} className="locations__item-link tabs__item" href="#">
          <span>{it.city}</span>
        </a>
      </li>
    )
    )}
  </ul>;
};

CityList.propTypes = {
  offersCity: PropTypes.arrayOf(PropTypes.shape({
    offerCoord: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  })).isRequired,
  handleSelectCity: PropTypes.func.isRequired,
};

export default CityList;
