import axios from "axios";
import {
  USER_lOGIN_ERROR,
  USER_lOGIN_LOADING,
  USER_lOGIN_SUCCESS,
} from "./actionType";

export const getuser = (param) => async (dispatch) => {
  try {
    dispatch({ type: USER_lOGIN_LOADING });
    let res = await axios.get("", param).then((e) => {
      dispatch({ type: USER_lOGIN_SUCCESS, payload: e.data });
      return e.data;
    });
    console.log(res); 
  } catch (err) {
    dispatch({ type: USER_lOGIN_ERROR });
  }
};  



