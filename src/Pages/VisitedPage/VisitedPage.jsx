import { Box, Divider, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from "./Visited.module.css";
// import { IoIosArrowForward } from 'react-icons/io';  

const VisitedPage = () => {
  const [visit, setVisit] = useState([]);


  const handleVisitedData = async (data) => {
    let body = { list: data };
    await axios.post(`${process.env.REACT_APP_URL}/property/array-list`, body).then((e) => {
      setVisit(e.data);
    })
  }


  useEffect(() => {
    let detail = JSON.parse(localStorage.getItem("visited")) || [];

    if (detail.length) {
      handleVisitedData(detail); 
    }

  }, [])

  return (
    <Box> 
      <Box flex={10} padding={"30px 10px"} minHeight={"80vh"} > 
        <Heading fontSize={"3xl"} margin={"0 0 4px 0"} > Last Visited Page </Heading>
        <Divider padding={"1px"} backgroundColor={"rgb(240, 240, 240)"} w={"96%"} borderRadius={10} margin={"10px auto"} />
        <Box display={"grid"} gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(3,1fr)", lg: "repeat(4,1fr)" }} gap={6} width={"94%"} margin={"auto"} >
          {visit?.map((e, i) => (
            <Link to={`/recently_visited/${e._id}`} className={style.list_viewed} key={i + 1}>
              <Box alignItems={"center"} padding={"2px 10px"} gap={4} >
                <Box>
                  <Image src="https://mediacdn.99acres.com/582/0/11640476F-1383637447-Amrit_House_-_Sant_Nagr_Delhi.jpeg" objectFit={"contain"} alt="property image" />
                </Box>
                <Box textAlign={"center"} fontFamily={"revert-layer"} >
                  <Heading className={style.textoverflow} size={"md"} textAlign={"left"} color={"rgb(37, 37, 37)"} >  {e.address.houseNumber && e.address.houseNumber} {e.address.apartmentName && e.address.apartmentName} {e.address.locality && e.address.locality} </Heading>
                  <Text className={style.textoverflow} textAlign={"left"} fontSize={"lg"}> Price: {e.countryCurrency}{e.price?.toLocaleString("en-IN")} </Text>
                  <Text className={style.textoverflow} textAlign={"left"} fontSize={"lg"}> Property: {e.propertyType} </Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>  
    </Box>

  )
}

export default VisitedPage;
