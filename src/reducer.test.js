import {reducer} from './reducer';

it(`renders correctly initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    step: -1,
    mistakes: 0,
  });
});

it(`should increment current step by a given number`, () => {
  expect(reducer({
    step: -1,
    mistakes: 0,
  }, {
    type: `INCREMENT_STEP`,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 0,
  });
});

it(`should increment mistakes`, () => {
  expect(reducer({
    step: 0,
    mistakes: 0,
  }, {
    type: `INCREMENT_MISTAKES`,
    payload: 1,
  })).toEqual({
    step: 0,
    mistakes: 1,
  });
});
