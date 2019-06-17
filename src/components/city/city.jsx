import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/user/user';

class City extends Component {
  constructor(props) {
    super(props);

    this._handleUserChoose = this._handleUserChoose.bind(this);
  }

  _handleUserChoose(city, num, cities, evt) {
    evt.preventDefault();
    this.props.onUserAnswer(city, num, cities);
    this.props.onCardClick(city);
  }

  render() {
    const {city, idx, cities} = this.props;

    return <li className="locations__item">
      <a onClick={(e) => this._handleUserChoose(city, idx, cities, e)}
        className={this.props.current === city ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`}
        href="#">
        <span>{city}</span>
      </a>
    </li>;
  }
}

City.propTypes = {
  onUserAnswer: PropTypes.func,
  city: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
  onCardClick: PropTypes.func,
  onCardMouseOut: PropTypes.func,
  current: PropTypes.string,
  cities: PropTypes.arrayOf(PropTypes.string),
};

export {City};

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer: (city, num, cities) => {
    dispatch(ActionCreator.selectCity(city, num, cities));
  },
});

export default connect(
    null,
    mapDispatchToProps
)(City);
