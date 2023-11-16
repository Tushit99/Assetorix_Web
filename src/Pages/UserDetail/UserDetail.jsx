import React, { useEffect, useRef, useState } from "react";
import style from "./UserDetail.module.css";
import {
    Avatar,
    Box,
    Button,
    Heading,
    Image,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import EmailChanger from "./Modals/EmailChanger";
import MobileChanger from "./Modals/MobileChanger";
import { firstWord } from "./usercode";
import NameChanger from "./Modals/Name";
import { AddIcon } from "@chakra-ui/icons";
import axios from "axios";
import { handleAddavatar } from "../../Redux/userauth/action";

const UserDetail = () => {
    const data = useSelector((store) => store.userreducer);
    const dispatch = useDispatch();
    const [inpName, setInpName] = useState("");
    const [inpEmail, setInpEmail] = useState("");
    const [inpMobile, setInpMobile] = useState(""); 
    const [myimage, setmyimage] = useState("");
    const fileInputRef = useRef(null);

    console.log(data);

    useEffect(() => {
        setInpName(data.user.name);
        setInpMobile(data.user.mobile);
        setInpEmail(data.user.email);

        if (data.user.avatar) {
            setmyimage(data.user.avatar);
        }

    }, [data]);

    const handleBtnClick = () => {
        fileInputRef.current.click();
    }

    const handleImageChange = async (e) => {

        const id = localStorage.getItem("usrId") || undefined;
        const authorization = localStorage.getItem("AstToken") || undefined;
        const head = { id, authorization, 'Content-Type': 'multipart/form-data' }; // Corrected 'Content-type' to 'Content-Type'

        const file = e.target.files[0];

        console.log(file);

        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append("avatarimg", file);

        try {
            await axios.post(`${process.env.REACT_APP_URL}/avatar`, formData, {
                headers: head,
            }).then((e) => {
                console.log(e.data);
                setmyimage(e.data.avatar);
                dispatch(handleAddavatar(e.data.avatar));
            }).catch((err) => {
                console.log(err);
            })
        } catch (error) {
            console.error("Error uploading image:", error);
        }

    }

    const handleDeleteImage = async () => {
        let id = localStorage.getItem("usrId") || undefined;
        let authorization = localStorage.getItem("AstToken") || undefined;

        let head = { id, authorization, 'Content-type': 'application/json' };

        await axios.delete(`${process.env.REACT_APP_URL}/avatar`, { headers: head }).then((e) => {
            console.log(e); 
            setmyimage(""); 
            dispatch(handleAddavatar(""));
        })
    }

    return (
        <Box position={"relative"}>
            <Box position={"absolute"} top={"-20px"} left={0} right={0} >
                <Image height={"70vh"} w={"100%"} objectFit={"cover"} src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1296&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </Box>
            <Box padding={5} >
                <Heading textAlign={"left"} padding={"80px 50px"} >
                    Welcome {data.user.name}
                </Heading>
                <Box w={"96%"} borderRadius={20} boxShadow={"rgba(50, 50, 93, 0.352) 0px 2px 6px 2px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"} backgroundColor={"white"} margin={"auto"} textAlign={"center"} padding={"60px 20px"} position={"relative"}  >
                    <Box position={"absolute"} w={"200px"} top={"-90px"} left={"40%"} >
                        <Avatar name={data.user.name} src={myimage} size='2xl' bg={"rgb(46,49,146)"} color={"white"} />
                        <Box position={"relative"} top={"-34px"} left={"34px"} >
                            <Menu>
                                <MenuButton as={Button} variant={"unstyled"} borderRadius={"full"} backgroundColor={"rgb(210, 171, 102)"} color={"white"} >
                                    <AddIcon fontSize={"20px"} filter={"drop-shadow(1px -1px 12px rgb(255, 255, 255))"} />
                                </MenuButton>
                                <MenuList boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} maxWidth={"100px"}>
                                    <MenuItem>
                                        <Text onClick={handleBtnClick}> {myimage ? "Change" : "Add"} Image </Text>
                                        <Input display={"none"} type={"file"} accept="image/jpg, image/png, image/jpeg" onChange={handleImageChange} ref={fileInputRef} name='image' formMethod="post" />
                                    </MenuItem>
                                    <MenuItem display={myimage ? "block" : "none"}>
                                        <Text onClick={handleDeleteImage}> Delete image </Text>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} textAlign={"center"} padding={"10px 0"} justifyContent={"center"} gap={10} >
                        <Box display={"grid"} textAlign={"center"} >
                            <Heading size={"2xl"} color={"rgb(30, 30, 30)"}> {data.user.wishlist} </Heading>
                            <Text fontWeight={"600"} color={"rgb(110, 110, 110)"} fontSize={"lg"} > Wishlist </Text>
                        </Box>
                        <Box display={"grid"} textAlign={"center"} >
                            <Heading size={"2xl"} color={"rgb(30, 30, 30)"}> {data.user.listings} </Heading>
                            <Text fontWeight={"600"} color={"rgb(110, 110, 110)"} fontSize={"lg"} > Listing </Text>
                        </Box>
                    </Box>
                    <Box display={"grid"} w={"400px"} gap={4}>
                        <Box display={"flex"} alignItems={"center"} >
                            <Text flex={2} >Name</Text>
                            <Input flex={8} readOnly value={inpName} type="text" />
                            <Box flex={2}>
                                <NameChanger />
                            </Box>
                        </Box>
                        <Box display={"flex"} alignItems={"center"} >
                            <Text flex={2} >Mobile</Text>
                            <Input flex={8} readOnly value={inpMobile} type="text" />
                            <Box flex={2}>
                                <MobileChanger />
                            </Box>
                        </Box>
                        <Box display={"flex"} alignItems={"center"} >
                            <Text flex={2} >Email</Text>
                            <Input flex={8} readOnly value={inpEmail} type="text" />
                            <Box flex={2}>
                                <EmailChanger />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default UserDetail;
