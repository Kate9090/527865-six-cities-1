import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

export const getHotels = (state) => {
  return state[NAME_SPACE].hotels;
};

export const getCities = (state) => {
  return state[NAME_SPACE].cities;
};

export const getSelectCity = (state) => {
  return state[NAME_SPACE].city;
};
