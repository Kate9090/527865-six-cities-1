import React from 'react';
import Enzyme from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import {MainScreen} from './main-screen.jsx';

import offerCities from '../../mocks/offers-in-amsterdam';
const mockOffer = offerCities;

import {Provider} from 'react-redux';
import reducer from '../../reducer/index';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the type sort`, () =>{
  const sortClick = jest.fn();

  const screen = mount(<BrowserRouter><Provider store={store}><MainScreen
    activeCard = {mockOffer[0]}
    offers = {mockOffer}
    sortHotels = {mockOffer}
    activeCity={``}
    onChoseSort= {sortClick}
  /></Provider></BrowserRouter>);

  const oneOfSortType = screen.find(`li.places__option--active`);

  oneOfSortType.simulate(`click`);

  expect(sortClick).toHaveBeenCalledTimes(1);
});
