import React from "react";
import renderer from 'react-test-renderer';

import {BrowserRouter} from 'react-router-dom';
import Favorites from './favorites.jsx';

import {Provider} from 'react-redux';
import reducer from '../../reducer/index';
import {createStore} from 'redux';

const store = createStore(
    reducer
);
it(`renders correctly PlaceCard`, () => {
  const tree = renderer
    .create(<BrowserRouter><Provider store={store}><Favorites
    /></Provider></BrowserRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
