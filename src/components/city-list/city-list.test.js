import React from "react";
import renderer from 'react-test-renderer';

import CityList from './city-list.jsx';

import offer from '../../mocks/offers-city';

const mock = offer;

it(`renders correctly City List`, () => {
  const tree = renderer
    .create(<CityList
      offersCity = {mock}
      // onChoice = {jest.fn}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
