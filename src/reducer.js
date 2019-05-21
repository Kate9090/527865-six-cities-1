
const initialState = {
  city: `Amsterdam`,
  offerInCity: require(`./mocks/offers-in-amsterdam`).offer,
};


const ActionCreator = ({
  'NEW_CITY': (newCity) => ({
    type: `NEW_CITY`,
    payload: newCity,
  }),

});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `NEW_CITY`:
      return Object.assign({}, state, {
        city: action.payload,
        offerInCity: require(`./mocks/offers-in-${state.city}`).offer,
      });
  }

  return state;
};

export {reducer, ActionCreator};
