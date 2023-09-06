import { COUNTRY_VAL, LOOKINGFOR } from "./typeaction";

export const changecountry = (param)=>(dispatch)=>{
    // let setval = localStorage.getItem("astcountry");  
    dispatch({type:COUNTRY_VAL , payload: param});     
}


export const changeLookingFor = (param)=>(dispatch)=>{
    dispatch({type: LOOKINGFOR, payload: param}); 
} 


