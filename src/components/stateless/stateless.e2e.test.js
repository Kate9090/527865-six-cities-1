import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import Stateless from './stateless.jsx';

const mock = {
  arrayOfChoices: [
    {
      src: `path`,
      title: `Beautiful &amp; luxurious apartment at great location`,
      price: 80,
      stars: 4,
      name: `Apartment`,
    },

  ]

};

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the title`, () =>{
  const buttonClick = jest.fn();
  const {arrayOfChoices} = mock;

  const stateless = mount(<Stateless
    arrayOfHotelList={arrayOfChoices}
    onTitleClick={buttonClick}
  />);

  const startButton = stateless.find(`.place-card__name a`);

  startButton.simulate(`click`);
  expect(buttonClick).toHaveBeenCalledTimes(1);
});

