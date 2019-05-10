import React from "react";
import renderer from 'react-test-renderer';

import App from './app.jsx';

const mock = {
  array: [
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

};

it(`renders correctly stateless screen`, () => {
  const {array} = mock;
  const tree = renderer
    .create(<App
      arrayOfChoices = {array}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
