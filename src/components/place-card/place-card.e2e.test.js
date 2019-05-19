import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import PlaceCard from './place-card.jsx';


import offer from '../../mocks/offers';
const mockOffer = offer[2];

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the image to set active state`, () =>{
  const imageClick = jest.fn();

  const placeCard = mount(<PlaceCard
    offer = {mockOffer}
    onImageChoice={imageClick}
    onChoice = {() => {
      mockOffer.title = `The most chippest room`;
    }}
  />);

  const oneOfImage = placeCard.find(`.place-card__image`);

  oneOfImage.simulate(`click`);
  placeCard.update();

  const statusCard = placeCard.state(`active`);

  expect(statusCard).toEqual(true);
});

