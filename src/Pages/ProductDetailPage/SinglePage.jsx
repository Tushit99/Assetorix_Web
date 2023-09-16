import { Box, Divider, Heading, Image, Text, Tooltip } from "@chakra-ui/react";
import axios from "axios";
import style from "./SinglePage.module.css";
import React, { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
import societyImg from "./furnishedImages/society.png"
import additonalImg from "./furnishedImages/settings.png";
import { InfoIcon } from "@chakra-ui/icons";
import watersourceImg from "./furnishedImages/water.png";
import otherImg from "./furnishedImages/layers.png";
import RoomImg from "./furnishedImages/living-room.png";
import schoolImg from "./furnishedImages/school.png";
import metroImg from "./furnishedImages/metro.png";
import hospitalImg from "./furnishedImages/hospital.png";
import marketImg from "./furnishedImages/market.png";
import mallImg from "./furnishedImages/mall.png";
import higwayImg from "./furnishedImages/highway-sign.png";
import airport from "./furnishedImages/airport.png";
import railwayImg from "./furnishedImages/train-station.png";
import { ImLocation2 } from "react-icons/im"




const SingleProductDetailPage = () => {
    const [data, setData] = useState([]);
    const [price, setPrice] = useState(0);
    const [created, setCreated] = useState("");
    const [updated, setUpdated] = useState("");
    const [houseno, setHouseno] = useState("");
    const [apartment, setApartment] = useState("");
    const [placelocality, setlocality] = useState("");
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


    const dataById = async () => {
        await axios.get(`${process.env.REACT_APP_URL}/property`).then((e) => {
            setData(e.data.data[0]);
            console.log(e.data.data[0]);
            addDatatoList(e.data.data[0]);
        });
    };

    const addDatatoList = (list) => {
        setPrice(list.price.toLocaleString("en-IN"));
        let creation = list.createdOn.split("at")[0];
        setCreated(creation);
        let updation = list.lastUpdated.split("at")[0];
        setUpdated(updation);
        setHouseno(list.address.houseNumber);
        setApartment(list.address.apartmentName);  
        setlocality(list.address.locality);
        setPin(list.address.pincode);
        setisFurnished(list.furnished);
        if (list.furnished == "Furnished" || list.furnished == "Semi-Furnished") {
            setLight(list.furnishedObj.light);
            setFan(list.furnishedObj.fans);
            setAirCondition(list.furnishedObj.ac);
            setTv(list.furnishedObj.tv);
            setBed(list.furnishedObj.beds);
            setwardrobe(list.furnishedObj.wardrobe);
            setGeyser(list.furnishedObj.geyser);
            setFurnishedAdditionalList(list.furnishedList);
        }
        setOverLooking(list.overLookings);
        setLocation(list.locationAdv);
    };

    useEffect(() => {
        dataById();
    }, []);

    return (
        <Box display={{ base: "grid", md: "flex" }} flexWrap={"wrap"} gap={"20px"} >
            <Box margin={"25px 20px"} flex={16}>
                <Heading
                    color={"rgb(13, 20, 66)"}
                    margin={"20px 0"}
                    textAlign={"left"}
                    fontSize={"2xl"}
                    display={"flex"}
                    alignItems={"center"}
                >
                    <ImLocation2 /> {houseno || <Skeleton width={"200px"} />}, {apartment || <Skeleton width={"200px"} />}, {placelocality || <Skeleton width={"200px"} />}
                </Heading>
                <Box>
                    <Box >
                        <Image
                            w={"100%"}
                            src={"https://mediacdn.99acres.com/media1/21619/19/432399374M-1688810188988.jpg"}
                            alt="property-img"
                        />
                    </Box>
                </Box>
                {/* box 2 */}
                <Box flex={8} padding={"20px"} textAlign={"left"}>
                    {/* discription */}
                    <Heading fontSize={"2x"} margin={"10px 0"} textAlign={"left"}>
                        Description
                    </Heading>
                    <Divider margin={"0 0 4px 0"} />
                    <Text textAlign={"justify"}>{data.description !== undefined && data.description || <Skeleton count={2} />}</Text>
                    <Heading fontSize={"xl"} margin={"8px 0"} > Property details </Heading>
                    <Divider />
                    {/* furnished detail */}
                    <Box
                        backgroundColor={"rgb(218, 218, 218)"}
                        padding={"10px"}
                        margin={"10px 0"}
                        borderRadius={5}
                        display={`${isFurnished == "Un-furnished" ? " " : "block"}`}
                    >
                        <Box backgroundColor={"rgb(255, 255, 255)"} padding={"10px"} borderRadius={5}>
                            {/* Property Detail */}
                            <Heading fontSize={"lg"}> Furnishing details </Heading>
                            <Divider padding={2} margin={0} />
                            <Box className={style.furnished_product}>
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
                                    <Text> {light || <Skeleton width={"60px"} />} Light{Number(light) > 1 && "s"} </Text>
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
                                    <Text> {fan || <Skeleton width={"60px"} />} Fan{Number(fan) > 1 && "s"} </Text>
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
                                    <Text> {aircondition || <Skeleton width={"60px"} />} AC{Number(aircondition) > 1 && "'s"} </Text>
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
                                    <Text> {tv || <Skeleton width={"60px"} />} Television{Number(tv) > 1 && "s"} </Text>
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
                                    <Text> {bed || <Skeleton width={"60px"} />} Beds{Number(bed) > 1 && "s"} </Text>
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
                                    <Text> {wardrobe || <Skeleton width={"60px"} />} wardrobe{Number(wardrobe) > 1 && "s"} </Text>
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
                                    <Text> {geyser || <Skeleton width={"60px"} />} geyser{Number(geyser) > 1 && "s"} </Text>
                                </Box>
                                {/* furnished part 2 */}
                                <Box
                                    display={furnishedAdditionalList.includes("Washing Machine") ? "flex" : "none"}
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
                                    display={furnishedAdditionalList.includes("Water Purifier") ? "flex" : "none"}
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
                                    display={furnishedAdditionalList.includes("Chimney") ? "flex" : "none"}
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
                                    display={furnishedAdditionalList.includes("Exhaust Fan") ? "flex" : "none"}
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
                                    display={furnishedAdditionalList.includes("Curtains") ? "flex" : "none"}
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
                                    display={furnishedAdditionalList.includes("Modular Kitchen") ? "flex" : "none"}
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
                                    display={furnishedAdditionalList.includes("Fridge") ? "flex" : "none"}
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
                                    display={furnishedAdditionalList.includes("Sofa") ? "flex" : "none"}
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
                                    display={furnishedAdditionalList.includes("Stove") ? "flex" : "none"}
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
                                    display={furnishedAdditionalList.includes("Microwave") ? "flex" : "none"}
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
                                    display={furnishedAdditionalList.includes("Dining Table") ? "flex" : "none"}
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
                    {/* aminities 3 */}
                    <Box padding={"10px auto"} textAlign={"left"} >
                        <Heading fontSize={"2xl"}> Amenities </Heading>
                        <Divider margin={"5px 0"} />
                        <Box className={style.amenities}>
                            <Box
                                display={data.amenities?.includes("Maintenance Staff") ? "flex" : "none"}
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
                                display={data.amenities?.includes("Water Storage") ? "flex" : "none"}
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
                                display={data.amenities?.includes("Security / Fire Alarm") ? "flex" : "none"}
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
                                display={data.amenities?.includes("Visitor Parking") ? "flex" : "none"}
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
                                display={data.amenities?.includes("Feng Shui / Vaastu Compliant") ? "flex" : "none"}
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
                        <Box display={"grid"} gap={3} margin={"20px 0"} >
                            <Heading fontSize={"2xl"} padding={0}> Features </Heading>
                            <Text fontSize={"xs"} color={"blue"} margin={0}> For more details click on <InfoIcon color={"blue.400"} /> icon </Text>
                            <Divider margin={0} />
                            <Box
                                display={data.otherRoom ? "flex" : "none"}
                                alignItems={"center"}
                                gap={"6px"}
                            >
                                <Image
                                    src={RoomImg}
                                    height={"26px"}
                                    objectFit={"contain"}
                                    w={"24px"}
                                    alt="light_images"
                                />
                                <Text> Room Details </Text>
                                <Tooltip hasArrow display={"flex"} label={<Hoverbox data={data.otherRoom} />} fontSize='md'>
                                    <InfoIcon color={"blue.400"} />
                                </Tooltip>
                            </Box>
                            <Box
                                display={data.propertyFeatures ? "flex" : "none"}
                                alignItems={"center"}
                                gap={"6px"}
                            >
                                <Image
                                    src={propertFeatureImg}
                                    height={"26px"}
                                    objectFit={"contain"}
                                    w={"24px"}
                                    alt="light_images"
                                />
                                <Text> Property Features</Text>
                                <Tooltip hasArrow display={"flex"} label={<Hoverbox data={data.propertyFeatures} />} fontSize='md'>
                                    <InfoIcon color={"blue.400"} />
                                </Tooltip>
                            </Box>
                            <Box
                                display={data.propertyFeatures ? "flex" : "none"}
                                alignItems={"center"}
                                gap={"6px"}
                            >
                                <Image
                                    src={societyImg}
                                    height={"26px"}
                                    objectFit={"contain"}
                                    w={"24px"}
                                    alt="light_images"
                                />
                                <Text>Society Building Features</Text>
                                <Tooltip hasArrow display={"flex"} label={<Hoverbox data={data.society_buildingFeatures} />} fontSize='md'>
                                    <InfoIcon color={"blue.400"} />
                                </Tooltip>
                            </Box>
                            <Box
                                display={data.propertyFeatures ? "flex" : "none"}
                                alignItems={"center"}
                                gap={"6px"}
                            >
                                <Image
                                    src={additonalImg}
                                    height={"26px"}
                                    objectFit={"contain"}
                                    w={"24px"}
                                    alt="light_images"
                                />
                                <Text> Additional Features</Text>
                                <Tooltip hasArrow display={"flex"} label={<Hoverbox data={data.additionalFeatures} />} fontSize='md'>
                                    <InfoIcon color={"blue.400"} />
                                </Tooltip>
                            </Box>
                            <Box
                                display={data.waterSources ? "flex" : "none"}
                                alignItems={"center"}
                                gap={"6px"}
                            >
                                <Image
                                    src={watersourceImg}
                                    height={"26px"}
                                    objectFit={"contain"}
                                    w={"24px"}
                                    alt="light_images"
                                />
                                <Text> Water Sources</Text>
                                <Tooltip hasArrow display={"flex"} label={<Hoverbox data={data.waterSources} />} fontSize='md'>
                                    <InfoIcon color={"blue.400"} />
                                </Tooltip>
                            </Box>
                            <Box
                                display={data.otherFeatures ? "flex" : "none"}
                                alignItems={"center"}
                                gap={"6px"}
                            >
                                <Image
                                    src={otherImg}
                                    height={"26px"}
                                    objectFit={"contain"}
                                    w={"24px"}
                                    alt="light_images"
                                />
                                <Text> Other Features </Text>
                                <Tooltip hasArrow display={"flex"} label={<Hoverbox data={data.otherFeatures} />} fontSize='md'>
                                    <InfoIcon color={"blue.400"} />
                                </Tooltip>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        display={overlooking.length > 0 ? "grid" : "none"}
                    >
                        <Heading margin={"16px 0 10px 0"} fontSize={"2xl"} w={"100%"}> Over Lookings </Heading>
                        <Divider />
                        <Box
                            display={"flex"}
                            gap={"20px"}
                            border={0}
                            alignItems={"center"}
                            className={style.overlooklist}
                        >
                            {overlooking.map((e, index) => (
                                <Text key={index}>{e}</Text>
                            ))}
                        </Box>
                    </Box>
                    <Box display={location.length > 0 ? "grid" : "none"}>
                        <Heading fontSize={"xl"} margin={"16px 0 10px 0"}> Location Advantage </Heading>
                        <Divider />
                        <Box className={style.location_adv}>
                            <Box display={location.includes("Close to Metro Station") ? "flex" : "none"} gap={2} >
                                &#8226;
                                <Text> Close to Metro Station </Text>
                            </Box>
                            <Box display={location.includes("Close to School") ? "flex" : "none"} gap={2} >
                                &#8226;
                                <Text> Close to School </Text>
                            </Box>
                            <Box display={location.includes("Close to Hospital") ? "flex" : "none"} gap={2} >
                                &#8226;
                                <Text> Close to Hospital </Text>
                            </Box>
                            <Box display={location.includes("Close to Market") ? "flex" : "none"} gap={2} >
                                &#8226;
                                <Text> Close to Market </Text>
                            </Box>
                            <Box display={location.includes("Close to highway") ? "flex" : "none"} gap={2} >
                                &#8226;
                                <Text> Close to highway </Text>
                            </Box>
                            <Box display={location.includes("Close to Mall") ? "flex" : "none"} gap={2} >
                                &#8226;
                                <Text> Close to Mall </Text>
                            </Box>
                            <Box display={location.includes("Close to Airport") ? "flex" : "none"} gap={2} >
                                &#8226;
                                <Text> Close to Airport </Text>
                            </Box>
                            <Box display={location.includes("Close to Railway Station") ? "flex" : "none"} gap={2} >
                                &#8226;
                                <Text> Close to Railway Station </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                flex={8}  
                margin={"25px 0px"} 
                padding={"10px"}
                backgroundColor={"rgba(244, 244, 255, 0.895)"}
                textAlign={"left"}
            >
                <Box
                    display={"grid"}
                    w={"100%"}
                    alignItems={"center"}
                    justifyContent={"right"} 
                > 
                    <Text fontSize={"lg"}> Pincode: {pin || <Skeleton width={"100px"} />} </Text>
                </Box>
                {/* price  */}
                <Box margin={"20px 0"}>
                    <Heading display={"flex"} fontSize={"2xl"}>
                        Price: {data.countryCurrency || <Skeleton width={"100px"} />}
                        {price || <Skeleton width={"40px"} />}
                    </Heading>
                    <Heading display={"flex"} margin={"6px 0"} fontSize={"lg"}>
                        Price per unit: {data.countryCurrency || <Skeleton width={"100px"} />}
                        {price || <Skeleton width={"100px"} />}
                    </Heading>
                </Box>
                {/* Property Facing / flooring */}
                <Box margin={"10px auto"} display={"flex"} alignItems={"center"} flexWrap={"wrap"} gap={8} >
                    <Text fontSize={"md"} alignItems={"center"} gap={1} display={data.propertyFacing == "undefined" ? "none" : "flex"}>  <span style={{ fontWeight: "600" }}> Property Facing :</span>  {data.propertyFacing || <Skeleton width={"100px"} />} </Text>
                    <Text fontSize={"md"} alignItems={"center"} gap={1} display={data.flooring == "undefined" ? "none" : "flex"}>  <span style={{ fontWeight: "600" }}> Property flooring :</span>  {data.flooring || <Skeleton width={"100px"} />} </Text>
                </Box>
                {/* Plot Area */}
                <Text display={data.plotArea == "undefined" ? "none" : "flex"} gap={1} alignItems={"center"}>
                    <Text fontWeight={600} fontSize={"lg"}>
                        Plot Area :
                    </Text>
                    {data.plotArea || <Skeleton width={"100px"} />} {data.plotAreaUnit || <Skeleton width={"100px"} />}
                </Text>
                {/* Total Floor / on Floor */}
                <Text>
                    <Text textAlign={"left"} display={"flex"} alignItems={"center"} gap={1} fontSize={"lg"} fontWeight={600}>
                        Total Floors : <Text fontWeight={300}> {data.totalFloors || <Skeleton width={"100px"} />}</Text>
                    </Text>
                    <Text textAlign={"left"} display={"flex"} alignItems={"center"} gap={1} fontSize={"lg"} fontWeight={600}>
                        Floor no. : <Text fontWeight={300}> {data.floorOn || <Skeleton width={"100px"} />}</Text>
                    </Text>
                </Text>
                {/* Power Backup */}
                <Text display={data.plotArea == "undefined" ? "none" : "flex"} gap={1} alignItems={"center"}>
                    <Text fontWeight={600} fontSize={"lg"}>
                        Power Backup :
                    </Text>
                    {data.powerBackup || <Skeleton width={"100px"} />}
                </Text>
                {/* Property Creation */}
                <Text textAlign={"left"} fontSize={"sm"} color={"rgb(1, 9, 46)"} fontWeight={600}>
                    Posted on : <Text fontWeight={300} fontSize={"xs"} as={"i"}>{created || <Skeleton width={"100px"} />}</Text>
                </Text>
                <Text textAlign={"left"} fontSize={"sm"} color={"rgb(1, 9, 46)"} fontWeight={600}>
                    Updated on : <Text fontWeight={300} fontSize={"xs"} as={"i"}>{updated || <Skeleton width={"100px"} />}</Text>
                </Text>
            </Box>
        </Box>
    );
};

export default SingleProductDetailPage;
