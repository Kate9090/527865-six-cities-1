import React from "react";
import renderer from 'react-test-renderer';

import {Map} from './map.jsx';

import offer from '../../mocks/offers-in-amsterdam';
const mock = offer;

import offerCities from '../../mocks/offers-city';
const mockCitiesOffer = offerCities;

it(`renders correctly Map`, () => {
  const tree = renderer
    .create(<Map
      offer = {mock}
      offerCities={mockCitiesOffer}
      cityOnMap={0}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
