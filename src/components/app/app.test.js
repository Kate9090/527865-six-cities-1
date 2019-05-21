import React from "react";
import renderer from 'react-test-renderer';

import App from './app.jsx';

import offer from '../../mocks/offers';
const mock = offer;
import offerCity from '../../mocks/offers-city';
const mockOfferCity = offerCity;

it(`renders correctly app screen`, () => {
  const tree = renderer
    .create(<App
      offer = {mock}
      offerCity = {mockOfferCity}
      ClickOnTitle = {() => {
        mock[1].title = `The most chippest room`;
      }}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
