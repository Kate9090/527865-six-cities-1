import React from "react";
import renderer from 'react-test-renderer';
// import {BrowserRouter} from 'react-router-dom';

import {ReviewList} from './review-list';

import {Provider} from 'react-redux';
import reducer from '../../reducer/index';
import {createStore} from 'redux';

const store = createStore(
    reducer
);

it(`renders correctly stateless screen`, () => {
  const tree = renderer
    .create(<Provider store={store}><ReviewList
      reviews={[]}
    /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
