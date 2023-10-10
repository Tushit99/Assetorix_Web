import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updatedWishlist, wishlistData } from '../../Redux/Propertysearch/action';
import { Box, Divider, Heading, Image, Text, useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import style from "./Wishlist.module.css";
import { BsTrash3 } from "react-icons/bs";

const Wishlist = () => {
    const { Wishlist } = useSelector((state) => state.property);
    const dispatch = useDispatch();
    const toast = useToast();

    const func = () => {
        dispatch(wishlistData());
    }

    const handledeleteToWishlist = (myid) => {

        dispatch(updatedWishlist(myid));
        toast({
            title: "Removed Successfully",
            status: 'success',
            duration: 2000,
        })
    } 

    useEffect(() => {
        func();
    }, [])

    return (
        <Box padding={"20px 10px"} minHeight={"80vh"} > 
            <Heading fontSize={"3xl"} margin={"0 0 10px 0"} > Wishlist </Heading>
            <Box display={"grid"} gap={2} width={"94%"} margin={"auto"} >
                <Box position={"relative"} display={"flex"} className={style.box} >
                    <Box flex={20} alignItems={"center"}  >
                        <Box display={"flex"} alignItems={"center"} padding={"2px 10px"} gap={4} >
                            <Box position={"relative"} flex={1}  >
                                <Heading fontWeight={"400"} w={"100%"} size={"md"} textTransform={"capitalize"} className={style.align_middle} textAlign={"center"} > Images </Heading>
                            </Box>
                            <Box flex={4} textAlign={"center"} fontFamily={"revert-layer"} >
                                <Heading fontWeight={"400"} size={"md"} textTransform={"capitalize"} textAlign={"left"} color={"rgb(37, 37, 37)"} > Name & Price </Heading>
                            </Box>
                        </Box>
                    </Box>
                    <Box flex={2} textTransform={"capitalize"} fontWeight={"400"} display={"flex"} alignItems={"center"} justifyContent={"center"} >
                        Delete
                    </Box>
                </Box>
                <Divider padding={"0.6px"} backgroundColor={"rgb(215, 215, 215)"} borderRadius={4} />
                {Array.isArray(Wishlist) && Wishlist?.map((e, i) => (
                    <Box key={i + 1}>
                        <Box position={"relative"} display={"flex"} className={style.box}  >
                            <Link to={`/wishlist/${e._id}`} style={{ flex: "25", alignItems: "center", flex: "20" }} >
                                <Box display={"flex"} alignItems={"center"} padding={"2px 10px"} gap={4} >
                                    <Box position={"relative"} flex={1} >
                                        <Image src="https://mediacdn.99acres.com/582/0/11640476F-1383637447-Amrit_House_-_Sant_Nagr_Delhi.jpeg" objectFit={"contain"} w={"100%"} h={"90px"} alt="property image" />
                                    </Box>
                                    <Box flex={4} textAlign={"center"} fontFamily={"revert-layer"} > 
                                        <Heading className={style.textoverflow} size={"md"} textAlign={"left"} color={"rgb(37, 37, 37)"} >  {e?.address?.houseNumber && e?.address?.houseNumber} {e?.address?.apartmentName && e?.address?.apartmentName} {e?.address?.locality && e?.address?.locality} </Heading>
                                        <Text fontSize={"lg"}> Price: {e?.countryCurrency}{e?.price?.toLocaleString("en-IN")} </Text>
                                        <Text fontSize={"lg"}> Property: {e?.propertyType} </Text>
                                    </Box>
                                </Box>
                            </Link>
                            <Box display={"flex"} flex={2} alignItems={"center"} justifyContent={"center"} >
                                <button className={style.delete_btn} onClick={() => handledeleteToWishlist(e?._id)}>
                                    <BsTrash3 size={"28px"} />
                                </button> 
                            </Box>
                        </Box>
                    </Box>  
                ))}
            </Box>
        </Box>
    )
}

export default Wishlist;

