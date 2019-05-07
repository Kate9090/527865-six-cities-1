import React from "react";
import renderer from 'react-test-renderer';

import Stateless from './stateless';

it(`renders correctly stateless screen`, () => {
  const tree = renderer
    .create(<Stateless
      bookList = {[0, 0, 0, 0]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
