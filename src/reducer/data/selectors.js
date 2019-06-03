import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

export const getHotels = (state) => {
  return state[NAME_SPACE].offerInCity;
};

export const getCities = (state) => {
  return state[NAME_SPACE].cityListArray;
};
