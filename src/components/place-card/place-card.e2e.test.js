import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';

import {PlaceCard} from './place-card.jsx';

import offer from '../../mocks/offers-in-amsterdam';
const mockOffer = offer[0];

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the card`, () =>{
  const onCardClick = jest.fn();

  const placeCard = mount(<BrowserRouter><PlaceCard
    offer = {mockOffer}
    onCardClick = {onCardClick}
    onMouseOver={jest.fn()}
    onMouseOut={jest.fn()}
  /></BrowserRouter>);

  const oneOfCardLink = placeCard.find(`a.cities__image-link`);

  oneOfCardLink.at(0).simulate(`click`);

  expect(onCardClick).toHaveBeenCalledTimes(1);
});

