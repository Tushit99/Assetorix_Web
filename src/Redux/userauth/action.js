import axios from "axios";
import {
  USER_SIGNIN_ERROR,
  USER_SIGNIN_LOADING,
  USER_SIGNIN_SUCCESS,
  USER_lOGIN_ERROR, 
  USER_lOGIN_LOADING,
  USER_lOGIN_SUCCESS,
} from "./actionType";

export const loginuser = (param) => async (dispatch) => {
  try {
    dispatch({ type: USER_lOGIN_LOADING });
    let res = await axios.post("https://clumsy-helmet-seal.cyclic.cloud/user/login", param).then((e) => {
      dispatch({ type: USER_lOGIN_SUCCESS, payload: e.data });
      return e.data;
    });
    console.log(res); 
  } catch (err) { 
    dispatch({ type: USER_lOGIN_ERROR });
  }
};   

export const signinuser = (param) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNIN_LOADING });
    let res = await axios.post("https://clumsy-helmet-seal.cyclic.cloud/user/register", param).then((e) => {
      dispatch({ type: USER_SIGNIN_SUCCESS, payload: e.data });
      return e.data;  
    });
    console.log(res); 
  } catch (err) {
    dispatch({ type: USER_SIGNIN_ERROR }); 
  }
};   





