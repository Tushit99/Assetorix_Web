import React from 'react' 
import style from "../ProductPage.module.css"; 
import { Box, Button, Heading, Image, Tooltip } from '@chakra-ui/react';
import BeatLoader from 'react-spinners/BeatLoader';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { TfiRulerAlt2 } from 'react-icons/tfi';


const PropertyListBox = () => {
    return (
        <Box position={"relative"} key={index} className={style.productdetaillist} overflow={"hidden"} >
            <Tooltip hasArrow label={"Wishlist"}>
                <Button
                    variant={"unstyled"}
                    padding={"-20px"}
                    margin={0}
                    isLoading={wishload}
                    spinner={<BeatLoader size={8} color='white' margin={0} />}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    cursor={"pointer"}
                    zIndex={5}
                    clipPath={"circle(30% at 48% 48%)"}
                    filter="drop-shadow(1px 2px 6px rgba(43, 42, 42, 0.587))"
                    onClick={() => handleAddToWishlist(e._id)}
                    position={"absolute"}
                    top={3}
                    right={0}
                    color={colorstate ? "red.500" : "white"} >
                    <FaHeart size={"20px"} />
                </Button>
            </Tooltip>
            <Link to={`/residential_buy/${e._id}`} >
                <Box className={style.property_box}>
                    <Box position={"relative"}>
                        {(e && e.images && e?.images[0]?.URL) ?
                            <Image src={(e && e.images) && e?.images[0]?.URL} w={"100%"} height={"200px"} objectFit={"contain"} alt="property image" /> :
                            <Image src={emptyimg} w={"100%"} height={"200px"} objectFit={"contain"} alt='' />
                        }
                    </Box>
                    <Heading className={`${style.boldtext} ${style.oneline}`} size={"sm"} fontWeight={"medium"} > {e.propertyType} </Heading>
                    <Heading className={`${style.boldtext} ${style.oneline}`} size={"sm"} fontWeight={"medium"} >
                        {e?.address?.houseNumber && `${e?.address?.houseNumber}, `}
                        {e?.address?.address && `${e?.address?.address}, `}
                        {e?.address?.apartmentName && `${e?.address?.apartmentName}, `}
                        {e?.address?.locality}
                    </Heading>
                    <Heading className={`${style.boldtext} ${style.oneline}`} fontSize={"12px"} fontWeight={"400"} color={"rgb(88, 88, 88)"} > {e?.address?.city}, {e?.address?.state}, {e?.address?.country} , {e?.address?.pincode} {e?.locatedInside} </Heading>
                    <Box display={"grid"} color={"rgb(88, 88, 88)"} fontSize={"16px"} >
                        {/* Plot area Detail */}
                        <Box display={(e.plotArea && e.plotAreaUnit) ? "flex" : "none"} alignItems={"center"} gap={"3px"}>
                            <TfiRulerAlt2 color={"rgb(88, 88, 88)"} />
                            {e.plotArea} {e.plotAreaUnit} <Badge colorScheme={"blue"} variant={"outline"} fontSize={"10px"} >Plot Area</Badge>
                        </Box>
                        <Box display={(e.carpetArea && e.carpetAreaUnit) ? "flex" : "none"} alignItems={"center"} gap={"3px"}>
                            <TfiRulerAlt2 color={"rgb(88, 88, 88)"} />
                            {e.carpetArea} {e.carpetAreaUnit} <Badge colorScheme={"blue"} variant={"outline"} fontSize={"10px"} >Carpet Area</Badge>
                        </Box>
                    </Box>
                    <Box fontSize={{ base: "xs", md: "sm" }} display={"flex"} alignItems={"center"} flexWrap={"nowrap"} >
                        <Heading as="h2" fontSize="md" margin={"0 4px"} display={"flex"} alignItems={"center"} gap={1} >
                            Price:
                            <Text fontWeight={"light"} fontSize="md" >
                                {e?.countryCurrency} {e?.price.toLocaleString("en-IN")}
                            </Text>
                        </Heading>
                    </Box>
                </Box>
            </Link>
        </Box>
    )
}

export default PropertyListBox