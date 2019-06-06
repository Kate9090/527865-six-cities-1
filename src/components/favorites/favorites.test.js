import React from "react";
import renderer from 'react-test-renderer';

import Favorites from './favorites.jsx';

it(`renders correctly PlaceCard`, () => {
  const tree = renderer
    .create(<Favorites
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
