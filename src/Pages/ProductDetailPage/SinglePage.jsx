import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Icon,
  Badge,
  Text,
  Textarea,
  Tooltip,
  useDisclosure,
  Table,
  Thead,
  List,
  ListItem,
  ListIcon,
  TagLeftIcon,
  Tbody,
  Tag,
  TagLabel,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import style from "./SinglePage.module.css";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import profileimg from "./avatar.jpg";
import lightImg from "./furnishedImages/light.png";
import fanImg from "./furnishedImages/fan.png";
import acImg from "./furnishedImages/ac.png";
import tvImg from "./furnishedImages/tv.png";
import bedImg from "./furnishedImages/bed.png";
import wardrobeImg from "./furnishedImages/wardrobe.png";
import geyserImg from "./furnishedImages/hot.png";
import washingImg from "./furnishedImages/washing.png";
import purifierImg from "./furnishedImages/water-filter.png";
import chimneyImg from "./furnishedImages/food.png";
import exhaustImg from "./furnishedImages/computer.png";
import curtainImg from "./furnishedImages/window.png";
import kitchenImg from "./furnishedImages/kitchen.png";
import frigeImg from "./furnishedImages/fridge.png";
import sofaImg from "./furnishedImages/sofa.png";
import stoveImg from "./furnishedImages/stove.png";
import microwaveImg from "./furnishedImages/oven.png";
import tableImg from "./furnishedImages/table.png";
import { MdOutlineBalcony } from "react-icons/md";

import MaintenanceImg from "./furnishedImages/staff.png";
import waterImg from "./furnishedImages/water-tank.png";
import securityImg from "./furnishedImages/alarm.png";
import visiterImg from "./furnishedImages/signage.png";
import parkImg from "./furnishedImages/park.png";
import intercomImg from "./furnishedImages/intercom.png";
import vastuImg from "./furnishedImages/fengshui.png";
import liftImg from "./furnishedImages/elevator.png";
import Hoverbox from "./Hoverbox";
import propertFeatureImg from "./furnishedImages/town.png";
import societyImg from "./furnishedImages/society.png";
import additonalImg from "./furnishedImages/settings.png";
import { InfoIcon, CheckCircleIcon } from "@chakra-ui/icons";
import watersourceImg from "./furnishedImages/water.png";
import otherImg from "./furnishedImages/layers.png";
import RoomImg from "./furnishedImages/living-room.png";
import { ImLocation2 } from "react-icons/im";
import {
  CleanInputText,
  Emailhandle,
  NumericString,
} from "../PropertyPostForm/code";
import { useParams } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addRecentlyVisited } from "../../Redux/globalval/action";
import { PiVan } from "react-icons/pi";
import { FaShower } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

// location
import train from "./location/train.png";
import mall from "./location/shopping.png";
import airport from "./location/airport.png";
import metro from "./location/metro.png";
import market from "./location/market.png";
import school from "./location/school.png";
import highway from "./location/road.png";
import hospital from "./location/hospital.png";
import { LiaBedSolid } from "react-icons/lia";
import scale from "./scale.jpg";
import stairs from "./stairs.png";
import powerback from "./backup.png";

const SingleProductDetailPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  const [lookingfor, setlookingfor] = useState("");
  const [created, setCreated] = useState("");
  const [updated, setUpdated] = useState("");
  const [houseno, setHouseno] = useState("");
  const [apartment, setApartment] = useState("");
  const [placelocality, setlocality] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");

  const [pin, setPin] = useState("");
  const [isFurnished, setisFurnished] = useState("Un-furnished");
  const [light, setLight] = useState("");
  const [fan, setFan] = useState("");
  const [aircondition, setAirCondition] = useState("");
  const [tv, setTv] = useState("");
  const [bed, setBed] = useState("");
  const [wardrobe, setwardrobe] = useState("");
  const [geyser, setGeyser] = useState("");
  const [overlooking, setOverLooking] = useState([]);
  const [location, setLocation] = useState([]);
  const [furnishedAdditionalList, setFurnishedAdditionalList] = useState([]);

  const [nametosend, setNametosend] = useState("");
  const [emailtosend, setEmailtosend] = useState("");
  const [phonetosend, setPhonetosend] = useState("");
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const toast = useToast();

  const dataById = async () => {
    await axios
      .get(`${process.env.REACT_APP_URL}/property/single/${id}`)
      .then((e) => {
        setData(e.data.data);
        addDatatoList(e.data.data);
        dispatch(addRecentlyVisited(e.data.data._id));
      });
  };

  const addDatatoList = (list) => {
    console.log(list);
    setlookingfor(list.lookingFor.toUpperCase());

    setPrice(list.price.toLocaleString("en-IN"));
    let creation = list.createdOn.split("at")[0];
    setCreated(creation);
    let updation = list.lastUpdated.split("at")[0];
    setUpdated(updation);
    setHouseno(list.address.houseNumber);
    setApartment(list.address.apartmentName);
    setlocality(list.address.locality);
    setCity(list.address.city);
    setState(list.address.state);
    setCountry(list.address.country);
    setPin(list.address.pincode);
    setisFurnished(list.furnished);
    if (list.furnished == "Furnished" || list.furnished == "Semi-Furnished") {
      setLight(list.furnishedObj.Light);
      setFan(list.furnishedObj.Fan);
      setAirCondition(list.furnishedObj.AC);
      setTv(list.furnishedObj.TV);
      setBed(list.furnishedObj.Bed);
      setwardrobe(list.furnishedObj.Wardrobe);
      setGeyser(list.furnishedObj.Geyser);
      setFurnishedAdditionalList(list.furnishedList);
    }
    setOverLooking(list.overLookings);
    setLocation(list.locationAdv);
  };

  useEffect(() => {
    dataById();
    // window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleTour = async (e) => {
    e.preventDefault();
    setLoad(true);

    const body = {
      propertyID: id,
      name: nametosend,
      email: emailtosend,
      mobile: phonetosend,
      message: message,
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}/property/inquiry`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Request successful");
        const responseData = response.data;
        console.log(responseData);
        setLoad(false);
        setNametosend("");
        setEmailtosend("");
        setPhonetosend("");
        setMessage("");
        toast({
          title: responseData.msg,
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        console.error("Request failed with status:", response.status);
        setLoad(false);
      }
    } catch (error) {
      console.error("Error sending the request:", error);
      setLoad(false);
    }
  };

  return (
    <Box
      maxWidth={"100%"}
      marginTop={{ base: "14px", md: "26px" }}
      overflow={"hidden"}
    >
      <Box
        display={{ base: "grid", md: "flex" }}
        gap={"20px"}
        margin={{ base: "0px auto", md: "20px auto" }}
        w={"94%"}
      >
        <Box flex={16}>
          {/* title and property location Detail */}
          <Box
            display={"flex"}
            alignItems={"center"}
            marginBottom={"10px"}
            justifyContent={"space-between"}
          >
            <Box display={"grid"} gap={"4px"}>
              <Box
                display={"flex"}
                justifyContent={"left"}
                gap={2}
                alignItems={"flex-end"}
              >
                <Heading textAlign={"left"} fontSize={"3xl"}>
                  {data.propertyType}
                </Heading>
                <Badge
                  textTransform={"capitalize"}
                  variant="solid"
                  fontSize="0.7em"
                  position={"relative"}
                  marginBottom={"4px"}
                  colorScheme={
                    data?.formType == "Rent"
                      ? "red"
                      : data?.formType == "Sell"
                      ? "green"
                      : "blue"
                  }
                >
                  FOR {lookingfor}
                </Badge>
              </Box>
              <Text
                textAlign={"left"}
                display={"flex"}
                gap={1}
                fontWeight={"500"}
                fontSize={{ base: "sm", md: "md" }}
                alignItems={"center"}
                backgroundColor={"rgb(225, 246, 255)"}
                padding={"2px 8px 6px 8px"}
                borderRadius={"10px"}
                justifyContent={"left"}
                position={"relative"}
              >
                <span>
                  <ImLocation2 color={"rgb(140,140,140)"} />
                </span>
                <span>
                  {houseno ? `${houseno + ", "}` : ""}
                  {apartment ? `${apartment + ", "}` : ""}
                  {placelocality ? `${placelocality + ", "}` : ""}
                  {city ? `${city + ", "}` : ""}
                  {state ? `${state + ", "}` : ""}
                  {country ? `${country + ", "}` : ""}
                  {data?.address?.pincode}
                </span>
              </Text>
            </Box>
          </Box>
          <Box
            position={"relative"}
            className={style.propertyimg}
            height={{ base: "300px", lg: "450px" }}
            w={"100%"}
            boxShadow={
              "rgba(60, 64, 67, 0.3) 1px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
          >
            <Box
              className={style.backimagebox}
              display={
                data && data?.images && data?.images[0]?.URL ? "none" : "block"
              }
            ></Box>
            <Image
              w={"100%"}
              display={
                data && data?.images && data?.images[0]?.URL ? "block" : "none"
              }
              objectFit={"contain"}
              maxH={{ sm: "300px", lg: "450px" }}
              // border={"2px solid black"}
              src={
                data &&
                data?.images &&
                data?.images[0]?.URL &&
                data?.images[0]?.URL
              }
              alt="property-img"
            />
          </Box>
          <Text textAlign={"end"} fontSize={"xs"}> 
            <strong> Updated on: </strong> {data?.lastUpdated} 
          </Text>
          {/* ===================== mobile Pricing (Price only for mobile) =================================== */}
          <Box display={{ base: "grid", md: "none" }}>
            {data.countryCurrency && price ? (
              <Heading display={"flex"} fontSize={"xl"} margin={"8px 0"}>
                Price: {data.countryCurrency || <Skeleton width={"100px"} />}
                {price || <Skeleton width={"40px"} />}
              </Heading>
            ) : (
              <Skeleton />
            )}
            {/* {(data.countryCurrency && price) ? <Heading display={"flex"} margin={"8px 0"} fontSize={"md"}>
                            Price per unit: {data.countryCurrency || <Skeleton width={"100px"} />}
                            {price || <Skeleton width={"100px"} />}
                        </Heading> : <Skeleton />} */}
          </Box>

          {/* box 2 */}
          <Box flex={8} padding={"10px 0 20px 0"} textAlign={"left"} w={"100%"}>
            {/* ========================================== Discription ===============================  */}

            <Heading fontSize={"2x"} margin={"0"} textAlign={"left"}>
              Description
            </Heading>
            <Divider margin={"0 0 4px 0"} />
            <Text w={"100%"} textAlign={"left"}>
              {(data.description !== undefined && data.description) || (
                <Skeleton count={2} />
              )}
            </Text>

            {/* ==================================== Detail ========================== */}

            <Box margin={"10px 0"}>
              <Tabs size="sm" isFitted>
                <TabList mb="1em">
                  <Tab
                    fontWeight={"bold"}
                    color={"black"}
                    _selected={{ bg: "#b2f5ea", border: "1px solid #b2f5ea" }}
                  >
                    Flat Detail
                  </Tab>
                  <Tab
                    fontWeight={"bold"}
                    color={"black"}
                    _selected={{ bg: "#b2f5ea", border: "1px solid #b2f5ea" }}
                  >
                    {" "}
                    Other Detail{" "}
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel marginTop={"-20px"} padding={"20px 0"}>
                    <Box
                      display={{ base: "grid", md: "flex" }}
                      flexWrap={"wrap"}
                      gridTemplateColumns={"repeat(2, 1fr)"}
                      gap={4}
                      justifyContent={"space-around"}
                    >
                      <Box>
                        <Heading size={"sm"} as={"h4"}>
                          Apartment
                        </Heading>
                        <Text fontSize={"sm"}>{data?.propertyGroup}</Text>
                      </Box>
                      <Box textAlign={"center"} display={"grid"}>
                        <Box
                          display={"flex"}
                          gap={2}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Icon as={LiaBedSolid} boxSize={6} />
                          <Text fontSize={"md"}>
                            {data?.roomDetails?.bedroom}
                          </Text>
                        </Box>
                        <Heading size={"sm"} as={"h4"}>
                          Beadroom
                        </Heading>
                      </Box>
                      <Box textAlign={"center"} display={"grid"}>
                        <Box
                          display={"flex"}
                          gap={2}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Icon as={FaShower} boxSize={6} />
                          <Text fontSize={"md"}>
                            {data?.roomDetails?.bathroom}
                          </Text>
                        </Box>
                        <Heading size={"sm"} as={"h4"}>
                          Bathroom
                        </Heading>
                      </Box>
                      <Box textAlign={"center"} display={"grid"}>
                        <Box
                          display={"flex"}
                          gap={2}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Icon as={MdOutlineBalcony} boxSize={6} />
                          <Text fontSize={"md"}>
                            {data?.roomDetails?.balcony}
                          </Text>
                        </Box>
                        <Heading size={"sm"} as={"h4"}>
                          Balcony
                        </Heading>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel marginTop={"-20px"} padding={"20px 0"}>
                    <Box
                      display={{ base: "grid", md: "flex" }}
                      flexWrap={"wrap"}
                      gridTemplateColumns={"repeat(2, 1fr)"}
                      gap={4}
                      justifyContent={"space-around"}
                    >
                      <Box
                        textAlign={"center"}
                        display={data.plotArea ? "grid" : "none"}
                        flex={1}
                      >
                        <Box
                          flex={3}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Image width={"30px"} src={scale} alt={"scale"} />
                          <Text>
                            {data.plotArea || <Skeleton width={"100px"} />}
                            {data.plotAreaUnit || <Skeleton width={"100px"} />}
                          </Text>
                        </Box>
                        <Heading size={"sm"}>Plot Area </Heading>
                      </Box>
                      <Box
                        display={data.totalFloors ? "grid" : "none"}
                        flex={1}
                        textAlign={"center"}
                      >
                        <Box
                          flex={3}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          gap={2}
                        >
                          <Image width={"30px"} src={stairs} alt={"stairs"} />
                          <Text>
                            {data.totalFloors || <Skeleton width={"100px"} />}
                          </Text>
                        </Box>
                        <Heading size={"sm"}> Total floor </Heading>
                      </Box>
                      <Box
                        display={data.totalFloors ? "grid" : "none"}
                        flex={1}
                        textAlign={"center"}
                      >
                        <Box
                          flex={3}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          gap={2}
                        >
                          <Icon as={FaRegBuilding} boxSize={6} />
                          {data.floorOn || <Skeleton width={"100px"} />}
                        </Box>
                        <Heading size={"sm"}> On floor </Heading>
                      </Box>
                      <Box
                        display={data.totalFloors ? "grid" : "none"}
                        flex={1}
                        textAlign={"center"}
                      >
                        <Box
                          flex={3}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                          gap={2}
                        >
                          <Image
                            width={"30px"}
                            src={powerback}
                            alt={"powerback"}
                          />
                          {data?.powerBackup || <Skeleton width={"100px"} />}
                        </Box>
                        <Heading size={"sm"}> Power Backup </Heading>
                      </Box>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>

            {/* ======================= discription =========================== */}

            {/* ======================================== under construction ==================================== */}
            {/* Plot Detail */}

            {/* =============================== Additional Pricing Detail =================================== */}
            <Box>
              <Box
                border={"3px solid rgb(200,200,200)"}
                padding={"6px 14px 10px 24px"}
              >
                <Heading size={"md"} as={"h3"} marginLeft={0} paddingBottom={2}>
                  Some Additional Pricing Details
                </Heading>
                <TableContainer>
                  <Table variant="striped" colorScheme="teal" size="sm">
                    <Tbody>
                      <Tr>
                        <Td> Maintenance Price </Td>
                        <Td>
                          {data?.countryCurrency}{" "}
                          {data?.additionalPricingDetails?.maintenancePrice}
                          {` ${data?.additionalPricingDetails?.maintenanceTimePeriod}`}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td> Expected Rental </Td>
                        <Td>
                          {data?.countryCurrency}{" "}
                          {data?.additionalPricingDetails?.expectedRental}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td> Booking Amount </Td>
                        <Td>
                          {" "}
                          {data?.countryCurrency}{" "}
                          {data?.additionalPricingDetails?.bookingAmount}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td> Annual Dues Payable </Td>
                        <Td>
                          {data?.countryCurrency}{" "}
                          {data?.additionalPricingDetails?.annualDuesPayable}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td> Membership Charge </Td>
                        <Td>
                          {data?.countryCurrency}{" "}
                          {data?.additionalPricingDetails?.membershipCharge}
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>

            {/* =============================== Other Detail ======================================= */}

            <Box margin={"20px 0"}>
              <Heading as={"h3"} size={"md"}>
                Other Detail
              </Heading>
              <Divider
                backgroundColor={"rgb(120,120,120)"}
                border={"1px solid rgb(120,120,120)"}
                margin={"4px 0"}
              />
              <TableContainer>
                <Table size="sm" variant="simple">
                  <Tbody>
                    {data?.availabilityStatus && (
                      <Tr>
                        <Th color={"black"} textTransform={"unset"}>
                          Availability Status
                        </Th>
                        <Td>
                          <Tag
                            size={"md"}
                            variant="outline"
                            colorScheme="green"
                            gap={2}
                          >
                            <TagLabel>{data?.availabilityStatus}</TagLabel>
                            <TagLeftIcon as={PiVan} />
                          </Tag>
                        </Td>
                      </Tr>
                    )}
                    {data?.inclusivePrices?.length > 0 && (
                      <Tr>
                        <Th color={"black"} textTransform={"unset"}>
                          All Inclusive Price
                        </Th>
                        <Td display={"flex"} gap={2} flexWrap={"wrap"}>
                          {data?.inclusivePrices?.map((e, i) => (
                            <Button
                              cursor={"auto"}
                              size="xs"
                              padding={"0 4px"}
                              leftIcon={<CheckCircleIcon />}
                              colorScheme={"green"}
                              key={i}
                            >
                              {e}
                            </Button>
                          ))}
                        </Td>
                      </Tr>
                    )}
                    {data?.ownership && (
                      <Tr>
                        <Th color={"black"} textTransform={"unset"}>
                          Ownership
                        </Th>
                        <Td> {data?.ownership} </Td>
                      </Tr>
                    )}
                    {data?.furnished == "Un-Furnished" && (
                      <Tr>
                        <Th color={"black"} textTransform={"unset"}>
                          furnishing Detail
                        </Th>
                        <Td> {data?.furnished} </Td>
                      </Tr>
                    )}
                    {data?.availabilityStatus && (
                      <Tr>
                        <Th color={"black"} textTransform={"unset"}>
                          {" "}
                          Availability Status{" "}
                        </Th>
                        <Td> {data.availabilityStatus} </Td>
                      </Tr>
                    )}
                    {data?.expectedByYear && (
                      <Tr>
                        <Th color={"black"} textTransform={"unset"}>
                          {" "}
                          Expected By Year{" "}
                        </Th>
                        <Td> {data.expectedByYear} </Td>
                      </Tr>
                    )}
                    {data?.propertyStatus && (
                      <Tr>
                        <Th color={"black"} textTransform={"unset"}>
                          Property Status
                        </Th>
                        <Td> {data?.propertyStatus} </Td>
                      </Tr>
                    )}
                    {data?.roadFacingWidth && (
                      <Tr>
                        <Th color={"black"} textTransform={"unset"}>
                          Road Facing Width
                        </Th>
                        <Td>
                          {data?.roadFacingWidth} {data?.roadFacingWidthType}
                        </Td>
                      </Tr>
                    )}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            {/* ================================= parking ================================= */}

            <Box
              width={{ base: "100%", md: "400px" }}
              display={
                data?.parking?.openParking || data?.parking?.closeParking
                  ? "block"
                  : "none"
              }
            >
              <Heading size={"md"} as={"h3"}>
                Parking Availability
              </Heading>
              <Divider
                backgroundColor={"rgb(120,120,120)"}
                border={"1px solid rgb(120,120,120)"}
                margin={"4px 0"}
              />
              <Box>
                <TableContainer>
                  <Table size="sm">
                    <Tbody>
                      {data?.parking?.openParking > 0 && (
                        <Tr>
                          <Th
                            fontSize={"md"}
                            textTransform={"unset"}
                            color={"black"}
                          >
                            Open Parking
                          </Th>
                          <Td> {data?.parking?.openParking || 0} </Td>
                        </Tr>
                      )}
                      {data?.parking?.closeParking > 0 && (
                        <Tr>
                          <Th
                            fontSize={"md"}
                            textTransform={"unset"}
                            color={"black"}
                          >
                            Closed Parking
                          </Th>
                          <Td> {data?.parking?.closeParking || 0} </Td>
                        </Tr>
                      )}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>

            {/* ================================= Property details =========================== */}
            {/* furnished detail */}
            <Box
              backgroundColor={"rgb(218, 218, 218)"}
              padding={"6px"}
              margin={"16px 0"}
              display={`${isFurnished == "Un-furnished" ? "none" : "block"}`}
            >
              <Box
                backgroundColor={"rgb(255, 255, 255)"}
                padding={"10px"}
                borderRadius={5}
              >
                {/* Property Detail */}
                <Heading fontSize={"lg"}>
                  Furnishing details ( {data?.furnished} )
                </Heading>
                <Divider padding={2} margin={0} />
                <Box
                  margin={"10px 0"}
                  display={"grid"}
                  gridTemplateColumns={{
                    base: "repeat(2,1fr)",
                    md: "repeat(3,1fr)",
                  }}
                >
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={lightImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt="light_images"
                    />
                    <Text>
                      {light || 0} Light{Number(light) > 1 && "s"}
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={fanImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt="fan_images"
                    />
                    <Text>
                      {fan || 0} Fan{Number(fan) > 1 && "s"}
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={acImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text>
                      {aircondition || 0} AC{Number(aircondition) > 1 && "'s"}
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={tvImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text>
                      {tv || 0} Television{Number(tv) > 1 && "s"}
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={bedImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text>
                      {bed || 0} Beds{Number(bed) > 1 && "s"}
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={wardrobeImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text>
                      {wardrobe || 0} wardrobe{Number(wardrobe) > 1 && "s"}
                    </Text>
                  </Box>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={geyserImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text>
                      {geyser || 0} geyser{Number(geyser) > 1 && "s"}
                    </Text>
                  </Box>
                  {/* furnished part 2 */}
                  <Box
                    display={
                      furnishedAdditionalList.includes("Washing Machine")
                        ? "flex"
                        : "none"
                    }
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={washingImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text> Washing Machine </Text>
                  </Box>
                  <Box
                    display={
                      furnishedAdditionalList.includes("Water Purifier")
                        ? "flex"
                        : "none"
                    }
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={purifierImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text> Water Purifier </Text>
                  </Box>
                  <Box
                    display={
                      furnishedAdditionalList.includes("Chimney")
                        ? "flex"
                        : "none"
                    }
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={chimneyImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text> Chimney </Text>
                  </Box>
                  <Box
                    display={
                      furnishedAdditionalList.includes("Exhaust Fan")
                        ? "flex"
                        : "none"
                    }
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={exhaustImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text> Exhaust Fan </Text>
                  </Box>
                  <Box
                    display={
                      furnishedAdditionalList.includes("Curtains")
                        ? "flex"
                        : "none"
                    }
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={curtainImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text> Curtains </Text>
                  </Box>
                  <Box
                    display={
                      furnishedAdditionalList.includes("Modular Kitchen")
                        ? "flex"
                        : "none"
                    }
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={kitchenImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text> Modular Kitchen </Text>
                  </Box>
                  <Box
                    display={
                      furnishedAdditionalList.includes("Fridge")
                        ? "flex"
                        : "none"
                    }
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={frigeImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text> Fridge </Text>
                  </Box>
                  <Box
                    display={
                      furnishedAdditionalList.includes("Sofa") ? "flex" : "none"
                    }
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={sofaImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text> Sofa </Text>
                  </Box>
                  <Box
                    display={
                      furnishedAdditionalList.includes("Stove")
                        ? "flex"
                        : "none"
                    }
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={stoveImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text> Stove </Text>
                  </Box>
                  <Box
                    display={
                      furnishedAdditionalList.includes("Microwave")
                        ? "flex"
                        : "none"
                    }
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={microwaveImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text> Microwave </Text>
                  </Box>
                  <Box
                    display={
                      furnishedAdditionalList.includes("Dining Table")
                        ? "flex"
                        : "none"
                    }
                    alignItems={"center"}
                    gap={"6px"}
                    margin={"6px 16px"}
                  >
                    <Image
                      src={tableImg}
                      height={"26px"}
                      objectFit={"contain"}
                      w={"20px"}
                      alt=""
                    />
                    <Text> Dining Table </Text>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* ==============================  Data unfurnished ================================= */}
            <Box display={`${isFurnished == "Un-furnished" ? "flex" : "none"}`}>
              <Text
                fontSize={"lg"}
                alignItems={"center"}
                gap={1}
                display={data.propertyFacing == "undefined" ? "none" : "flex"}
              >
                <span style={{ fontWeight: "600" }}>Furnished Detail :</span>
                {isFurnished || <Skeleton width={"100px"} />}
              </Text>
            </Box>

            {/* ----------------------------------------- */}
            {/* Property Facing / flooring */}
            <Box
              margin={"10px auto"}
              display={"flex"}
              alignItems={"center"}
              flexWrap={"wrap"}
              gap={8}
            >
              <Text
                fontSize={"lg"}
                alignItems={"center"}
                gap={1}
                display={data.propertyFacing == "undefined" ? "none" : "flex"}
              >
                <span style={{ fontWeight: "600" }}>Property Facing :</span>
                {data.propertyFacing || <Skeleton width={"100px"} />}
              </Text>
              <Text
                fontSize={"lg"}
                alignItems={"center"}
                gap={1}
                display={data.flooring == "undefined" ? "none" : "flex"}
              >
                <span style={{ fontWeight: "600" }}>Property flooring :</span>
                {data.flooring || <Skeleton width={"100px"} />}
              </Text>
            </Box>
            {/* ---------------------------------------- */}

            {/* ==================== aminities 3 ======================== */}
            <Box padding={"10px auto"} textAlign={"left"}>
              <Heading fontSize={"2xl"}> Amenities </Heading>
              <Divider margin={"5px 0"} />
              <Box className={style.amenities}>
                <Box
                  display={
                    data.amenities?.includes("Maintenance Staff")
                      ? "flex"
                      : "none"
                  }
                  alignItems={"center"}
                  gap={"6px"}
                >
                  <Image
                    src={MaintenanceImg}
                    height={"26px"}
                    objectFit={"contain"}
                    w={"20px"}
                    alt="light_images"
                  />
                  <Text> Maintenance Staff </Text>
                </Box>
                <Box
                  display={
                    data.amenities?.includes("Water Storage") ? "flex" : "none"
                  }
                  alignItems={"center"}
                  gap={"6px"}
                >
                  <Image
                    src={waterImg}
                    height={"26px"}
                    objectFit={"contain"}
                    w={"20px"}
                    alt="light_images"
                  />
                  <Text> Water Storage </Text>
                </Box>
                <Box
                  display={
                    data.amenities?.includes("Security / Fire Alarm")
                      ? "flex"
                      : "none"
                  }
                  alignItems={"center"}
                  gap={"6px"}
                >
                  <Image
                    src={securityImg}
                    height={"26px"}
                    objectFit={"contain"}
                    w={"20px"}
                    alt="light_images"
                  />
                  <Text> Security / Fire Alarm </Text>
                </Box>
                <Box
                  display={
                    data.amenities?.includes("Visitor Parking")
                      ? "flex"
                      : "none"
                  }
                  alignItems={"center"}
                  gap={"6px"}
                >
                  <Image
                    src={visiterImg}
                    height={"26px"}
                    objectFit={"contain"}
                    w={"20px"}
                    alt="light_images"
                  />
                  <Text> Visitor Parking </Text>
                </Box>
                <Box
                  display={data.amenities?.includes("Park") ? "flex" : "none"}
                  alignItems={"center"}
                  gap={"6px"}
                >
                  <Image
                    src={parkImg}
                    height={"26px"}
                    objectFit={"contain"}
                    w={"20px"}
                    alt="light_images"
                  />
                  <Text> Park </Text>
                </Box>
                <Box
                  display={
                    data.amenities?.includes("Feng Shui / Vaastu Compliant")
                      ? "flex"
                      : "none"
                  }
                  alignItems={"center"}
                  gap={"6px"}
                >
                  <Image
                    src={vastuImg}
                    height={"26px"}
                    objectFit={"contain"}
                    w={"20px"}
                    alt="light_images"
                  />
                  <Text> Feng Shui / Vaastu Compliant </Text>
                </Box>
                <Box
                  display={data.amenities?.includes("Lift") ? "flex" : "none"}
                  alignItems={"center"}
                  gap={"6px"}
                >
                  <Image
                    src={liftImg}
                    height={"26px"}
                    objectFit={"contain"}
                    w={"20px"}
                    alt="light_images"
                  />
                  <Text> Lift </Text>
                </Box>
              </Box>
              <Box display={"grid"} gap={3} margin={"20px 0"}>
                <Heading fontSize={"2xl"} padding={0}>
                  Features
                </Heading>
                {/* <Text textAlign={"inherit"} fontSize={"xs"} color={"blue"} margin={0}> For more details click on </Text> */}
              </Box>

              <Box>
                <Accordion allowMultiple>
                  {/*part 1  */}
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          display={"flex"}
                          alignItems={"center"}
                          gap={2}
                        >
                          <Image
                            src={RoomImg}
                            height={"26px"}
                            objectFit={"contain"}
                            w={"24px"}
                            alt="light_images"
                          />
                          Room Details
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box
                        display={"flex"}
                        margin={"0 30px"}
                        flexWrap={"wrap"}
                        alignItems={"center"}
                      >
                        {data?.otherRoom?.map((e, i) => (
                          <Box
                            key={i + 1}
                            marginRight={"20px"}
                            display={"flex"}
                          >
                            &#8226; {e}
                          </Box>
                        ))}
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  {/* part 2 */}
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          display={"flex"}
                          alignItems={"center"}
                          gap={2}
                        >
                          <Image
                            src={propertFeatureImg}
                            height={"26px"}
                            objectFit={"contain"}
                            w={"24px"}
                            alt="light_images"
                          />
                          Property Features
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box
                        display={"flex"}
                        margin={"0 30px"}
                        flexWrap={"wrap"}
                        alignItems={"center"}
                      >
                        {data?.propertyFeatures?.map((e, i) => (
                          <Box
                            marginRight={"20px"}
                            key={i + 1}
                            display={"flex"}
                          >
                            &#8226; {e}
                          </Box>
                        ))}
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                  {/* part3 */}
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          display={"flex"}
                          alignItems={"center"}
                          gap={2}
                        >
                          <Image
                            src={societyImg}
                            height={"26px"}
                            objectFit={"contain"}
                            w={"24px"}
                            alt="light_images"
                          />
                          Society Building Features
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box
                        display={"flex"}
                        margin={"0 30px"}
                        flexWrap={"wrap"}
                        alignItems={"center"}
                      >
                        {data?.society_buildingFeatures?.map((e, i) => (
                          <Box
                            marginRight={"20px"}
                            key={i + 1}
                            display={"flex"}
                          >
                            &#8226; {e}
                          </Box>
                        ))}
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  {/* part 4 */}
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          display={"flex"}
                          alignItems={"center"}
                          gap={2}
                        >
                          <Image
                            src={additonalImg}
                            height={"26px"}
                            objectFit={"contain"}
                            w={"24px"}
                            alt="light_images"
                          />
                          Additional Features
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box
                        display={"flex"}
                        margin={"0 30px"}
                        flexWrap={"wrap"}
                        alignItems={"center"}
                      >
                        {data?.additionalFeatures?.map((e, i) => (
                          <Box
                            marginRight={"20px"}
                            key={i + 1}
                            display={"flex"}
                          >
                            &#8226; {e}
                          </Box>
                        ))}
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  {/* part 5 */}
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          display={"flex"}
                          alignItems={"center"}
                          gap={2}
                        >
                          <Image
                            src={watersourceImg}
                            height={"26px"}
                            objectFit={"contain"}
                            w={"24px"}
                            alt="light_images"
                          />
                          Water Sources
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box
                        display={"flex"}
                        margin={"0 30px"}
                        flexWrap={"wrap"}
                        alignItems={"center"}
                      >
                        {data?.waterSources?.map((e, i) => (
                          <Box
                            marginRight={"20px"}
                            key={i + 1}
                            display={"flex"}
                          >
                            &#8226; {e}
                          </Box>
                        ))}
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  {/* part 6 */}
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          display={"flex"}
                          alignItems={"center"}
                          gap={2}
                        >
                          <Image
                            src={otherImg}
                            height={"26px"}
                            objectFit={"contain"}
                            w={"24px"}
                            alt="light_images"
                          />
                          Other Features
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Box
                        display={"flex"}
                        margin={"0 30px"}
                        flexWrap={"wrap"}
                        alignItems={"center"}
                      >
                        {data?.otherFeatures?.map((e, i) => (
                          <Box
                            marginRight={"20px"}
                            key={i + 1}
                            display={"flex"}
                          >
                            &#8226; {e}
                          </Box>
                        ))}
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Box>
            </Box>
            <Box display={overlooking?.length > 0 ? "grid" : "none"}>
              <Heading margin={"16px 0 10px 0"} fontSize={"2xl"} w={"100%"}>
                Over Lookings
              </Heading>
              <Divider />
              <Box
                display={"flex"}
                gap={"20px"}
                border={0}
                flexWrap={"wrap"}
                alignItems={"center"}
                margin={"6px 0"}
                id={style.overlooklist}
              >
                {overlooking.map((e, index) => (
                  <Text key={index}>{e}</Text>
                ))}
              </Box>
            </Box>
            <Box display={location.length > 0 ? "grid" : "none"}>
              <Heading fontSize={"xl"} margin={"16px 0 10px 0"}>
                Location Advantage
              </Heading>
              <Divider />
              <Box className={style.location_adv}>
                <Box
                  display={
                    location.includes("Close to Metro Station")
                      ? "flex"
                      : "none"
                  }
                  alignItems={"center"}
                >
                  <IoIosArrowForward />
                  <Text> Close to Metro Station </Text>
                  <Image
                    textAlign={"right"}
                    src={metro}
                    width={"30px"}
                    margin={"0 0 0 10px"}
                    alt=""
                  />
                </Box>
                <Box
                  display={
                    location.includes("Close to School") ? "flex" : "none"
                  }
                  alignItems={"center"}
                >
                  <IoIosArrowForward />
                  <Text> Close to School </Text>
                  <Image
                    textAlign={"right"}
                    src={school}
                    width={"30px"}
                    margin={"0 0 0 10px"}
                    alt=""
                  />
                </Box>
                <Box
                  display={
                    location.includes("Close to Hospital") ? "flex" : "none"
                  }
                  alignItems={"center"}
                >
                  <IoIosArrowForward />
                  <Text> Close to Hospital </Text>
                  <Image
                    textAlign={"right"}
                    src={hospital}
                    width={"30px"}
                    margin={"0 0 0 10px"}
                    alt=""
                  />
                </Box>
                <Box
                  display={
                    location.includes("Close to Market") ? "flex" : "none"
                  }
                  alignItems={"center"}
                >
                  <IoIosArrowForward />
                  <Text> Close to Market </Text>
                  <Image
                    textAlign={"right"}
                    src={market}
                    width={"30px"}
                    margin={"0 0 0 10px"}
                    alt=""
                  />
                </Box>
                <Box
                  display={
                    location.includes("Close to highway") ? "flex" : "none"
                  }
                  alignItems={"center"}
                >
                  <IoIosArrowForward />
                  <Text> Close to highway </Text>
                  <Image
                    textAlign={"right"}
                    src={highway}
                    width={"30px"}
                    margin={"0 0 0 10px"}
                    alt=""
                  />
                </Box>
                <Box
                  display={location.includes("Close to Mall") ? "flex" : "none"}
                  alignItems={"center"}
                >
                  <IoIosArrowForward />
                  <Text> Close to Mall </Text>
                  <Image
                    textAlign={"right"}
                    src={mall}
                    width={"30px"}
                    margin={"0 0 0 10px"}
                    alt=""
                  />
                </Box>
                <Box
                  display={
                    location.includes("Close to Airport") ? "flex" : "none"
                  }
                  alignItems={"center"}
                >
                  <IoIosArrowForward />
                  <Text> Close to Airport </Text>
                  <Image
                    textAlign={"right"}
                    src={airport}
                    width={"30px"}
                    margin={"0 0 0 10px"}
                    alt=""
                  />
                </Box>
                <Box
                  display={
                    location.includes("Close to Railway Station")
                      ? "flex"
                      : "none"
                  }
                  alignItems={"center"}
                >
                  <IoIosArrowForward />
                  <Text> Close to Railway Station </Text>
                  <Image
                    textAlign={"right"}
                    src={train}
                    width={"30px"}
                    margin={"0 0 0 10px"}
                    alt=""
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box flex={8} position={"relative"}>
          <Box
            textAlign={"left"}
            padding={"0 10px"}
            display={{ base: "none", md: "block" }}
          >
            {/* price  */}
            <Box display={{ base: "none", md: "block" }} margin={"20px 0"}>
              <Heading display={"flex"} justifyContent={"end"} fontSize={"2xl"}>
                {data.countryCurrency || <Skeleton width={"100px"} />}
                {price || <Skeleton width={"40px"} />}
              </Heading>
              <Heading
                display={"flex"}
                justifyContent={"end"}
                fontSize={"md"}
                color={"rgb(100,100,100)"}
              >
                {data.countryCurrency || <Skeleton width={"100px"} />}
                {`${data.priceUnit}/${data.plotAreaUnit}` || (
                  <Skeleton width={"40px"} />
                )}
              </Heading>
            </Box>
            {/* contact detail */}
            <Box
              borderRadius={0}
              boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
              padding={"20px 10px"}
            >
              <Heading fontSize={"2xl"} margin={"0 0 6px 0"}>
                Inquiry Form
              </Heading>
              <form className={style.schedule_div} onSubmit={handleTour}>
                <Input
                  type="text"
                  required
                  margin={"6px 0"}
                  placeholder={"Your name"}
                  value={nametosend}
                  onChange={(e) => setNametosend(e.target.value)}
                />
                <Input
                  type="email"
                  required
                  margin={"6px 0"}
                  placeholder={"Your email"}
                  value={emailtosend}
                  onChange={(e) => setEmailtosend(e.target.value)}
                />
                <Input
                  type="text"
                  required
                  margin={"6px 0"}
                  placeholder={"Your phone number"}
                  value={phonetosend}
                  onChange={(e) =>
                    setPhonetosend(NumericString(e.target.value))
                  }
                />
                <Textarea
                  type="text"
                  required
                  borderRadius={0}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  margin={"6px 0"}
                  placeholder="Message..."
                />
                <Button
                  type={"submit"}
                  w={"100%"}
                  borderRadius={0}
                  isLoading={load}
                  loadingText="Sending..."
                  spinnerPlacement="start"
                  margin={"6px 0"}
                  colorScheme="whatsapp"
                >
                  Send
                </Button>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
      {/* mobile booking part */}
      <Box className={style.schedule_bottom}>
        <Button
          fontSize={"2xl"}
          position={"fixed"}
          color={"white"}
          display={{ base: "flex", md: "none", lg: "none" }}
          bottom={"-2px"}
          zIndex={"20"}
          left={"-2px"}
          borderRadius={0}
          right={"-2px"}
          backgroundColor="rgb(23, 152, 72)"
          _hover={{ backgroundColor: "rgb(23, 152, 72)", color: "white" }}
          onClick={onOpen}
        >
          Inquiry Form
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                borderRadius={0}
                boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
                padding={"20px 10px"}
              >
                <Heading fontSize={"2xl"} margin={"0 0 6px 0"}>
                  Inquiry Form
                </Heading>
                <form className={style.schedule_div} onSubmit={handleTour}>
                  <Input
                    type="text"
                    required
                    margin={"6px 0"}
                    placeholder={"Your name"}
                    value={nametosend}
                    onChange={(e) => setNametosend(e.target.value)}
                  />
                  <Input
                    type="email"
                    required
                    margin={"6px 0"}
                    placeholder={"Your email"}
                    value={emailtosend}
                    onChange={(e) => setEmailtosend(e.target.value)}
                  />
                  <Input
                    type="text"
                    required
                    margin={"6px 0"}
                    placeholder={"Your phone number"}
                    value={phonetosend}
                    onChange={(e) =>
                      setPhonetosend(NumericString(e.target.value))
                    }
                  />
                  <Textarea
                    type="text"
                    required
                    borderRadius={0}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    margin={"6px 0"}
                    placeholder={"Message..."}
                  />
                  <Button
                    type={"submit"}
                    w={"100%"}
                    borderRadius={0}
                    isLoading={load}
                    loadingText="Sending..."
                    spinnerPlacement="start"
                    margin={"6px 0"}
                    colorScheme="whatsapp"
                  >
                    Send
                  </Button>
                </form>
              </Box>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default SingleProductDetailPage;
