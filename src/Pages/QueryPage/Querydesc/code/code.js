export const convertDateFormat=(val)=>{

    let newday = val.split(",")[0].slice(0,3);  
    let newdate = val.split(" ")[1]; 
    let newmonth = val.split(" ")[2].slice(0,3);
    let newyear = val.split(" ")[3];
    
    let newtime = val.split(" ")[5];
    let newduration = val.split(" ")[6];
    
    let newval = newday + " " + newdate + " " + newmonth + " " + newyear + " at " + newtime + " " + newduration; ; 

  return newval;
}


