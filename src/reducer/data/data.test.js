import MockAdapter from 'axios-mock-adapter';
import {configureAPI} from '../../api';

import {Operation, reducer, ActionCreator} from './data';

// const initialState = {
//   hotels: [],
//   cities: [],
//   defaultCity: ``,
//   sortHotels: [],
//   neighbourHotels: [],
// };

describe(`Test server operation works correctly`, () => {
  it(`make a correct API call to /hotels`, function () {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const hotelsLoader = Operation.loadHotels();

    apiMock.onGet(`/hotels`)
    .reply(200, []);

    return hotelsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_HOTELS`,
          payload: [],
        });
      });
  });
});

describe(`Test action creator reducer data`, () => {
  it(`set cities list`, () => {
    expect(ActionCreator.selectCity(``)).toEqual({
      payload: ``,
      type: `NEW_CITY`
    });
  });
  it(`set loadHotels list`, () => {
    expect(ActionCreator.loadHotels([])).toEqual({
      payload: [],
      type: `LOAD_HOTELS`
    });
  });
  it(`set loadCityList list`, () => {
    expect(ActionCreator.loadCityList([])).toEqual({
      payload: [],
      type: `LOAD_CITY_LIST`
    });
  });
  it(`set sortOffers`, () => {
    expect(ActionCreator.sortOffers(``, [])).toEqual({
      payload: [],
      type: `SORT_HOTELS`
    });
  });
});

describe(`Test reducer data`, () => {
  it(`load hotels`, () => {
    expect(reducer({hotels: []}, {
      type: `LOAD_HOTELS`,
      payload: [{}, {}, {}]
    })).toEqual({
      hotels: [{}, {}, {}]
    });
  });

  it(`load city list`, () => {
    expect(reducer({cities: []}, {
      type: `LOAD_CITY_LIST`,
      payload: [``, ``, ``]
    })).toEqual({
      cities: [``, ``, ``]
    });
  });

  it(`sorting the hotels`, () => {
    expect(reducer({sortHotels: []}, {
      type: `SORT_HOTELS`,
      payload: [{}, {}, {}]
    })).toEqual({
      sortHotels: [{}, {}, {}]
    });
  });

});

