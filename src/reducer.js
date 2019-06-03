// import offerHotelList from './mocks/offers-in-amsterdam';
import offerCities from './mocks/offers-city';

// const offerInAmsterdam = offerHotelList;
const cityAmonthArray = offerCities;

const initialState = {
  city: `Amsterdam`,
  offerInCity: [],
  // offerInCity is hotels

  cityListArray: cityAmonthArray,
  cityNumber: 0,
};

const ActionCreator = ({
  'NEW_CITY': (newCity, numberOfTheCityInList) => ({
    type: `NEW_CITY`,
    payload: newCity,
    num: numberOfTheCityInList,
  }),
  'loadHotels': (hotels) => {
    return {
      type: `LOAD_HOTELS`,
      payload: hotels,
    };
  },
});

const Operation = {
  loadHotels: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadHotels(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `NEW_CITY`:
      return Object.assign({}, state, {
        city: action.payload,
        cityNumber: action.num,
      });
    case `LOAD_HOTELS`:
      return Object.assign({}, state, {
        offerInCity: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, Operation};
