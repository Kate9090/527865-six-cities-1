import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import {CityList} from './city-list.jsx';


import offerCities from '../../mocks/offers-city';
const mockOffer = offerCities;
// .splice(0, 1);

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the city`, () =>{
  const cityClick = jest.fn();
  // const onUserChoose = jest.fn();

  const cities = mount(<CityList
    cities = {mockOffer}
    onUserChoose={cityClick}
  />);

  const oneOfCity = cities.find(`a.locations__item-link`);

  oneOfCity.at(0).simulate(`click`);

  expect(cityClick).toHaveBeenCalledTimes(1);
});

it(`simulates click event on the city to set active state`, () =>{
  const cityClick = jest.fn();

  const cities = mount(<CityList
    cities = {mockOffer}
    onUserChoose={cityClick}
  />);

  const oneOfCity = cities.find(`a.locations__item-link`);

  oneOfCity.at(0).simulate(`click`);

  // expect(cityClick).toHaveBeenCalledTimes(1);
  cities.update();

  const statusOneOfCity = cities.state(`cityNumberInList`);

  expect(statusOneOfCity).toEqual(0);
});

