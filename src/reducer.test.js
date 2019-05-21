import {reducer} from './reducer';

it(`renders correctly when choce other city`, () => {
  expect(reducer({
    city: `Amsterdam`,
    offers: require `./mocks/offers`.offer,
  }, {
    type: `NEW_CITY`,
    payload: `London`,
  })).toEqual({
    city: `London`,
  });
});
