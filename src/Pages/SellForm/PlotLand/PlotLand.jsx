import React, { useEffect } from 'react'
import { useState } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Heading,
    Input,
    InputGroup,
    NumberInput,
    NumberInputField,
    Select,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import style from "./PlotLand.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { CleanInputText } from "../code";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';


const PlotLand = () => {
    const isCountry = useSelector((state) => state.gloalval);
    const toast = useToast();
    const [country, setCountry] = useState("");
    const [facingwidth, setFacingWidth] = useState("");
    const [city, setCity] = useState("");
    const [appartment, setApartment] = useState("");
    const [pincode, setPincode] = useState(0);
    const [state, setState] = useState("");
    const [locality, setLocality] = useState("");
    const [houseNo, setHouseNo] = useState("");
    const [parking, setParking] = useState(0);
    const [openparking, setOpenparking] = useState(0);
    const [light, setLight] = useState(0);
    const [fans, setFans] = useState(0);
    const [ac, setAc] = useState(0);
    const [tv, setTv] = useState(0);
    const [Beds, setBeds] = useState(0);
    const [wardrobe, setWardrobe] = useState(0);
    const [geyser, setGeyser] = useState(0);
    const [areaPer, setAreaPer] = useState("sq.ft");
    const [furnishedarr, setfurnishedarr] = useState([]);
    const [extraroom, setExtraRoom] = useState([]);
    const [furnished, setFurnished] = useState("");
    const [availability, setAvailability] = useState("");
    const [fromyear, setFromyear] = useState("");
    const [expectedyear, setExpectedYear] = useState("");
    const [ownership, setOwnerShip] = useState("");
    const [pricedetail, setPricedetail] = useState("");
    const [priceSqr, setPriceSqr] = useState("");
    const [inclusivePrices, setInclusivePrice] = useState([]);
    const [amenities, setAminity] = useState([]);
    const [propertyFeatures, setPropertyFeature] = useState("");
    const [buildingFeature, setBuildingFeature] = useState([]);
    const [additinalft, setAdditinalFeature] = useState("");
    const [watersource, setWaterSource] = useState([]);
    const [overLook, setoverlook] = useState([]);
    const [otherFeature, setOtherFeature] = useState([]);
    const [powerbackup, setPowerbackup] = useState("");
    const [propertyFacing, setPropertyFacing] = useState("");
    const [flooring, setFlooring] = useState("");
    const [facing, setFacing] = useState("Meter");
    const [locationAdv, setLocationAdv] = useState([]);
    const [totalfloors, setTotalFloors] = useState("");
    const [floorOn, setFloorOn] = useState("Ground");
    const [plotArea, setPlotArea] = useState("");
    const [desc, setDesc] = useState("");
    const [pincollection, setPinCollection] = useState([]);
    const [additionalPrice, setAdditionalPrice] = useState(false);
    const [maintenancePrice, setMaintenancePrice] = useState("");
    const [maintenanceTimePeriod, setMaintenanceTimePeriod] = useState("Monthly");
    const [expectedRental, setExpectedRental] = useState("");
    const [bookingAmount, setBookingAmount] = useState("");
    const [annualDuesPayable, setAnnualDuesPayable] = useState("");
    const [membershipCharge, setMembershipCharge] = useState("");
    const [plotLength, setplotLength] = useState("");
    const [plotBreadth, setPlotBreadth] = useState("");
    const [totalFloorAllowed, setTotalFloorAllowed] = useState("");
    const [boundaryWall, setboundaryWall] = useState("");
    const [ConstructionOnProperty, setConstructionOnProperty] = useState("");
    const [openSides, setOpenSides] = useState("");
    const [constructionType, setConstructionType] = useState([]);
    const [expectedBy, setexpectedBy] = useState([]);


    useEffect(() => {
        let num = Date().split(" ")[3];
        let yearbox = [];
        for (let i = num; i < num + 10; i++) {
            yearbox.push(i);
        }
        setexpectedBy(yearbox);
    }, [])

    const handleSubmitData = async (e) => {
        e.preventDefault();
        let obj = {
            lookingFor: "Sell",
            propertyGroup: "Residential",
            propertyType: "Serviced Apartment",
            address: {
                apartmentName: appartment,
                plotNumber: houseNo,
                locality,
                pincode,
                city,
                state,
                country,
            },
            plotLength,
            plotBreadth,
            openSides,
            ConstructionOnProperty,
            ownership,
            price: +pricedetail,
            priceUnit: +priceSqr,
            inclusivePrices,
            amenities,
            propertyFeatures,
            society_buildingFeatures: buildingFeature,
            additionalFeatures: additinalft,
            waterSources: watersource,
            otherFeatures: otherFeature,
            powerBackup: powerbackup,
            overLookings: overLook,
            propertyFacing,
            flooring,
            roadFacingWidth: facingwidth,
            roadFacingWidthType: facing,
            totalFloors: +totalfloors,
            floorOn,
            plotArea,
            plotAreaUnit: areaPer,
            parking: {
                openParking: openparking.toString(),
                closeParking: parking.toString(),
            },
            otherRoom: extraroom,
            description: desc,
            countryCurrency: `${isCountry.country == "india" ? "₹" : "$"}`,
            additionalPricingDetails: {
                maintenancePrice,
                maintenanceTimePeriod,
                expectedRental,
                bookingAmount,
                annualDuesPayable,
                membershipCharge
            },
        };

        const showToastError = (message) => {
            toast({
                title: message + ' un-filled',
                status: 'error',
                duration: 2000,
                position: 'top-right'
            });
        }


        if (!locality) {
            showToastError('Provide locality');
        } else if (!furnishedarr) {
            showToastError('Provide Furnished Field');
        } else if (!ownership) {
            showToastError('Provide OwnerShip');
        } else if (!pricedetail) {
            showToastError('Provide PriceDetail');
        } else if (!priceSqr) {
            showToastError('Provide Price Per sq.ft');
        } else if (!additinalft) {
            showToastError('Provide Property description');
        } else if (!watersource) {
            showToastError('Provide Water Source');
        } else if (!overLook) {
            showToastError('Provide Overlooking');
        } else if (!powerbackup) {
            showToastError('Provide Power Backup');
        } else if (!propertyFacing) {
            showToastError('Provide Property Facing');
        } else if (!flooring) {
            showToastError('Provide Flooring');
        } else if (!facing) {
            showToastError('Provide Facing');
        } else if (!totalfloors) {
            showToastError('Provide Total Floors');
        } else if (!floorOn) {
            showToastError('Provide Floor number');
        } else if (!facingwidth) {
            showToastError("Provide facing width")
        }

        if (locationAdv) {
            obj["locationAdv"] = locationAdv
        }

        if (
            city &&
            locality &&
            furnishedarr &&
            ownership &&
            pricedetail &&
            priceSqr &&
            inclusivePrices &&
            additinalft &&
            watersource &&
            overLook &&
            powerbackup &&
            propertyFacing &&
            flooring &&
            facing &&
            totalfloors &&
            floorOn
        ) {
            let id = localStorage.getItem("usrId") || undefined;
            let authorization = localStorage.getItem("AstToken") || undefined;

            let head = { id, authorization, 'Content-type': 'application/json' };

            if (!id || !authorization) {
                toast({
                    title: 'Kindly log in to access property posting.',
                    description: "Login required for posting property.",
                    status: 'error',
                    duration: 2000,
                    position: 'top-right'
                })
                return
            }

            if (furnished == "Furnished" || furnished == "Semi-Furnished") {
                obj.furnishedObj = {
                    light,
                    fans,
                    ac,
                    tv,
                    Beds,
                    wardrobe,
                    geyser,
                }
                obj["furnishedList"] = furnishedarr;
            }

            if (furnished.length > 0) {
                obj["furnished"] = furnished;
            }
            if (availability == "Ready to move" && fromyear != "") {
                obj["propertyStatus"] = fromyear;
                obj["availabilityStatus"] = availability;
            }
            if (availability == "Under construction" && expectedyear != "") {
                obj["expectedByYear"] = expectedyear;
                obj["availabilityStatus"] = availability;

            }
            // else {
            try {
                // let response = await fetch("http://localhost:4500/property/", {
                //     method: "POST",
                //     headers: head,
                //     body: JSON.stringify(obj)
                // });
                // let data = await response.json();  
                // console.log("data",data); 
                await axios.post(`${process.env.REACT_APP_URL}/property/`, obj, { headers: head })
                    .then((e) => {
                        toast({
                            title: e.data.msg,
                            description: e.data.msg,
                            status: 'success',
                            duration: 2000,
                        })
                    });
            } catch (error) {
                toast({
                    title: error.response.data.msg,
                    status: 'error',
                    duration: 2000,
                })
                console.log(error);
            }
            // }

        }
        else {
            toast({
                title: 'Form un-filled',
                description: "Please fill all required fields.",
                status: 'info',
                duration: 2000,
                position: 'top-right'
            })
        }
    };

    const handlepinfetch = (e) => {
        setPincode(e.target.value);
        if (e.target.value.length == 6) {
            pinfetch(e.target.value);
        }
        else {
            console.log(e.target.value);
        }
    }

    const handleOpenSide = (e) => {
        e.preventDefault();
        setOpenSides(e.target.value);
    }

    const handleConstructionType = (e) => {
        e.preventDefault();
        let newarr = [...constructionType];
        let value = e.target.value;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setConstructionType(newarr);
    }

    const handleConstructionOnProperty = (e) => {
        e.preventDefault();
        setConstructionOnProperty(e.target.value);
    }

    const pinfetch = async (pin) => {
        try {
            console.log(pin);
            let res = await axios.get(`https://assetorix.onrender.com/pincode/?pincode=${pin}`);
            setState(res.data[0].state);
            setCity(res.data[0].city);
            setCountry(res.data[0].country);
            setPinCollection(res.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    // please don'nt change any function without any prior knowledge
    const furnisheddetails = (e) => {
        e.preventDefault();
        let newCat = [...furnishedarr];
        let value = e.target.value;

        console.log(e.target.value);

        if (newCat.includes(value)) {
            newCat.splice(newCat.indexOf(value), 1);
        } else {
            newCat.push(value);
        }
        setfurnishedarr(newCat);
    };

    const checkFurnished = (e) => {
        e.preventDefault();
        setFurnished(e.target.value);
    };

    const handlerooms = (e) => {
        e.preventDefault();
        let newarr = [...extraroom];
        let value = e.target.value;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setExtraRoom(newarr);
    };

    const handleAvailable = (e) => {
        e.preventDefault();
        setAvailability(e.target.value);
    };

    const handleyear = (e) => {
        e.preventDefault();
        setFromyear(e.target.value);
    };

    const handleExpectedYear = (e) => {
        e.preventDefault();
        setExpectedYear(e.target.value);
    };

    const handleownership = (e) => {
        e.preventDefault();
        setOwnerShip(e.target.value);
    };

    const handleAdditionalFeature = (e) => {
        e.preventDefault();
        let newarr = [...additinalft];
        let value = e.target.value;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setAdditinalFeature(newarr);
    };

    const handleAminities = (e) => {
        e.preventDefault();
        let newarr = [...amenities];
        let value = e.target.value;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setAminity(newarr);
    };

    const handlePropertyFeature = (e) => {
        e.preventDefault();
        let newarr = [...propertyFeatures];
        let value = e.target.value;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setPropertyFeature(newarr);
    };

    const HandleBuildingFeature = (e) => {
        e.preventDefault();
        let newarr = [...buildingFeature];
        let value = e.target.value;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setBuildingFeature(newarr);
    };

    const handleoverlooking = (e) => {
        e.preventDefault();
        let newarr = [...overLook];
        let value = e.target.value;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setoverlook(newarr);
    };

    const handleotherfeature = (e) => {
        e.preventDefault();
        let newarr = [...otherFeature];
        let value = e.target.value;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setOtherFeature(newarr);
    };

    const handlelocationadvantages = (e) => {
        e.preventDefault();
        let newarr = [...locationAdv];
        let value = e.target.value;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setLocationAdv(newarr);
    };

    const handleinclusiveandtax = (e) => {
        let newarr = [...inclusivePrices];
        let value = e;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setInclusivePrice(newarr);
    }

    const handleWaterSource = (e) => {
        let newarr = [...watersource];
        let value = e;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        console.log(newarr);
        setWaterSource(newarr);
    }

    const areaCalucation = () => {
        if (pricedetail && plotArea) {
            let max = Math.max(Number(pricedetail), Number(plotArea));
            let min = Math.min(Number(pricedetail), Number(plotArea));
            let ans = Math.round(max / min);
            setPriceSqr(ans);
        }
    }

    const handleBoundaryWalls = (e) => {
        e.preventDefault();
        setboundaryWall(e.target.value);
    }

    // const createtemplatefloors = () => {
    //     let options = "";

    //     let totalFloors = totalfloors;
    //     for (let i = 1; i <= totalFloors; i++) {
    //         let value = `<option value=${i}>${i}</option>`;
    //         options += value;
    //     }
    //     let adding = document.getElementById("floorSelectTag");
    //     adding.innerHTML = options;

    // }


    return (
        <form onSubmit={handleSubmitData}>
            {/* property location */}
            <Box className={style.location_form}>
                <Heading size={"lg"}>Where is your property located?</Heading>
                <Heading size={"sm"}>
                    An accurate location helps you connect with right buyers.
                </Heading>

                <Input
                    type="text"
                    padding={"0 10px"}
                    required
                    placeholder="Plot No. (optional)"
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                    fontSize={"md"}
                    variant="flushed"
                />
                <Input
                    type="text"
                    padding={"0 10px"}
                    placeholder="Apartment / Society (optional)"
                    fontSize={"md"}
                    value={appartment}
                    onChange={(e) => setApartment(e.target.value)}
                    variant="flushed"
                />
                <NumberInput>
                    <NumberInputField
                        placeholder={"Enter pincode"}
                        padding={"0 10px"}
                        borderRight={0}
                        borderLeft={0}
                        borderTop={0}
                        borderRadius={0}
                        _active={{
                            borderRight: "0",
                            borderLeft: "0",
                            borderTop: "0",
                            borderRadius: "0",
                        }}
                        required
                        fontSize={"md"}
                        value={pincode}
                        onChange={handlepinfetch}
                    />
                </NumberInput>
                <Input
                    type="text"
                    padding={"0 10px"}
                    required
                    placeholder="Locality"
                    list="browsers"
                    value={locality}
                    onChange={(e) => setLocality(e.target.value)}
                    fontSize={"md"}
                    variant="flushed"
                />
                {pincollection.length ? (
                    <datalist id="browsers">
                        {pincollection.map((e) => (
                            <option value={e.locality} />
                        ))}
                    </datalist>
                ) : ""}

                <Input
                    type="text"
                    padding={"0 10px"}
                    required
                    placeholder="Enter City"
                    fontSize={"md"}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    variant="flushed"
                />
                <Input
                    type="text"
                    padding={"0 10px"}
                    required
                    placeholder="Enter State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    fontSize={"md"}
                    variant="flushed"
                />
                <Input
                    type="text"
                    padding={"0 10px"}
                    required
                    placeholder="Enter Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    fontSize={"md"}
                    variant="flushed"
                />

            </Box>
            {/* Property Detail */}
            <Box marginTop={12}>
                <Heading as={"h3"} size={"md"} margin={"30px 0 10px 0"}>
                    Tell us about your Plot
                </Heading>
                {/* ====================================== */}
                {/* add area details */}
                <Box textAlign={"left"} padding={"10px 0"}>
                    <Heading as={"h3"} margin={"5px 0"} size={"md"}>
                        Add Area Details
                    </Heading>
                    <Text margin={"5px 0"}> Atleast one area type is mandatory </Text>
                    <ButtonGroup
                        className={style.select_land}
                        size="sm"
                        isAttached
                        variant="outline"
                    >
                        <NumberInput>
                            <NumberInputField
                                padding={"0 2px"}
                                value={plotArea}
                                onChange={(e) => {
                                    areaCalucation();
                                    setPlotArea(e.target.value);
                                }}
                                required
                            />
                        </NumberInput>
                        <select value={areaPer} onChange={(e) => {
                            setAreaPer(e.target.value);
                        }} className={style.select} required>
                            <option value="sq.ft">sq.ft</option>
                            <option value="sq.yards">sq.yards</option>
                            <option value="sq.m">sq.m</option>
                            <option value="acres">acres</option>
                            <option value="marla">marla</option>
                            <option value="cents">cents</option>
                            <option value="bigha">bigha</option>
                            <option value="kottah">kottah</option>
                            <option value="kanal">kanal</option>
                            <option value="grounds">grounds</option>
                            <option value="ares">ares</option>
                            <option value="biswa">biswa</option>
                            <option value="guntha">guntha</option>
                            <option value="aankadam">aankadam</option>
                            <option value="hectares">hectares</option>
                            <option value="rood">rood</option>
                            <option value="chataks">chataks</option>
                            <option value="perch">perch</option>
                        </select>
                    </ButtonGroup>
                </Box>
                {/* Property Dimensions */}
                <Box as={"div"} textAlign={"left"} padding={"10px 0"} >
                    <Heading as={"h3"} size={"md"} > Property Dimensions (Optional) </Heading>
                    <Input type={"text"} variant='flushed' padding={"0 6px"} margin={"4px 0"} value={plotLength} onChange={(e) => {
                        let val = e.target.value;
                        let numval = val.replace(/[^0-9]/g, '');
                        setplotLength(numval);
                    }} placeholder='Length of plot (in Ft.)' />
                    <Input type={"text"} variant='flushed' padding={"0 6px"} margin={"4px 0"} value={plotBreadth} onChange={(e) => {
                        let val = e.target.value;
                        let numval = val.replace(/[^0-9]/g, '');
                        setPlotBreadth(numval);
                    }} placeholder='Breadth of plot (in Ft.)' />
                </Box>
                {/* Floors Allowed For Construction */}
                <Box textAlign={"left"} padding={"10px 0"}>
                    <Heading as={"h3"} size={"md"} > Floors Allowed For Construction </Heading>
                    <Input type={"text"} variant='flushed' padding={"0 6px"} margin={"4px 0"} value={totalFloorAllowed} onChange={(e) => {
                        let val = e.target.value;
                        let numval = val.replace(/[^0-9]/g, '');
                        setTotalFloorAllowed(numval);
                    }} placeholder='No. of floors' />
                </Box>
                {/* is there a boundary wall around the property */}
                <Box textAlign={"left"} className={style.optional_box} >
                    <Heading as={"h3"} size={"md"} > Is there a boundary wall around the property? </Heading>
                    <Box textAlign={"left"} padding={"10px 0 0 0"}>
                        <button onClick={handleBoundaryWalls} value={"Yes"} className={boundaryWall.includes("Yes") ? style.setbtn : style.btn} >Yes</button>
                        <button onClick={handleBoundaryWalls} value={"No"} className={boundaryWall.includes("No") ? style.setbtn : style.btn} >No</button>
                    </Box>
                </Box>
                {/* No of open sides */}
                <Box textAlign={"left"} className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} > No. of open sides </Heading>
                    <Box textAlign={"left"} padding={"10px 0 0 0"}>
                        <button value={"1"} onClick={handleOpenSide} className={openSides.includes("1") ? style.setbtn : style.btn} >1</button>
                        <button value={"2"} onClick={handleOpenSide} className={openSides.includes("2") ? style.setbtn : style.btn} >2</button>
                        <button value={"3"} onClick={handleOpenSide} className={openSides.includes("3") ? style.setbtn : style.btn} >3</button>
                        <button value={"4 or more"} onClick={handleOpenSide} className={openSides.includes("4 or more") ? style.setbtn : style.btn} >4 or more</button>
                    </Box>
                </Box>
                {/* Construction Property */}
                <Box textAlign={"left"} className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} > Any construction done on this property? </Heading>
                    <Box textAlign={"left"} padding={"10px 0 0 0"}>
                        <button onClick={handleConstructionOnProperty} value={"Yes"} className={ConstructionOnProperty.includes("Yes") ? style.setbtn : style.btn} >Yes</button>
                        <button onClick={handleConstructionOnProperty} value={"No"} className={ConstructionOnProperty.includes("No") ? style.setbtn : style.btn} >No</button>
                    </Box>
                </Box>
                {/* === Type of construction been done === */}
                <Box className={style.optional_box} display={ConstructionOnProperty == "Yes" ? "grid" : "none"}>
                    <Heading as={"h3"} size={"md"} > What type of construction has been done? </Heading>
                    <Box>
                        <button value={"Shed"} onClick={handleConstructionType} className={constructionType.includes("Shed") ? style.setbtn : style.btn} > Shed </button>
                        <button value={"Room(s)"} onClick={handleConstructionType} className={constructionType.includes("Room(s)") ? style.setbtn : style.btn} > Room(s) </button>
                        <button value={"Washroom"} onClick={handleConstructionType} className={constructionType.includes("Washroom") ? style.setbtn : style.btn} > Washroom </button>
                        <button value={"Other"} onClick={handleConstructionType} className={constructionType.includes("Other") ? style.setbtn : style.btn} > Other </button>
                    </Box>
                </Box>
                {/*  */}
                <Box>
                    <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
                        Price Details
                    </Heading>
                    <Box>
                        <Select>
                            <option value="Immediate">Immediate</option>
                            <option value="Within 3 Months">Within 3 Months</option>
                            <option value="Within 6 Months">Within 6 Months</option>
                            {expectedBy.map((e) => (
                                <option value={e}> {e} </option>  
                            ))}
                        </Select>
                    </Box>
                </Box>
                {/* Add pricing and details */}
                <Box>
                    <Heading
                        as={"h3"}
                        size={"md"}
                        margin={"30px 0 10px 0"}
                        textAlign={"left"}
                    >
                        Add pricing and details...
                    </Heading>
                    {/* OwnerShip detail */}
                    <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
                        Ownership
                    </Heading>
                    <Box className={style.grid} gap={4}>
                        <button
                            className={ownership == "Freehold" ? style.setbtn : style.btn}
                            borderRadius={"100px"}
                            border={"1px solid rgba(113, 210, 255, 0.897)"}
                            margin={"8px 6px 0 0"}
                            onClick={handleownership}
                            value={"Freehold"}
                            backgroundColor={"blue.50"}
                        >
                            Freehold
                        </button>
                        <button
                            className={ownership == "Leasehold" ? style.setbtn : style.btn}
                            borderRadius={"100px"}
                            border={"1px solid rgba(113, 210, 255, 0.897)"}
                            margin={"8px 6px 0 0"}
                            onClick={handleownership}
                            value={"Leasehold"}
                            backgroundColor={"blue.50"}
                        >
                            Leasehold
                        </button>
                        <button
                            className={
                                ownership == "Co-operative society" ? style.setbtn : style.btn
                            }
                            borderRadius={"100px"}
                            border={"1px solid rgba(113, 210, 255, 0.897)"}
                            margin={"8px 6px 0 0"}
                            onClick={handleownership}
                            value={"Co-operative society"}
                            backgroundColor={"blue.50"}
                        >
                            Co-operative society
                        </button>
                        <button
                            className={
                                ownership == "Power of Attorney" ? style.setbtn : style.btn
                            }
                            borderRadius={"100px"}
                            border={"1px solid rgba(113, 210, 255, 0.897)"}
                            margin={"8px 6px 0 0"}
                            onClick={handleownership}
                            value={"Power of Attorney"}
                            backgroundColor={"blue.50"}
                        >
                            Power of Attorney
                        </button>
                    </Box>
                </Box>
                {/* Price Details */}
                <Box>
                    <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
                        Price Details
                    </Heading>
                    <Box display={"flex"} alignItems={"center"} gap={5}>
                        <Box display={"grid"} gap={0}>
                            <Heading
                                as={"h3"}
                                size={"xs"}
                                fontWeight={400}
                                textAlign={"left"}
                            >
                                {isCountry.country == "india" ? "₹" : "$"} Price Details
                            </Heading>
                            <NumberInput >
                                <NumberInputField
                                    value={pricedetail}
                                    required
                                    onChange={(e) => {
                                        setPricedetail(e.target.value);
                                        areaCalucation();
                                    }}
                                />
                            </NumberInput>
                        </Box>
                        <Box display={"grid"} gap={0}>
                            <Heading
                                as={"h3"}
                                size={"xs"}
                                fontWeight={400}
                                textAlign={"left"}
                            >
                                {isCountry.country == "india" ? "₹" : "$"} PriceareaUnit : Per {areaPer}
                            </Heading>
                            <NumberInput value={priceSqr}>
                                <NumberInputField
                                    required
                                    readOnly
                                />
                            </NumberInput>
                        </Box>
                    </Box>
                </Box>
                <Box display={"flex"} gap={10} margin={"20px 0"} flexWrap={"wrap"}>
                    <Checkbox
                        isChecked={inclusivePrices.includes("All inclusive price")}
                        onChange={(e) => {
                            e.preventDefault();
                            handleinclusiveandtax(e.target.value)
                        }}
                        value={"All inclusive price"}

                    >
                        All inclusive price
                    </Checkbox>
                    <Checkbox
                        isChecked={inclusivePrices.includes("Tax and Govt. charges excluded")}
                        onChange={(e) => {
                            e.preventDefault();
                            handleinclusiveandtax(e.target.value)
                        }}
                        value={"Tax and Govt. charges excluded"}
                    >

                        Tax and Govt. charges excluded
                    </Checkbox>
                    <Checkbox
                        isChecked={inclusivePrices.includes("Price Negotiable")}
                        onChange={(e) => {
                            e.preventDefault();
                            handleinclusiveandtax(e.target.value)
                        }}
                        value={"Price Negotiable"}
                    >

                        Price Negotiable
                    </Checkbox>
                </Box>
                <Box display={"grid"}>
                    <Heading as={"h4"} size={"sm"} margin={"10px 0"} fontWeight={700} textAlign={"left"}>
                        Additional Pricing Detail (Optional)
                    </Heading>
                    <InputGroup w={"300px"} margin={"10px 0"}>
                        <Input w={"60%"} type='text' onChange={(e) => setMaintenancePrice(e.target.value)} value={maintenancePrice} placeholder={"Maintenance Price"} />
                        <Select w={"40%"} borderRadius={0} value={maintenanceTimePeriod} onChange={(e) => setMaintenanceTimePeriod(e.target.value)}>
                            <option value="Monthly">Monthly</option>
                            <option value="Yearly">Yearly</option>
                        </Select>
                    </InputGroup>
                    {additionalPrice && <>
                        <Input type="text" w={"300px"} value={expectedRental} onChange={(e) => setExpectedRental(e.target.value)} placeholder="Expected rental" margin={"0"} />
                        <Input type="text" w={"300px"} value={bookingAmount} onChange={(e) => setBookingAmount(e.target.value)} placeholder="Booking Amount" margin={"10px 0 0 0"} />
                        <Input type="text" w={"300px"} value={annualDuesPayable} onChange={(e) => setAnnualDuesPayable(e.target.value)} placeholder="Annual dues payable" margin={"10px 0 0 0"} />
                        <Input type="text" w={"300px"} value={membershipCharge} onChange={(e) => setMembershipCharge(e.target.value)} placeholder="Membership charge" margin={"10px 0 0 0"} />
                    </>
                    }
                    <Heading
                        as={"h3"}
                        size={"sm"}
                        margin={"10px 0"}
                        color={"#002aff"}
                        fontWeight={500}
                        cursor={"pointer"}
                        onClick={() => setAdditionalPrice(!additionalPrice)}
                        textAlign={"left"}>
                        {additionalPrice ? <IoIosArrowUp style={{ display: "inline" }} /> : <IoIosArrowDown style={{ display: "inline" }} />} Add more pricing details
                    </Heading>
                </Box>
                <Box>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        What makes your property unique
                    </Heading>
                    <Heading as={"h3"} size={"xs"} margin={"10px 0"} textAlign={"left"}>
                        Adding description will increase your listing visibility
                    </Heading>
                    <Textarea height={140} value={desc} onChange={(e) => {
                        let my_cleantext = CleanInputText(e.target.value);
                        setDesc(my_cleantext);
                    }} ></Textarea>
                </Box>
            </Box>
            {/* Add amenities/unique features */}
            <Box>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Add amenities/unique features
                </Heading>
                <Heading as={"h5"} size={"xs"} fontWeight={400} margin={"10px 0"} textAlign={"left"}>
                    All fields on this page are optional
                </Heading>
            </Box>
            {/* Amenities */}
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Amenities
                </Heading>
                <Box>
                    <button
                        className={
                            amenities.includes("Maintenance Staff") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Maintenance Staff"}
                    >
                        Maintenance Staff
                    </button>
                    <button
                        className={
                            amenities.includes("Water Storage") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Water Storage"}
                    >
                        Water Storage
                    </button>
                    <button
                        className={
                            amenities.includes("Security / Fire Alarm") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Security / Fire Alarm"}
                    >
                        Security / Fire Alarm
                    </button>
                    <button
                        className={
                            amenities.includes("Water Storage") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Water Storage"}
                    >
                        Rain Water Harvesting
                    </button>
                    <button
                        className={
                            amenities.includes("Visitor Parking") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Visitor Parking"}
                    >
                        Visitor Parking
                    </button>
                    <button
                        className={amenities.includes("Park") ? style.setbtn : style.btn}
                        onClick={handleAminities}
                        value={"Park"}
                    >
                        Park
                    </button>
                    <button
                        className={
                            amenities.includes("Feng Shui / Vaastu Compliant")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={handleAminities}
                        value={"Feng Shui / Vaastu Compliant"}
                    >
                        Feng Shui / Vaastu Compliant
                    </button>
                    <button
                        className={amenities.includes("Lift") ? style.setbtn : style.btn}
                        onClick={handleAminities}
                        value={"Lift"}
                    >
                        Lift(s)
                    </button>
                </Box>
            </Box>
            {/* Property Features */}
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Property Features
                </Heading>
                <Box>
                    <button
                        className={
                            propertyFeatures.includes("High Ceiling Height")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"High Ceiling Height"}
                        onClick={handlePropertyFeature}
                    >

                        High Ceiling Height
                    </button>
                    <button
                        className={
                            propertyFeatures.includes("False Ceiling Lighting")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"False Ceiling Lighting"}
                        onClick={handlePropertyFeature}
                    >

                        False Ceiling Lighting
                    </button>
                    <button
                        className={
                            propertyFeatures.includes("Piped-gas")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Piped-gas"}
                        onClick={handlePropertyFeature}
                    >

                        Piped-gas
                    </button>
                    <button
                        className={
                            propertyFeatures.includes("Water purifier")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Water purifier"}
                        onClick={handlePropertyFeature}
                    >
                        Water purifier
                    </button>
                    <button
                        className={
                            propertyFeatures.includes("Internet / wi-fi connectivity")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Internet / wi-fi connectivity"}
                        onClick={handlePropertyFeature}
                    >

                        Internet/wi-fi connectivity
                    </button>
                    <button
                        className={
                            propertyFeatures.includes("Intercom Facility")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Intercom Facility"}
                        onClick={handlePropertyFeature}
                    >
                        Intercom Facility
                    </button>
                    <button
                        className={
                            propertyFeatures.includes("Centrally Air Renovated")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Centrally Air Renovated"}
                        onClick={handlePropertyFeature}
                    >
                        Centrally Air Conditioned
                    </button>
                    <button
                        className={
                            propertyFeatures.includes("Recently Renovated")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Recently Renovated"}
                        onClick={handlePropertyFeature}
                    >
                        Recently Renovated
                    </button>
                    <button
                        className={
                            propertyFeatures.includes("Private Garden / Terrace")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Private Garden / Terrace"}
                        onClick={handlePropertyFeature}
                    >
                        Private Garden / Terrace
                    </button>
                    <button
                        className={
                            propertyFeatures.includes("Natural Light")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Natural Light"}
                        onClick={handlePropertyFeature}
                    >
                        Natural Light
                    </button>
                    <button
                        className={
                            propertyFeatures.includes("Airy Roooms") ? style.setbtn : style.btn
                        }
                        value={"Airy Roooms"}
                        onClick={handlePropertyFeature}
                    >

                        Airy Roooms
                    </button>
                    <button
                        className={
                            propertyFeatures.includes("Spacious Interiors")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Spacious Interiors"}
                        onClick={handlePropertyFeature}
                    >

                        Spacious Interiors
                    </button>
                </Box>
            </Box>
            {/* Society/Building feature */}
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Society/Building feature
                </Heading>
                <Box>
                    <button
                        className={
                            buildingFeature.includes("water softening plant")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={HandleBuildingFeature}
                        value={"water softening plant"}
                    >
                        water softening plant
                    </button>
                    <button
                        className={
                            buildingFeature.includes("Fitness Centre / GYM")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={HandleBuildingFeature}
                        value={"Fitness Centre / GYM"}
                    >
                        Fitness Centre / GYM
                    </button>
                    <button
                        className={
                            buildingFeature.includes("Swimming Pool")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={HandleBuildingFeature}
                        value={"Swimming Pool"}
                    >
                        Swimming Pool
                    </button>
                    <button
                        className={
                            buildingFeature.includes("Club house / Community Center")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={HandleBuildingFeature}
                        value={"Club house / Community Center"}
                    >
                        Club house / Community Center
                    </button>
                    <button
                        className={
                            buildingFeature.includes("Shopping Centre")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={HandleBuildingFeature}
                        value={"Shopping Centre"}
                    >
                        Shopping Centre
                    </button>
                </Box>
            </Box>
            {/* Additional Features */}
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Additional Features
                </Heading>
                <Box>
                    <button
                        className={
                            additinalft.includes("Separate entry for servant room")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Separate entry for servant room"}
                        onClick={handleAdditionalFeature}
                    >
                        Separate entry for servant room
                    </button>
                    <button
                        className={
                            additinalft.includes("Waste Disposal")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Waste Disposal"}
                        onClick={handleAdditionalFeature}
                    >
                        Waste Disposal
                    </button>
                    <button
                        className={
                            additinalft.includes("Rain Water Harvesting")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Rain Water Harvesting"}
                        onClick={handleAdditionalFeature}
                    >
                        Rain Water Harvesting
                    </button>
                    <button
                        className={
                            additinalft.includes("No open drainage around")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"No open drainage around"}
                        onClick={handleAdditionalFeature}
                    >

                        No open drainage around
                    </button>
                    <button
                        className={
                            additinalft.includes("Bank Attached Property")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Bank Attached Property"}
                        onClick={handleAdditionalFeature}
                    >

                        Bank Attached Property
                    </button>
                    <button
                        className={
                            additinalft.includes("Low Density Society")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Low Density Society"}
                        onClick={handleAdditionalFeature}
                    >

                        Low Density Society
                    </button>
                </Box>
            </Box>
            {/* Water Source */}
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Water Source
                </Heading>
                <Box>
                    <button
                        className={
                            watersource.includes("Municipal corporation") ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            handleWaterSource(e.target.value)
                        }}
                        value={"Municipal corporation"}
                    >

                        Municipal corporation
                    </button>
                    <button
                        className={
                            watersource.includes("Borewell / Tank") ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            handleWaterSource(e.target.value)
                        }}
                        value={"Borewell / Tank"}
                    >

                        Borewell/Tank
                    </button>
                    <button
                        className={watersource.includes("24*7 Water") ? style.setbtn : style.btn}
                        onClick={(e) => {
                            e.preventDefault();
                            handleWaterSource(e.target.value)
                        }}
                        value={"24*7 Water"}
                    >

                        24*7 Water
                    </button>
                </Box>
            </Box>
            {/* Overlooking */}
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Overlooking
                </Heading>
                <Box>
                    <button
                        className={overLook.includes("Pool") ? style.setbtn : style.btn}
                        onClick={handleoverlooking}
                        value={"Pool"}
                    >

                        Pool
                    </button>
                    <button
                        className={
                            overLook.includes("Park / Garden") ? style.setbtn : style.btn
                        }
                        onClick={handleoverlooking}
                        value={"Park / Garden"}
                    >

                        Park/Garden
                    </button>
                    <button
                        className={overLook.includes("Club") ? style.setbtn : style.btn}
                        onClick={handleoverlooking}
                        value={"Club"}
                    >

                        Club
                    </button>
                    <button
                        className={
                            overLook.includes("Main Road") ? style.setbtn : style.btn
                        }
                        onClick={handleoverlooking}
                        value={"Main Road"}
                    >

                        Main Road
                    </button>
                    <button
                        className={overLook.includes("Other") ? style.setbtn : style.btn}
                        onClick={handleoverlooking}
                        value={"Other"}
                    >

                        Other
                    </button>
                </Box>
            </Box>
            {/* Other Features */}
            <Box>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Other Features
                </Heading>
                <Box display={"grid"} textAlign={"left"} gap={2}>
                    <Checkbox
                        size={"lg"}
                        isChecked={otherFeature.includes("In a gated society")}
                        value={"In a gated society"}
                        onChange={handleotherfeature}
                    >

                        In a gated society
                    </Checkbox>
                    <Checkbox
                        size={"lg"}
                        isChecked={otherFeature.includes("Corner Property")}
                        value={"Corner Property"}
                        onChange={handleotherfeature}
                    >

                        Corner Property
                    </Checkbox>
                    <Checkbox
                        size={"lg"}
                        isChecked={otherFeature.includes("Pet Friendly")}
                        value={"Pet Friendly"}
                        onChange={handleotherfeature}
                    >

                        Pet Friendly
                    </Checkbox>
                    <Checkbox
                        size={"lg"}
                        isChecked={otherFeature.includes("Wheelchair friendly")}
                        value={"Wheelchair friendly"}
                        onChange={handleotherfeature}
                    >

                        Wheelchair friendly
                    </Checkbox>
                </Box>
            </Box>
            {/* Power Back up */}
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Power Back up
                </Heading>
                <Box>
                    <button
                        className={powerbackup == "None" ? style.setbtn : style.btn}
                        value={"None"}
                        onClick={(e) => {
                            e.preventDefault();
                            setPowerbackup(e.target.value)
                        }}
                    >

                        None
                    </button>
                    <button
                        className={powerbackup == "Partial" ? style.setbtn : style.btn}
                        value={"Partial"}
                        onClick={(e) => {
                            e.preventDefault();
                            setPowerbackup(e.target.value)
                        }}
                    >

                        Partial
                    </button>
                    <button
                        className={powerbackup == "Full" ? style.setbtn : style.btn}
                        value={"Full"}
                        onClick={(e) => {
                            e.preventDefault();
                            setPowerbackup(e.target.value)
                        }}
                    >

                        Full
                    </button>
                </Box>
            </Box>
            {/* Property facing */}
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Property facing
                </Heading>
                <Box>
                    <button
                        className={propertyFacing == "North" ? style.setbtn : style.btn}
                        onClick={(e) => {
                            e.preventDefault();
                            setPropertyFacing(e.target.value)
                        }}
                        value={"North"}
                    >

                        North
                    </button>
                    <button
                        className={propertyFacing == "South" ? style.setbtn : style.btn}
                        onClick={(e) => {
                            e.preventDefault();
                            setPropertyFacing(e.target.value)
                        }}
                        value={"South"}
                    >

                        South
                    </button>
                    <button
                        className={propertyFacing == "East" ? style.setbtn : style.btn}
                        onClick={(e) => {
                            e.preventDefault();
                            setPropertyFacing(e.target.value)
                        }}
                        value={"East"}
                    >

                        East
                    </button>
                    <button
                        className={propertyFacing == "West" ? style.setbtn : style.btn}
                        onClick={(e) => {
                            e.preventDefault();
                            setPropertyFacing(e.target.value)
                        }}
                        value={"West"}
                    >

                        West
                    </button>
                    <button
                        className={
                            propertyFacing == "North-East" ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setPropertyFacing(e.target.value)
                        }}
                        value={"North-East"}
                    >

                        North-East
                    </button>
                    <button
                        className={
                            propertyFacing == "North-West" ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setPropertyFacing(e.target.value)
                        }}
                        value={"North-West"}
                    >

                        North-West
                    </button>
                    <button
                        className={
                            propertyFacing == "South-East" ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setPropertyFacing(e.target.value)
                        }}
                        value={"South-East"}
                    >

                        South-East
                    </button>
                    <button
                        className={
                            propertyFacing == "South-West" ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setPropertyFacing(e.target.value)
                        }}
                        value={"South-West"}
                    >

                        South-West
                    </button>
                </Box>
            </Box>

            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Type of flooring
                </Heading>
                <Box>
                    <Select
                        onChange={(e) => setFlooring(e.target.value)}
                        value={flooring}
                    >
                        <option value=""> Select </option>
                        <option value="Marble"> Marble </option>
                        <option value="Concrete"> Concrete </option>
                        <option value="Poloshed concrete"> Poloshed concrete </option>
                        <option value="Granite"> Granite </option>
                        <option value="Ceramic"> Ceramic </option>
                        <option value="Mosaic"> Mosaic </option>
                        <option value="Cement"> Cement </option>
                        <option value="Stone"> Stone </option>
                        <option value="Vinyl"> Vinyl </option>
                        <option value="Wood"> Wood </option>
                        <option value="Vitified"> Vitified </option>
                        <option value="Spartex"> Spartex </option>
                        <option value="IPSFinish"> IPSFinish </option>
                        <option value="Other"> Other </option>
                    </Select>
                </Box>
            </Box>
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Width of facing road
                </Heading>
                <Box display={"flex"} gap={"20px"} w={"300px"} >
                    <Input type="number" variant='flushed' flex={1} required value={facingwidth} onChange={(e) => {
                        e.preventDefault();
                        setFacingWidth(e.target.value);
                    }} />
                    <Select flex={1} onChange={(e) => setFacing(e.target.value)} value={facing}>
                        <option value="Meter"> Meter </option>
                        <option value="Feet"> Feet </option>
                    </Select>
                </Box>
            </Box>
            <Box className={style.optional_box}>
                <Heading size={"md"} margin={"10px 0 4px 0"} textAlign={"left"}>
                    Location Advantages
                    <Heading
                        size={"xs"}
                        fontWeight={200}
                        margin={"4px 0"}
                        textAlign={"left"}
                    >
                        Highlight the nearby landmarks*
                    </Heading>
                </Heading>
                <Box>
                    <button
                        className={
                            locationAdv.includes("Close to Station")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Close to Station"}
                        onClick={handlelocationadvantages}
                    >

                        Close to Station
                    </button>
                    <button
                        className={
                            locationAdv.includes("Close to School") ? style.setbtn : style.btn
                        }
                        value={"Close to School"}
                        onClick={handlelocationadvantages}
                    >

                        Close to School
                    </button>
                    <button
                        className={
                            locationAdv.includes("Close to Hospital")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Close to Hospital"}
                        onClick={handlelocationadvantages}
                    >

                        Close to Hospital
                    </button>
                    <button
                        className={
                            locationAdv.includes("Close to Market") ? style.setbtn : style.btn
                        }
                        value={"Close to Market"}
                        onClick={handlelocationadvantages}
                    >

                        Close to Market
                    </button>
                    <button
                        className={
                            locationAdv.includes("Close to Railway Station")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Close to Railway Station"}
                        onClick={handlelocationadvantages}
                    >

                        Close to Railway Station
                    </button>
                    <button
                        className={
                            locationAdv.includes("Close to Airport")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Close to Airport"}
                        onClick={handlelocationadvantages}
                    >

                        Close to Airport
                    </button>
                    <button
                        className={
                            locationAdv.includes("Close to Mall") ? style.setbtn : style.btn
                        }
                        value={"Close to Mall"}
                        onClick={handlelocationadvantages}
                    >
                        Close to Mall
                    </button>
                    <button
                        className={
                            locationAdv.includes("Close to highway")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Close to highway"}
                        onClick={handlelocationadvantages}
                    >
                        Close to highway
                    </button>
                </Box>
            </Box>
            <Heading
                as={"h5"}
                size={"xs"}
                color={"rgb(255, 52, 52)"}
                fontWeight={200}
                margin={"4px 0"}
                textAlign={"left"}
            >
                *Please provide correct information, otherwise your listing might get
                blocked
            </Heading>
            <Button
                margin={"20px 0"}
                type="submit"
                w={"100%"}
                backgroundColor={"rgb(46,49,146)"}
                _hover={{ backgroundColor: "rgb(74, 79, 223)" }}
                color={"#ffffff"}
            >
                Post Property
            </Button>
        </form >
    );
};

export default PlotLand; 
