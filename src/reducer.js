import offerHotelList from './mocks/offers-in-amsterdam';
import offerCities from './mocks/offers-city';

const offerInAmsterdam = offerHotelList;
const cityListArray = offerCities;

const initialState = {
  city: `Amsterdam`,
  offerInCity: offerInAmsterdam,
  cityListArray,
};


const ActionCreator = ({
  'NEW_CITY': (newCity) => ({
    type: `NEW_CITY`,
    payload: newCity,
  }),

  // 'RESET': () => ({
  //   type: `RESET`,
  // }),

});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `NEW_CITY`:
      return Object.assign({}, state, {
        city: action.payload,
        offerInCity: require(`./mocks/offers-in-${state.city}`).offer,
      });
    // case `RESET`:
    //   return Object.assign({}, state, initialState);
  }

  return state;
};

export {reducer, ActionCreator};
