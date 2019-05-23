import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class CityList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cityNumberInList: 0,
      cityForRender: this.props.cities[0].city,
    };
    this._onUserChose = this._onUserChose.bind(this);
  }


  _onUserChose(city, num) {
    // const {handleSelectCity} = this.props;
    // evt.preventDefault();
    // console.log(num);
    this.setState({
      cityForRender: city,
      cityNumberInList: num,
    });
    this.props.onUserChoose(this.state.cityForRender, this.state.cityNumberInList);
  }

  render() {
    const {cities} = this.props;

    return <ul className="locations__list tabs__list">
      {cities.map((it, i) => (
        <li className="locations__item" key={`city-${i}`}>
          <a onClick={() => this._onUserChose(it.city, i)} className="locations__item-link tabs__item" href="#">
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
