import MockAdapter from 'axios-mock-adapter';
import {configureAPI} from '../../api';

import {Operation, reducer, ActionCreator} from './user';

describe(`Test server operation works correctly`, () => {
  it(`make a correct API post to /login`, function () {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const statusAuthorization = Operation.signIn({});

    apiMock.onPost(`/login`)
    .reply(200, []);

    return statusAuthorization(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `SIGN_IN`,
          payload: {},
        });
      });
  });

});

describe(`Test action creator reducer data`, () => {
  it(`set selectCity`, () => {
    expect(ActionCreator.selectCity(`city`, 1, [])).toEqual({
      type: `NEW_CITY`,
      payload: `city`,
      num: 1,
    });
  });
  it(`set requireAuthorization`, () => {
    expect(ActionCreator.requireAuthorization(false)).toEqual({
      type: `AUTHORIZATION_REQUIRED`,
      payload: false,

    });
  });
  it(`set signIn`, () => {
    expect(ActionCreator.signIn({})).toEqual({
      type: `SIGN_IN`,
      payload: {},
    });
  });
  it(`set showActiveOffer`, () => {
    expect(ActionCreator.showActiveOffer({})).toEqual({
      type: `SHOW_ACTIVE_OFFER`,
      payload: {},
    });
  });
  it(`set addCardToFavourite`, () => {
    expect(ActionCreator.addCardToFavourite([], {}, 0)).toEqual({
      type: `ADD_CARD_TO_FAVOURITE`,
      payload: [{}],
    });
  });
  it(`set sendComment`, () => {
    expect(ActionCreator.sendComment(``, [], 0)).toEqual({
      type: `ADD_TEXT_COMMENT`,
      payload: [],

    });
  });
});

describe(`Test reducer data`, () => {
  it(`load status`, () => {
    expect(reducer({hotels: []}, {
      type: `AUTHORIZATION_REQUIRED`,
      payload: false
    })).toEqual({
      isAuthorizationRequired: false,
      hotels: []
    });
  });

  it(`load favouriteOffer`, () => {
    expect(reducer({cities: []}, {
      type: `ADD_CARD_TO_FAVOURITE`,
      payload: {}
    })).toEqual({
      favouriteOffer: {},
      cities: []
    });
  });

  it(`load city`, () => {
    expect(reducer({city: `Moscow`}, {
      type: `NEW_CITY`,
      payload: `Moscow`,
      num: 1,
    })).toEqual({
      city: `Moscow`,
      cityNumber: 1
    });
  });

  it(`load user`, () => {
    expect(reducer({user: {}}, {
      type: `SIGN_IN`,
      payload: {},
    })).toEqual({
      user: {}
    });
  });

  it(`load activeOffer`, () => {
    expect(reducer({}, {
      type: `SHOW_ACTIVE_OFFER`,
      payload: {},
    })).toEqual({
      activeOffer: {}
    });
  });

  it(`load reviews`, () => {
    expect(reducer([], {
      type: `ADD_TEXT_COMMENT`,
      payload: [{}],
    })).toEqual({
      reviews: [{}]
    });
  });

});

