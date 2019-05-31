import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import {CitiesTopMenu} from './city-list.jsx';


import offerCities from '../../mocks/offers-city';
const mockOffer = offerCities;
// .splice(0, 1);

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the city`, () =>{
  const cityClick = jest.fn();
  // const onUserChoose = jest.fn();

  const cities = mount(<CitiesTopMenu
    cities = {mockOffer}
    onUserAnswer={cityClick}
  />);

  const oneOfCity = cities.find(`a.locations__item-link`);

  oneOfCity.at(0).simulate(`click`);

  expect(cityClick).toHaveBeenCalledTimes(1);
});
