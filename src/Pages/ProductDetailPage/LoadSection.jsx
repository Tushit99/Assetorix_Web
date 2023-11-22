import { Box } from '@chakra-ui/react';
import React from 'react'

const LoadSection = () => {
    return (
        <Box
            position={"fixed"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"} 
            top={0}
            left={0}
            right={0}
            bottom={0}
            backgroundColor={"rgba(255, 255, 255, 0.479)"} >
            <Box>
                Sending...
            </Box>
        </Box>
    )
}

export default LoadSection;

