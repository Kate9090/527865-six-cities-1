import React from 'react';

import {connect} from 'react-redux';
import {getSelectCity} from '../../reducer/user/selectors';
import {getCities} from '../../reducer/data/selectors';

import {FavouriteOfferType} from '../../types';

interface Props {
  activeCity: string,
  cities: string[],
  offers: FavouriteOfferType[],
}

const HeaderPlaces: React.FunctionComponent<Props> = (props) => {
  const {activeCity, cities, offers} = props;

  return <>
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{activeCity === `` ?
      offers.filter((it) => it.city.name === cities[0]).length
      : offers.filter((it) => it.city.name === activeCity).length} places to stay in {activeCity === `` ? cities[0] : activeCity}</b>
  </>;
};

export {HeaderPlaces};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  activeCity: getSelectCity(state),
  cities: getCities(state),
});

export default connect(
    mapStateToProps
)(HeaderPlaces);
