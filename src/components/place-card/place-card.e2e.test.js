import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import PlaceCard from './place-card.jsx';

const mock = {
  offer: {
    src: `path`,
    title: `Beautiful &amp; luxurious apartment at great location`,
    price: 80,
    stars: 4,
    name: `Apartment`,
  },
};

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the image to set active state`, () =>{
  const imageClick = jest.fn();
  const {offer} = mock;

  const placeCard = mount(<PlaceCard
    offerList = {offer}
    onImageChoice={imageClick}
  />);

  const oneOfImage = placeCard.find(`.place-card__image`);

  oneOfImage.simulate(`click`);
  placeCard.update();

  const statusCard = placeCard.state(`active`);

  expect(statusCard).toEqual(true);
});

