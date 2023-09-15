import React, { useEffect, useState } from 'react'; 
// import { WarningIcon } from "@chakra-ui/icons"; 
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";  

const PrivateRoute = ({ children }) => {
    let {user,success, isLoading} = useSelector((state) => state.userreducer); 
    let location = useLocation(); 
    const [page ,setpage] = useState(""); 
    const toast = useToast(); 
    
    useEffect(()=>{  
        setpage(location); 
    },[]);  

    console.log(user.length); 

    if (success == 0 && isLoading==false){ 
        return children; 
    } else if(isLoading==false && success==4) {   
        toast({ 
            title: 'Login Please',
            description: "Login is required to post a property",
            status: 'info',
            duration: 1500, 
            position: 'top-left', 
          })
        return <Navigate to="/login" onpage={page} /> 
    } 
  
  }

export default PrivateRoute; 