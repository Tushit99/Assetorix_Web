import React, { useEffect, useState } from 'react'; 
// import { WarningIcon } from "@chakra-ui/icons"; 
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";  

const PrivateRoute = ({ children }) => {
    let isAuth = useSelector((state) => state.userreducer.user); 
    let location = useLocation(); 
    const [page ,setpage] = useState(""); 
    const toast = useToast(); 
    
    useEffect(()=>{  
        setpage(location); 
    },[]);  

    if (isAuth.length>0) { 
        return children; 
    } else {   
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