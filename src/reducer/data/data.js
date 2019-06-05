const initialState = {
  hotels: [],
  cities: [],
  city: ``,
};

const getCityFromOffers = (hotels, cityName) =>
  hotels.filter((hotel) => hotel.city.name === cityName)[0].city;

const MAX_NUMBER_OF_CITIES = 6;

const ActionCreator = ({
  'selectCity': (newCity) => ({
    type: `NEW_CITY`,
    payload: newCity,
  }),
  'loadHotels': (hotels) => {
    // hotels = [hotels.map((it) => getSelectedOffers(it, city))];

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
  }
});

// const Operation = {
//   loadHotels: () => (dispatch, _getState, api) => {
//     return api.get(`/hotels`)
//       .then((response) => {
//         initialState.hotels = JSON.parse(JSON.stringify(response));
//         dispatch(ActionCreator.loadHotels(response));
//         dispatch(ActionCreator.loadCityList(response));
//       });
//   }
// };

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
        // initialState.hotels = JSON.parse(JSON.stringify(response));
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
    case `NEW_CITY`:
      return Object.assign({}, state, {
        city: getCityFromOffers(state.hotels, action.payload)
      });
  }

  return state;
};

export {reducer, ActionCreator, Operation};
