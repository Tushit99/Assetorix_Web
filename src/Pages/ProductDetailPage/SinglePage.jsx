import { Box, Divider, Heading, Image, Text, Tooltip } from "@chakra-ui/react";
import axios from "axios";
import style from "./SinglePage.module.css";
import React, { useEffect, useState } from "react";
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
    };

    useEffect(() => {
        dataById();
    }, []);

    return (
        <Box margin={"25px 20px"}>
            <Heading
                color={"rgb(13, 20, 66)"}
                margin={"20px 0"}
                textAlign={"left"}
                fontSize={"4xl"}
            >
                {houseno}, {apartment}, {placelocality}
            </Heading>
            <Box display={"flex"} flexWrap={"wrap"} gap={"20px"}>
                <Box flex={16}>
                    <Image
                        w={"100%"}
                        src="https://mediacdn.99acres.com/media1/21619/19/432399374M-1688810188988.jpg"
                        alt="property-img"
                    />
                </Box>
                <Box
                    flex={18}
                    padding={"20px"}
                    backgroundColor={"rgba(244, 244, 255, 0.895)"}
                    textAlign={"left"}
                >
                    <Box
                        display={"grid"}
                        w={"100%"}
                        alignItems={"center"}
                        justifyContent={"right"}
                    >
                        <Text fontSize={"lg"}> Pincode: {pin} </Text>
                    </Box>
                    <Text textAlign={"left"} fontSize={"sm"} color={"rgb(1, 9, 46)"}>
                        Posted on: <Text fontSize={"xs"} as={"i"}>{created}</Text>
                    </Text>
                    <Text textAlign={"left"} fontSize={"sm"} color={"rgb(1, 9, 46)"}>
                        Updated on: <Text fontSize={"xs"} as={"i"}>{updated}</Text>
                    </Text>
                    <Box margin={"20px 0"}>
                        <Heading fontSize={"3xl"}>
                            Price: {data.countryCurrency}
                            {price}
                        </Heading>
                        <Heading fontSize={"xl"}>
                            Price per unit: {data.countryCurrency}
                            {price}
                        </Heading>
                    </Box>
                </Box>
            </Box>
            {/* box 2 */}
            <Box display={"flex"} gap={"20px"}>
                <Box flex={8} padding={"20px"} textAlign={"left"}>
                    {/* discription */}
                    <Heading fontSize={"2x"} margin={"10px 0"} textAlign={"left"}>
                        Description
                    </Heading>
                    <Divider margin={"0 0 4px 0"} />
                    <Text textAlign={"justify"}>{data.description !== undefined && data.description}</Text>
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
                                    <Text> {light} Light{Number(light) > 1 && "s"} </Text>
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
                                    <Text> {fan} Fan{Number(fan) > 1 && "s"} </Text>
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
                                    <Text> {aircondition} AC{Number(aircondition) > 1 && "'s"} </Text>
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
                                    <Text> {tv} Television{Number(tv) > 1 && "s"} </Text>
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
                                    <Text> {bed} Beds{Number(bed) > 1 && "s"} </Text>
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
                                    <Text> {wardrobe} wardrobe{Number(wardrobe) > 1 && "s"} </Text>
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
                                    <Text> {geyser} geyser{Number(geyser) > 1 && "s"} </Text>
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
                                    src={additonalImg}
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
                                    src={additonalImg}
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
                </Box>
                <Box flex={4} padding={"20px"} textAlign={"left"}>
                    {/* side box 1 */}
                    <Box
                        w={"100%"}
                        border={"2px solid rgb(232, 232, 232)"}
                        backgroundColor={"rgb(237, 249, 249)"}
                        h={350}
                        padding={"14px"}
                    >
                        {/* side box 1 top (img and name) */}
                        <Box display={"flex"} padding={"10px 0"}>
                            <Image
                                src={profileimg}
                                borderRadius={"2px"}
                                border={"1px solid rgb(212, 212, 212)"}
                                w={"100px"}
                                alt=""
                            />
                            <Box marginLeft={"10px"}>
                                <Heading size={"md"}>Full Name</Heading>
                                <Heading fontWeight={"medium"} fontSize={"md"}>
                                    Dealer short info or short discription
                                </Heading>
                            </Box>
                        </Box>
                        <Box
                            padding={"14px 0"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            flexWrap={"wrap"}
                        >
                            <Heading fontSize={"md"} color={"rgb(72, 53, 53)"}>
                                Mobile no.
                            </Heading>
                            <Heading fontSize={"md"} color={"rgb(72, 53, 53)"}>
                                99099099099
                            </Heading>
                        </Box>
                        <Divider
                            orientation="horizontal"
                            padding={"1px"}
                            backgroundColor={"rgb(134, 134, 134)"}
                        />
                        <Box
                            padding={"14px 0"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            flexWrap={"wrap"}
                        >
                            <Heading fontSize={"md"} color={"rgb(72, 53, 53)"}>
                                Whatsapp no:
                            </Heading>
                            <Heading fontSize={"md"} color={"rgb(72, 53, 53)"}>
                                11011011011
                            </Heading>
                        </Box>
                        <Divider
                            orientation="horizontal"
                            padding={"1px"}
                            backgroundColor={"rgb(134, 134, 134)"}
                        />
                        <Box
                            padding={"14px 0"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            flexWrap={"wrap"}
                        >
                            <Heading fontSize={"md"} color={"rgb(72, 53, 53)"}>
                                Email id:
                            </Heading>
                            <Heading fontSize={"md"} color={"rgb(72, 53, 53)"}>
                                name@gmail.com
                            </Heading>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default SingleProductDetailPage;
