import axios from 'axios';
import {ActionCreator} from './reducer/user/user';

export const BASE_URL = `https://es31-server.appspot.com/six-cities`;

export const configureAPI = (dispatch) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    // console.log(err);
    if (err.response.status === 403) {
      dispatch(ActionCreator.requireAuthorization(false));
      // dispatch(userActionCreator.getStatusAuthorization(true));
    }

    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
