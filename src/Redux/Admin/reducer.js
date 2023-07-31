import {
  ADMIN_lOGIN_ERROR,
  ADMIN_lOGIN_LOADING,
  ADMIN_lOGIN_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  admin: [],
  success: 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_lOGIN_LOADING:
      return { ...state, isLoading: true };
    case ADMIN_lOGIN_SUCCESS:
      return { ...state, isLoading: false, admin: payload };
    case ADMIN_lOGIN_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
