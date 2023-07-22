import { WarningTwoIcon } from '@chakra-ui/icons';
import { Box, Heading, Text, Button } from '@chakra-ui/react';

const Error = () => {
    return (
        <Box height={"92vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Box textAlign="center" display={"grid"} py={10} px={6} >
                <div style={{margin:"auto"}}>
                    <WarningTwoIcon boxSize={'100px'} color={'rgb(235,202,63)'} />
                </div> 
                <Text fontSize="34px" fontWeight={"bold"} mt={3} mb={2}>
                    Page Not Found
                </Text>
                <Text color={'gray.500'} mb={6} fontSize={"2xl"}>
                    The page you're looking for does not seem to exist
                </Text>

                <Button 
                    colorScheme="teal"
                    backgroundColor={"rgb(114,154,191)"} 
                    _hover={{backgroundColor:"rgb(85, 145, 201)"}}
                    color="white"  
                    onClick={()=>window.location.href="/"}
                    variant="solid">
                    Go to Home
                </Button>
            </Box>
        </Box>
    );
}


export default Error;

