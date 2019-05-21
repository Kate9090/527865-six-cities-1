import React from "react";
import renderer from 'react-test-renderer';

import Stateless from './stateless';

import offer from '../../mocks/offers';
const mock = offer;
import offerCity from '../../mocks/offers-city';
const mockOfferCity = offerCity;

it(`renders correctly stateless screen`, () => {
  const tree = renderer
    .create(<Stateless
      offer = {mock}
      offerscity={mockOfferCity}
      onTitleClick = {() => {
        mock.title = `The most chippest room`;
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
