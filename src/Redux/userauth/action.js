import axios from "axios";
import { 
  USER_AVATAR_UPDATE,
  USER_EMAIL_DATA_UPDATE,
  USER_LOGOUT,
  USER_NAME_DATA_UPDATE,
  USER_PREE_LOGIN,
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
      .post(`${process.env.REACT_APP_URL}/user/login`, param)
      .then((e) => {
        // console.log(e);
        dispatch({ type: USER_lOGIN_SUCCESS, payload: e.data }); 
        if (e.data.msg=="Login Successful") { 
          localStorage.setItem("AstToken", e.data.token);
          localStorage.setItem("AstUser", e.data.name);
          localStorage.setItem("usrId", e.data.id);
          console.log("success status power");
          return e.status;
        } 
        else{
            dispatch({ type: USER_lOGIN_ERROR, payload: "Somthing went wrong" }); 
        }
      });  
  } catch (err) { 
    console.log("som wrg", err);
    dispatch({ type: USER_lOGIN_ERROR, payload: err.response.data.msg });
  }
};

export const signinuser = (param) => async (dispatch) => {
  try { 
    dispatch({ type: USER_SIGNIN_LOADING });
    let res = await axios
      .post(`${process.env.REACT_APP_URL}/user/register`, param)
      .then((e) => {
        dispatch({ type: USER_SIGNIN_SUCCESS, payload: e.data });  
        if (e.status > 200 && e.status < 300) {
          localStorage.setItem("AstToken", e.data.token);
          localStorage.setItem("AstUser", e.data.name); 
          localStorage.setItem("usrId", e.data.id);
          // console.log("successfully signin");
        } else {
          console.log("something went wrong in sign in");
          dispatch({ type: USER_SIGNIN_ERROR });
        }
      });
    // console.log(res);
    return res;
  } catch (err) {
    // console.log(err.response.data.msg);
    dispatch({ type: USER_SIGNIN_ERROR, payload: err.response.data.msg });
  }
};

// is user pre-loged in 

export const userPreLog = (param) => async (dispatch) => {    
  // console.log("param",param);
  try {
    await axios.get(`${process.env.REACT_APP_URL}/user/`, {headers: param}).then((e) => {
        // console.log("power23",e.data);  
        let token = localStorage.getItem("AstToken");  
        localStorage.setItem("AstUser",e.data.name);  
        let id = localStorage.getItem("usrId");  
        // console.log(e.data);  
        dispatch({ type: USER_PREE_LOGIN, payload: { ...e.data, token, id } });   
      }); 
  } catch (err) {
    console.log(err); 
  } 
};   

export const handleChanges = (headers, body) => async (dispatch) => {
  // console.log(headers,body);
  try {
    await axios.patch(`${process.env.REACT_APP_URL}/user/update`, body, { headers }).then((e)=>{  
      localStorage.setItem("AstUser", body.name);  
      console.log(e.data); 
      if(e.data.msg=="Updated Successfully"){
        dispatch({ type: USER_NAME_DATA_UPDATE, payload: body.name });  
      } 
    })

  } catch (err) {
    console.error(err);
  }
}; 

export const handleEmailDataChange = (email) => async (dispatch) => { 
  console.log(email); 
  dispatch({type: USER_EMAIL_DATA_UPDATE, payload: email}); 
}; 


export const handleAddavatar = (images) => async (dispatch) => { 
  dispatch({type: USER_AVATAR_UPDATE, payload: images}); 
}; 


export const userlogout = () => (dispatch) => {
  localStorage.removeItem("AstToken");
  localStorage.removeItem("AstUser"); 
  localStorage.removeItem("usrId"); 
  dispatch({ type: USER_LOGOUT });
};
