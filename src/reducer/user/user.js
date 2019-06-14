const initialState = {
  city: ``,
  cityNumber: 0,
  isAuthorizationRequired: false,
  user: {},
  activeOffer: {},
  reviews: [],
  favouriteOffer: [],
  pinColor: ``,
  comment: ``,
};

const ActionCreator = ({
  'selectCity': (newCity, numberOfTheCityInList, cities) => {
    if (newCity.length < 1) {
      newCity = cities[0];
    }

    return {
      type: `NEW_CITY`,
      payload: newCity,
      num: numberOfTheCityInList,
    };
  },
  'requireAuthorization': (status) => ({
    type: `AUTHORIZATION_REQUIRED`,
    payload: status,
  }),
  'signIn': (user = {}) => ({
    type: `SIGN_IN`,
    payload: {
      id: user.id,
      email: user.email,
      name: user.name,
      avatarUrl: user.avatar_url,
      isPro: user.is_pro,
    },
  }),
  'showActiveOffer': (offer) => ({
    type: `SHOW_ACTIVE_OFFER`,
    payload: offer,
  }),
  'addCardToFavourite': (favouriteOffer, offer, i) => {
    if (favouriteOffer && offer) {
      favouriteOffer[i] = offer;
    }
    return {
      type: `ADD_CARD_TO_FAVOURITE`,
      payload: favouriteOffer,
    };
  },
  'addNewPinColor': (color) => {
    return {
      type: `ADD_NEW_PIN_COLOR`,
      payload: color,
    };
  },
  'sendComment': (text, review, i) => {
    if (review && text) {
      review[i] = text;
    }
    return {
      type: `ADD_TEXT_COMMENT`,
      payload: review,
    };
  },

});

const Operation = {
  signIn: (data) => (dispatch, _getState, api) => {
    return api.post(`/login`, data)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.signIn(response.data));
          dispatch(ActionCreator.requireAuthorization(true));
        }
      })
      .catch(() => { });
  },
  checkAuthorization: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.signIn(response.data));
          dispatch(ActionCreator.requireAuthorization(true));
        }
      })
      .catch(() => {});
  },
};


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
    case `SIGN_IN`:
      return Object.assign({}, state, {
        user: action.payload,
      });
    case `SHOW_ACTIVE_OFFER`:
      return Object.assign({}, state, {
        activeOffer: action.payload,
      });
    case `ADD_CARD_TO_FAVOURITE`:
      return Object.assign({}, state, {
        favouriteOffer: action.payload,
      });
    case `ADD_TEXT_COMMENT`:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
  }

  return state;
};

export {reducer, ActionCreator, Operation};
