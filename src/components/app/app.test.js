import React from "react";
import renderer from 'react-test-renderer';

import App from './app.jsx';

import {Provider} from 'react-redux';
import reducer from '../../reducer/index';
import {createStore} from 'redux';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

it(`renders correctly app screen`, () => {
  const tree = renderer
    .create(<Provider store={store}><App
    /></Provider>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
