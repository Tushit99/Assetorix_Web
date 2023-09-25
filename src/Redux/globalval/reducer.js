import { COUNTRY_VAL, LOOKINGFOR, RECENTLY_VISITED } from "./typeaction";

const initialState = {
  country: "india",
  visited: [],
  lookingFor: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case COUNTRY_VAL:
      return { ...state, country: payload };
    case RECENTLY_VISITED:
      return { ...state, visited: payload };
    case LOOKINGFOR:
      return { ...state, lookingFor: payload };
    default:
      return state;
  }
};
