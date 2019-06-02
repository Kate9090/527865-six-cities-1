import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import {City} from './city.jsx';

import offerCities from '../../mocks/offers-city';
const mockOffer = offerCities[2];

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the city`, () =>{
  const cityClick = jest.fn();

  const cities = mount(<City
    cityObject = {mockOffer}
    idx = {2}
    onUserAnswer={jest.fn()}
    onCardClick= {cityClick}
  />);

  const oneOfCity = cities.find(`a.locations__item-link`);

  oneOfCity.at(0).simulate(`click`);

  expect(cityClick).toHaveBeenCalledTimes(1);
});
