import { COUNTRY_VAL, LOOKINGFOR, RECENTLY_VISITED } from "./typeaction";

export const changecountry = (param)=>(dispatch)=>{
    // let setval = localStorage.getItem("astcountry");  
    dispatch({type:COUNTRY_VAL , payload: param});     
}


export const changeLookingFor = (param)=>(dispatch)=>{
    dispatch({type: LOOKINGFOR, payload: param}); 
} 

export const addRecentlyVisited = (param)=>(dispatch)=>{
    let visited_list = localStorage.getItem("visited"); 

    if(visited_list.length>=5){
        visited_list.pop(); 
        visited_list.push(param);  
    }else{
        visited_list.push(param);   
    } 
    localStorage.setItem("visited",visited_list); 
    dispatch({type:RECENTLY_VISITED, payload: visited_list }); 
}

