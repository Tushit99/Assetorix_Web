import React from "react";
// import { WarningIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let { user, success, isLoading } = useSelector((state) => state.userreducer);
  let location = useLocation();
  const toast = useToast();
  const navigate = useNavigate();  

  console.log(user);  
  
  if (user.name) { 
    return children;
  } else if (isLoading == false && success == 4) {
    toast({ 
      title: "Login Please",
      description: "Login is required to post a property",
      status: "info",
      duration: 1500,
      position: "top-left", 
    });
    return navigate("/login", { state: { onpage: location.pathname } });
  }
};

export default PrivateRoute;
