import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import PlaceCard from './place-card.jsx';

import offer from '../../mocks/offers-in-amsterdam';
const mockOffer = offer[1];

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the card`, () =>{
  const onCardClick = jest.fn();

  const placeCard = mount(<PlaceCard
    offer = {mockOffer}
    onCardClick = {onCardClick}
    onMouseOver={jest.fn()}
    onMouseOut={jest.fn()}
  />);

  const oneOfImage = placeCard.find(`.place-card__image`);

  oneOfImage.simulate(`click`);

  expect(onCardClick).toHaveBeenCalledTimes(1);
});

