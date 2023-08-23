import { COUNTRY_VAL } from "./typeaction"


const initialState = {
    country: "india"  
}

export const reducer = (state = initialState, { type, payload })=>{
    switch(type){
        case COUNTRY_VAL: return {...state, country: payload}  
        default : return state 
    } 
}

