import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';

import PlaceCard from './place-card.jsx';

import offer from '../../mocks/offers-in-amsterdam';
const mockOffer = offer[0];

import {Provider} from 'react-redux';
import reducer from '../../reducer/index';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the card`, () =>{
  const onCardClick = jest.fn();

  const placeCard = mount(<BrowserRouter><Provider store={store}><PlaceCard
    offer = {mockOffer}
    onClick = {onCardClick}
    onMouseOver={jest.fn()}
    onMouseOut={jest.fn()}
  /></Provider></BrowserRouter>);

  const oneOfCard = placeCard.find(`.place-card__image-wrapper a`);

  oneOfCard.simulate(`click`);

  expect(onCardClick).toHaveBeenCalledTimes(1);
});

