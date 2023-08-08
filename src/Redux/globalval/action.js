import { COUNTRY_VAL } from "./typeaction";

export const changecountry = (param)=>(dispatch)=>{
    // let setval = localStorage.getItem("astcountry");  
    dispatch({type:COUNTRY_VAL , payload: param});     
}

