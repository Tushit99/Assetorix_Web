import axios from "axios";
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

export const residentialRent = (location) => async (dispatch) => {
  dispatch({ type: DATA_FETCH_LOADING });
  try { 
    await axios
      .get(
        `${process.env.REACT_APP_URL}/property/rent/residential${location.search}`
      )
      .then((e) => {
        dispatch({ type: DATA_RESIDENTIAL_RENT_DATA, payload: e.data });
      });
  } catch (error) {
    dispatch({ type: DATA_FETCH_ERROR });
  }
};

export const commercialRent = (location) => async (dispatch) => {
  dispatch({ type: DATA_FETCH_LOADING });
  try {
    await axios
      .get(
        `${process.env.REACT_APP_URL}/property/rent/commercial${location.search}`
      )
      .then((e) => {
        dispatch({ type: DATA_COMMERCIAL_RENT_DATA, payload: e.data });
        console.log(e);
      });
  } catch (error) {
    dispatch({ type: DATA_FETCH_ERROR });
  }
};

export const residentialBuy = (location) => async (dispatch) => {
  dispatch({ type: DATA_FETCH_LOADING });
  try {
    await axios
      .get(
        `${process.env.REACT_APP_URL}/property/buy/residential${location.search}`
      )
      .then((e) => {
        dispatch({ type: DATA_RESIDENTIAL_BUY_DATA, payload: e.data });
      });
  } catch (error) {
    dispatch({ type: DATA_FETCH_ERROR });
  }
};

export const commercialBuy = (location) => async (dispatch) => {
  dispatch({ type: DATA_FETCH_LOADING });
  try {
    await axios
      .get(
        `${process.env.REACT_APP_URL}/property/buy/commercial${location.search}`
      )
      .then((e) => {
        dispatch({ type: DATA_COMMERCIAL_BUY_DATA, payload: e.data });
      });
  } catch (error) {
    dispatch({ type: DATA_FETCH_ERROR });
  }
};

export const wishlistData = () => async (dispatch) => {
  dispatch({ type: DATA_FETCH_LOADING });
  try {
    let id = localStorage.getItem("usrId") || undefined;
    let authorization = localStorage.getItem("AstToken") || undefined;

    let head = { id, authorization, "Content-type": "application/json" };
    if (!id || !authorization) {
      return;
    }
    let param = {
      id,
      authorization,
    };

    await axios
      .get(`${process.env.REACT_APP_URL}/user/wishlist`, { headers: param })
      .then((e) => {
        console.log("wishlist data: ", e.data);
        dispatch({ type: DATA_FETCH_WISHLIST, payload: e.data });
      });
  } catch (error) {
    dispatch({ type: DATA_FETCH_ERROR });
  }
};

export const updatedWishlist = (myid) => (dispatch) => {
  const id = localStorage.getItem("usrId") || undefined;
  const authorization = localStorage.getItem("AstToken") || undefined;

  if (!id || !authorization) return;

  const axiosConfig = {
    method: "delete",
    url: `${process.env.REACT_APP_URL}/user/wishlist/${myid}`,
    headers: {
      id,
      authorization,
      "Content-type": "application/json",
    },
  }; 

  axios(axiosConfig)
    .then((e) => { 
      dispatch({ type: DATA_UPDATED_WISHLIST, payload: e.data.wishlistIDs });
    })
    .catch((err) => console.log(err));
};

