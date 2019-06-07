import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withFavouriteCard from './with-favourite-card';

configure({adapter: new Adapter()});

const MockComponentWrapped = withFavouriteCard(() => <div />);

describe(`withActiveCard`, () => {
  it(`should correct change 'active' state`, () => {
    const wrapper = shallow(<MockComponentWrapped />);

    expect(wrapper.state().isFavorite).toEqual(false);

    wrapper.props().onCardClick();

    expect(wrapper.state().isFavorite).toEqual(true);
  });
});

