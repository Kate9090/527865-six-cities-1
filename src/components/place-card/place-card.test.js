import React from "react";
import renderer from 'react-test-renderer';

import PlaceCard from './place-card';

import offer from '../../mocks/offers';
const mock = offer[1];

it(`renders correctly PlaceCard`, () => {
  const tree = renderer
    .create(<PlaceCard
      offer = {mock}
      onChoice = {() => {
        mock.title = `The most chippest room`;
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
