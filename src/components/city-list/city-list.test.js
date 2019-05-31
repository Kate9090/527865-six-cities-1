import React from "react";
import renderer from 'react-test-renderer';

import {CitiesTopMenu} from './city-list.jsx';

import offerCities from '../../mocks/offers-city';

const mock = offerCities;

it(`renders correctly City List`, () => {
  const tree = renderer
    .create(<CitiesTopMenu
      cities = {mock}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
