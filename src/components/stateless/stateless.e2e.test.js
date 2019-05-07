import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme';

import Stateless from './stateless';

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the title`, () =>{
  const buttonClick = jest.fn();

  const stateless = shallow(<Stateless
    bookList={[0]}
    onClick={buttonClick}
  />);

  const startButton = stateless.find(`.place-card__name a`);

  startButton.simulate(`click`);
  expect(buttonClick).toHaveBeenCalledTimes(1);
});

