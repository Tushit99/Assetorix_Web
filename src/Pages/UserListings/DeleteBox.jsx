import { Badge, Box, Button, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import style from "./Listing.module.css";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ChevronDownIcon } from '@chakra-ui/icons';
import sold from "./sold.png";
import priv from "./privacy.png";
import publc from "./search.png";


const DeleteBox = ({ e, myListedProperty }) => {
    const [other, setOther] = useState("");
    const [PropertyState, setPropertyState] = useState("");

    console.log(e);

    useEffect(() => {

        let dt = e;

        if (dt.propertyType == "Office") {
            setOther(dt.officeType);
        }
        else if (dt.propertyType == "Storage") {
            setOther(dt.storageType);
        }
        else if (dt.propertyType == "Hospitality") {
            setOther(dt.hospitalityType);
        }
        else if (dt.propertyType == "Industry") {
            setOther(dt.industryType);
        }
        else if (dt.propertyType == "Plot / Land") {
            setOther(dt.plotLandType);
        }
        else if (dt.propertyType == "Retail") {
            setOther(dt.retailSpaceType);
        }

        setPropertyState(e.propertyState);

    }, [])


    return (
        <Box backgroundColor={"white"} borderRadius={5} className={style.listhead}>
            <Box>
                <Image
                    objectFit={"cover"}
                    height={"180px"}
                    borderRadius={4}
                    src={e?.images[0]?.URL}
                    alt="img-link" />
            </Box>
            <Box>
                <Text textTransform={"uppercase"} fontSize={"11px"} fontWeight={"bold"} width={"max-content"} padding={"0 5px"} color={"white"} backgroundColor={"rgb(68, 68, 66)"} > For {e.lookingFor == "Sell" && "Sale"} {e.lookingFor == "Rent" && e.lookingFor} </Text>
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
                    <Box display={(e.plotArea && e.plotAreaUnit) ? "flex" : "none"} alignItems={"center"} gap={"6px"}>
                        <TfiRulerAlt2 color={"rgb(88, 88, 88)"} />
                        {e.plotArea} {e.plotAreaUnit} <b>Plot Area</b>
                    </Box>
                    <Box display={(e.carpetArea && e.carpetAreaUnit) ? "flex" : "none"} alignItems={"center"} gap={"6px"}>
                        <TfiRulerAlt2 color={"rgb(88, 88, 88)"} />
                        {e.carpetArea} {e.carpetAreaUnit} <b>Carpet Area</b>
                    </Box>
                    <Box display={(e.builtupArea && e.builtupAreaUnit) ? "flex" : "none"} alignItems={"center"} gap={"6px"}>
                        <TfiRulerAlt2 color={"rgb(88, 88, 88)"} />
                        {e.builtupArea} {e.builtupAreaUnit} <b>Builtup Area</b>
                    </Box>
                    <Box display={(e.superBuitupArea && e.superBuitupAreaUnit) ? "flex" : "none"} alignItems={"center"} gap={"6px"}>
                        <TfiRulerAlt2 color={"rgb(88, 88, 88)"} />
                        {e.superBuitupArea} {e.superBuitupAreaUnit} <b>Super Builtup Area</b>
                    </Box>
                </Box>
                <Box>
                    <Menu width={"100px"}>
                        <MenuButton backgroundColor={"white"} >
                            <Button as={Button} w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} variant={"outline"} backgroundColor={"unset"} color={"blackAlpha.700"} width={"225px"} rightIcon={<ChevronDownIcon />} >
                                <Text display={"flex"} alignItems={"center"} justifyContent={"left"} >
                                    <Image
                                        boxSize='25px'
                                        borderRadius={"lg"}
                                        src={publc}
                                        objectFit={"contain"}  
                                        alt='Simon the pensive'  
                                        mr='12px'
                                    />
                                    {PropertyState}
                                </Text>
                            </Button>
                        </MenuButton>
                        <MenuList margin={"-7px 0"} >
                            <MenuItem minH='48px' gap={"5px"}>
                                <Image
                                    boxSize='2rem'
                                    borderRadius={"lg"}
                                    src={publc}
                                    objectFit={"contain"}
                                    alt='Simon the pensive'
                                    mr='12px'
                                />
                                <span>Public</span>
                            </MenuItem>
                            <MenuItem minH='48px' gap={"5px"}>
                                <Image
                                    boxSize='2rem'
                                    borderRadius={"lg"}
                                    src={priv}
                                    objectFit={"contain"}
                                    alt='Simon the pensive'
                                    mr='12px'
                                />
                                <span>Private</span>
                            </MenuItem>
                            <MenuItem minH='48px' gap={"5px"}>
                                <Image
                                    boxSize='2rem'
                                    borderRadius={"lg"}
                                    src={sold}
                                    objectFit={"contain"}
                                    alt='Simon the pensive'
                                    mr='12px'
                                />
                                <span> Sold </span>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Box>
            <Box className={style.flexequal}>
                <Link to={`/listing/${e._id}`}>
                    <Button as={"button"} variant={'outline'} colorScheme={"blue"} > Edit </Button>
                </Link>

            </Box>
        </Box>
    )
}

export default DeleteBox;


