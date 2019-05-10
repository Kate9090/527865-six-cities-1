import React from "react";
import renderer from 'react-test-renderer';

import PlaceCard from './place-card';

const mock = {
  offer: {
    src: `path`,
    title: `Beautiful &amp; luxurious apartment at great location`,
    price: 80,
    stars: 4,
    name: `Apartment`,
  },

};

it(`renders correctly PlaceCard`, () => {
  const {offer} = mock;
  const tree = renderer
    .create(<PlaceCard
      offerList = {offer}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
