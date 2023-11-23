import { Badge, Box, Button, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import style from "./Listing.module.css";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { ChevronUpIcon } from '@chakra-ui/icons';
import sold from "./sold.png";
import priv from "./privacy.png";
import publc from "./search.png";
import axios from 'axios';


const DeleteBox = ({ e, myListedProperty }) => {
    const [other, setOther] = useState("");
    const [PropertyState, setPropertyState] = useState("");
    const navigate = useNavigate();
    const [newView, setNewView] = useState("");
    const [load, setLoad] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();

    console.log(e);

    const handleDetailPage = () => {
        navigate(`/listingdetail/${e._id}`);
    }

    const handleChangeView = (val) => {
        setNewView(val);
        onOpen();
    }

    const handleCustomerView = async () => {
        setLoad(true);
        try {
            let id = localStorage.getItem("usrId") || undefined;
            let authorization = localStorage.getItem("AstToken") || undefined;

            let head = { id, authorization, 'Content-type': 'application/json' };

            let body = { "status": newView };
            await axios.patch(`${process.env.REACT_APP_URL}/property/statusToggle/${e._id}`, body, { headers: head }).then((e) => {
                console.log(e);
                setPropertyState(newView);
            })
        } catch (err) {
            console.log(err)
        }
        setLoad(false);
        onClose();
    }

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

    }, []);


    return (
        <>
            {/* ========================= listing Data =================== */}
            <Box display={"flex"} alignItems={"center"} gap={10}>
                <Box flex={12} backgroundColor={"white"} borderRadius={5} className={style.listhead}>
                    <Box>
                        <Image
                            objectFit={"cover"}
                            height={"200px"}
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
                        <Box className={style.detailedit} >
                            <Menu width={"100px"} >
                                <MenuButton backgroundColor={"white"} >
                                    <Button w={"100%"} display={"flex"} alignItems={"center"} justifyContent={"space-between"} variant={"outline"} color={"blackAlpha.700"} width={"225px"} rightIcon={<ChevronUpIcon />} >
                                        <Text display={"flex"} alignItems={"center"} justifyContent={"left"} >
                                            <Image
                                                boxSize='25px'
                                                borderRadius={"lg"}
                                                src={publc}
                                                display={PropertyState == "Public" ? "block" : "none"}
                                                objectFit={"contain"}
                                                alt='Simon the pensive'
                                                mr='12px'
                                            />
                                            <Image
                                                boxSize='25px'
                                                borderRadius={"lg"}
                                                src={priv}
                                                display={PropertyState == "Private" ? "block" : "none"}
                                                objectFit={"contain"}
                                                alt='Simon the pensive'
                                                mr='12px'
                                            />
                                            <Image
                                                boxSize='25px'
                                                borderRadius={"lg"}
                                                src={sold}
                                                display={PropertyState == "Sold" ? "block" : "none"}
                                                objectFit={"contain"}
                                                alt='Simon the pensive'
                                                mr='12px'
                                            />
                                            {PropertyState}
                                        </Text>
                                    </Button>
                                </MenuButton>
                                <MenuList margin={"-7px 0"} >
                                    <MenuItem minH='48px' gap={"5px"} onClick={() => handleChangeView("Public")} >
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
                                    <MenuItem minH='48px' gap={"5px"} onClick={() => handleChangeView("Private")} >
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
                                    <MenuItem minH='48px' gap={"5px"} onClick={() => handleChangeView("Sold")} >
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
                            <Link to={`/listing/${e._id}`}>
                                <Button variant={"outline"} fontWeight={600} backgroundColor={"unset"} color={"blackAlpha.700"} > Edit </Button>
                            </Link>
                        </Box>
                    </Box>
                    <Flex direction="column" height={"200px"} >
                        <Box height={"40px"} textAlign={"end"}   >
                            <Heading as="h2" fontSize="xl" padding={"20px 30px 0 0"} >
                                {e?.countryCurrency} {e?.price.toLocaleString("en-IN")}
                            </Heading>
                            <Text marginRight={"20px"} marginTop={1} fontSize={"14px"} > Status: <Badge variant='outline' fontSize='xs' colorScheme={'blue'} fontWeight='bold'> {e.verificationState} </Badge> </Text>
                        </Box>
                        <Box display={"flex"} justifyContent={"center"} paddingBottom={"30px"} alignItems={"end"} >
                            <Button
                                width={"80%"}
                                onClick={handleDetailPage}
                                backgroundColor={"rgb(46,49,146)"}
                                _hover={{ backgroundColor: "rgb(46,49,146)" }}
                                color={"white"}
                                variant='solid'
                                bottom={0}>
                                Detail
                            </Button>
                        </Box>
                    </Flex>
                </Box>
                <Box flex={4}>
                    {/* advertisement  */}
                </Box>
            </Box>
            {/*  ====================== warning box (part of chakra UI and external css) ================ */}
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader> Change Property Status</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Are you certain about switching to {newView}?
                    </ModalBody>

                    <ModalFooter>
                        <Button variant={"outline"} marginRight={"10px"} onClick={onClose}>
                            Close
                        </Button>
                        <Button
                            colorScheme='blue'
                            mr={3}
                            isLoading={load}
                            loadingText='Changing Status'
                            onClick={handleCustomerView}>Confirm change</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>

    )
}

export default DeleteBox;


