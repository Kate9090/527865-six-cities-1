const initialState = {
  city: ``,
  cityNumber: 0,
};

const ActionCreator = ({
  'selectCity': (newCity, numberOfTheCityInList) => ({
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
