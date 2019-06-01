import React from "react";
import renderer from 'react-test-renderer';

import {CitiesTopMenu} from './cities-top-menu.jsx';

import {Provider} from 'react-redux';
import {reducer} from '../../reducer';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

import offerCities from '../../mocks/offers-city';
const mock = offerCities;

it(`renders correctly City List`, () => {
  const tree = renderer
    .create(<Provider store={store}><CitiesTopMenu
      cities = {mock}
    /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
