import axios from "axios";
import { DATA_COMMERCIAL_BUY_DATA, DATA_COMMERCIAL_RENT_DATA, DATA_FETCH_ERROR, DATA_FETCH_LOADING, DATA_RESIDENTIAL_BUY_DATA, DATA_RESIDENTIAL_RENT_DATA } from "./actionType";


export const residentialRent = (location) => async (dispatch) => { 
    dispatch({type: DATA_FETCH_LOADING})
    try {
        await axios.get(`${process.env.REACT_APP_URL}/property/rent/residential${location.search}`).then((e) => {
            dispatch({type: DATA_RESIDENTIAL_RENT_DATA , payload: e.data }) 
        }) 
    } catch (error) {
       dispatch({type: DATA_FETCH_ERROR})  
    }  
}; 


export const commercialRent = (location) => async (dispatch) => { 
    dispatch({type: DATA_FETCH_LOADING})
    try {
        await axios.get(`${process.env.REACT_APP_URL}/property/rent/commercial${location.search}`).then((e) => {
            dispatch({type: DATA_COMMERCIAL_RENT_DATA , payload: e.data }) 
        })
    } catch (error) {
       dispatch({type: DATA_FETCH_ERROR}) 
    }  
}; 


export const residentialBuy = (location) => async (dispatch) => { 
    dispatch({type: DATA_FETCH_LOADING})
    try {
        await axios.get(`${process.env.REACT_APP_URL}/property/buy/residential${location.search}`).then((e) => {
            dispatch({type: DATA_RESIDENTIAL_BUY_DATA , payload: e.data }) 
        })  
    } catch (error) {
       dispatch({type: DATA_FETCH_ERROR}) 
    }  
}; 


export const commercialBuy = (location) => async (dispatch) => { 
    dispatch({type: DATA_FETCH_LOADING})
    try {
        await axios.get(`${process.env.REACT_APP_URL}/property/buy/commercial${location.search}`).then((e) => {
            dispatch({type: DATA_COMMERCIAL_BUY_DATA , payload: e.data }) 
        }) 
    } catch (error) {
       dispatch({type: DATA_FETCH_ERROR}) 
    }  
}; 




