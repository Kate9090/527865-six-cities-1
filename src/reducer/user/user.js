const initialState = {
  city: `Cologne`,
  cityNumber: 0,
  isAuthorizationRequired: false,
};

const ActionCreator = ({
  'selectCity': (newCity, numberOfTheCityInList) => ({
    type: `NEW_CITY`,
    payload: newCity,
    num: numberOfTheCityInList,
  }),
  'requireAuthorization': (status) => ({
    type: `AUTHORIZATION_REQUIRED`,
    payload: status,
  }),
});


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `NEW_CITY`:
      return Object.assign({}, state, {
        city: action.payload,
        cityNumber: action.num,
      });
    case `AUTHORIZATION_REQUIRED`:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator};
