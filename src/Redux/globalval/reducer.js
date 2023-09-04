import { COUNTRY_VAL, LOOKINGFOR } from "./typeaction"


const initialState = {
    country: "india" , 
    lookingFor: "" 
}

export const reducer = (state = initialState, { type, payload })=>{
    switch(type){
        case COUNTRY_VAL: return {...state, country: payload}  
        case LOOKINGFOR: return {...state,lookingFor: payload } 
        default : return state 
    } 
}

