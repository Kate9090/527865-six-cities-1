
const initialState = {
  city: `Amsterdam`,
  offers: require(`./mocks/offers`).offer,
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
        city: action.payload
      });
  }

  return state;
};

export {reducer, ActionCreator};
