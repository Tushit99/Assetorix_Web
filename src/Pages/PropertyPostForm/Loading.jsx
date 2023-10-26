import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import load from "./loadgif.gif";

const Loading = () => {
    return (
        <Box position={"fixed"} display={"flex"} alignItems={"center"} justifyContent={"center"} top={0} left={0} right={0} bottom={0} height={"100vh"} zIndex={550} backgroundColor={"rgba(239, 239, 239, 0.416)"} >
            <Box>
                <Image src={load} w={"80px"} alt={"Loading..."} /> 
                <Text fontSize={"large"} fontWeight={"bold"} margin={"10px auto"}> Loading... </Text>
            </Box> 
        </Box>
    )
}

export default Loading;

