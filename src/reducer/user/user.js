const initialState = {
  city: `Amsterdam`,
  cityNumber: 0,
};


const ActionCreator = ({
  'NEW_CITY': (newCity, numberOfTheCityInList) => ({
    type: `NEW_CITY`,
    payload: newCity,
    num: numberOfTheCityInList,
  }),
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `NEW_CITY`:
      return Object.assign({}, state, {
        city: action.payload,
        cityNumber: action.num,
      });
  }

  return state;
};

export {reducer, ActionCreator};
