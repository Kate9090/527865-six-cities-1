import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.USER;

export const getSelectCity = (state) => {
  return state[NAME_SPACE].city;
};

export const getSelectCityNumber = (state) => {
  return state[NAME_SPACE].cityNumber;
};

export const getStatusAuthorization = (state) => {
  return state[NAME_SPACE].isAuthorizationRequired;
};

export const getUser = (state) => {
  return state[NAME_SPACE].user;
};

export const getActiveOffer = (state) => {
  return state[NAME_SPACE].activeOffer;
};

export const getFavouritesList = (state) => {
  return state[NAME_SPACE].favouriteOffer;
};

export const getReviews = (state) => {
  return state[NAME_SPACE].reviews;
};
