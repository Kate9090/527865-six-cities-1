import axios from 'axios';

export const BASE_URL = `https://es31-server.appspot.com/six-cities`;

export const configureAPI = () => { // (dispatch) later
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    // console.log(err);
    // if (err.response.status === 401) {
    //   dispatch(actionCreator.checkAuthorization(true));
    //   dispatch(userActionCreator.changeAuthorization(true));
    // }

    return err;
  };
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
