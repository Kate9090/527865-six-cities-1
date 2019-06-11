import React, {Component} from "react";
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/user/user';

class City extends Component {
  constructor(props) {
    super(props);

    this.handleUserChoose = this.handleUserChoose.bind(this);
  }

  handleUserChoose(city, num, evt) {
    evt.preventDefault();
    this.props.onUserAnswer(city, num);
    this.props.onCardClick();
  }

  render() {
    const {city, idx} = this.props;

    return <li className="locations__item">
      <a onClick={(e) => this.handleUserChoose(city, idx, e)}
        className={`locations__item-link tabs__item`}
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
};

export {City};

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer: (city, num) => {
    dispatch(ActionCreator.selectCity(city, num));
  },
});

export default connect(
    null,
    mapDispatchToProps
)(City);
