import React from "react";
import renderer from 'react-test-renderer';

import PlaceCard from './place-card';

const mock = {
  offer: {
    choices: [
      {
        src: `path`,
        title: `Beautiful &amp; luxurious apartment at great location`,
        price: `120`,
        stars: `4`,
        name: `Apartment`,
      },
    ]
  }
};

it(`renders correctly PlaceCard`, () => {
  const {offer} = mock;
  const tree = renderer
    .create(<PlaceCard
      offer = {offer}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
