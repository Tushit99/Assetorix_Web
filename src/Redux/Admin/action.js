import axios from "axios";
import {
  ADMIN_lOGIN_ERROR,
  ADMIN_lOGIN_LOADING,
  ADMIN_lOGIN_SUCCESS,
} from "./actionType"; 

export const getadmin = (param) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_lOGIN_LOADING });
    let res = await axios
      .get("", param) 
      .then((e) => {
        dispatch({ type: ADMIN_lOGIN_SUCCESS, payload: e.data });
        return e.data; 
      });  
    console.log(res);  
  } catch (err) {
    dispatch({ type: ADMIN_lOGIN_ERROR });
  } 
};   
  
  
     