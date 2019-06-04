const initialState = {
  hotels: [],
  cities: [],
  city: ``,
};

const getCityFromOffers = (hotels, cityName) =>
  hotels.filter((hotel) => hotel.city.name === cityName)[0].city;

// const hotelsDataAdapter = (hotels) => hotels.map((it) => {
//   return {
//     bedrooms: it.bedrooms,
//     city: it.city,
//     cityCoord: [it.city.location.latitude, it.city.location.longitude],
//     description: it.description,
//     location: it.location,
//     previewImage: it.preview_image,
//     price: it.price,
//     rating: it.rating,
//     title: it.title,
//     type: it.type,
//   };
// });

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

const Operation = {
  loadHotels: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        // initialState.hotels = JSON.parse(JSON.stringify(response));
        dispatch(ActionCreator.loadHotels(response.data));
        dispatch(ActionCreator.loadCityList(response.data));
      });
  }
};

// const hotelsDataAdapter = (data) => {
//   return {
//     bedrooms: data.bedrooms,
//     city: data[`city`],
//     cityCoord: [data[`city`][`location`][`latitude`], data[`city`][`location`][`longitude`]],
//     description: data[`description`],
//     location: data[`location`],
//     src: data[`preview_image`],
//     price: data[`price`],
//     rating: data[`rating`],
//     title: data[`title`],
//     type: data.type,
//   };
// };

// const parseServerResponseHotels = (response) => {
//   return response.data.map(hotelsDataAdapter);
// };

// const Operation = {
//   loadHotels: () => (dispatch, _getState, api) => {
//     dispatch(ActionCreator.loadHotels());
//     return api.get(`/hotels`)
//       .then(parseServerResponseHotels)
//       .then((hotels) => {
//         // initialState.hotels = JSON.parse(JSON.stringify(response));
//         dispatch(ActionCreator.loadHotels(hotels));
//         dispatch(ActionCreator.loadCityList(hotels));
//       });
//   }
// };

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
