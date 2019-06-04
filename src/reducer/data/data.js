const initialState = {
  hotels: [],
  cities: [],
};

const hotelsDataAdapter = (hotels) => hotels.map((it) => {
  return {
    bedrooms: it.bedrooms,
    city: it.city,
    description: it.description,
    location: it.location,
    previewImage: it.preview_image,
    price: it.price,
    rating: it.rating,
    title: it.title,
    type: it.type,
  };
});

const MAX_NUMBER_OF_CITIES = 6;

const ActionCreator = ({
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
        // return {it.city.name, it.city.location}

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
        const hotels = hotelsDataAdapter(response.data);
        initialState.hotels = JSON.parse(JSON.stringify(hotels));
        dispatch(ActionCreator.loadHotels(hotels));
        dispatch(ActionCreator.loadCityList(hotels));
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
