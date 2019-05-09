import React from "react";
import renderer from 'react-test-renderer';

import Stateless from './stateless';

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
      {
        src: `path`,
        title: `Beautiful &amp; luxurious apartment at great location`,
        price: `120`,
        stars: `4`,
        name: `Apartment`,
      },
      {
        src: `path`,
        title: `Beautiful &amp; luxurious apartment at great location`,
        price: `120`,
        stars: `4`,
        name: `Apartment`,
      },
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

it(`renders correctly stateless screen`, () => {
  const {offer} = mock;
  const tree = renderer
    .create(<Stateless
      offer = {offer}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
