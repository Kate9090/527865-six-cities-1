import React from "react";
import renderer from 'react-test-renderer';

import Stateless from './stateless';

import offerHotelList from '../../mocks/offers-in-amsterdam';
const mock = offerHotelList;
import offerCities from '../../mocks/offers-city';
const mockOfferCities = offerCities;

it(`renders correctly stateless screen`, () => {
  const tree = renderer
    .create(<Stateless
      offer = {mock}
      offerscities={mockOfferCities}
      cityForRender={`Amsterdam`}
      onTitleClick = {() => {
        mock.title = `The most chippest room`;
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
