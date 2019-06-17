import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

import {ReviewList} from './review-list.jsx';

import {Provider} from 'react-redux';
import reducer from '../../reducer/index';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

Enzyme.configure({adapter: new Adapter()});

it(`simulates click event on the btn to send offer to favorite`, () =>{
  const sendComment = jest.fn();

  const tree = mount(<Provider store={store}><ReviewList
    reviews={[]}
    checkAuthorization = {true}
    onSendComment= {sendComment}
  /></Provider>);

  const formToFavorite = tree.find(`.reviews__form`);

  formToFavorite.at(0).simulate(`submit`);

  expect(sendComment).toHaveBeenCalledTimes(1);
});
