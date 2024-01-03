import React, { useEffect, useState } from "react";  
import { Box, useToast, Heading, Text } from "@chakra-ui/react";  
import axios from "axios";
import style from "./MyLeads.module.css"; 

const MyLeads = () => {
  const [data, setData] = useState([]);
  const toast = useToast();

  const fetchQuery = async () => {
    try {
      let id = localStorage.getItem("usrId") || undefined;
      let authorization = localStorage.getItem("AstToken") || undefined;

      let head = { id, authorization, "Content-type": "application/json" };

      if (!id || !authorization) {  
        toast({
          title: "Kindly log in to send message.",
          description: "Login required for sending message.",
          status: "error",
          duration: 2000,
          position: "top-right",
        });
        return;
      }  
      await axios
        .get(`${process.env.REACT_APP_URL}/leadForm`, { headers: head })
        .then((e) => {
          setData(e.data); 
          console.log(e.data); 
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchQuery();
  }, []);

  return (
    <Box margin={"100px auto"}>
      <Heading> My Leads </Heading>
      <Box className={style.leads} >
        {data.map((detail) => ( 
          <Box key={detail._id} as={"div"} > 
            <Heading> {detail.name} </Heading>  
            <Text> <strong>Mobile: </strong> {detail.mobile} </Text>    
            <Text> <strong>Email:  </strong> {detail.email} </Text>   
            <Text> <strong>FormType:</strong> {detail.formType} </Text> 
            <Text> <strong>Property Type:</strong> {detail.propertyType} </Text> 
            <Text> <strong>Description:</strong> {detail.description} </Text>
            <Text> <strong>Verification Status: </strong> {detail.verificationState} </Text> 
            
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MyLeads;

