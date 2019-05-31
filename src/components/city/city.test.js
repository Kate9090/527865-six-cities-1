import React from "react";
import renderer from 'react-test-renderer';

import {City} from './city.jsx';

import offerCities from '../../mocks/offers-city';

const mock = offerCities[2];

it(`renders correctly City List`, () => {
  const tree = renderer
    .create(<City
      cityObject = {mock}
      idx = {2}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
