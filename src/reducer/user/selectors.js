import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.USER;

export const getUser = (state) => {
  return state[NAME_SPACE].user;
};

export const getSelectCity = (state) => {
  return state[NAME_SPACE].city;
};

// export const getAuthorizationStatus = (state) => {
//   return state[NAME_SPACE].isAuthorizationRequired;
// };
