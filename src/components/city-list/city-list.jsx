import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class CityList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cityForRender: this.props.cities[0].city,
    };
    this._onUserChose = this._onUserChose.bind(this);
  }


  _onUserChose(evt, city) {
    // const {handleSelectCity} = this.props;
    // evt.preventDefault();
    this.setState({
      cityForRender: city,
    });
    this.props.onUserChoose(this.state.cityForRender);
  }

  render() {
    const {cities} = this.props;

    return <ul className="locations__list tabs__list">
      {cities.map((it, i) => (
        <li className="locations__item" key={`city-${i}`}>
          <a onClick={(e) => this._onUserChose(e, it.city)} className="locations__item-link tabs__item" href="#">
            <span>{it.city}</span>
          </a>
        </li>
      )
      )}
    </ul>;
  }
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    offerCoord: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  })).isRequired,
  onUserChoose: PropTypes.func.isRequired,
};

export default CityList;
