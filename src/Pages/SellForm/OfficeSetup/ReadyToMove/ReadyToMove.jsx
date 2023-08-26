import React, { useState, useEffect } from "react";
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
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Menu,
    MenuButton,
    MenuList,
} from "@chakra-ui/react";
import style from "./ReadyToMove.module.css";
import { useSelector } from "react-redux";
import { AddIcon, ChevronDownIcon, MinusIcon } from "@chakra-ui/icons";
import axios from "axios";
import { CleanInputText } from "../../code";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const ReadyToMove = () => {
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
    const [minseat, setMinseat] = useState("");
    const [maxseat, setMaxseat] = useState("");
    const [cabins, setCabins] = useState("");
    const [meetingRoom, setMeetingRoom] = useState("");
    const [washroomType, setWashroomType] = useState("");
    const [privateWashroom, setPrivateWashroom] = useState(0);
    const [sharedWashroom, setSharedWashroom] = useState(0);
    const [conferenceRoom, setConferenceRoom] = useState("");
    const [receptionArea, setReceptionArea] = useState("");
    const [pantryType, setPantryType] = useState("");
    const [furnishing, setFurnishing] = useState("");
    const [centralAirConditioning, setcentralAirConditioning] = useState("");
    const [oxygenDuct, setOxygenDuct] = useState("");
    const [ups, setUps] = useState("");
    const [fireSafty, setFireSafty] = useState([]);
    const [stairCase, setStairCase] = useState("");
    const [liftStatus, setLiftStatus] = useState("");
    const [liftPassenger, setLiftPassenger] = useState(0);
    const [liftService, setLiftService] = useState(0);
    const [modernLifts, setModernLifts] = useState(true);
    const [parkingStatus, setParkingStatus] = useState("");
    const [parkingArr, setParkingArr] = useState([]);
    const [parkingTotalNumber, setParkingTotalNumber] = useState("");
    const [preLeased, setPreLeased] = useState("");
    const [fireNOC, setFireNOC] = useState("");
    const [occupancyCertificate, setOccupancyCertificate] = useState("");



    const [areaPer, setAreaPer] = useState("sq.ft");
    const [availability, setAvailability] = useState("");
    const [fromyear, setFromyear] = useState("");
    const [expectedyear, setExpectedYear] = useState("");
    const [ownership, setOwnerShip] = useState("");
    const [pricedetail, setPricedetail] = useState("");
    const [priceSqr, setPriceSqr] = useState("");
    const [inclusivePrices, setInclusivePrice] = useState([]);
    const [amenities, setAminity] = useState([]);  
    const [locationAdv, setLocationAdv] = useState([]);
    const [totalfloors, setTotalFloors] = useState("");
    const [plotArea, setPlotArea] = useState("");
    const [desc, setDesc] = useState("");
    const [pincollection, setPinCollection] = useState([]);
    const [additionalPrice, setAdditionalPrice] = useState(false);
    const [maintenancePrice, setMaintenancePrice] = useState("");
    const [maintenanceTimePeriod, setMaintenanceTimePeriod] = useState("Monthly");
    const [expectedRentel, setExpectedRentel] = useState("");
    const [bookingAmount, setBookingAmount] = useState("");
    const [annualDuesPayble, setAnnualDuesPayble] = useState("");
    const [zoneType, setZoneType] = useState("");

    // please don'nt change any function without any prior knowledge   

    const handleSubmitData = async (e) => {
        e.preventDefault();
        let obj = {
            lookingFor: "Sell",
            propertyGroup: "Residential",
            propertyType: "Office setup",
            address: {
                apartmentName: appartment,
                houseNumber: houseNo,
                locality,
                pincode,
                city,
                state,
                country,
            },
            ownership,
            price: +pricedetail,
            priceUnit: +priceSqr,
            inclusivePrices,
            amenities,  
            roadFacingWidth: facingwidth, 
            totalFloors: +totalfloors, 
            plotArea,
            plotAreaUnit: areaPer,
            description: desc,
            countryCurrency: `${isCountry.country == "india" ? "₹" : "$"}`,
            additionalPricingDetails: {
                maintenancePrice,
                maintenanceTimePeriod,
                expectedRental: expectedRentel,
                bookingAmount,
                annualDuesPayable: annualDuesPayble,
            },
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
        } else if (!pricedetail) {
            showToastError("Provide PriceDetail");
        } else if (!priceSqr) {
            showToastError("Provide Price Per sq.ft");
        } else if (!totalfloors) {
            showToastError("Provide Total Floors");
        } else if (!facingwidth) {
            showToastError("Provide facing width");
        }

        if (locationAdv) {
            obj["locationAdv"] = locationAdv;
        }

        if (
            city &&
            appartment &&
            locality &&
            houseNo &&
            ownership &&
            pricedetail &&
            priceSqr &&
            inclusivePrices && 
            totalfloors
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
            // else {
            try {
                // let response = await fetch("http://localhost:4500/property/", {
                //     method: "POST",
                //     headers: head,
                //     body: JSON.stringify(obj)
                // });
                // let data = await response.json();
                // console.log("data",data); 
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
            console.log(pin);
            let res = await axios.get(
                `https://assetorix.onrender.com/pincode/?pincode=${pin}`
            );
            setState(res.data[0].state);
            setCity(res.data[0].city);
            setCountry(res.data[0].country);
            setPinCollection(res.data);
        } catch (err) {
            console.log(err);
        }
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

    const handleNumberOfParking = (e) => {
        e.preventDefault();
        let newarr = [...parkingArr];
        let value = e.target.value;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setParkingArr(newarr);
    }

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

    const handleinclusiveandtax = (e) => {
        let newarr = [...inclusivePrices];
        let value = e;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        setInclusivePrice(newarr);
    }; 

    const areaCalucation = () => {
        if (pricedetail && plotArea) {
            let max = Math.max(Number(pricedetail), Number(plotArea));
            let min = Math.min(Number(pricedetail), Number(plotArea));
            let ans = Math.round(max / min);
            setPriceSqr(ans);
        }
    };

    const handlefireSafty = (e) => {
        e.preventDefault();
        let newarr = [...fireSafty];
        let value = e.target.value;

        if (newarr.includes(value)) {
            newarr.splice(newarr.indexOf(value), 1);
        } else {
            newarr.push(value);
        }
        console.log(newarr);
        setFireSafty(newarr);
    }

    return (
        <form onSubmit={handleSubmitData}>
            {/* property location */}
            <Box className={style.location_form}>
                <Heading size={"lg"} color={"black"}>
                    Where is your property located?
                </Heading>
                <Heading size={"sm"} color={"black"}>
                    An accurate location helps you connect with right buyers.
                </Heading>

                <Input
                    type="text"
                    padding={"0 10px"}
                    required
                    placeholder="House No. (optional)"
                    value={houseNo}
                    onChange={(e) => setHouseNo(e.target.value)}
                    fontSize={"md"}
                    variant="flushed"
                />
                <Input
                    type="text"
                    padding={"0 10px"}
                    required
                    placeholder="Apartment / Society"
                    fontSize={"md"}
                    value={appartment}
                    onChange={(e) => setApartment(e.target.value)}
                    variant="flushed"
                />
                <Select
                    fontSize={"md"}
                    padding={"0 10px"}
                    variant="flushed"
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
                {/* Office Setup  */}
                <Box
                    padding={"10px 0"}
                    display={"grid"}
                    gap={6}
                    className={style.optional_box}
                >
                    <Heading as={"h3"} size={"md"}>
                        Describe your office setup
                    </Heading>
                    <Box>
                        <Input
                            type="text"
                            placeholder="Mini. no. of Seats"
                            value={minseat}
                            onChange={(e) => setMinseat(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Max. no. of Seats (optional)"
                            value={maxseat}
                            onChange={(e) => setMaxseat(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="No. of Cabins"
                            value={cabins}
                            onChange={(e) => setCabins(e.target.value)}
                        />
                    </Box>
                </Box>
                {/* No. of Meeting Rooms */}
                <Box
                    padding={"10px 0"}
                    display={"grid"}
                    gap={6}
                    className={style.optional_box}
                >
                    <Heading as={"h3"} size={"md"}>
                        No. of Meeting Rooms
                    </Heading>
                    <Box>
                        <Input
                            type="text"
                            placeholder="No. of Meeting Rooms"
                            value={meetingRoom}
                            onChange={(e) => setMeetingRoom(e.target.value)}
                        />
                    </Box>
                </Box>
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
                {/* Conference Room */}
                <Box padding={"10px 0 8px 0"}>
                    <Heading as={"h3"} size={"md"} textAlign={"left"} > Conference Room </Heading>
                    <Box display={"flex"} gap={10} padding={"12px 0 0 0"} >
                        <button
                            value={"Available"}
                            margin="auto"
                            onClick={(e) => {
                                e.preventDefault();
                                setConferenceRoom(e.target.value);
                            }}
                            className={
                                conferenceRoom === "Available" ? style.setbtn : style.btn
                            }
                        >
                            Available
                        </button>
                        <button
                            value={"Not-Available"}
                            onClick={(e) => {
                                e.preventDefault();
                                setConferenceRoom(e.target.value);
                            }}
                            className={
                                conferenceRoom === "Not-Available" ? style.setbtn : style.btn
                            }
                        >
                            Not-Available
                        </button>
                    </Box>
                </Box>
                {/* Reception Area */}
                <Box padding={"10px 0 8px 0"}>
                    <Heading as={"h3"} size={"md"} textAlign={"left"} > Reception Area </Heading>
                    <Box display={"flex"} gap={10} padding={"12px 0 0 0"} >
                        <button
                            value={"Available"}
                            margin="auto"
                            onClick={(e) => {
                                e.preventDefault();
                                setReceptionArea(e.target.value);
                            }}
                            className={
                                receptionArea === "Available" ? style.setbtn : style.btn
                            }
                        >
                            Available
                        </button>
                        <button
                            value={"Not-Available"}
                            onClick={(e) => {
                                e.preventDefault();
                                setReceptionArea(e.target.value);
                            }}
                            className={
                                receptionArea === "Not-Available" ? style.setbtn : style.btn
                            }
                        >
                            Not-Available
                        </button>
                    </Box>
                </Box>
                {/* Pantry Type */}
                <Box padding={"10px 0 8px 0"}>
                    <Heading as={"h3"} size={"md"} textAlign={"left"} > Pantry Type </Heading>
                    <Box display={"flex"} gap={10} padding={"12px 0"} >
                        <button
                            value={"Private"}
                            margin="auto"
                            onClick={(e) => {
                                e.preventDefault();
                                setPantryType(e.target.value);
                            }}
                            className={
                                pantryType === "Private" ? style.setbtn : style.btn
                            }
                        >
                            Private
                        </button>
                        <button
                            value={"Shared"}
                            onClick={(e) => {
                                e.preventDefault();
                                setPantryType(e.target.value);
                            }}
                            className={
                                pantryType === "Shared" ? style.setbtn : style.btn
                            }
                        >
                            Shared
                        </button>
                        <button
                            value={"Not-Available"}
                            onClick={(e) => {
                                e.preventDefault();
                                setPantryType(e.target.value);
                            }}
                            className={
                                pantryType === "Not-Available" ? style.setbtn : style.btn
                            }
                        >
                            Not-Available
                        </button>
                    </Box>
                    <Box display={(pantryType == "Private" || pantryType == "Shared") ? "flex" : "none"}>
                        <InputGroup w={340} >
                            <Input type="text" border={"1px solid rgb(222, 222, 255)"}
                                _hover={{ backgroundColor: "#fffff" }}
                                backgroundColor={"white"} variant={"filled"} flex={4} placeholder="Pantry Size (optional)" />
                            <Select variant={"filled"}
                                flex={2}
                                value={areaPer}
                                border={"1px solid rgb(222, 222, 255)"}
                                backgroundColor={"white"}
                                _hover={{ backgroundColor: "#fffff" }}
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
                            </Select>
                        </InputGroup>
                    </Box>

                </Box>
                {/* facilities available */}
                <Box textAlign={"left"}>
                    <Heading as={"h3"} size={"md"} padding={"10px 0"}>
                        Please select the facilities available
                    </Heading>
                    <Box display={"flex"} margin={"5px 14px"} w={500} gap={6}>
                        <Text flex={4}>Furnishing</Text>
                        <RadioGroup onChange={setFurnishing} value={furnishing}>
                            <Stack direction='row'>
                                <Radio value='Available'>Available</Radio>
                                <Radio value='Not-Available'>Not-Available</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box display={"flex"} margin={"5px 14px"} w={500} gap={6}>
                        <Text flex={4}>Central Air Conditioning</Text>
                        <RadioGroup onChange={setcentralAirConditioning} value={centralAirConditioning}>
                            <Stack direction='row'>
                                <Radio value='Available'>Available</Radio>
                                <Radio value='Not-Available'>Not-Available</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box display={"flex"} margin={"5px 14px"} w={500} gap={6}>
                        <Text flex={4}>Oxygen Duct</Text>
                        <RadioGroup onChange={setOxygenDuct} value={oxygenDuct}>
                            <Stack direction='row'>
                                <Radio value='Available'>Available</Radio>
                                <Radio value='Not-Available'>Not-Available</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                    <Box display={"flex"} margin={"5px 0 0 14px"} w={500} gap={6}>
                        <Text flex={4}>UPS</Text>
                        <RadioGroup onChange={setUps} value={ups}>
                            <Stack direction='row'>
                                <Radio value='Available'>Available</Radio>
                                <Radio value='Not-Available'>Not-Available</Radio>
                            </Stack>
                        </RadioGroup>
                    </Box>
                </Box>
                {/* Fire safety mesures */}
                <Box textAlign={"left"} className={style.optional_box}>
                    <Heading as={"h3"} size={"md"}>
                        Fire safety measures include
                    </Heading>
                    <Box>
                        <button className={fireSafty.includes("Fire Extinguisher") ? style.setbtn : style.btn} onClick={handlefireSafty} value={"Fire Extinguisher"} > Fire Extinguisher </button>
                        <button className={fireSafty.includes("Fire Sensors") ? style.setbtn : style.btn} onClick={handlefireSafty} value={"Fire Sensors"} > Fire Sensors </button>
                        <button className={fireSafty.includes("Sprinklers") ? style.setbtn : style.btn} onClick={handlefireSafty} value={"Sprinklers"} > Sprinklers </button>
                        <button className={fireSafty.includes("Fire Hose") ? style.setbtn : style.btn} onClick={handlefireSafty} value={"Fire Hose"} > Fire Hose </button>
                    </Box>
                </Box>
                {/* floor details */}
                <Box textAlign={"left"} margin={"6px 0 14px 0"}>
                    <Heading
                        as={"h3"}
                        size={"md"}
                        margin={"30px 0 10px 0"}
                        textAlign={"left"}
                    >
                        Floor Details
                    </Heading>
                    <Text textAlign={"left"} margin={"10px 0"}>
                        Total no of floors and your floor details
                    </Text>
                    <Box display={"flex"} alignItems={"center"} gap={5}>
                        <NumberInput value={totalfloors} className={style.input_borders}>
                            <NumberInputField
                                borderLeft={0}
                                borderRight={0}
                                borderTop={0}
                                borderBottom={"1px solid #4f5bffcf"}
                                borderRadius={0}
                                onChange={(e) => {
                                    const nowval = e.target.value > 90;
                                    if (nowval) {
                                        toast({
                                            title: "Maximum floor count: 90",
                                            status: "error",
                                            duration: 2000,
                                            position: "top-right",
                                        });
                                    } else {
                                        setTotalFloors(e.target.value);
                                    }
                                }}
                                required
                                w={180}
                            />
                        </NumberInput>
                        <Box>
                            <Menu>
                                <MenuButton backgroundColor={"white"}
                                    _hover={{ bg: 'white' }}
                                    _expanded={{ bg: 'white' }}
                                    borderRadius={0}
                                    borderRight={0}
                                    borderLeft={0}
                                    borderTop={0}
                                    _focus={{ boxShadow: 'outline' }} as={Button} rightIcon={<ChevronDownIcon />}>
                                    Actions
                                </MenuButton>
                                <MenuList

                                    display={"flex"}
                                    maxHeight={200}
                                    overflow={"scroll"}
                                    overflowX={"hidden"}
                                    flexDirection={"column"}
                                    padding={"8px 10px"}  >
                                    <Checkbox> Basement </Checkbox>
                                    <Checkbox> Lower Ground </Checkbox>
                                    <Checkbox> Ground </Checkbox>
                                    {Array.from(Array(Number(totalfloors)).keys()).map((e) => {
                                        return <Checkbox value={e + 1}>{e + 1}</Checkbox>
                                    })}
                                </MenuList>
                            </Menu>
                        </Box>
                    </Box>
                </Box>
                {/* Staicases */}
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"}>
                        No. of Staircases (Optional)
                    </Heading>
                    <Input width={300} type="text" placeholder="No. of Staircases" variant={"flushed"} onChange={(e) => setStairCase(e.target.value)} value={stairCase} />
                </Box>
                {/* Lift */}
                <Box textAlign={"left"} className={style.optional_box}>
                    <Heading as={"h3"} size={"md"}>
                        Lifts
                    </Heading>
                    <Box >
                        <button value={"Available"} onClick={(e) => {
                            e.preventDefault();
                            setLiftStatus(e.target.value);
                        }} className={liftStatus == "Available" ? style.setbtn : style.btn} >Available</button>
                        <button value={"Not-Available"} onClick={(e) => {
                            e.preventDefault();
                            setLiftStatus(e.target.value);
                        }} className={liftStatus == "Not-Available" ? style.setbtn : style.btn} >Not-Available</button>
                    </Box>
                    {/* lift availability detail */}
                    <Box padding={"0 40px"} display={liftStatus == "Available" ? "flex" : "none"} flexWrap={"wrap"} gap={"10px"} justifyContent={"space-between"} alignItems={"center"} >
                        <Box display={"flex"} alignItems={"center"}  >
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setLiftPassenger((prev) => prev - 1);
                                }}
                                className={liftPassenger == 0 ? style.washroom_hide : style.washroom_dec}
                                disabled={liftPassenger == 0}
                            >
                                <MinusIcon fontSize={"12px"} />
                            </button>
                            <Text margin={"0 10px"}>{liftPassenger}</Text>
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setLiftPassenger((prev) => prev + 1);
                                }}
                                className={style.washroom_dec}
                            >
                                <AddIcon fontSize={"12px"} />
                            </button>
                            <Text margin={"0 10px"} flex={4}> Passenger Lifts </Text>
                        </Box>
                        <Box padding={"0 40px"}>
                            <Checkbox onChange={() => {
                                setModernLifts(!modernLifts);
                                console.log(modernLifts);
                            }}> Modern lifts (Optional) </Checkbox>
                        </Box>
                    </Box>
                    <Box padding={"0 40px"} display={liftStatus == "Available" ? "flex" : "none"} alignItems={"center"} width={300} >
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setLiftService((prev) => prev - 1);
                            }}
                            className={liftService == 0 ? style.washroom_hide : style.washroom_dec}
                            disabled={liftService == 0}
                        >
                            <MinusIcon fontSize={"12px"} />
                        </button>
                        <Text margin={"0 10px"}>{liftService}</Text>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setLiftService((prev) => prev + 1);
                            }}
                            className={style.washroom_dec}
                        >
                            <AddIcon fontSize={"12px"} />
                        </button>
                        <Text margin={"0 10px"} flex={4}> Service Lifts </Text>
                    </Box>
                </Box>
                {/* Parking */}
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"}>
                        Parking
                    </Heading>
                    <Box>
                        <button value={"Available"} onClick={(e) => {
                            e.preventDefault();
                            setParkingStatus(e.target.value);
                        }} className={parkingStatus == "Available" ? style.setbtn : style.btn} >Available</button>
                        <button value={"Not-Available"} onClick={(e) => {
                            e.preventDefault();
                            setParkingStatus(e.target.value);
                        }} className={parkingStatus == "Not-Available" ? style.setbtn : style.btn} >Not-Available</button>
                    </Box>
                    <Box>
                        <Checkbox onChange={handleNumberOfParking} value={"Private Parking in Basement"} checked={parkingArr.includes("Private Parking in Basement")} >Private Parking in Basement</Checkbox>
                        <Checkbox onChange={handleNumberOfParking} value={"Private Parking Outside"} checked={parkingArr.includes("Private Parking Outside")} >Private Parking Outside</Checkbox>
                        <Checkbox onChange={handleNumberOfParking} value={"Private Parking Outside"} checked={parkingArr.includes("Private Parking Outside")} >Public Parking</Checkbox>
                        <Input type="text" value={parkingTotalNumber} onChange={(e) => {
                            e.preventDefault();
                            setParkingTotalNumber(e.target.value);
                        }} />
                    </Box>
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
                {/* office fire NOC Certified */}
                <Box className={style.optional_box}>
                    <Box>
                        <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
                            Is your office fire NOC Certified
                        </Heading>
                    </Box>
                    <Box>
                        <button value={"Yes"} onClick={(e) => {
                            e.preventDefault();
                            setFireNOC(e.target.value);
                        }} className={fireNOC == "Yes" ? style.setbtn : style.btn} > Yes </button>
                        <button value={"No"} onClick={(e) => {
                            e.preventDefault();
                            setFireNOC(e.target.value);
                        }} className={fireNOC == "No" ? style.setbtn : style.btn} > No </button>
                    </Box>
                </Box>
                {/* Occupancy Certificate */}
                <Box className={style.optional_box}>
                    <Box>
                        <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
                            Occupancy Certificate
                        </Heading>
                    </Box>
                    <Box>
                        <button value={"Yes"} onClick={(e) => {
                            e.preventDefault();
                            setOccupancyCertificate(e.target.value);
                        }} className={occupancyCertificate == "Yes" ? style.setbtn : style.btn} > Yes </button>
                        <button value={"No"} onClick={(e) => {
                            e.preventDefault();
                            setOccupancyCertificate(e.target.value);
                        }} className={occupancyCertificate == "No" ? style.setbtn : style.btn} > No </button>
                    </Box>
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
                            <MenuList className={style.menu}>
                                <Checkbox> Backend Office </Checkbox>
                                <Checkbox> CA Office </Checkbox>
                                <Checkbox> Fronted Office </Checkbox>
                                <Checkbox> Small Office Purpose </Checkbox>
                                <Checkbox> Traders Office </Checkbox>
                                <Checkbox> Advocate Office </Checkbox>
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
                {additionalPrice && (
                    <>
                        <Input
                            type="text"
                            w={"300px"}
                            value={expectedRentel}
                            onChange={(e) => setExpectedRentel(e.target.value)}
                            placeholder="Expected rental"
                            margin={"0"}
                        />
                        <Input
                            type="text"
                            w={"300px"}
                            value={bookingAmount}
                            onChange={(e) => setBookingAmount(e.target.value)}
                            placeholder="Booking Amount"
                            margin={"10px 0 0 0"}
                        />
                        <Input
                            type="text"
                            w={"300px"}
                            value={annualDuesPayble}
                            onChange={(e) => setAnnualDuesPayble(e.target.value)}
                            placeholder="Annual dues payable"
                            margin={"10px 0 0 0"}
                        />
                    </>
                )}
                <Heading
                    as={"h3"}
                    size={"sm"}
                    margin={"10px 0"}
                    color={"#002aff"}
                    fontWeight={500}
                    cursor={"pointer"}
                    onClick={() => setAdditionalPrice(!additionalPrice)}
                    textAlign={"left"}
                >
                    {additionalPrice ? (
                        <IoIosArrowUp style={{ display: "inline" }} />
                    ) : (
                        <IoIosArrowDown style={{ display: "inline" }} />
                    )}
                    Add more pricing details
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
                            amenities.includes("WheelChair Accessibility")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={handleAminities}
                        value={"WheelChair Accessibility"}
                    >
                        WheelChair Accessibility
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
                            amenities.includes("DG Availability") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"DG Availability"}
                    >
                        DG Availability
                    </button>
                    <button
                        className={
                            amenities.includes("CCTV Surveillance") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"CCTV Surveillance"}
                    >
                        CCTV Surveillance
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
                            amenities.includes("Power Back-up") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Power Back-up"}
                    >
                        Power Back-up
                    </button>
                    <button
                        className={
                            amenities.includes("Feng Shui / Vaastu Compliant") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Feng Shui / Vaastu Compliant"}
                    >
                        Feng Shui / Vaastu Compliant
                    </button>
                    <button
                        className={
                            amenities.includes("Securitv Personnel") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Securitv Personnel"}
                    >
                        Securitv Personnel
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
    );
};


export default ReadyToMove;

