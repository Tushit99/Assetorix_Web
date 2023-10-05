import { Box, Button, Heading, Image, Text, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { CgClose } from "react-icons/cg";
import { Link } from 'react-router-dom';
import style from "./Listing.module.css";
import axios from 'axios';


const DeleteBox = ({ e, myListedProperty }) => {
    const [showbox, setshowBox] = useState(false);
    const toast = useToast(); 

    const handleDelete = async (propertyId) => { 

        let id = localStorage.getItem("usrId") || undefined;
        let authorization = localStorage.getItem("AstToken") || undefined;

        console.log(propertyId);

        let head = { id, authorization, 'Content-type': 'application/json' };
        try {
            await axios.delete(`${process.env.REACT_APP_URL}/property/${propertyId}`, { headers: head }).then((e) => {
                console.log(e.data.msg); 
                toast({
                    title: e.data.msg, 
                    status: 'success', 
                    duration: 2000,
                    isClosable: true, 
                  })
                myListedProperty();
            });
        } catch (error) {
            console.log(error);
        }
        setshowBox(false);
    }

    return ( 
            <Box  backgroundColor={"white"} borderRadius={5}>
                <Image src="https://images.moneycontrol.com/static-mcnews/2017/05/real-estate-Luxury-home.jpg?impolicy=website&width=1600&height=900" alt="img-link" />
                <Heading className={`${style.boldtext} ${style.oneline}`} size={"sm"} fontWeight={"medium"} > {e?.address?.houseNumber} {e?.address?.apartmentName} {e?.address?.locality} {e?.locatedInside} </Heading>
                <Text fontSize={"sm"}> <span className={`${style.boldtext}`}>Price:</span>  {e?.countryCurrency}{e?.price} </Text>
                <Text fontSize={"sm"}> Property Group: {e.propertyGroup} </Text>
                <Text fontSize={"sm"}> Property Type: {e.propertyType} </Text>
                <Text fontSize={"sm"}> officeType: {e?.officeType} </Text>
                <Box className={style.flexequal}>
                    <Link to={`/listing/${e._id}`}>
                        <Button w={"100%"} as={"button"} variant={'outline'} colorScheme={"blue"} > Edit </Button>
                    </Link>
                    <Button variant={'outline'} colorScheme={'red'} onClick={() => setshowBox(true)} > Delete </Button>
                </Box> 
                {/* alert Delete box */}
                <Box position={"fixed"} top={0} left={0} right={0} bottom={0} display={showbox == true ? "grid" : "none"} zIndex={110} backgroundColor={"rgba(255, 255, 255, 0.331)"} >
                    <Box position={"fixed"} top={"18%"} gap={2} left={"24%"} backgroundColor={"rgb(255, 255, 255)"} border={"1px solid rgb(237, 237, 237)"} borderRadius={10} padding={"20px"} display={"grid"}>
                        <Box display={"flex"} gap={10} alignItems={"center"} justifyContent={"space-between"} >
                            <Heading size={"md"}  > Delete Property </Heading>
                            <Button variant={"unstyled"} onClick={() => setshowBox(false)}> <CgClose size={"25px"} /> </Button>
                        </Box>
                        <Box>
                            <Text>Are you sure? You can't undo this action afterwards. {e._id} </Text>
                        </Box>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"right"}>
                            <Button variant={'outline'} onClick={() => handleDelete(e._id)} colorScheme={'blue'} >Delete</Button>
                        </Box>
                    </Box> 
                </Box>
                {/* ===================== */}
            </Box> 
    )
}

export default DeleteBox;  


