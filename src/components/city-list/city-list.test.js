import React from "react";
import renderer from 'react-test-renderer';

import CityList from './city-list.jsx';

import offerCities from '../../mocks/offers-city';

const mock = offerCities;

it(`renders correctly City List`, () => {
  const tree = renderer
    .create(<CityList
      cities = {mock}
      // onChoice = {jest.fn}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
