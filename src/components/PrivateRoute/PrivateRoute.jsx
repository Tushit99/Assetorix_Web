import React, { useEffect, useState } from 'react'; 
// import { WarningIcon } from "@chakra-ui/icons"; 
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";  

const PrivateRoute = ({ children }) => {
    let isAuth = useSelector((state) => state.userreducer.name); 
    let location = useLocation(); 
    const [page ,setpage] = useState(""); 
    const toast = useToast(); 
    
    useEffect(()=>{  
        setpage(location); 
    },[])
  

    if (isAuth) {
        return children
    } else {
        toast({ 
            title: 'Login Please',
            description: "Login is required to post a property",
            status: 'info',
            duration: 3000, 
            position: 'top-left',
          })
        return <Navigate to="/login" onpage={page} /> 
    }
  
  }

export default PrivateRoute; 