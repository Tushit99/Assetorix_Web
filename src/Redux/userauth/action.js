import axios from "axios";
import {
  USER_LOGOUT,
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
    await axios
      .post("https://assetorix.onrender.com/user/login", param)
      .then((e) => {
        console.log(e); 
        dispatch({ type: USER_lOGIN_SUCCESS, payload: e.data }); 
        if (e.status > 200 && e.status < 300) {
          localStorage.setItem("AstToken", e.data.token);
          localStorage.setItem("AstUser", e.data.name); 
          localStorage.setItem("usrId",e.data.id); 
          console.log("success status power");
          return e.status;
        } else {
          console.log("something went wrong");
        } 
      });
  } catch (err) { 
    console.log("som wrg", err); 
    dispatch({ type: USER_lOGIN_ERROR ,payload: err.response.data.msg });
  }
};  

export const signinuser = (param) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNIN_LOADING });
    let res = await axios
      .post("https://assetorix.onrender.com/user/register", param)
      .then((e) => {
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: e.data });
        if (e.status > 200 && e.status < 300) {
          localStorage.setItem("AstToken", e.data.token);
          localStorage.setItem("AstUser", e.data.name);
          localStorage.setItem("usrId",e.data.id);  
          // console.log("successfully signin");
        } else {
          console.log("something went wrong in sign in");
          dispatch({ type: USER_SIGNIN_ERROR });
        }
      }); 
      console.log(res); 
    return res;
  } catch (err) {
    // console.log(err.response.data.msg);
    dispatch({ type: USER_SIGNIN_ERROR, payload: err.response.data.msg });
  }
};

export const userlogout = () => (dispatch) => {
  localStorage.removeItem("AstToken");
  localStorage.removeItem("AstUser"); 
  dispatch({ type: USER_LOGOUT }); 
};
