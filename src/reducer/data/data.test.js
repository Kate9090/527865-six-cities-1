import MockAdapter from 'axios-mock-adapter';
import {configureAPI} from '../../api';

import {Operation} from './data';

describe(`Reducer works correctly`, () => {
  it(`make a correct API call to /hotels`, function () {
    const dispatch = jest.fn();
    const api = configureAPI(dispatch);
    const apiMock = new MockAdapter(api);

    const hotelsLoader = Operation.loadHotels();

    apiMock.onGet(`/hotels`)
    .reply(200, [{"bedrooms": undefined, "city": undefined, "description": undefined, "location": undefined, "price": undefined, "rating": undefined, "src": undefined, "title": undefined, "type": undefined}]);

    return hotelsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_HOTELS`,
          payload: [{"bedrooms": undefined, "city": undefined, "description": undefined, "location": undefined, "price": undefined, "rating": undefined, "src": undefined, "title": undefined, "type": undefined}],
        });
      });
  });
});
