import {
  USER_SIGNIN_ERROR,
  USER_SIGNIN_LOADING,
  USER_SIGNIN_SUCCESS,
  USER_lOGIN_ERROR,
  USER_lOGIN_LOADING,
  USER_lOGIN_SUCCESS,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  user: [],
  success: 0,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_lOGIN_LOADING:
      return { ...state, isLoading: true };
    case USER_lOGIN_SUCCESS:
      return { ...state, isLoading: false, user: payload };
    case USER_lOGIN_ERROR:
      return { ...state, isLoading: false, isError: true }; 
      case USER_SIGNIN_LOADING:
        return { ...state, isLoading: true }; 
      case USER_SIGNIN_SUCCESS:
        return { ...state, isLoading: false, user: payload }; 
      case USER_SIGNIN_ERROR: 
        return { ...state, isLoading: false, isError: true }; 
    default:
      return state;
  }
};
