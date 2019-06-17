const initialState = {
  hotels: [],
  cities: [],
  sortHotels: [],
  neighbourHotels: [],
};

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
      ))];
      if (cities.length < MAX_NUMBER_OF_CITIES) {
        cities = cities.slice(0, cities.length);
      } else {
        cities = cities.slice(0, MAX_NUMBER_OF_CITIES);
      }
    }

    return {
      type: `LOAD_CITY_LIST`,
      payload: cities,
    };
  },
  'sortOffers': (type, offers) => {
    let copyHotels = offers;
    let newHotels = null;
    switch (type) {
      case `Price: low to high`:
        newHotels = copyHotels.sort((a, b) => a.price - b.price);
        break;
      case `Price: high to low`:
        newHotels = copyHotels.sort((a, b) => b.price - a.price);
        break;
      case `Top rated first`:
        newHotels = copyHotels.sort((a, b) => b.rating - a.rating);
        break;
    }

    if (!newHotels) {
      newHotels = copyHotels;
    }

    return {
      type: `SORT_HOTELS`,
      payload: newHotels,
    };
  },
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
    host: data.host,
    images: data.images,
    goods: data.goods,
    maxAdults: data.max_adults,
    isPremium: data.is_premium,
    isFavorite: data.is_favorite,
    isPro: data.is_pro,
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
    case `SORT_HOTELS`:
      return Object.assign({}, state, {
        sortHotels: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, Operation};
