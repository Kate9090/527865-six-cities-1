import React from "react";
import renderer from 'react-test-renderer';

import Stateless from './stateless';

it(`renders correctly stateless screen`, () => {
  const tree = renderer
    .create(<Stateless />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
