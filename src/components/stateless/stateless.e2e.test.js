import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import Stateless from './stateless.jsx';

import {Provider} from 'react-redux';
import {reducer} from '../../reducer';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

import offerHotelList from '../../mocks/offers-in-amsterdam';
const mock = offerHotelList;

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the title`, () =>{
  const buttonClick = jest.fn();

  const stateless = mount(<Provider store={store}><Stateless
    offer={mock}
    cityForRender={`Amsterdam`}
    onTitleClick={buttonClick}
  /></Provider>);

  const startButton = stateless.find(`.cities__places-list`).childAt(0).find(`.place-card__name a`);

  startButton.simulate(`click`);
  expect(buttonClick).toHaveBeenCalledTimes(1);
});

