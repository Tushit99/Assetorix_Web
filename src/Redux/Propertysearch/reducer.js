import {
  DATA_COMMERCIAL_BUY_DATA,
  DATA_COMMERCIAL_RENT_DATA,
  DATA_FETCH_ERROR,
  DATA_FETCH_LOADING,
  DATA_FETCH_WISHLIST,
  DATA_RESIDENTIAL_BUY_DATA,
  DATA_RESIDENTIAL_RENT_DATA,
  DATA_UPDATED_WISHLIST,
} from "./actionType";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  CommercialBuydata: [],
  ResedentialBuydata: [],
  Commercialrentdata: [],
  Resedentialrentdata: [],
  Wishlist: [], 
};  
  

export const reducer = (state = initialState, { type, payload }) => {  
  switch (type) {
    case DATA_FETCH_LOADING:
      return { ...state, isLoading: true, isError: false };
    case DATA_COMMERCIAL_RENT_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        Commercialrentdata: payload,
      };
    case DATA_COMMERCIAL_BUY_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        CommercialBuydata: payload,
      };
    case DATA_RESIDENTIAL_RENT_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        Resedentialrentdata: payload,
      };
    case DATA_RESIDENTIAL_BUY_DATA:
      return {
        ...state,
        isLoading: false,
        isError: false,
        ResedentialBuydata: payload,
      };
    case DATA_FETCH_WISHLIST:
      return {
        ...state,
        isLoading: false,
        isError: false,
        Wishlist: payload,
      };
    case DATA_UPDATED_WISHLIST:
      return {
        ...state,
        isLoading: false,
        isError: false,
        Wishlist: payload,
      }; 
    case DATA_FETCH_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
