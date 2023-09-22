import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { wishlistData } from '../../Redux/Propertysearch/action';
import { Box, Button, Heading, Image, Text, useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import style from "./Wishlist.module.css";
import axios from 'axios';

const Wishlist = () => {
    const { Wishlist } = useSelector((state) => state.property);
    const dispatch = useDispatch();
    const toast = useToast();

    const func = () => {
        dispatch(wishlistData()); 
    }

    const handledeleteToWishlist = (myid) => {
        let id = localStorage.getItem("usrId") || undefined;
        let authorization = localStorage.getItem("AstToken") || undefined;

        let head = { id, authorization, "Content-type": "application/json" };
        if (!id || !authorization) {
            return;
        }

        const axiosConfig = {
            method: 'delete',
            url: `${process.env.REACT_APP_URL}/user/wishlist/${myid}`,
            headers: {
                id: head.id,
                authorization: head.authorization,
                "Content-type": head["Content-type"],
            },
            data: {},
        };

        axios(axiosConfig)
            .then((e) => {
                toast({
                    title: "Removed Successfully",
                    description: `${e.data.msg}`,
                    status: 'success',
                    duration: 2000,
                }) 
            })
            .catch((error) => {
                console.error(error);
            });
    }

    useEffect(() => {
        func(); 
    }, [])

    return (
        <Box padding={"20px 10px"} minHeight={"80vh"} >
            <Heading> Wishlist </Heading>
            <Box display={"grid"} gap={2}>
                {Wishlist?.map((e, i) => (
                    <Box position={"relative"} display={"flex"} className={style.box} border={"2px solid rgb(205, 204, 204)"} key={i + 1} >
                        <Link to={`/wishlist/${e._id}`} style={{flex:"5",alignItems:"center"}} >
                            <Box display={"flex"} alignItems={"center"} padding={"2px 10px"} gap={4} >
                                <Box position={"relative"} flex={2} >
                                    <Image src="https://mediacdn.99acres.com/582/0/11640476F-1383637447-Amrit_House_-_Sant_Nagr_Delhi.jpeg" objectFit={"contain"} w={"100%"} h={"90px"} alt="property image" />
                                </Box>
                                <Box flex={4} textAlign={"left"} fontFamily={"revert-layer"} >
                                    <Heading size={"md"} textAlign={"left"} color={"rgb(37, 37, 37)"} >  {e.address.houseNumber && e.address.houseNumber} {e.address.apartmentName && e.address.apartmentName} {e.address.locality && e.address.locality} </Heading>
                                    <Text fontSize={"lg"}> Price: {e.countryCurrency}{e.price?.toLocaleString("en-IN")} </Text>
                                    <Text fontSize={"lg"}> Property: {e.propertyType} </Text>
                                </Box>
                                <Box flex={4}>
                                    <Text fontSize={"lg"}> Property Status: {e.availabilityStatus} </Text>
                                </Box>
                            </Box>
                        </Link>
                        <Box flex={1} display={"flex"} alignItems={"center"} >
                            <Button onClick={() => handledeleteToWishlist(e._id)}> Remove from wishlist </Button>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Wishlist;

