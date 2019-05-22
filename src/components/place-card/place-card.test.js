import React from "react";
import renderer from 'react-test-renderer';

import PlaceCard from './place-card';

import offerHotelList from '../../mocks/offers-in-amsterdam';
const mock = offerHotelList[0];

it(`renders correctly PlaceCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer = {mock}
      onChoice = {() => {
        mock[0].title = `The most chippest room`;
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
