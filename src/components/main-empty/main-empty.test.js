import React from "react";
import renderer from 'react-test-renderer';
// import {BrowserRouter} from 'react-router-dom';

import MainEmpty from './main-empty.jsx';

// import {Provider} from 'react-redux';
// import reducer from '../../reducer/index';
// import {createStore} from 'redux';

// const store = createStore(
//     reducer
// );


it(`renders correctly stateless screen`, () => {
  const tree = renderer
    .create(<MainEmpty
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
