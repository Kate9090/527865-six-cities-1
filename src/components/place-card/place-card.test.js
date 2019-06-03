import React from "react";
import renderer from 'react-test-renderer';

import PlaceCard from './place-card';

import offerHotelList from '../../mocks/offers-in-amsterdam';
const mock = offerHotelList[0];

it(`renders correctly PlaceCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer = {mock}
      onClick= {jest.fn()}
      onMouseOver={jest.fn()}
      onMouseOut={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
