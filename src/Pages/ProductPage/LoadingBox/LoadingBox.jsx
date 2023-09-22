import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillBookmarkHeartFill } from 'react-icons/bs'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const LoadingBox = () => {
    return (
        <Box>
            <Box position={"relative"}>
                <Text cursor={"pointer"} position={"absolute"} top={3} right={3} > <BsFillBookmarkHeartFill size={"20px"} /> </Text>
                <Skeleton height={"150px"} /> 
            </Box>
            <Skeleton /> 
            <Skeleton />
        </Box>
    )
}

export default LoadingBox;

