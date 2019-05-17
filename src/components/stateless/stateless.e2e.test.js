import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import Stateless from './stateless.jsx';

import offer from '../../mocks/offers';
const mock = offer;

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the title`, () =>{
  const buttonClick = jest.fn();

  const stateless = mount(<Stateless
    offer={mock}
    onTitleClick={buttonClick}
  />);

  const startButton = stateless.find(`.place-card__name a`);

  startButton.simulate(`click`);
  expect(buttonClick).toHaveBeenCalledTimes(1);
});

