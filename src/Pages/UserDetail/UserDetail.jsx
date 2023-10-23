import React from "react";
import style from "./UserDetail.module.css";
import {
    Avatar,
    AvatarBadge,
    Box,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Name from "./Modals/Name";
import EmailChanger from "./Modals/EmailChanger";
import MobileChanger from "./Modals/MobileChanger";

const UserDetail = () => {
    const data = useSelector((store) => store.userreducer);

    console.log(data);

    return (
        <Box position={"relative"}>
            <Box padding={5} >
                <Heading textAlign={"left"} padding={"80px 50px"} >
                    Welcome {data.user.name}
                </Heading>
                <Box w={"96%"} boxShadow={"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"} backgroundColor={"white"} margin={"auto"} textAlign={"center"} border={"2px solid black"} padding={"60px 20px"} position={"relative"}  >
                    <Avatar name={data.user.name} size='2xl' position={"absolute"} left={"45%"} top={"-80px"}>
                        <AvatarBadge boxSize='1em' border={"3px solid white"} bg='green.500' />
                    </Avatar>
                    <Box display={"flex"} alignItems={"center"} textAlign={"center"} padding={"10px 0"} justifyContent={"center"} gap={10} >
                        <Box display={"grid"} textAlign={"center"} > 
                            <Heading size={"2xl"} color={"rgb(110, 110, 110)"} > {data.user.wishlist} </Heading> 
                            <Text fontWeight={"600"} fontSize={"lg"} > Wishlist </Text>
                        </Box>
                        <Box display={"grid"} textAlign={"center"} >
                            <Heading size={"2xl"} color={"rgb(110, 110, 110)"} > {data.user.listings} </Heading>  
                            <Text fontWeight={"600"} fontSize={"lg"} > Listing </Text> 
                        </Box> 
                    </Box> 
                </Box>
            </Box>
        </Box>
    );
};

export default UserDetail;
