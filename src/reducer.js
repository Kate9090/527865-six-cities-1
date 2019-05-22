
const initialState = {
  city: `Amsterdam`,
  offerInCity: require(`./mocks/offers-in-amsterdam`).offerHotelList,
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
