const initialState = {
  offerInCity: [],
  cityListArray: [],
};

const MAX_NUMBER_OF_CITIES = 6;

const ActionCreator = ({
  // 'NEW_CITY': (newCity, numberOfTheCityInList) => ({
  //   type: `NEW_CITY`,
  //   payload: newCity,
  //   num: numberOfTheCityInList,
  // }),
  'loadHotels': (hotels) => {
    return {
      type: `LOAD_HOTELS`,
      payload: hotels,
    };
  },
  'loadCityList': (hotels) => {
    let cities = [];

    if (hotels) {
      cities = [...new Set(hotels.map((it) =>
        it.city.name
        // {it.city.name, it.city.location}
      ))].slice(0, MAX_NUMBER_OF_CITIES);
    }

    return {
      type: `LOAD_CITY_LIST`,
      payload: cities,
    };
  }
});

const Operation = {
  loadHotels: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadHotels(response.data));
        dispatch(ActionCreator.loadCityList(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case `NEW_CITY`:
    //   return Object.assign({}, state, {
    //     city: action.payload,
    //     cityNumber: action.num,
    //   });
    case `LOAD_HOTELS`:
      return Object.assign({}, state, {
        offerInCity: action.payload,
      });
    case `LOAD_CITY_LIST`:
      return Object.assign({}, state, {
        cityListArray: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, Operation};
