import {reducer} from './reducer';

it(`renders correctly when choce other city`, () => {
  expect(reducer({
    city: `Amsterdam`,
    offersCity: require(`./mocks/offers-city`).offer,
  }, {
    type: `NEW_CITY`,
    payload: `London`,
  })).toEqual({
    city: `London`,
  });
});
