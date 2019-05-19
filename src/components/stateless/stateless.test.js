import React from "react";
import renderer from 'react-test-renderer';

import Stateless from './stateless';

import offer from '../../mocks/offers';
const mock = offer;

it(`renders correctly stateless screen`, () => {
  const tree = renderer
    .create(<Stateless
      offer = {mock}
      onTitleClick = {() => {
        mock.title = `The most chippest room`;
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
