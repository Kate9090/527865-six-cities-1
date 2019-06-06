const initialState = {
  hotels: [],
  cities: [],
  defaultCity: ``,
};

const MAX_NUMBER_OF_CITIES = 6;

const ActionCreator = ({
  'selectCity': (newCity) => ({
    type: `NEW_CITY`,
    payload: newCity,
  }),
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
        it.city

      ))].slice(0, MAX_NUMBER_OF_CITIES);
    }

    return {
      type: `LOAD_CITY_LIST`,
      payload: cities,
    };
  },
  'getDefaultCity': (cities) => {
    let defaultcity;
    if (cities) {
      defaultcity = cities[0].name;
    }

    return {
      type: `GET_DEFAULT_CITY`,
      payload: defaultcity,
    };
  }
});

const hotelsDataAdapter = (data) => {
  return {
    bedrooms: data.bedrooms,
    city: data[`city`],
    description: data[`description`],
    location: data[`location`],
    src: data[`preview_image`],
    price: data[`price`],
    rating: data[`rating`],
    title: data[`title`],
    type: data.type,
    id: data.id,
  };
};

const parseServerResponseHotels = (response) => {
  return response.data.map(hotelsDataAdapter);
};

const Operation = {
  loadHotels: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then(parseServerResponseHotels)
      .then((hotels) => {
        dispatch(ActionCreator.loadHotels(hotels));
        dispatch(ActionCreator.loadCityList(hotels));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `LOAD_HOTELS`:
      return Object.assign({}, state, {
        hotels: action.payload,
      });
    case `LOAD_CITY_LIST`:
      return Object.assign({}, state, {
        cities: action.payload,
      });
    case `GET_DEFAULT_CITY`:
      return Object.assign({}, state, {
        defaultCity: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, Operation};
