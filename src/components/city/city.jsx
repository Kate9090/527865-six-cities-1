import React, {Component} from "react";
import PropTypes from 'prop-types';


import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

class City extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   active: false,
    // };

    this.handleUserChoose = this.handleUserChoose.bind(this);
  }

  handleUserChoose(city, num, evt) {
    evt.preventDefault();
    this.props.onUserAnswer(city, num);
    // this.setState({
    //   active: true,
    // });
  }

  render() {
    const {cityObject, idx, current} = this.props;

    return <li className="locations__item">
      <a onClick={(e) => this.handleUserChoose(cityObject.city, idx, e)}
        className={`locations__item-link tabs__item ${cityObject.city === current ? `tabs__item--current` : ``}`} href="#">
        <span>{cityObject.city}</span>
      </a>
    </li>;
  }
}

City.propTypes = {
  onUserAnswer: PropTypes.func,
  cityObject: PropTypes.shape({
    offerCoord: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
  }).isRequired,
  idx: PropTypes.number.isRequired,
  current: PropTypes.string.isRequired,
};

export {City};

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer: (city, num) => {
    dispatch(ActionCreator[`NEW_CITY`](city, num));
  },
});

export default connect(
    null,
    mapDispatchToProps
)(City);
