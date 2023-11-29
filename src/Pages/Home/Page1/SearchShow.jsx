import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const SearchShow = ({ e }) => {

    return (
        <Link> 
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} borderBottom={"1px solid rgb(223, 223, 223)"} >
                <Image flex={1} height={{base:"20px",md:"40px"}} objectFit={"contain"} src={e?.images[0]?.URL} alt="image-link" />
                <Text flex={8} fontSize={{base:"2xs", md:"sm",lg:"md"}} textAlign={"left"} padding={"0 0 0 10px"}> {e?.address?.locality} {e?.address?.city} {e?.address?.pincode} </Text>
                <Text flex={2} fontSize={{base:"2xs", md:"sm",lg:"md"}} textAlign={"left"}> ₹{e?.price} </Text>
            </Box>
        </Link>
    )
}

export default SearchShow;

