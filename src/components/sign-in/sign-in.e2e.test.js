import React from "react";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import {SignIn} from './sign-in.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the submit link`, () =>{
  const onLinkClick = jest.fn();

  const signIn = mount(<SignIn
    onClick = {onLinkClick}
  />);

  const link = signIn.find(`button`);

  link.simulate(`submit`);

  expect(onLinkClick).toHaveBeenCalledTimes(0);
});
