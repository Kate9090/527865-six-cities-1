import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveCard from './with-active-card';

configure({adapter: new Adapter()});

const MockComponentWrapped = withActiveCard(() => <div />);

describe(`withActiveCard`, () => {
  it(`should correct change 'active' state`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.state().active).toEqual(false);

    wrapper.props().onCardClick();

    expect(wrapper.state().active).toEqual(true);
  });
});

