import React from "react";
import renderer from 'react-test-renderer';

import Stateless from './stateless';

import {Provider} from 'react-redux';
import {reducer} from '../../reducer';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

import offerHotelList from '../../mocks/offers-in-amsterdam';
const mock = offerHotelList;

it(`renders correctly stateless screen`, () => {
  const tree = renderer
    .create(<Provider store={store}><Stateless
      offer = {mock}
      cityForRender={`Amsterdam`}
      onTitleClick = {() => {
        mock.title = `The most chippest room`;
      }}
    /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
