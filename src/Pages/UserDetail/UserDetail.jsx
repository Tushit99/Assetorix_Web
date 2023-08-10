import React from "react";
import style from "./UserDetail.module.css";
import {
    Box, 
    Heading, 
    Text, 
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Name from "./Modals/Name";
import EmailChanger from "./Modals/EmailChanger";
import MobileChanger from "./Modals/MobileChanger";

const UserDetail = () => {
    const data = useSelector((store) => store.userreducer);

    return (
        <div className={style.user_profile}>
            <Box className={style.mainbox}>
                <Heading as={"h1"} size={"lg"} textAlign={"left"} >
                    Profile
                </Heading>
                <Box className={style.container}>
                    <Heading as={"h2"} size={"md"}>
                        Personal Info
                    </Heading>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        borderBottom={"1px solid #b3b3b3"}
                        padding={"8px 2px"}
                    >
                        <Heading
                            as={"h3"}
                            marginBottom={"16px"}
                            size={"xs"}
                            fontWeight={"bold"}
                        >
                            Name
                        </Heading>
                        <Box display={"flex"} alignItems={"center"} gap={6}>
                            <Text> {data.user.name} </Text> 
                            <Name />
                        </Box>  
                    </Box>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        borderBottom={"1px solid #b3b3b3"}
                        padding={"8px 2px"}
                    >
                        <Heading
                            as={"h3"}
                            marginBottom={"16px"}
                            size={"xs"}
                            fontWeight={"bold"}
                        >
                            Email 
                        </Heading>
                        <Box display={"flex"} alignItems={"center"} gap={6}>
                            <Text> {data.user.email ? data.user.email : ""} </Text>
                            <EmailChanger />
                        </Box>
                    </Box>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        padding={"8px 2px"}
                    >
                        <Heading
                            as={"h3"}
                            marginBottom={"16px"}
                            size={"xs"}
                            fontWeight={"bold"}
                        >
                            Mobile
                        </Heading>
                        <Box display={"flex"} alignItems={"center"} gap={6}>
                            <Text> {data.user.mobile} </Text>
                            <MobileChanger /> 
                        </Box>
                    </Box>
                </Box>
            </Box> 
        </div>
    );
};

export default UserDetail;
