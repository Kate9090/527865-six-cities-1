import NameSpace from "../name-spaces";
import {createSelector} from 'reselect';

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

export const getDefaultCity = (state) => {
  return state[NAME_SPACE].defaultCity;
};

export const getSelectedOffers = createSelector(
    getHotels,
    getSelectCity,
    (offers, city) => {
      return offers.filter((offer) => offer.city.name === city.name);
    }
);

export const getSortHotels = (state) => {
  return state[NAME_SPACE].offers;
};
