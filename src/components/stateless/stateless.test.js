import React from "react";
import renderer from 'react-test-renderer';

import Stateless from './stateless';

const mock = {
  offers: {
    choices: [
      {
        src: `path`,
        title: `Beautiful &amp; luxurious apartment at great location`,
        price: 80,
        stars: 4,
        name: `Apartment`,
      },
      {
        src: `path`,
        title: `Beautiful &amp; luxurious apartment at great location`,
        price: 10,
        stars: 4,
        name: `Hostel`,
      },
      {
        src: `path`,
        title: `Beautiful &amp; luxurious apartment at great location`,
        price: 100,
        stars: 4,
        name: `Apartment`,
      },
      {
        src: `path`,
        title: `Beautiful &amp; luxurious apartment at great location`,
        price: 120,
        stars: 4,
        name: `Apartment`,
      },
    ]
  }
};

it(`renders correctly stateless screen`, () => {
  const {offers} = mock;
  const tree = renderer
    .create(<Stateless
      choice = {offers}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
