import React from "react";
import renderer from 'react-test-renderer';

import {BrowserRouter} from 'react-router-dom';
import PlaceCard from './place-card';

import offerHotelList from '../../mocks/offers-in-amsterdam';
const mock = offerHotelList[0];

import {Provider} from 'react-redux';
import reducer from '../../reducer/index';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

it(`renders correctly PlaceCard`, () => {
  const tree = renderer
    .create(<BrowserRouter><Provider store={store}><PlaceCard
      offer = {mock}
      onClick= {jest.fn()}
      onMouseOver={jest.fn()}
      onMouseOut={jest.fn()}
    /></Provider></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
