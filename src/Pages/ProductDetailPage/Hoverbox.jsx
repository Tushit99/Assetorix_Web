import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Hoverbox = ({data}) => {
  return (
    <Box display={"grid"} border={0} >
        {data.map((e,index)=>(
            <Text fontSize={"xs"} key={index}> &#183; {e}</Text>
        ))}
    </Box>
  ) 
}

export default Hoverbox