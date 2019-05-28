import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';

class CityList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cityNumberInList: 0,
      cityForRender: this.props.cities[0].city,
    };

    this._onUserChose = this._onUserChose.bind(this);
  }

  _onUserChose(city, num, evt) {
    const {onUserChoose} = this.props;
    evt.preventDefault();
    onUserChoose(city, num);
  }

  // _onUserChose(city, num, evt) {
  //   // const {handleSelectCity} = this.props;
  //   evt.preventDefault();
  //   // console.log(num);
  //   this.setState({
  //     cityForRender: city,
  //     cityNumberInList: num,
  //   });
  //   this.props.onUserChoose(this.state.cityForRender, this.state.cityNumberInList);
  // }

  render() {
    const {cities} = this.props;

    return <ul className="locations__list tabs__list">
      {cities.map((it, i) => (
        <li className="locations__item" key={`city-${i}`}>
          <a onClick={(e) => this._onUserChose(it.city, i, e)} className="locations__item-link tabs__item" href="#">
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
  onUserChoose: PropTypes.func,
};

export {CityList};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cities: state.cityListArray,
});

export default connect(
    mapStateToProps
)(CityList);
