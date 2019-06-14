import NameSpace from "../name-spaces";
import {createSelector} from 'reselect';

const NAME_SPACE = NameSpace.DATA;

export const getHotels = (state) => {
  return state[NAME_SPACE].hotels;
};

export const getNeighbourHotels = (state) => {
  return state[NAME_SPACE].neighbourHotels;
};


export const getCities = (state) => {
  return state[NAME_SPACE].cities;
};

export const getSelectedOffers = createSelector(
    getHotels,
    (offers, city) => {
      return offers.filter((offer) => offer.city.name === city.name);
    }
);

export const getSortHotels = (state) => {
  return state[NAME_SPACE].sortHotels;
};
