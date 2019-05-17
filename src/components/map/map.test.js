import React from "react";
import renderer from 'react-test-renderer';

import Map from './map.jsx';

import offer from '../../mocks/offers';
const mock = offer;

it(`renders correctly Map`, () => {
  const tree = renderer
    .create(<Map
      offer = {mock}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
