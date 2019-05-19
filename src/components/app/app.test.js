import React from "react";
import renderer from 'react-test-renderer';

import App from './app.jsx';

import offer from '../../mocks/offers';
const mock = offer;

it(`renders correctly stateless screen`, () => {
  const tree = renderer
    .create(<App
      offer = {mock}
      ClickOnTitle = {() => {
        mock[1].title = `The most chippest room`;
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
