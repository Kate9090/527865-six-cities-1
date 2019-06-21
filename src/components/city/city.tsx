import * as React from 'react';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer/user/user';

interface Props {
  onUserAnswer: (city: string, num: number, cities: string[]) => void,
  city: string,
  idx: number,
  onCardClick: (city: string) => void,
  current: string,
  cities: string[],
};

const City: React.FunctionComponent<Props> = (props) => {

  const _handleUserChoose = (city, num, cities, evt) => {
    evt.preventDefault();
    props.onUserAnswer(city, num, cities);
    props.onCardClick(city);
  };

  const {city, idx, cities} = props;

  return <li className="locations__item">
    <a onClick={(e) => _handleUserChoose(city, idx, cities, e)}
      className={props.current === city ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link tabs__item`}
      href="#">
      <span>{city}</span>
    </a>
  </li>;
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
