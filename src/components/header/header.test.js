import React from "react";
import renderer from 'react-test-renderer';

import {Header} from './header.jsx';
import {BrowserRouter} from 'react-router-dom';

it(`renders correctly header places part`, () => {
  const tree = renderer
    .create(<BrowserRouter><Header /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
