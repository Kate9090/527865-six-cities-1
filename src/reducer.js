import offerHotelList from './mocks/offers-in-amsterdam';
import offerCities from './mocks/offers-city';

const offerInAmsterdam = offerHotelList;
const cityAmonthArray = offerCities;

const initialState = {
  city: `Amsterdam`,
  offerInCity: offerInAmsterdam,
  cityListArray: cityAmonthArray,
  // cityNumber: 0
};


const ActionCreator = ({
  'NEW_CITY': (newCity, i) => ({
    type: `NEW_CITY`,
    payload: newCity,
    num: i
  }),

});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `NEW_CITY`:
      return Object.assign({}, state, {
        city: action.payload,
        // offerInCity,
        // cityListArray: require(`./mocks/offers-city`),
        // cityNumber: action.num
      });
  }

  return state;
};

export {reducer, ActionCreator};
