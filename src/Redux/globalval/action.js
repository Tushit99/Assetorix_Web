import { COUNTRY_VAL, LOOKINGFOR, RECENTLY_VISITED } from "./typeaction";

export const changecountry = (param) => (dispatch) => {
  // let setval = localStorage.getItem("astcountry");
  dispatch({ type: COUNTRY_VAL, payload: param });
};

export const changeLookingFor = (param) => (dispatch) => {
  dispatch({ type: LOOKINGFOR, payload: param });
};

export const addRecentlyVisited = (param) => (dispatch) => {
    console.log("data reached", param);
     
    let visited_list = JSON.parse(localStorage.getItem("visited")) || [];
  
    if (!visited_list) {
      visited_list = [];
    }
  
    if (visited_list.includes(param)) {
      return;
    } else if (visited_list.length >= 5) {
      visited_list.pop();
      visited_list.push(param);
    } else {
      visited_list.push(param);
    }
   
    localStorage.setItem("visited", JSON.stringify(visited_list));
  
    dispatch({ type: RECENTLY_VISITED, payload: visited_list });
  };
  
  


