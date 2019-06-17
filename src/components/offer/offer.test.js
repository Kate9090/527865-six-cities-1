import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {Offer} from './offer.jsx';

import offerHotelList from '../../mocks/offers-in-amsterdam';
const mock = offerHotelList;

import {Provider} from 'react-redux';
import reducer from '../../reducer/index';
import {createStore} from 'redux';

const store = createStore(
    reducer
);


it(`renders correctly PlaceCard`, () => {
  const tree = renderer
    .create(<BrowserRouter><Provider store={store}><Offer
      offer = {mock[1]}
      offers = {mock}
    /></Provider></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
