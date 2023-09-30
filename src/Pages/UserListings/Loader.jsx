import { Box, Progress } from '@chakra-ui/react'
import React from 'react' 
import img from "./Hourglass.gif"; 

const Loader = () => {
  return (
    <Box w={"100%"} mt={"10px"} display={"flex"} alignItems={"center"} justifyContent={"center"} minH={"50vh"} >
        <img src={img} alt="image-loading" />      
    </Box>
  )
}

export default Loader