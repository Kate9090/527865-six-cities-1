import React from "react";
import renderer from 'react-test-renderer';

import Favourites from './favourites.jsx';

it(`renders correctly PlaceCard`, () => {
  const tree = renderer
    .create(<Favourites
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
