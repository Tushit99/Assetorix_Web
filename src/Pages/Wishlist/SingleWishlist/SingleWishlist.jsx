import React from 'react'
import { Box, Button, Divider, Heading, Image, Text, useToast } from '@chakra-ui/react';
import style from "../Wishlist.module.css"; 
import { Link } from 'react-router-dom';



const SingleWishlist = ({e,i,handledeleteToWishlist}) => {
 
    
    return (
        <Box key={i + 1}>
            <Box position={"relative"} display={"flex"} className={style.box}  >
                <Link to={`/wishlist/${e._id}`} style={{ flex: "25", alignItems: "center", flex: "20" }} >
                    <Box display={"flex"} alignItems={"center"} padding={"2px 10px"} gap={4} >
                        <Box position={"relative"} flex={1} >
                            <Image src="https://mediacdn.99acres.com/582/0/11640476F-1383637447-Amrit_House_-_Sant_Nagr_Delhi.jpeg" objectFit={"contain"} w={"100%"} h={"90px"} alt="property image" />
                        </Box>
                        <Box flex={4} textAlign={"center"} fontFamily={"revert-layer"} >
                            <Heading className={style.textoverflow} size={"md"} textAlign={"left"} color={"rgb(37, 37, 37)"} >  {e.address.houseNumber && e.address.houseNumber} {e.address.apartmentName && e.address.apartmentName} {e.address.locality && e.address.locality} </Heading>
                            <Text fontSize={"lg"}> Price: {e.countryCurrency}{e.price?.toLocaleString("en-IN")} </Text>
                            <Text fontSize={"lg"}> Property: {e.propertyType} </Text>
                        </Box>
                    </Box>
                </Link>
                <Box display={"flex"} flex={2} alignItems={"center"} justifyContent={"center"} >
                    <button className={style.delete_btn} onClick={() => handledeleteToWishlist(e._id)}>
                        <BsTrash3 size={"28px"} />
                    </button>
                </Box>
            </Box>
            <Divider padding={"0.6px"} backgroundColor={"rgb(215, 215, 215)"} borderRadius={4} />
        </Box>
    )
}

export default SingleWishlist