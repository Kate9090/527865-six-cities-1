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
        initialState.hotels = JSON.parse(JSON.stringify(response));
        dispatch(ActionCreator.loadHotels(response));
        dispatch(ActionCreator.loadCityList(response));
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
        hotels: action.payload,
      });
    case `LOAD_CITY_LIST`:
      return Object.assign({}, state, {
        cities: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, Operation};