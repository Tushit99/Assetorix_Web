import { Box, Badge, Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, Image, InputGroup, Select, Text, Tooltip, useDisclosure, useToast } from '@chakra-ui/react';
import axios from 'axios';
import style from "../ProductPage.module.css";
import React, { useEffect, useRef, useState } from 'react'
import { BsCheckLg } from "react-icons/bs";
import { BiPlus } from "react-icons/bi";
import { BsFillBookmarkHeartFill } from 'react-icons/bs';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import LoadingBox from '../LoadingBox/LoadingBox';
import { commercialRent } from '../../../Redux/Propertysearch/action';
import { useDispatch, useSelector } from 'react-redux';
import errorimg from "../eror.png";
import BeatLoader from "react-spinners/BeatLoader";
import emptyimg from "../backimg.png";
import { TfiRulerAlt2 } from 'react-icons/tfi';
import { FaHeart } from 'react-icons/fa';


const CommercialLease = () => {
    const [serchParam, setSearchParam] = useSearchParams();
    const paramBhk = serchParam.getAll("bhk");
    const paramProperty = serchParam.getAll("propertyType");
    const paramFurnish = serchParam.getAll("furnished");
    const { Commercialrentdata, isLoading, isError } = useSelector((state) => state.property);
    const [bhk, setBhk] = useState(paramBhk || []);
    const [propertyType, setPropertyType] = useState(paramProperty || []);
    const [furnished, setfurnish] = useState(paramFurnish || []);
    const [wishlist, setWishlist] = useState([]);
    const location = useLocation();
    const dispatch = useDispatch();
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef();
    const [wishload, setWishLoad] = useState(false);


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
            // console.log(e.data);
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

    console.log(Commercialrentdata);

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
        let local = JSON.parse(localStorage.getItem("comRent")); // fetching data from local storage 
        local.length > 0 && setPropertyType(local); // setting data to usestate  


        dispatch(commercialRent(location)); // fetching the data
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
        dispatch(commercialRent(location));
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
                                    <Box margin={"15px auto"}>
                                        <Heading textAlign={"left"} size={"sm"} > Property Type </Heading>
                                        <Box display={"flex"} justifyContent={"left"} alignItems={"baseline"} flexWrap={"wrap"} gap={3} margin={"10px auto"} >
                                            <button className={propertyType.includes("Office") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Office"} > {propertyType.includes("Office") ? <BsCheckLg /> : <BiPlus />} Office </button>
                                            <button className={propertyType.includes("Retail") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Retail"} > {propertyType.includes("Retail") ? <BsCheckLg /> : <BiPlus />} Retail </button>
                                            <button className={propertyType.includes("Plot / Land") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Plot / Land"} > {propertyType.includes("Plot / Land") ? <BsCheckLg /> : <BiPlus />} Plot / Land </button>
                                            <button className={propertyType.includes("Storage") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Storage"} > {propertyType.includes("Storage") ? <BsCheckLg /> : <BiPlus />} Storage </button>
                                            <button className={propertyType.includes("Industry") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Industry"} > {propertyType.includes("Industry") ? <BsCheckLg /> : <BiPlus />} Industry </button>
                                            <button className={propertyType.includes("Hospitality") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Hospitality"} > {propertyType.includes("Hospitality") ? <BsCheckLg /> : <BiPlus />} Hospitality </button>
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

                            <DrawerFooter>
                                <Button colorScheme={"blue"} onClick={onClose} variant='outline'> Filter </Button>
                            </DrawerFooter>

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
                    <Box margin={"15px auto"}>
                        <Heading textAlign={"left"} size={"sm"} > Property Type </Heading>
                        <Box display={"flex"} justifyContent={"left"} alignItems={"baseline"} flexWrap={"wrap"} gap={3} margin={"10px auto"} >
                            <button className={propertyType.includes("Office") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Office"} > {propertyType.includes("Office") ? <BsCheckLg /> : <BiPlus />} Office </button>
                            <button className={propertyType.includes("Retail") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Retail"} > {propertyType.includes("Retail") ? <BsCheckLg /> : <BiPlus />} Retail </button>
                            <button className={propertyType.includes("Plot / Land") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Plot / Land"} > {propertyType.includes("Plot / Land") ? <BsCheckLg /> : <BiPlus />} Plot / Land </button>
                            <button className={propertyType.includes("Storage") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Storage"} > {propertyType.includes("Storage") ? <BsCheckLg /> : <BiPlus />} Storage </button>
                            <button className={propertyType.includes("Industry") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Industry"} > {propertyType.includes("Industry") ? <BsCheckLg /> : <BiPlus />} Industry </button>
                            <button className={propertyType.includes("Hospitality") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handlePropertyType(e.target.value)} value={"Hospitality"} > {propertyType.includes("Hospitality") ? <BsCheckLg /> : <BiPlus />} Hospitality </button>
                        </Box>
                    </Box>
                    <Box margin={"15px auto"}>
                        <Heading textAlign={"left"} size={"sm"} > Furnishing Status </Heading>
                        <Box display={"flex"} justifyContent={"left"} alignItems={"baseline"} flexWrap={"wrap"} gap={3} margin={"10px auto"} >
                            <button className={furnished.includes("Semi-Furnished") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleFurnished("Semi-Furnished")} value={"Semi-Furnished"} > {furnished.includes("Semi-Furnished") ? <BsCheckLg /> : <BiPlus />} Semi-Furnished </button>
                            <button className={furnished.includes("Un-furnished") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleFurnished("Un-furnished")} value={"Un-furnished"} > {furnished.includes("Un-furnished") ? <BsCheckLg /> : <BiPlus />} Un-Furnished </button>
                            <button className={furnished.includes("Furnished") ? style.bhkbtn : style.selectedbtn} onClick={(e) => handleFurnished("Furnished")} value={"Furnished"} > {furnished.includes("Furnished") ? <BsCheckLg /> : <BiPlus />} Furnished </button>
                        </Box>
                    </Box>
                </Box>

                {/* =========================== product List ====================== */}
                <Box flex={6} >
                    <Box w={"100%"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} textAlign={"left"} paddingX={3} paddingY={2} display={"grid"} gridTemplateRows={"auto"} gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={4} >
                        {Commercialrentdata?.data?.map((e, index) => {
                            const colorstate = wishlist && Array.isArray(wishlist) && wishlist.includes(`${e._id}`);
                            return (
                                <Box position={"relative"} key={index} className={style.showbox} >
                                    <Tooltip hasArrow label={"Wishlist"}>
                                        <Button
                                            variant={"unstyled"}
                                            padding={"-20px"}
                                            margin={0}
                                            display={"flex"}
                                            isLoading={wishload}
                                            spinner={<BeatLoader size={8} color='white' margin={0} />}
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
                                                    <Image src={(e && e.images) && e?.images[0]?.URL} w={"100%"} height={{sm:"300px", md:"200px"}} objectFit={"contain"} alt="property image" /> :
                                                    <Image src={emptyimg} w={"100%"} height={{sm:"300px", md:"200px"}} objectFit={"contain"} alt='' />
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

                    {(Commercialrentdata.msg && isLoading == false) && (
                        <Box boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 10px"} top={0} backgroundColor={"white"} display={"grid"} minH={"70vh"} w={"100%"} >
                            <Heading size={"sm"} w={"100%"} padding={"10px 0 20px 0"} >{Commercialrentdata.msg}</Heading>
                            <Box w={"100%"} textAlign={"left"} display={"grid"} gridTemplateRows={"auto"} gridTemplateColumns={{ base: "repeat(2,1fr)", md: "repeat(2,1fr)", lg: "repeat(3,1fr)" }} gap={4} >
                                {(Commercialrentdata?.data?.map((e, index) => {
                                    const colorstate = wishlist && Array.isArray(wishlist) && wishlist.includes(`${e._id}`);
                                    return (
                                        <Box position={"relative"} key={index} className={style.showbox} >
                                            <Tooltip hasArrow label={"Wishlist"}>
                                                <Button
                                                    variant={"unstyled"}
                                                    padding={"-20px"}
                                                    margin={0}
                                                    display={"flex"}
                                                    isLoading={wishload}
                                                    spinner={<BeatLoader size={8} color='white' margin={0} />}
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
                                                            <Image src={(e && e.images) && e?.images[0]?.URL} w={"100%"} height={{sm:"300px", md:"200px"}} objectFit={"contain"} alt="property image" /> :
                                                            <Image src={emptyimg} w={"100%"} height={{sm:"300px", md:"200px"}} objectFit={"contain"} alt='' />
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
                                }))}
                            </Box>
                        </Box>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}

export default CommercialLease;


