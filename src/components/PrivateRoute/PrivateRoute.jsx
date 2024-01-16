import React from "react";
import { useToast } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";  

const PrivateRoute = ({ children }) => {
  let { user } = useSelector((state) => state.userreducer);
  let location = useLocation();
  const toast = useToast();
  // const navigate = useNavigate(); 

  console.log(user);

  if (user.name) {
    console.log("rendered");
    return children;
  } else {
    toast({
      title: "Login Please",
      description: "Login is required to post a property",
      status: "info",
      duration: 1500,
      position: "top-left",
    });
    console.log("rendered"); 
    return <Navigate to="/login" state={{ onpage: location.pathname }} />; 
    // navigate("/login", { state: { onpage: location.pathname } });
    console.log("rendered");  
    return null; // Fixed the return statement
  }
};

export default PrivateRoute;
