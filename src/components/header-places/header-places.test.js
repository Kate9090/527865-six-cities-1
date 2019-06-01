import React from "react";
import renderer from 'react-test-renderer';

import HeaderPlaces from './header-places.jsx';

import {Provider} from 'react-redux';
import {reducer} from '../../reducer';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

import offerCities from '../../mocks/offers-city';

const mock = offerCities[1].city;

it(`renders correctly header places part`, () => {
  const tree = renderer
    .create(<Provider store={store}><HeaderPlaces
      activeCity = {mock}
    /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
