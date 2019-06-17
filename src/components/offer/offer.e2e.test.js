import React from 'react';
import Enzyme from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import {Offer} from './offer.jsx';

import offerHotelList from '../../mocks/offers-in-amsterdam';
const mock = offerHotelList;

import {Provider} from 'react-redux';
import reducer from '../../reducer/index';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the btn to send offer to favorite`, () =>{
  const sendOfferToFavourite = jest.fn();

  const tree = mount(<BrowserRouter><Provider store={store}><Offer
    offer = {mock[1]}
    offers = {mock}
    reviews = {[]}
    onSendOfferToFavourite= {sendOfferToFavourite}
  /></Provider></BrowserRouter>);

  const btnToFavorite = tree.find(`.property__bookmark-button`);

  btnToFavorite.simulate(`click`);

  expect(sendOfferToFavourite).toHaveBeenCalledTimes(1);
});
