import { Box, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Image, InputGroup, Select, Text, Tooltip, useDisclosure, useToast } from '@chakra-ui/react';
import axios from 'axios';
import style from "../ProductPage.module.css";
import React, { useEffect, useRef, useState } from 'react'
import { BsCheckLg } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import LoadingBox from '../LoadingBox/LoadingBox';
import { useDispatch, useSelector } from 'react-redux';
import { residentialBuy } from '../../../Redux/Propertysearch/action';
import noResult from "../Nodata.png";
import errorimg from "../eror.png";


const ResidentialBuy = () => {
    const [serchParam, setSearchParam] = useSearchParams();
    const paramBhk = serchParam.getAll("bhk");
    const paramProperty = serchParam.getAll("propertyType");
    const paramFurnish = serchParam.getAll("furnished");
    const { ResedentialBuydata, isLoading, isError } = useSelector((state) => state.property);
    const [bhk, setBhk] = useState(paramBhk || []);
    const [propertyType, setPropertyType] = useState(paramProperty || []);
    const [furnished, setfurnish] = useState(paramFurnish || []);
    const [wishlist, setWishlist] = useState([]);
    const location = useLocation();
    const dispatch = useDispatch();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    const handleLike = () => {
        let id = localStorage.getItem("usrId") || undefined;
        let authorization = localStorage.getItem("AstToken") || undefined;

        let head = { id, authorization, "Content-type": "application/json" };
        if (!id || !authorization) {
            return;
        }
        axios.get(`${process.env.REACT_APP_URL}/user/wishlistIDs`, {
            headers: head,
        }).then((e) => {
            setWishlist(e.data);
            console.log(e.data); 
        }).catch((err) => console.log(err));
    }


    const handleAddToWishlist = (myid) => {
        let id = localStorage.getItem("usrId") || undefined;
        let authorization = localStorage.getItem("AstToken") || undefined;

        let head = { id, authorization, "Content-type": "application/json" };
        if (!id || !authorization) {
            return;
        }

        const axiosConfig = { 
            method: `${wishlist.includes(myid) ? "delete" : "patch"}`,
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
                setWishlist(e.data);
                setWishlist(e.data.wishlistIDs);
                toast({
                    title: `${wishlist.includes(myid) ? "Removed from Wishlist" : "Added to Wishlist"}`,
                    status: 'success',
                    duration: 2000,
                })
                console.log(e.data);
            })
            .catch((error) => {
                console.error(error);
            });
    } 

    // console.log(ResedentialBuydata);


    const handleBedroom = (value) => {
        setBhk((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            } else {
                return [...prev, value];
            }
        });
    }

    const handlePropertyType = (value) => {
        console.log(value);
        setPropertyType((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            } else {
                return [...prev, value];
            }
        });
    }

    const handleFurnished = (value) => {
        console.log(value);
        setfurnish((prev) => {
            if (prev.includes(value)) {
                return prev.filter((item) => item !== value);
            } else {
                return [...prev, value];
            }
        });
    }

    useEffect(() => {
        dispatch(residentialBuy(location)); // fetching the data
        handleLike(); // wishlist 
    }, []);

    useEffect(() => {
        let param = {}

        bhk && (param.bedroom = bhk);
        propertyType && (param.propertyType = propertyType);
        furnished && (param.furnished = furnished);
        setSearchParam(param);
    }, [bhk, propertyType, furnished]);

    useEffect(() => {
        dispatch(residentialBuy(location));
    }, [location.search]);  


    return (
        <Box margin={{ base: "0px auto 60px auto", md: "30px auto 60px auto" }} >
            {/* mobile bar */}
            <Box width={"100%"} display={{ base: "flex", md: "none" }} position={"sticky"} top={50} zIndex={10} backgroundColor={"white"} left={0} right={0} >
                <Box flex={1} border={"1px solid rgb(199, 199, 199)"} >
                    <Button w={"100%"} borderRadius={0} variant={"unstyled"} fontWeight={500} ref={btnRef} colorScheme='teal' onClick={onOpen}>
                        Filter
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader> ASSETORIX </DrawerHeader>
                            <DrawerBody>
                                <Box flex={2} padding={5} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} >
                                    <Heading size={{ base: "sm", lg: "md" }}> Sorting Property </Heading>
                                    <Divider backgroundColor={"rgb(227, 226, 226)"} marginTop={"2px"} padding={"1px"} borderRadius={"4px"} />
                                    <Box margin={"4px auto"}>
                                        <Heading textAlign={"left"} size={{ base: "xs", lg: "sm" }} > No. of Bedrooms </Heading>
                                        <Box display={"flex"} justifyContent={"left"} alignItems={"baseline"} flexWrap={"wrap"} gap={3} margin={"10px auto"} >
                                            <button className={bhk.includes("1") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={1} > {bhk.includes("1") ? <BsCheckLg /> : <BiPlus />} 1 Bedroom </button>
                                            <button className={bhk.includes("2") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={2} > {bhk.includes("2") ? <BsCheckLg /> : <BiPlus />} 2 Bedroom </button>
                                            <button className={bhk.includes("3") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={3} > {bhk.includes("3") ? <BsCheckLg /> : <BiPlus />} 3 Bedroom </button>
                                            <button className={bhk.includes("4") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={4} > {bhk.includes("4") ? <BsCheckLg /> : <BiPlus />} 4 Bedroom </button>
                                            <button className={bhk.includes("5") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={5} > {bhk.includes("5") ? <BsCheckLg /> : <BiPlus />} 5 Bedroom </button>
                                            <button className={bhk.includes("6") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={6} > {bhk.includes("6") ? <BsCheckLg /> : <BiPlus />} 6 Bedroom </button>
                                        </Box>
                                    </Box>
                                    <Box margin={"15px auto"}>
                                        <Heading textAlign={"left"} size={"sm"} > Property Type </Heading>
                                        <Box display={"flex"} justifyContent={"left"} alignItems={"baseline"} flexWrap={"wrap"} gap={3} margin={"10px auto"} >
                                            <button className={propertyType.includes("Flat / Apartment") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Flat / Apartment"} > {propertyType.includes("Flat / Apartment") ? <BsCheckLg /> : <BiPlus />} Flat / Appartment </button>
                                            <button className={propertyType.includes("Independent House / Villa") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Independent House / Villa"} > {propertyType.includes("Independent House / Villa") ? <BsCheckLg /> : <BiPlus />} Independent House / Villa </button>
                                            <button className={propertyType.includes("Independent / Builder Floor") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Independent / Builder Floor"} > {propertyType.includes("Independent / Builder Floor") ? <BsCheckLg /> : <BiPlus />} Independent / Builder Floor </button>
                                            <button className={propertyType.includes("Farmhouse") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Farmhouse"} > {propertyType.includes("Farmhouse") ? <BsCheckLg /> : <BiPlus />} Farm House </button>
                                            <button className={propertyType.includes("Serviced Apartment") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Serviced Apartment"} > {propertyType.includes("Serviced Apartment") ? <BsCheckLg /> : <BiPlus />} Serviced Apartment </button>
                                            <button className={propertyType.includes("1RK / Studio Apartment") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"1RK / Studio Apartment"} > {propertyType.includes("1RK / Studio Apartment") ? <BsCheckLg /> : <BiPlus />} 1RK / Studio Apartment </button>
                                            <button className={propertyType.includes("Plot / Land") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Plot / Land"} > {propertyType.includes("Plot / Land") ? <BsCheckLg /> : <BiPlus />} Plot / Land </button>

                                        </Box>
                                    </Box>
                                    <Box margin={"15px auto"}>
                                        <Heading textAlign={"left"} size={"sm"} > Furnishing Status </Heading>
                                        <Box display={"flex"} justifyContent={"left"} alignItems={"baseline"} flexWrap={"wrap"} gap={3} margin={"10px auto"} >
                                            <button className={furnished.includes("Semi-Furnished") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleFurnished(e.target.value)} value={"Semi-Furnished"} > {furnished.includes("Semi-Furnished") ? <BsCheckLg /> : <BiPlus />} Semi-Furnished </button>
                                            <button className={furnished.includes("Un-furnished") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleFurnished(e.target.value)} value={"Un-furnished"} > {furnished.includes("Un-furnished") ? <BsCheckLg /> : <BiPlus />} Un-Furnished </button>
                                            <button className={furnished.includes("Furnished") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleFurnished(e.target.value)} value={"Furnished"} > {furnished.includes("Furnished") ? <BsCheckLg /> : <BiPlus />} Furnished </button>
                                        </Box>
                                    </Box>
                                </Box>
                            </DrawerBody>

                        </DrawerContent>
                    </Drawer>
                </Box>
                <Box flex={1} borderY={"1px solid rgb(199, 199, 199)"} >
                    <Select backgroundColor={"unset"} borderRadius={0} border={0}  >
                        <option value="desc"> High to Low </option>
                        <option value="inc"> Low to High </option>
                    </Select>
                </Box>
            </Box>

            {/* Property box */}
            <Flex display={"flex"} marginTop={2} marginX={"auto"} w={"96%"} alignItems={"flex-start"} gap={4} >
                {/* ===================================  Property Sorting ================================= */}
                <Box flex={2} padding={5} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} className={style.side_box_sort} >
                    <Heading size={{ base: "sm", lg: "md" }}> Sorting Property </Heading>
                    <Divider backgroundColor={"rgb(227, 226, 226)"} marginTop={"2px"} padding={"1px"} borderRadius={"4px"} />
                    <Box margin={"4px auto"}>
                        <Heading textAlign={"left"} size={{ base: "xs", lg: "sm" }} > No. of Bedrooms </Heading>
                        <Box display={"flex"} justifyContent={"left"} alignItems={"baseline"} flexWrap={"wrap"} gap={3} margin={"10px auto"} >
                            <button className={bhk.includes("1") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={1} > {bhk.includes("1") ? <BsCheckLg /> : <BiPlus />} 1 Bedroom </button>
                            <button className={bhk.includes("2") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={2} > {bhk.includes("2") ? <BsCheckLg /> : <BiPlus />} 2 Bedroom </button>
                            <button className={bhk.includes("3") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={3} > {bhk.includes("3") ? <BsCheckLg /> : <BiPlus />} 3 Bedroom </button>
                            <button className={bhk.includes("4") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={4} > {bhk.includes("4") ? <BsCheckLg /> : <BiPlus />} 4 Bedroom </button>
                            <button className={bhk.includes("5") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={5} > {bhk.includes("5") ? <BsCheckLg /> : <BiPlus />} 5 Bedroom </button>
                            <button className={bhk.includes("6") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleBedroom(e.target.value)} value={6} > {bhk.includes("6") ? <BsCheckLg /> : <BiPlus />} 6 Bedroom </button>
                        </Box>
                    </Box>
                    <Box margin={"15px auto"}>
                        <Heading textAlign={"left"} size={"sm"} > Property Type </Heading>
                        <Box display={"flex"} justifyContent={"left"} alignItems={"baseline"} flexWrap={"wrap"} gap={3} margin={"10px auto"} >
                            <button className={propertyType.includes("Flat / Apartment") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Flat / Apartment"} > {propertyType.includes("Flat / Apartment") ? <BsCheckLg /> : <BiPlus />} Flat / Appartment </button>
                            <button className={propertyType.includes("Independent House / Villa") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Independent House / Villa"} > {propertyType.includes("Independent House / Villa") ? <BsCheckLg /> : <BiPlus />} Independent House / Villa </button>
                            <button className={propertyType.includes("Independent / Builder Floor") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Independent / Builder Floor"} > {propertyType.includes("Independent / Builder Floor") ? <BsCheckLg /> : <BiPlus />} Independent / Builder Floor </button>
                            <button className={propertyType.includes("Farmhouse") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Farmhouse"} > {propertyType.includes("Farmhouse") ? <BsCheckLg /> : <BiPlus />} Farm House </button>
                            <button className={propertyType.includes("Serviced Apartment") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Serviced Apartment"} > {propertyType.includes("Serviced Apartment") ? <BsCheckLg /> : <BiPlus />} Serviced Apartment </button>
                            <button className={propertyType.includes("1RK / Studio Apartment") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"1RK / Studio Apartment"} > {propertyType.includes("1RK / Studio Apartment") ? <BsCheckLg /> : <BiPlus />} 1RK / Studio Apartment </button>
                            <button className={propertyType.includes("Plot / Land") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Plot / Land"} > {propertyType.includes("Plot / Land") ? <BsCheckLg /> : <BiPlus />} Plot / Land </button>

                        </Box>
                    </Box>
                    <Box margin={"15px auto"}>
                        <Heading textAlign={"left"} size={"sm"} > Furnishing Status </Heading>
                        <Box display={"flex"} justifyContent={"left"} alignItems={"baseline"} flexWrap={"wrap"} gap={3} margin={"10px auto"} >
                            <button className={furnished.includes("Semi-Furnished") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleFurnished(e.target.value)} value={"Semi-Furnished"} > {furnished.includes("Semi-Furnished") ? <BsCheckLg /> : <BiPlus />} Semi-Furnished </button>
                            <button className={furnished.includes("Un-furnished") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleFurnished(e.target.value)} value={"Un-furnished"} > {furnished.includes("Un-furnished") ? <BsCheckLg /> : <BiPlus />} Un-Furnished </button>
                            <button className={furnished.includes("Furnished") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleFurnished(e.target.value)} value={"Furnished"} > {furnished.includes("Furnished") ? <BsCheckLg /> : <BiPlus />} Furnished </button>
                        </Box>
                    </Box>
                </Box>

                {/* =========================== product List ====================== */}
                <Box flex={6} >

                    <Box w={"100%"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} textAlign={"left"} paddingX={3} paddingY={2} display={"grid"} gridTemplateRows={"auto"} gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={4} >
                        {!ResedentialBuydata.msg && ResedentialBuydata?.data?.map((e, index) => {
                            const colorstate = wishlist && Array.isArray(wishlist) && wishlist.includes(`${e._id}`); 

                            // console.log(colorstate);

                            return (
                                <Box position={"relative"} key={index}  >
                                    <Tooltip hasArrow label={"Wishlist"}>
                                        <Text cursor={"pointer"} zIndex={5} onClick={() => handleAddToWishlist(e._id)} position={"absolute"} top={3} right={3} color={colorstate ? "green.500" : "red.500"} > <BsFillBookmarkHeartFill size={"20px"} /> </Text>
                                    </Tooltip>
                                    <Link to={`/residential_buy/${e._id}`} >
                                        <Box className={style.property_box}>
                                            <Box position={"relative"}>
                                                <Image src="https://mediacdn.99acres.com/582/0/11640476F-1383637447-Amrit_House_-_Sant_Nagr_Delhi.jpeg" w={"100%"} alt="property image" />
                                            </Box>
                                            <Heading className={style.head_line} size={{ base: "xs", md: "sm" }} textAlign={"left"} color={"rgb(37, 37, 37)"} >  {e.address.houseNumber && e.address.houseNumber} {e.address.apartmentName && e.address.apartmentName} {e.address.locality && e.address.locality} </Heading>
                                            <Text fontSize={{ base: "xs", md: "sm" }} > Price: {e.countryCurrency}{e.price?.toLocaleString("en-IN")} </Text>
                                        </Box>
                                    </Link>
                                </Box>
                            )
                        })}
                    </Box>
                    <Box w={"100%"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} textAlign={"left"} display={"grid"} gridTemplateRows={"auto"} gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={4} >
                        {isLoading && (
                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
                                <LoadingBox key={e} />
                            ))
                        )}
                    </Box>

                    {/* =================================== Error Line ===================================  */}
                    {isError == true && (
                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
                            <Image src={errorimg} w={"80%"} height={"400px"} objectFit={"contain"} alt="Error-img" />
                        </Box>
                    )}

                    {/* =================================== Related Data =================================== */}
                    {(ResedentialBuydata.msg && isLoading == false && isError == false) && (
                        <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 10px"} top={0} backgroundColor={"white"} display={"grid"} minH={"70vh"} w={"100%"}  >
                            <Heading size={"sm"} w={"100%"} padding={"10px 0 20px 0"} > {ResedentialBuydata.msg}</Heading>
                            <Box w={"100%"} textAlign={"left"} display={"grid"} gridTemplateRows={"auto"} gridTemplateColumns={"repeat(3,1fr)"} gap={4} >
                                {(ResedentialBuydata?.data?.map((e, index) => {
                                    const colorstate = wishlist && Array.isArray(wishlist) && wishlist.includes(`${e._id}`);
                                    return (
                                        <Box position={"relative"} key={index} >
                                            <Tooltip hasArrow label={"Wishlist"}>
                                                <Text cursor={"pointer"} zIndex={5} onClick={() => handleAddToWishlist(e._id)} position={"absolute"} top={3} right={3} color={colorstate ? "green.500" : "red.500"} > <BsFillBookmarkHeartFill size={"20px"} /> </Text>
                                            </Tooltip>
                                            <Link to={`/residential_buy/${e._id}`} >
                                                <Box className={style.property_box}>
                                                    <Box position={"relative"}>
                                                        <Image src="https://mediacdn.99acres.com/582/0/11640476F-1383637447-Amrit_House_-_Sant_Nagr_Delhi.jpeg" w={"100%"} alt="property image" />
                                                    </Box>
                                                    <Heading className={style.head_line} size={"sm"} textAlign={"left"} color={"rgb(37, 37, 37)"} >  {e.address.houseNumber && e.address.houseNumber} {e.address.apartmentName && e.address.apartmentName} {e.address.locality && e.address.locality} </Heading>
                                                    <Text> Price: {e.countryCurrency}{e.price?.toLocaleString("en-IN")} </Text>
                                                </Box>
                                            </Link>
                                        </Box>
                                    )
                                }))}
                            </Box>
                        </Box>
                    )}
                </Box>
            </Flex>


        </Box>
    )
}

export default ResidentialBuy;

