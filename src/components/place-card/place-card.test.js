import React from "react";
import renderer from 'react-test-renderer';

import {BrowserRouter} from 'react-router-dom';
import {PlaceCard} from './place-card';

import offerHotelList from '../../mocks/offers-in-amsterdam';
const mock = offerHotelList[0];


it(`renders correctly PlaceCard`, () => {
  const tree = renderer
    .create(<BrowserRouter><PlaceCard
      offer = {mock}
      onCardClick= {jest.fn()}
      onMouseOver={jest.fn()}
      onMouseOut={jest.fn()}
    /></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
