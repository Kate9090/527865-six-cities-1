import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class CityList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  render() {
    const {offersCity} = this.props;
    return <ul className="locations__list tabs__list">
      {offersCity.map((it, i) => (
        <li className="locations__item" key={`city-${i}`}>
          <a className="locations__item-link tabs__item" href="#">
            <span>{it.city}</span>
          </a>
        </li>
      )
      )}
    </ul>;
  }
}

CityList.propTypes = {
  offersCity: PropTypes.arrayOf(PropTypes.shape({
    offerCoord: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  })).isRequired,
};

export default CityList;
