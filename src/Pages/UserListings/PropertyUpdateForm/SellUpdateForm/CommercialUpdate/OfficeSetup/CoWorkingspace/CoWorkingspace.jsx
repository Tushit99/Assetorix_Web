import React, { useState } from "react";
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
    Checkbox,
    useToast,
    RadioGroup,
    Stack,
    Radio,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react";
import style from "./CoWorkingspace.module.css";
import { useSelector } from "react-redux";
import { AddIcon, ChevronDownIcon, MinusIcon } from "@chakra-ui/icons";
import axios from "axios";
import { CleanInputText, NumericString } from "../../../../code";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';



const CoWorkingspaceUpdate = () => {
    const isCountry = useSelector((state) => state.gloalval);
    const toast = useToast();
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState(0);
    const [state, setState] = useState("");
    const [locality, setLocality] = useState("");
    const [washroomType, setWashroomType] = useState("");
    const [privateWashroom, setPrivateWashroom] = useState(0);
    const [sharedWashroom, setSharedWashroom] = useState(0);
    const [fireSafty, setFireSafty] = useState([]);
    const [parkingArr, setParkingArr] = useState([]);
    const [preLeased, setPreLeased] = useState("");
    const [locatedInside, setLocatedInside] = useState("");
    const [floorNumber, setFloorNumber] = useState([]);
    const [pricedetail, setPricedetail] = useState("");
    const [previouslyUsedList, setpreviouslyUsedList] = useState([]);
    const [currentRentPerMonth, setCurrentRentPerMonth] = useState("");
    const [leaseTenureInYear, setLeaseTenureInYear] = useState("");
    const [annualRentIncrease, setAnnualRentIncrease] = useState("");
    const [businessType, setBusinessType] = useState("");
    const [additionalPrice, setAdditionalPrice] = useState(false);
    const [expectedRentel, setExpectedRentel] = useState("");
    const [bookingAmount, setBookingAmount] = useState("");
    const [annualDuesPayble, setAnnualDuesPayble] = useState("");
    const [propertyFeatures, setPropertyFeature] = useState("");
    const [buildingFeature, setBuildingFeature] = useState([]);
    const [additinalft, setAdditinalFeature] = useState([]);
    const [otherFeatures, setOtherFeatures] = useState("");
    const [expectedAnnual, setExpectedAnnual] = useState("");


    const [areaPer, setAreaPer] = useState("sq.ft");
    const [availability, setAvailability] = useState("");
    const [fromyear, setFromyear] = useState("");
    const [expectedyear, setExpectedYear] = useState("");
    const [ownership, setOwnerShip] = useState("");
    const [priceSqr, setPriceSqr] = useState("");
    const [inclusivePrices, setInclusivePrice] = useState([]);
    const [amenities, setAminity] = useState([]);
    const [locationAdv, setLocationAdv] = useState([]);
    const [plotArea, setPlotArea] = useState("");
    const [desc, setDesc] = useState("");
    const [pincollection, setPinCollection] = useState([]);
    const [maintenancePrice, setMaintenancePrice] = useState("");
    const [maintenanceTimePeriod, setMaintenanceTimePeriod] = useState("Monthly");
    const [zoneType, setZoneType] = useState("");

    // please don'nt change any function without any prior knowledge   

    const handleSubmitData = async (e) => {
        e.preventDefault();
        let obj = {
            lookingFor: "Sell",
            propertyGroup: "Commercial",
            propertyType: "Office",
            officeType: "Co-working office space",
            address: {
                locality,
                pincode,
                city,
                state,
                country,
                zoneType,
                locatedInside
            },
            ownership,
            price: +pricedetail,
            priceUnit: +priceSqr,
            society_buildingFeatures: buildingFeature,
            inclusivePrices,
            additionalFeatures: additinalft,
            amenities,
            locationAdv,
            propertyFeatures,
            plotArea: plotArea,
            plotAreaUnit: areaPer,
            description: desc,
            countryCurrency: `${isCountry.country == "india" ? "₹" : "$"}`,
            additionalPricingDetails: {
                maintenancePrice,
                maintenanceTimePeriod
            },
            preLeased_Rented: preLeased,
            otherFeatures,
            washrooms: washroomType,
            annualDuesPayble,
            // totalFloors: +totalfloors,
            floorOn: floorNumber,
            fireSafety: fireSafty,
            previouslyUsedList,
            // staircases: stairCase,
            // lift: liftStatus, 
            preLeased,
            expectedAnnual
        };

        const showToastError = (message) => {
            toast({
                title: message + " un-filled",
                status: "error",
                duration: 2000,
                position: "top-right",
            });
        };
        // condition to check all imformation are included or not

        if (!locality) {
            showToastError("Provide locality");
        } else if (!ownership) {
            showToastError("Provide OwnerShip");
        } else if (!priceSqr) {
            showToastError("Provide Price Per sq.ft");
        }

        if (locationAdv) {
            obj["locationAdv"] = locationAdv;
        }

        if (
            city &&
            locality &&
            ownership &&

            inclusivePrices
        ) {
            let id = localStorage.getItem("usrId") || undefined;
            let authorization = localStorage.getItem("AstToken") || undefined;

            let head = { id, authorization, "Content-type": "application/json" };

            if (availability == "Ready to move" && fromyear != "") {
                obj["propertyStatus"] = fromyear;
                obj["availabilityStatus"] = availability;
            }
            if (availability == "Under construction" && expectedyear != "") {
                obj["expectedByYear"] = expectedyear;
                obj["availabilityStatus"] = availability;
            }

            if (washroomType == "Available") {
                let washroomDetails = {
                    privateWashrooms: privateWashroom,
                    sharedWashrooms: sharedWashroom,
                }
                obj["washroomDetails"] = washroomDetails;
            }

            if (preLeased == "Yes") {
                let preLeased_RentedDetails = {
                    currentRentPerMonth,
                    leaseTenureInYear,
                    annualRentIncrease,
                    businessType
                }
                obj["preLeased_RentedDetails"] = preLeased_RentedDetails;
            }

            // else {
            try {
                // let response = await fetch("http://localhost:4500/property/", {
                //     method: "POST",
                //     headers: head,
                //     body: JSON.stringify(obj)
                // });
                // let data = await response.json();
                console.log("data", obj);
                await axios
                    .post(`${process.env.REACT_APP_URL}/property/`, obj, {
                        headers: head,
                    })
                    .then((e) => {
                        toast({
                            title: e.data.msg,
                            description: e.data.msg,
                            status: "success",
                            duration: 2000,
                        });
                    });
            } catch (error) {
                toast({
                    title: error.response.data.msg,
                    status: "error",
                    duration: 2000,
                });
                console.log(error);
            }
            // }
        } else {
            toast({
                title: "Form un-filled",
                description: "Please fill all required fields.",
                status: "info",
                duration: 2000,
                position: "top-right",
            });
        }
    };

    const handlepinfetch = (e) => {
        setPincode(e.target.value);
        if (e.target.value.length == 6) {
            pinfetch(e.target.value);
        } else {
            console.log(e.target.value);
        }
    };

    const pinfetch = async (pin) => {
        try {

            let res = await axios.get(
                `${process.env.REACT_APP_URL}/pincode/?pincode=${pin}`
            );
            setState(res.data[0].state);
            setCity(res.data[0].city);
            setCountry(res.data[0].country);
            setPinCollection(res.data);
        } catch (err) {
            console.log(err);
        }
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


    const areaCalucation = () => {
        if (pricedetail && plotArea) {
            let max = Math.max(Number(pricedetail), Number(plotArea));
            let min = Math.min(Number(pricedetail), Number(plotArea));
            let ans = Math.round(max / min);
            setPriceSqr(ans);
        }
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

    const FileSystemHandle = (e) => {
        let newarr = [...previouslyUsedList];
        let value = e;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        console.log(newarr);
        setpreviouslyUsedList(newarr);
    }

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

    const handleOtherFeatures = (e) => {
        e.preventDefault();
        let newarr = [...otherFeatures];
        let value = e.target.value;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setOtherFeatures(newarr);
    }

    return (
        <Box w={"94%"} padding={"0 20px"} margin={"auto"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} >
            <form onSubmit={handleSubmitData}>
                {/* property location */}
                <Box className={style.location_form}>
                    <Heading size={"lg"} color={"black"}>
                        Where is your property located?
                    </Heading>
                    <Heading size={"sm"} color={"black"}>
                        An accurate location helps you connect with the right buyers.
                    </Heading>

                    <Select
                        fontSize={"md"}
                        padding={"0 10px"}
                        variant="flushed"
                        as={"select"}
                        onChange={(e) => setLocatedInside(e.target.value)}
                        value={locatedInside}
                    >
                        <option value="">Located in side</option>
                        <option value="IT Park">IT Park</option>
                        <option value="Business Park"> Business Park </option>
                        <option value="Other"> Other </option>
                    </Select>

                    <Select
                        fontSize={"md"}
                        padding={"0 10px"}
                        variant="flushed"
                        as={"select"}
                        onChange={(e) => setZoneType(e.target.value)}
                        value={zoneType}
                    >
                        <option value="Industrial">Industrial</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Residential">Residential</option>
                        <option value="Transport and Communication">
                            Transport and Communication
                        </option>
                        <option value="Public Utilities">Public Utilities</option>
                        <option value="Public and Semi Public use">
                            Public and Semi Public use
                        </option>
                    </Select>
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
                    ) : (
                        ""
                    )}

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
                        Tell us about your property
                    </Heading>
                    {/* ====================================== */}
                    {/* Washrooms */}
                    <Box padding={"10px 0 8px 0"} display={"grid"} >
                        <Heading textAlign={"left"} as={"h3"} size={"md"}>
                            Washrooms
                        </Heading>
                        <Box display={"grid"} padding={"10px 0 8px 0"} gridTemplateColumns={"repeat(1,1fr)"} gap={2}>
                            <Box display={"flex"} gap={10}>
                                <button
                                    value={"Available"}
                                    margin="auto"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setWashroomType(e.target.value);
                                    }}
                                    className={
                                        washroomType === "Available" ? style.setbtn : style.btn
                                    }
                                >
                                    Available
                                </button>
                                <button
                                    value={"Not-Available"}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setWashroomType(e.target.value);
                                    }}
                                    className={
                                        washroomType === "Not-Available" ? style.setbtn : style.btn
                                    }
                                >
                                    Not-Available
                                </button>
                            </Box>
                            <Box display={washroomType == "Available" ? "block" : "none"} >
                                <Box display={"flex"} w={340} alignItems={"center"} margin={"10px"}>
                                    <Text flex={8} textAlign={"left"}>
                                        No. of Private Washrooms
                                    </Text>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setPrivateWashroom((prev) => prev - 1);
                                        }}
                                        className={privateWashroom == 0 ? style.washroom_hide : style.washroom_dec}
                                        disabled={privateWashroom == 0}
                                    >
                                        <MinusIcon fontSize={"12px"} />
                                    </button>
                                    <Text flex={1}>{privateWashroom}</Text>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setPrivateWashroom((prev) => prev + 1);
                                        }}
                                        className={style.washroom_dec}
                                    >
                                        <AddIcon fontSize={"12px"} />
                                    </button>
                                </Box>
                                <Box display={"flex"} w={340} alignItems={"center"} margin={"10px"}>
                                    <Text flex={8} textAlign={"left"}>
                                        No. of Shared Washrooms
                                    </Text>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSharedWashroom((prev) => prev - 1);
                                        }}
                                        className={sharedWashroom == 0 ? style.washroom_hide : style.washroom_dec}
                                        disabled={sharedWashroom == 0}
                                    >
                                        <MinusIcon fontSize={"12px"} />
                                    </button>
                                    <Text flex={1}>{sharedWashroom}</Text>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setSharedWashroom((prev) => prev + 1);
                                        }}
                                        className={style.washroom_dec}
                                    >
                                        <AddIcon fontSize={"12px"} />
                                    </button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
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
                            <select
                                value={areaPer}
                                onChange={(e) => {
                                    setAreaPer(e.target.value);
                                }}
                                className={style.select}
                                required
                            >
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

                    {/* Availability status */}
                    <Box textAlign={"left"} className={style.optional_box}>
                        <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                            Availability Status
                        </Heading>
                        <Box className={style.grid}>
                            <button
                                className={
                                    availability == "Ready to move" ? style.setbtn : style.btn
                                }
                                borderRadius={"100px"}
                                border={"1px solid rgba(113, 210, 255, 0.897)"}
                                margin={"8px 6px 0 0"}
                                value={"Ready to move"}
                                onClick={handleAvailable}
                                backgroundColor={"blue.50"}
                            >
                                Ready to move
                            </button>
                            <button
                                className={
                                    availability == "Under construction" ? style.setbtn : style.btn
                                }
                                borderRadius={"100px"}
                                border={"1px solid rgba(113, 210, 255, 0.897)"}
                                margin={"8px 6px 0 0"}
                                onClick={handleAvailable}
                                value={"Under construction"}
                                backgroundColor={"blue.50"}
                            >
                                Under construction
                            </button>
                        </Box>
                    </Box>
                    {/* Age of Property */}
                    {availability == "Ready to move" && (
                        <Box textAlign={"left"} className={style.optional_box}>
                            <Heading
                                as={"h3"}
                                size={"md"}
                                margin={"30px 0 10px 0"}
                                textAlign={"left"}
                            >
                                Age of Property
                            </Heading>
                            <Box className={style.grid}>
                                <button
                                    className={fromyear == "0-1 year" ? style.setbtn : style.btn}
                                    borderRadius={"100px"}
                                    onClick={handleyear}
                                    value={"0-1 year"}
                                    border={"1px solid rgba(113, 210, 255, 0.897)"}
                                    margin={"8px 6px 0 0"}
                                    backgroundColor={"blue.50"}
                                >
                                    0-1 years
                                </button>
                                <button
                                    className={fromyear == "1-5 years" ? style.setbtn : style.btn}
                                    borderRadius={"100px"}
                                    onClick={handleyear}
                                    value={"1-5 years"}
                                    border={"1px solid rgba(113, 210, 255, 0.897)"}
                                    margin={"8px 6px 0 0"}
                                    backgroundColor={"blue.50"}
                                >
                                    1-5 years
                                </button>
                                <button
                                    className={fromyear == "5-10 years" ? style.setbtn : style.btn}
                                    borderRadius={"100px"}
                                    onClick={handleyear}
                                    value={"5-10 years"}
                                    border={"1px solid rgba(113, 210, 255, 0.897)"}
                                    margin={"8px 6px 0 0"}
                                    backgroundColor={"blue.50"}
                                >
                                    5-10 years
                                </button>
                                <button
                                    className={fromyear == "10+ years" ? style.setbtn : style.btn}
                                    borderRadius={"100px"}
                                    onClick={handleyear}
                                    value={"10+ years"}
                                    border={"1px solid rgba(113, 210, 255, 0.897)"}
                                    margin={"8px 6px 0 0"}
                                    backgroundColor={"blue.50"}
                                >
                                    10+ years
                                </button>
                            </Box>
                        </Box>
                    )}
                    {/* total Time for development */}
                    {availability == "Under construction" && (
                        <Box>
                            <Heading
                                as={"h3"}
                                size={"md"}
                                margin={"30px 0 10px 0"}
                                textAlign={"left"}
                            >
                                Possession By
                            </Heading>
                            <Select
                                placeholder="Expected by"
                                value={expectedyear}
                                onChange={handleExpectedYear}
                            >
                                <option value="3 months">3 months</option>
                                <option value="6 months">6 months</option>
                                <option value="1 year">1 year</option>
                                <option value="5 year">5 year</option>
                                <option value="10 year">10 year</option>
                            </Select>
                        </Box>
                    )}
                    {/* Add pricing and details (ownerShip) */}
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
                    {/* Priceing Detail  */}
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

                                    />
                                </NumberInput>
                            </Box>
                        </Box>
                    </Box>
                    {/* ============================ All inclusive price =========================  */}
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

                    {/* Additional Pricing Detail (Optional) */}
                    <Box display={"grid"}>
                        <Heading
                            as={"h4"}
                            size={"sm"}
                            margin={"10px 0"}
                            fontWeight={700}
                            textAlign={"left"}
                        >
                            Additional Pricing Detail (Optional)
                        </Heading>
                        <InputGroup w={"300px"} margin={"10px 0"}>
                            <Input
                                w={"60%"}
                                type="text"
                                onChange={(e) => setMaintenancePrice(e.target.value)}
                                value={maintenancePrice}
                                placeholder={"Maintenance Price"}
                            />
                            <Select
                                w={"40%"}
                                borderRadius={0}
                                value={maintenanceTimePeriod}
                                onChange={(e) => setMaintenanceTimePeriod(e.target.value)}
                            >
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </Select>
                        </InputGroup>
                        {additionalPrice && <>
                            <Input type="text" w={"300px"} value={expectedRentel} onChange={(e) => setExpectedRentel(e.target.value)} placeholder="Expected rental" margin={"0"} />
                            <Input type="text" w={"300px"} value={bookingAmount} onChange={(e) => setBookingAmount(e.target.value)} placeholder="Booking Amount" margin={"10px 0 0 0"} />
                            <Input type="text" w={"300px"} value={annualDuesPayble} onChange={(e) => setAnnualDuesPayble(e.target.value)} placeholder="Annual dues payable" margin={"10px 0 0 0"} />
                        </>
                        }
                        <Heading
                            as={"h3"}
                            size={"sm"}
                            margin={"10px 0 0 0"}
                            color={"#002aff"}
                            fontWeight={500}
                            cursor={"pointer"}
                            onClick={() => setAdditionalPrice(!additionalPrice)}
                            textAlign={"left"}>
                            {additionalPrice ? <IoIosArrowUp style={{ display: "inline" }} /> : <IoIosArrowDown style={{ display: "inline" }} />} Add more pricing details
                        </Heading>
                    </Box>
                    {/* Pre-leased / Pre-Ented */}
                    <Box className={style.optional_box}>
                        <Box>
                            <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
                                Is it Pre-leased / Pre-Rented ?
                            </Heading>
                            <Text> for properties that are already rented out </Text>
                        </Box>
                        <Box>
                            <button value={"Yes"} onClick={(e) => {
                                e.preventDefault();
                                setPreLeased(e.target.value)
                            }} className={preLeased == "Yes" ? style.setbtn : style.btn} > Yes </button>
                            <button value={"No"} onClick={(e) => {
                                e.preventDefault();
                                setPreLeased(e.target.value)
                            }} className={preLeased == "No" ? style.setbtn : style.btn} > No </button>
                        </Box>
                    </Box>
                    {/* pre-leased / pre-Rented */}
                    <Box display={preLeased == "Yes" ? "grid" : "none"}>
                        <Heading
                            as={"h4"}
                            size={"sm"}
                            margin={"10px 0"}
                            fontWeight={700}
                            textAlign={"left"}
                        >
                            Pre-leased / Pre-Rented Details
                        </Heading>
                        <Heading size={"xs"}
                            margin={"10px 0"}
                            fontWeight={500}
                            textAlign={"left"}>
                            Lease / Rent related details Of your property
                        </Heading>
                        <Box>
                            <Input type="text" value={currentRentPerMonth} onChange={(e) => {
                                e.preventDefault();
                                setCurrentRentPerMonth(e.target.value);
                            }} placeholder={"₹ Current rent per month"} />
                            <Input type="text" value={leaseTenureInYear} onChange={(e) => {
                                e.preventDefault();
                                setLeaseTenureInYear((e.target.value));
                            }} placeholder={"₹ Current rent per month"} />
                            <Box>
                                <Input type="text" value={annualRentIncrease} onChange={(e) => {
                                    e.preventDefault();
                                    setAnnualRentIncrease((e.target.value));
                                }} placeholder="Annual rent increase in % (Optional)" />
                                <Input type="text" value={businessType} onChange={(e) => {
                                    e.preventDefault();
                                    setBusinessType((e.target.value));
                                }} placeholder="Leased to - Business Type (Optional)" />
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
                            Expected Annual Returns
                        </Heading>
                        <Heading as={"h3"} size={"sm"} margin={0} textAlign={"left"}>
                            Based on cost of the property & current monthly rent
                        </Heading>
                        <Input type="text" w={"300px"} value={expectedAnnual} onChange={(e) => setExpectedAnnual(NumericString(e.target.value))} />
                    </Box>
                    {/* office previously used for */}
                    <Box className={style.optional_box}>
                        <Box>
                            <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
                                Your office was previously used for (Optional)
                            </Heading>
                            <Text> * You can select upto 3 </Text>
                        </Box>
                        <Box>
                            <Menu>
                                <MenuButton
                                    px={4}
                                    as={Button}
                                    py={2}
                                    borderRadius='md'
                                    borderWidth='1px'
                                    textAlign={"left"}
                                    width={300}
                                    _hover={{ bg: 'white' }}
                                    _expanded={{ bg: 'white' }}
                                    _focus={{ bg: 'white' }}
                                    rightIcon={<ChevronDownIcon />}
                                >
                                    Select
                                </MenuButton>
                                <MenuList className={style.menu} display={"flex"} flexDirection={"column"} padding={2} >
                                    <Checkbox value={"Backend Office"} onChange={(e) => {
                                        e.preventDefault();
                                        FileSystemHandle(e.target.value)
                                    }} > Backend Office </Checkbox>
                                    <Checkbox value={"CA Office"} onChange={(e) => {
                                        e.preventDefault();
                                        FileSystemHandle(e.target.value)
                                    }} > CA Office </Checkbox>
                                    <Checkbox value={"Fronted Office"} onChange={(e) => {
                                        e.preventDefault();
                                        FileSystemHandle(e.target.value)
                                    }} > Fronted Office </Checkbox>
                                    <Checkbox value={"Small Office Purpose"} onChange={(e) => {
                                        e.preventDefault();
                                        FileSystemHandle(e.target.value)
                                    }} > Small Office Purpose </Checkbox>
                                    <Checkbox value={"Traders Office"} onChange={(e) => {
                                        e.preventDefault();
                                        FileSystemHandle(e.target.value)
                                    }} > Traders Office </Checkbox>
                                    <Checkbox value={"Advocate Office"} onChange={(e) => {
                                        e.preventDefault();
                                        FileSystemHandle(e.target.value)
                                    }} > Advocate Office </Checkbox>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                    {/* property Description */}
                    <Box>
                        <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                            What makes your property unique
                        </Heading>
                        <Heading as={"h3"} size={"xs"} margin={"10px 0"} textAlign={"left"}>
                            Adding description will increase your listing visibility
                        </Heading>
                        <Textarea
                            height={140}
                            value={desc}
                            onChange={(e) => {
                                let my_cleantext = CleanInputText(e.target.value);
                                setDesc(my_cleantext);
                            }}
                        ></Textarea>
                    </Box>
                </Box>

                {/* Amenities */}
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Amenities
                    </Heading>
                    <Box>
                        <button
                            className={
                                amenities.includes("Service / Goods Lift") ? style.setbtn : style.btn
                            }
                            onClick={handleAminities}
                            value={"Service / Goods Lift"}
                        >
                            Service / Goods Lift
                        </button>
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
                                amenities.includes("Waste Disposal") ? style.setbtn : style.btn
                            }
                            onClick={handleAminities}
                            value={"Waste Disposal"}
                        >
                            Waste Disposal
                        </button>
                        <button
                            className={
                                amenities.includes("AMT")
                                    ? style.setbtn
                                    : style.btn
                            }
                            onClick={handleAminities}
                            value={"AMT"}
                        >
                            AMT
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
                            className={amenities.includes("Shopping Centre") ? style.setbtn : style.btn}
                            onClick={handleAminities}
                            value={"Shopping Centre"}
                        >
                            Shopping Centre
                        </button>
                        <button
                            className={
                                amenities.includes("Grade A Building")
                                    ? style.setbtn
                                    : style.btn
                            }
                            onClick={handleAminities}
                            value={"Grade A Building"}
                        >
                            Grade A Building
                        </button>
                        <button
                            className={
                                amenities.includes("Conference room")
                                    ? style.setbtn
                                    : style.btn
                            }
                            onClick={handleAminities}
                            value={"Conference room"}
                        >
                            Conference room
                        </button>
                        <button
                            className={
                                amenities.includes("Cafeteria / Food Court") ? style.setbtn : style.btn
                            }
                            onClick={handleAminities}
                            value={"Cafeteria / Food Court"}
                        >
                            Cafeteria / Food Court
                        </button>
                        <button
                            className={
                                amenities.includes("Grocery Shop") ? style.setbtn : style.btn
                            }
                            onClick={handleAminities}
                            value={"Grocery Shop"}
                        >
                            Grocery Shop
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
                                amenities.includes("Grocery Shop") ? style.setbtn : style.btn
                            }
                            onClick={handleAminities}
                            value={"Grocery Shop"}
                        >
                            Grocery Shop
                        </button>
                        <button
                            className={
                                amenities.includes("Security Personnel") ? style.setbtn : style.btn
                            }
                            onClick={handleAminities}
                            value={"Security Personnel"}
                        >
                            Security Personnel
                        </button>
                        <button
                            className={
                                amenities.includes("Intercom Facility") ? style.setbtn : style.btn
                            }
                            onClick={handleAminities}
                            value={"Intercom Facility"}
                        >
                            Intercom Facility
                        </button>
                        <button
                            className={
                                amenities.includes("Intercom Facility") ? style.setbtn : style.btn
                            }
                            onClick={handleAminities}
                            value={"Intercom Facility"}
                        >
                            Intercom Facility
                        </button>
                        <button
                            className={
                                amenities.includes("LIF") ? style.setbtn : style.btn
                            }
                            onClick={handleAminities}
                            value={"LIF"}
                        >
                            LIF(s)
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
                                propertyFeatures.includes("Centrally Air Conditioned")
                                    ? style.setbtn
                                    : style.btn
                            }
                            value={"Centrally Air Conditioned"}
                            onClick={handlePropertyFeature}
                        >
                            Centrally Air Conditioned
                        </button>
                        <button
                            className={
                                propertyFeatures.includes("Near Bank")
                                    ? style.setbtn
                                    : style.btn
                            }
                            value={"Near Bank"}
                            onClick={handlePropertyFeature}
                        >
                            Near Bank
                        </button>
                        <button
                            className={
                                propertyFeatures.includes("Power Back-up") ? style.setbtn : style.btn
                            }
                            value={"Power Back-up"}
                            onClick={handlePropertyFeature}
                        >
                            Power Back-up
                        </button>
                        <button
                            className={
                                propertyFeatures.includes("Reserved Parking")
                                    ? style.setbtn
                                    : style.btn
                            }
                            value={"Reserved Parking"}
                            onClick={handlePropertyFeature}
                        >
                            Reserved Parking
                        </button>
                        <button
                            className={
                                propertyFeatures.includes("Swimming Pool")
                                    ? style.setbtn
                                    : style.btn
                            }
                            value={"Swimming Pool"}
                            onClick={handlePropertyFeature}
                        >
                            Swimming Pool
                        </button>
                        <button
                            className={
                                propertyFeatures.includes("Club house / Community Center")
                                    ? style.setbtn
                                    : style.btn
                            }
                            value={"Club house / Community Center"}
                            onClick={handlePropertyFeature}
                        >
                            Club house / Community Center
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
                                buildingFeature.includes("WheelChair Accessibilitiy")
                                    ? style.setbtn
                                    : style.btn
                            }
                            onClick={HandleBuildingFeature}
                            value={"WheelChair Accessibilitiy"}
                        >

                            WheelChair Accessibilitiy
                        </button>
                        <button
                            className={
                                buildingFeature.includes("DG Availability")
                                    ? style.setbtn
                                    : style.btn
                            }
                            onClick={HandleBuildingFeature}
                            value={"DG Availability"}
                        >

                            DG Availability
                        </button>
                        <button
                            className={
                                buildingFeature.includes("CCTV surveillance")
                                    ? style.setbtn
                                    : style.btn
                            }
                            onClick={HandleBuildingFeature}
                            value={"CCTV surveillance"}
                        >

                            CCTV surveillance
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
                                additinalft.includes("Separate entry for sevant room")
                                    ? style.setbtn
                                    : style.btn
                            }
                            value={"Separate entry for sevant room"}
                            onClick={handleAdditionalFeature}
                        >

                            Separate entry for sevant room
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
                {/* Other Features */}
                <Box>
                    <Heading size={"md"} margin={"10px 0 4px 0"} textAlign={"left"}>
                        Other Features
                    </Heading>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"left"} >
                        <Checkbox value={"Wheelchair friendly"} onChange={handleOtherFeatures}>Wheelchair friendly</Checkbox>
                    </Box>
                </Box>
                {/* location advantage (near to which place) */}
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
                                locationAdv.includes("Close to Metro Station")
                                    ? style.setbtn
                                    : style.btn
                            }
                            value={"Close to Metro Station"}
                            onClick={handlelocationadvantages}
                        >
                            Close to Metro Station
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
                {/* warning line */}
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
                {/* form submit button */}
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
            </form>
        </Box>
    );
};

export default CoWorkingspaceUpdate;

