import React from "react";
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

import offerHotelList from '../../mocks/offers';
const mock = offerHotelList;
import offerCities from '../../mocks/offers-city';
const mockOfferCity = offerCities;

it(`renders correctly app screen`, () => {
  const tree = renderer
    .create(<App
      offerOfCity = {mock}
      city={`Amsterdam`}
      offerCities = {mockOfferCity}
      ClickOnTitle = {() => {
        mock[1].title = `The most chippest room`;
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
