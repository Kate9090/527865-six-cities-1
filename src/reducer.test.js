import {reducer} from './reducer';

import offerHotelList from './mocks/offers-in-amsterdam';
import offerCities from './mocks/offers-city';

const offerInCity = offerHotelList;
const cityAmonthArray = offerCities;

it(`renders correctly when choce other city`, () => {
  expect(reducer({
    city: `Amsterdam`,
    offersCity: offerInCity,
    cityListArray: cityAmonthArray,
  }, {
    type: `NEW_CITY`,
    payload: `London`,
  })).toEqual({
    city: `London`,
    offersCity: offerInCity,
    cityListArray: cityAmonthArray,
  });
});
