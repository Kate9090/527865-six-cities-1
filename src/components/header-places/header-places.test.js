import React from "react";
import renderer from 'react-test-renderer';

import HeaderPlaces from './header-places.jsx';

import {Provider} from 'react-redux';
import reducer from '../../reducer/index';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

import offerCities from '../../mocks/offers-city';
const mock = offerCities;

import offerHotelList from '../../mocks/offers-in-amsterdam';
const mockOffers = offerHotelList;

it(`renders correctly header places part`, () => {
  const tree = renderer
    .create(<Provider store={store}><HeaderPlaces
      activeCity = {mock[1]}
      offers= {mockOffers}
      cities={mock}
    /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
