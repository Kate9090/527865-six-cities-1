import React from "react";
import renderer from 'react-test-renderer';

import MainScreen from './main-screen';

import {Provider} from 'react-redux';
import reducer from '../../reducer/index';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

import offerHotelList from '../../mocks/offers-in-amsterdam';
const mock = offerHotelList;

it(`renders correctly stateless screen`, () => {
  const tree = renderer
    .create(<Provider store={store}><MainScreen
      offer = {mock}
      cityForRender={`Amsterdam`}
    /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
