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
  error: "",
  user: [],
  success: 4, 
  token:"" 
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_lOGIN_LOADING:
      return { ...state, isLoading: true ,isError: false  };
    case USER_lOGIN_SUCCESS:
      return { ...state, isLoading: false, user: payload,token: payload.token, isError: false, success: 0 };  
    case USER_lOGIN_ERROR:
      return { ...state, isLoading: false, isError: true, error: payload , success: 1 }; 
      case USER_SIGNIN_LOADING:
        return { ...state, isLoading: true, isError: false  }; 
      case USER_SIGNIN_SUCCESS:
        return { ...state, isLoading: false,token: payload.token, user: payload, isError: false, success: 0  }; 
      case USER_SIGNIN_ERROR: 
        return { ...state, isLoading: false, isError: true, error: payload , success: 1 }; 
    default:
      return state; 
  }
};
