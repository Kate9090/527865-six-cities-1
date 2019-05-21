import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import Stateless from './stateless.jsx';

import offer from '../../mocks/offers';
const mock = offer;
import offerCity from '../../mocks/offers-city';
const mockOfferCity = offerCity;

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the title`, () =>{
  const buttonClick = jest.fn();

  const stateless = mount(<Stateless
    offer={mock}
    offerscity={mockOfferCity}
    onTitleClick={buttonClick}
  />);

  const startButton = stateless.find(`.cities__places-list`).childAt(0).find(`.place-card__name a`);

  startButton.simulate(`click`);
  expect(buttonClick).toHaveBeenCalledTimes(1);
});

