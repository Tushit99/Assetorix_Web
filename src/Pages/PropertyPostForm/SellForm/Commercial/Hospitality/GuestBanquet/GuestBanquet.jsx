import React, { useRef, useState } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Heading,
    Input,
    InputGroup,
    Select,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import style from "../Hospitality.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { AlphabetString, CleanInputText, NumericString, WordandNumber } from "../../../../code";




const GuestBanquet = () => {
    const isCountry = useSelector((state) => state.gloalval);
    const toast = useToast();
    const [country, setCountry] = useState("");
    const [facingwidth, setFacingWidth] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [state, setState] = useState("");
    const [locality, setLocality] = useState("");
    const [address, setaddress] = useState("");
    const [room, setRoom] = useState("");
    const [washrooms, setwashrooms] = useState("");
    const [balconey, setBalcony] = useState("");
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
    const [inclusivePrices, setInclusivePrice] = useState([]);
    const [availability, setAvailability] = useState("");
    const [fromyear, setFromyear] = useState("");
    const [expectedyear, setExpectedYear] = useState("");
    const [ownership, setOwnerShip] = useState("");
    const [pricedetail, setPricedetail] = useState("");
    const [priceSqr, setPriceSqr] = useState("");
    const [amenities, setAminity] = useState([]);
    const [propertyFeatures, setPropertyFeature] = useState("");
    const [buildingFeature, setBuildingFeature] = useState([]);
    const [additinalft, setAdditinalFeature] = useState([]);
    const [otherFeature, setOtherFeature] = useState([]);
    const [propertyFacing, setPropertyFacing] = useState("");
    const [additionalPrice, setAdditionalPrice] = useState(false);
    const [flooring, setFlooring] = useState("");
    const [facing, setFacing] = useState("Meter");
    const [locationAdv, setLocationAdv] = useState([]);
    const [plotArea, setPlotArea] = useState("");
    const [desc, setDesc] = useState("");
    const [pincollection, setPinCollection] = useState([]);
    const [preLeased, setPreLeased] = useState("");
    const [currentRentPerMonth, setCurrentRentPerMonth] = useState("");
    const [leaseTenureInYear, setLeaseTenureInYear] = useState("");
    const [annualRentIncrease, setAnnualRentIncrease] = useState("");
    const [businessType, setBusinessType] = useState("");
    const [qualityRating, setqualityRating] = useState("");
    const [maintenancePrice, setMaintenancePrice] = useState("");
    const [maintenanceTimePeriod, setMaintenanceTimePeriod] = useState("Monthly");
    const [bookingAmount, setBookingAmount] = useState("");
    const [expectedRentel, setExpectedRentel] = useState("");
    const [annualDuesPayble, setAnnualDuesPayble] = useState("");
    // state for drop box images
    const [images, setImages] = useState([]);
    const [isDraging, setIsDraging] = useState(false);
    const fileInputRef = useRef(null);


    const handleSubmitData = async (e) => {
        e.preventDefault();
        let obj = {
            lookingFor: "Sell",
            propertyGroup: "Commercial",
            propertyType: "Hospitality",
            hospitalityType: "Guest-House / Banquet-Hall",
            address: {
                address: address,
                locality,
                pincode,
                city,
                state,
                country,
            },
            washrooms,
            roomDetails: {
                rooms: +room,
                balcony: balconey,
            },
            ownership,
            price: +pricedetail,
            priceUnit: +priceSqr,
            inclusivePrices,
            amenities,
            propertyFeatures,
            society_buildingFeatures: buildingFeature,
            additionalFeatures: additinalft,
            otherFeatures: otherFeature,
            propertyFacing,
            flooring,
            roadFacingWidth: facingwidth,
            preLeased_Rented: preLeased,
            roadFacingWidthType: facing,
            plotArea,
            qualityRating,
            plotAreaUnit: areaPer,
            otherRoom: extraroom,
            description: desc,
            countryCurrency: `${isCountry.country == "india" ? "₹" : "$"}`,
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
        } else if (!room) {
            showToastError('Provide room');
        } else if (!washrooms) {
            showToastError('Provide washrooms');
        } else if (!balconey) {
            showToastError('Provide balconey');
        } else if (!furnishedarr) {
            showToastError('Provide Furnished Field');
        } else if (!ownership) {
            showToastError('Provide OwnerShip');
        } else if (!pricedetail) {
            showToastError('Provide PriceDetail');
        } else if (!additinalft) {
            showToastError('Provide Property description');
        } else if (!propertyFacing) {
            showToastError('Provide Property Facing');
        } else if (!flooring) {
            showToastError('Provide Flooring');
        } else if (!facing) {
            showToastError('Provide Facing');
        } else if (!facingwidth) {
            showToastError("Provide facing width")
        }

        if (locationAdv) {
            obj["locationAdv"] = locationAdv
        }

        if (
            city &&
            locality &&
            address &&
            room &&
            washrooms &&
            balconey &&
            furnishedarr &&
            ownership &&
            pricedetail &&

            inclusivePrices &&
            additinalft &&
            // watersource &&
            propertyFacing &&
            flooring &&
            facing
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

            if (additionalPrice == true) {
                let box = {
                    maintenancePrice,
                    maintenanceTimePeriod,
                    bookingAmount,
                    expectedRental: expectedRentel,
                    annualDuesPayable: annualDuesPayble
                }
                obj["additionalPricingDetails"] = box;
            }

            if (furnished == "Furnished" || furnished == "Semi-Furnished") {
                obj.furnishedObj = {
                    light,
                    fans,
                    ac,
                    tv,
                    beds: Beds,
                    wardrobe,
                    geyser,
                }
                obj["furnishedList"] = furnishedarr;
            }

            if (preLeased == "Yes") {
                let preLeased_RentedDetails = {
                    currentRentPerMonth,
                    leaseTenureInYear,
                    annualRentIncrease,
                    businessType
                }
                obj["preLeased_RentedDetails"] = preLeased_RentedDetails
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
                console.log("data", obj);
                await axios.post(`${process.env.REACT_APP_URL}/property/`, obj, { headers: head })
                    .then((e) => {
                        toast({
                            title: e.data.msg,
                            description: e.data.msg,
                            status: 'success',
                            duration: 2000,
                        })
                        submitImage(e.data.id);
                    }).catch((err) => {
                        console.log(err);
                    })
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

    // image uploading after uploading the data:  
    const submitImage = async (productID) => {
        try {
            let id = localStorage.getItem("usrId") || undefined;
            let authorization = localStorage.getItem("AstToken") || undefined;

            let headersList = {
                "Accept": "*/*",
                "Authorization": authorization,
                "id": id
            }

            let formdata = new FormData();
            images.forEach((image) => {
                formdata.append("image", image.image);
            });

            let bodyContent = formdata;

            let reqOptions = {
                url: `${process.env.REACT_APP_URL}/upload/${productID}`,
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }

            let response = await axios.request(reqOptions)
            console.log(response.data);
        } catch (error) {

        }

    };



    const handlepinfetch = (e) => {
        let val = e.target.value;
        setPincode(val);
        if (val.length == 6) {
            pinfetch(val);
        }
        else {
            console.log(val);
        }
    }



    const pinfetch = async (pin) => {
        try {

            let res = await axios.get(`${process.env.REACT_APP_URL}/pincode/?pincode=${pin}`);
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


    const areaCalucation = () => {
        if (pricedetail && plotArea) {
            let max = Math.max(Number(pricedetail), Number(plotArea));
            let min = Math.min(Number(pricedetail), Number(plotArea));
            let ans = Math.round(max / min);
            setPriceSqr(ans);
        }
    }

    // ======--- image upload function   
    const selectFiles = () => {
        fileInputRef.current.click();
    }

    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
      };

    const onFileSelect = (e) => {
        let files = e.target.files;
        if (files.length === 0) {
            return
        }
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') {
                continue;
            }
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prev) => [...prev, {
                    name: files[i].name,
                    image: files[i],
                },])
            } 
        }
    }

    const ondragleave = (event) => {
        event.preventDefault();
        setIsDraging(false);
        console.log("leave")
    }

    const ondragover = (event) => {
        event.preventDefault();
        setIsDraging(true);
        event.dataTransfer.dropEffect = "copy";
        console.log("over the box");
    }

    const ondrop = (event) => {
        event.preventDefault(); // Add this line
        setIsDraging(false);
        const files = event.dataTransfer.files;
        console.log(event.dataTransfer.files);

        if (files.length === 0) {
            return;
        }

        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') {
                continue;
            }
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prev) => [...prev, {
                    name: files[i].name,
                    image: files[i],
                }]);
            }
        }
        console.log("droped");
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
            {/* ============================= property location =========================== */}
            <Box className={style.location_form}>
                <Heading size={"lg"}>Where is your property located?</Heading>
                <Heading size={"sm"}>
                    An accurate location helps you connect with the right buyers.
                </Heading>
                <Input
                    type="text"
                    maxLength={"100"}
                    required
                    placeholder="Address (optional)"
                    value={address}
                    onChange={(e) => setaddress(WordandNumber(e.target.value))}
                    fontSize={"md"}
                    variant="flushed"
                />
                <Input
                    type="text"
                    placeholder={"Enter pincode"}
                    maxLength={"6"}
                    required
                    fontSize={"md"}
                    value={pincode}
                    onChange={handlepinfetch}
                />
                <Input
                    type="text"
                    maxLength={"100"}
                    required
                    placeholder="Locality"
                    list="browsers"
                    value={locality}
                    onChange={(e) => setLocality(WordandNumber(e.target.value))}
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
                    maxLength={"100"}
                    required
                    placeholder="Enter City"
                    fontSize={"md"}
                    value={city}
                    onChange={(e) => setCity(WordandNumber(e.target.value))}
                    variant="flushed"
                />
                <Input
                    type="text"
                    maxLength={"100"}
                    required
                    placeholder="Enter State"
                    value={state}
                    onChange={(e) => setState(WordandNumber(e.target.value))}
                    fontSize={"md"}
                    variant="flushed"
                />
                <Input
                    type="text"
                    maxLength={"100"}
                    required
                    placeholder="Enter Country"
                    value={country}
                    onChange={(e) => setCountry(WordandNumber(e.target.value))}
                    fontSize={"md"}
                    variant="flushed"
                />

            </Box>
            {/* =============================== Property Detail ============================= */}
            <Box marginTop={12}>
                <Heading as={"h3"} size={"md"} margin={"30px 0 10px 0"}>
                    Tell us about your property
                </Heading>
                <Heading as={"h4"} size={"sm"} margin={"0 0 30px 0 "}>
                    Add Room Details
                </Heading>
                <Box as={"div"} className={style.inp_form_numbers}>
                    <Box textAlign={"left"} >
                        <Text> No. of rooms </Text>
                        <Input type="text"
                            maxLength={"2"}
                            variant="flushed"
                            onChange={(e) => {
                                setRoom(NumericString(e.target.value));
                            }}
                            value={room}
                            required />
                    </Box>
                    <Box textAlign={"left"}>
                        <Text> No. of washroomss </Text>
                        <Input type="text"
                            variant="flushed"
                            maxLength={"2"}
                            onChange={(e) => {
                                setwashrooms(NumericString(e.target.value));
                            }}
                            value={washrooms}
                            required
                            padding={"0 2px"} />
                    </Box>
                    <Box textAlign={"left"}>
                        <Text> No. of Balconies </Text>
                        <Input type="text"
                            maxLength={"2"}
                            variant="flushed"
                            onChange={(e) => {
                                setBalcony(NumericString(e.target.value));
                            }}
                            value={balconey}
                            padding={"0 2px"}
                            required />
                    </Box>
                </Box>
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
                        <Input
                            type="text"
                            maxLength={"10"}
                            placeholder="Enter Plot Area"
                            value={plotArea}
                            onChange={(e) => {
                                areaCalucation();
                                setPlotArea(NumericString(e.target.value));
                            }}
                            required />
                        <Select value={areaPer} onChange={(e) => {
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
                        </Select>
                    </ButtonGroup>
                </Box>
                {/* other Room  */}
                <Box
                    padding={"10px 0"}
                    display={"grid"}
                    gap={6}
                    className={style.optional_box}
                >
                    <Heading as={"h3"} size={"md"}>
                        Other rooms (optional)
                    </Heading>
                    <Box>
                        <button
                            value={"Pooja Room"}
                            className={
                                extraroom.includes("Pooja Room") ? style.setbtn : style.btn
                            }
                            onClick={handlerooms}
                        >

                            Pooja Room
                        </button>
                        <button
                            value={"Study Room"}
                            className={
                                extraroom.includes("Study Room") ? style.setbtn : style.btn
                            }
                            onClick={handlerooms}
                        >

                            Study Room
                        </button>
                        <button
                            value={"Servant Room"}
                            className={
                                extraroom.includes("Servant Room") ? style.setbtn : style.btn
                            }
                            onClick={handlerooms}
                        >

                            Servant Room
                        </button>
                        <button
                            value={"Store Room"}
                            className={
                                extraroom.includes("Store Room") ? style.setbtn : style.btn
                            }
                            onClick={handlerooms}
                        >

                            Store Room
                        </button>
                    </Box>
                </Box>
                {/* furnish */}
                <Box
                    padding={"10px 0"}
                    display={"grid"}
                    gap={6}
                    className={style.optional_box}
                >
                    <Heading as={"h3"} size={"md"}>
                        Furnishing
                    </Heading>
                    <Box>
                        <button
                            value={"Furnished"}
                            className={furnished === "Furnished" ? style.setbtn : style.btn}
                            onClick={checkFurnished}
                        >

                            Furnished
                        </button>
                        <button
                            value={"Semi-Furnished"}
                            className={
                                furnished === "Semi-Furnished" ? style.setbtn : style.btn
                            }
                            onClick={checkFurnished}
                        >

                            Semi-Furnished
                        </button>
                        <button
                            value={"Un-furnished"}
                            className={
                                furnished === "Un-furnished" ? style.setbtn : style.btn
                            }
                            onClick={checkFurnished}
                        >

                            Un-furnished
                        </button>
                    </Box>
                    {/* if furnished detail */}
                    <Box
                        display={
                            furnished == "Furnished" || furnished == "Semi-Furnished"
                                ? "grid"
                                : "none"
                        }
                        padding={"10px 0"}
                        gap={6}
                    >
                        <Heading as={"h4"} fontWeight={400} size={"sm"} color={"#656565"}>
                            At least three furnishings are mandatory for furnished
                        </Heading>
                        <Box className={style.furnished_detail}>
                            <Box>
                                <button
                                    className={style.mns_btn}
                                    disabled={light === 0}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setLight(light - 1)
                                    }}
                                >
                                    <MinusIcon fontSize={"12px"} />
                                </button>
                                <h3>{light}</h3>
                                <button
                                    className={style.pls_btn}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setLight(light + 1)
                                    }}
                                >
                                    <AddIcon fontSize={"12px"} />
                                </button>
                                <h3> Light </h3>
                            </Box>
                            <Box>
                                <button
                                    className={style.mns_btn}
                                    disabled={fans === 0}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setFans(fans - 1)
                                    }}
                                >
                                    <MinusIcon fontSize={"12px"} />
                                </button>
                                <h3>{fans}</h3>
                                <button
                                    className={style.pls_btn}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setFans(fans + 1)
                                    }}
                                >
                                    <AddIcon fontSize={"12px"} />
                                </button>
                                <h3> Fans </h3>
                            </Box>
                            <Box>
                                <button
                                    className={style.mns_btn}
                                    disabled={ac === 0}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setAc(ac - 1)
                                    }}
                                >
                                    <MinusIcon fontSize={"12px"} />
                                </button>
                                <h3>{ac}</h3>
                                <button className={style.pls_btn} onClick={(e) => {
                                    e.preventDefault();
                                    setAc(ac + 1)
                                }}>
                                    <AddIcon fontSize={"12px"} />
                                </button>
                                <h3> AC </h3>
                            </Box>
                            <Box>
                                <button
                                    className={style.mns_btn}
                                    disabled={tv === 0}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setTv(tv - 1)
                                    }}
                                >
                                    <MinusIcon fontSize={"12px"} />
                                </button>
                                <h3>{tv}</h3>
                                <button className={style.pls_btn} onClick={(e) => {
                                    e.preventDefault();
                                    setTv(tv + 1)
                                }}>
                                    <AddIcon fontSize={"12px"} />
                                </button>
                                <h3> TV </h3>
                            </Box>
                            <Box>
                                <button
                                    className={style.mns_btn}
                                    disabled={Beds === 0}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setBeds(Beds - 1)
                                    }}
                                >
                                    <MinusIcon fontSize={"12px"} />
                                </button>
                                <h3>{Beds}</h3>
                                <button
                                    className={style.pls_btn}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setBeds(Beds + 1)
                                    }}
                                >
                                    <AddIcon fontSize={"12px"} />
                                </button>
                                <h3> Beds </h3>
                            </Box>
                            <Box>
                                <button
                                    className={style.mns_btn}
                                    disabled={wardrobe === 0}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setWardrobe(wardrobe - 1)
                                    }}
                                >
                                    <MinusIcon fontSize={"12px"} />
                                </button>
                                <h3>{wardrobe}</h3>
                                <button
                                    className={style.pls_btn}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setWardrobe(wardrobe + 1)
                                    }}
                                >
                                    <AddIcon fontSize={"12px"} />
                                </button>
                                <h3> Wardrobe </h3>
                            </Box>
                            <Box>
                                <button
                                    className={style.mns_btn}
                                    disabled={geyser === 0}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setGeyser(geyser - 1)
                                    }}
                                >
                                    <MinusIcon fontSize={"12px"} />
                                </button>
                                <h3>{geyser}</h3>
                                <button
                                    className={style.pls_btn}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setGeyser(geyser + 1)
                                    }}
                                >
                                    <AddIcon fontSize={"12px"} />
                                </button>
                                <h3> Geyser </h3>
                            </Box>
                            <Box>
                                <Checkbox
                                    onChange={furnisheddetails}
                                    isChecked={furnishedarr.includes("Sofa")}
                                    value={"Sofa"}
                                    icon={<AddIcon />}
                                >
                                    Sofa
                                </Checkbox>
                            </Box>
                            <Box>
                                <Checkbox
                                    onChange={furnisheddetails}
                                    isChecked={furnishedarr.includes("Washing Machine")}
                                    value={"Washing Machine"}
                                    icon={<AddIcon />}
                                >
                                    Washing Machine
                                </Checkbox>
                            </Box>
                            <Box>
                                <Checkbox
                                    onChange={furnisheddetails}
                                    isChecked={furnishedarr.includes("Stove")}
                                    value={"Stove"}
                                    icon={<AddIcon />}
                                >
                                    Stove
                                </Checkbox>
                            </Box>
                            <Box>
                                <Checkbox
                                    onChange={furnisheddetails}
                                    isChecked={furnishedarr.includes("Fridge")}
                                    value={"Fridge"}
                                    icon={<AddIcon />}
                                >
                                    Fridge
                                </Checkbox>
                            </Box>
                            <Box>
                                <Checkbox
                                    onChange={furnisheddetails}
                                    isChecked={furnishedarr.includes("Water Purifier")}
                                    value={"Water Purifier"}
                                    icon={<AddIcon />}
                                >
                                    Water Purifier
                                </Checkbox>
                            </Box>
                            <Box>
                                <Checkbox
                                    onChange={furnisheddetails}
                                    isChecked={furnishedarr.includes("Microwave")}
                                    value={"Microwave"}
                                    icon={<AddIcon />}
                                >
                                    Microwave
                                </Checkbox>
                            </Box>
                            <Box>
                                <Checkbox
                                    onChange={furnisheddetails}
                                    isChecked={furnishedarr.includes("Modular Kitchen")}
                                    value={"Modular Kitchen"}
                                    icon={<AddIcon />}
                                >
                                    Modular Kitchen
                                </Checkbox>
                            </Box>
                            <Box>
                                <Checkbox
                                    onChange={furnisheddetails}
                                    isChecked={furnishedarr.includes("Chimney")}
                                    value={"Chimney"}
                                    icon={<AddIcon />}
                                >
                                    Chimney
                                </Checkbox>
                            </Box>
                            <Box>
                                <Checkbox
                                    onChange={furnisheddetails}
                                    isChecked={furnishedarr.includes("Dining Table")}
                                    value={"Dining Table"}
                                    icon={<AddIcon />}
                                >
                                    Dining Table
                                </Checkbox>
                            </Box>
                            <Box>
                                <Checkbox
                                    onChange={furnisheddetails}
                                    isChecked={furnishedarr.includes("Curtains")}
                                    value={"Curtains"}
                                    icon={<AddIcon />}
                                >
                                    Curtains
                                </Checkbox>
                            </Box>
                            <Box>
                                <Checkbox
                                    onChange={furnisheddetails}
                                    isChecked={furnishedarr.includes("Exhaust Fan")}
                                    value={"Exhaust Fan"}
                                    icon={<AddIcon />}
                                >
                                    Exhaust Fan
                                </Checkbox>
                            </Box>
                        </Box>
                    </Box>
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

            {/* ============================= Quality Rating ====================================== */}
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Quality Rating
                </Heading>
                <Box flexWrap={"wrap"}>
                    <button
                        className={
                            qualityRating == "No Rating" ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setqualityRating(e.target.value);
                        }}
                        value={"No Rating"}
                    >
                        No Rating
                    </button>
                    <button
                        className={
                            qualityRating == "1 Star" ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setqualityRating(e.target.value);
                        }}
                        value={"1 Star"}
                    >
                        1 Star
                    </button>
                    <button
                        className={
                            qualityRating == "2 Star" ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setqualityRating(e.target.value);
                        }}
                        value={"2 Star"}
                    >
                        2 Star
                    </button>
                    <button
                        className={
                            qualityRating == "3 Star" ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setqualityRating(e.target.value);
                        }}
                        value={"3 Star"}
                    >
                        3 Star
                    </button>
                    <button
                        className={
                            qualityRating == "4 Star" ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setqualityRating(e.target.value);
                        }}
                        value={"4 Star"}
                    >
                        4 Star
                    </button>
                    <button
                        className={
                            qualityRating == "5 Star" ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setqualityRating(e.target.value);
                        }}
                        value={"5 Star"}
                    >
                        5 Star
                    </button>
                    <button
                        className={
                            qualityRating == "6 Star" ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setqualityRating(e.target.value);
                        }}
                        value={"6 Star"}
                    >
                        6 Star
                    </button>
                    <button
                        className={
                            qualityRating == "7 Star" ? style.setbtn : style.btn
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setqualityRating(e.target.value);
                        }}
                        value={"7 Star"}
                    >
                        7 Star
                    </button>
                </Box>
            </Box>

            {/* ============================ OwnerShip detail =========================== */}
            <Box>
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

            {/* ====================== Price Details ================================ */}
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
                        <Input
                            type="text"
                            maxLength={"10"}
                            value={pricedetail}
                            required
                            onChange={(e) => {
                                setPricedetail(NumericString(e.target.value));
                                areaCalucation();
                            }}
                        />
                    </Box>
                </Box>
                <Box display={"flex"} gap={10} margin={"20px 0"} flexWrap={"wrap"}>
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
                </Box>
                <Box textAlign={"left"} display={"grid"}>
                    {additionalPrice && <>
                        <InputGroup w={"300px"} margin={"5px 0"}>
                            <Input w={"60%"} type='text' maxLength={"12"} onChange={(e) => setMaintenancePrice(NumericString(e.target.value))} value={maintenancePrice} placeholder={"Maintenance Price"} />
                            <Select w={"40%"} borderRadius={0} value={maintenanceTimePeriod} onChange={(e) => setMaintenanceTimePeriod(e.target.value)}>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </Select>
                        </InputGroup>
                        <Input type="text" w={"300px"} maxLength={"12"} value={expectedRentel} onChange={(e) => setExpectedRentel(NumericString(e.target.value))} placeholder="Expected rental" margin={"0"} />
                        <Input type="text" w={"300px"} maxLength={"12"} value={bookingAmount} onChange={(e) => setBookingAmount(NumericString(e.target.value))} placeholder="Booking Amount" margin={"10px 0 0 0"} />
                        <Input type="text" w={"300px"} maxLength={"12"} value={annualDuesPayble} onChange={(e) => setAnnualDuesPayble(NumericString(e.target.value))} placeholder="Annual dues payable" margin={"10px 0 0 0"} />
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
            </Box>

            {/* ============================ Is it Pre-leased / Pre-Rented ? ============================ */}
            <Box textAlign={"left"}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Is it Pre-leased / Pre-Rented ?
                </Heading>
                <Heading as={"h5"} size={"xs"} fontWeight={500} margin={"10px 0"} textAlign={"left"}>
                    for properties that are already rented out
                </Heading>
                <Box display={"flex"} gap={5}>
                    <button value={"Yes"} onClick={(e) => {
                        e.preventDefault();
                        setPreLeased(e.target.value);
                    }} className={preLeased == "Yes" ? style.setbtn : style.btn} > Yes </button>
                    <button value={"No"} onClick={(e) => {
                        e.preventDefault();
                        setPreLeased(e.target.value);
                    }} className={preLeased == "No" ? style.setbtn : style.btn} > No </button>
                </Box>
                <Box display={preLeased == "Yes" ? "block" : "none"}>
                    <Input type="text" value={currentRentPerMonth} onChange={(e) => {
                        e.preventDefault();
                        setCurrentRentPerMonth(NumericString(e.target.value));
                    }} placeholder={"₹ Current rent per month"} />
                    <Input type="text" value={leaseTenureInYear} onChange={(e) => {
                        e.preventDefault();
                        let a = NumericString(e.target.value);
                        if (a < 100) {
                            setLeaseTenureInYear(a);
                        }
                    }} placeholder={"Lease tenure in years"} />
                    <Box>
                        <Input type="text" value={annualRentIncrease} onChange={(e) => {
                            e.preventDefault();
                            let a = NumericString(e.target.value);
                            if (a < 100) {
                                setAnnualRentIncrease(a);
                            }
                        }} placeholder="Annual rent increase in % (Optional)" />
                        <Input type="text" value={businessType} onChange={(e) => {
                            e.preventDefault();
                            setBusinessType(AlphabetString(e.target.value));
                        }} placeholder="Leased to - Business Type (Optional)" />
                    </Box>
                </Box>
            </Box>

            {/* image Drag and Drop area  */}
            <Box>
                <Box className={style.top}>
                    <Heading color={"black"} size={"sm"} textAlign={"left"} margin={"10px 0"} > Upload Your Property image </Heading>
                </Box>
                <Box className={style.card}>
                    <Box className={style.dragArea} onDragOver={ondragover} onDragLeave={ondragleave} onDrop={ondrop} >
                        {isDraging ? (
                            <Text className={style.select}>Drop image here</Text>
                        ) : (
                            <>
                                Drag & Drop image here or
                                <Text className={style.select} role='button' onClick={selectFiles} > Browse </Text>
                            </>
                        )}
                        <input type={"file"} name='image' accept="image/jpg, image/png, image/jpeg" formMethod="post" formEncType="multipart/form-data" className={style.file} multiple ref={fileInputRef} onChange={onFileSelect} />
                    </Box> 
                    <Box className={style.container}>  
                        {images.map((image, index) => (  
                            <Box className={style.image} key={index}>  
                                <Text className={style.delete} onClick={() => removeImage(index)}>&#10006;</Text> 
                                <img src={URL.createObjectURL(image.image)} alt="images" />   
                             </Box>   
                        ))}     
                    </Box>  
                </Box>
            </Box>

            {/* ============================ Property unique discription ============================ */}
            <Box>
                <Heading as={"h3"} size={"md"} fontWeight={600} margin={"10px 0"} textAlign={"left"}>
                    What makes your property unique
                </Heading>
                <Heading as={"h3"} size={"xs"} fontWeight={400} color={"#777777"} margin={"10px 0"} textAlign={"left"}>
                    Adding description will increase your listing visibility
                </Heading>
                <Textarea height={140} value={desc} onChange={(e) => {
                    let my_cleantext = CleanInputText(e.target.value);
                    setDesc(my_cleantext);
                }} ></Textarea>
            </Box>


            {/* =============================== Amenities =============================== */}
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Amenities
                </Heading>
                <Box>
                    <button
                        className={
                            amenities.includes("Access to High Speed Internet") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Access to High Speed Internet"}
                    >
                        Access to High Speed Internet
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
                            amenities.includes("Water Storage") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Water Storage"}
                    >

                        Water Storage
                    </button>
                    <button
                        className={
                            amenities.includes("Security / Fire Alarm")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={handleAminities}
                        value={"Security / Fire Alarm"}
                    >

                        Security/ Fire Alarm
                    </button>
                    <button
                        className={
                            amenities.includes("Bar / Lounge") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Bar / Lounge"}
                    >

                        Bar / Lounge
                    </button>
                    <button
                        className={amenities.includes("Conference room") ? style.setbtn : style.btn}
                        onClick={handleAminities}
                        value={"Conference room"}
                    >
                        Conference room
                    </button>
                    <button
                        className={
                            amenities.includes("Club house / Community Center")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={handleAminities}
                        value={"Club house / Community Center"}
                    >

                        Club house / Community Center
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
                        className={amenities.includes("Lift") ? style.setbtn : style.btn}
                        onClick={handleAminities}
                        value={"Lift"}
                    >
                        Lift(s)
                    </button>
                </Box>
            </Box>



            {/* =============================== Property Features =============================== */}
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
                            propertyFeatures.includes("Feng Shui / Vaastu Compliant")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Feng Shui / Vaastu Compliant"}
                        onClick={handlePropertyFeature}
                    >
                        Feng Shui / Vaastu Compliant
                    </button>
                </Box>
            </Box>
            {/* =============================== Society/Building feature =============================== */}
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Society/Building feature
                </Heading>
                <Box>
                    <button
                        className={
                            buildingFeature.includes("Maintenance Staff")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={HandleBuildingFeature}
                        value={"Maintenance Staff"}
                    >

                        Maintenance Staff
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
                            buildingFeature.includes("Grade A Building")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={HandleBuildingFeature}
                        value={"Grade A Building"}
                    >

                        Grade A Building
                    </button>
                    <button
                        className={
                            buildingFeature.includes("Grocery Shop")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={HandleBuildingFeature}
                        value={"Grocery Shop"}
                    >

                        Grocery Shop
                    </button>
                    <button
                        className={
                            buildingFeature.includes("Visitor Parking")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={HandleBuildingFeature}
                        value={"Visitor Parking"}
                    >

                        Visitor Parking
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
                            buildingFeature.includes("Security Personnel")
                                ? style.setbtn
                                : style.btn
                        }
                        onClick={HandleBuildingFeature}
                        value={"Security Personnel"}
                    >
                        Security Personnel
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
                        isChecked={otherFeature.includes("Wheelchair friendly")}
                        value={"Wheelchair friendly"}
                        onChange={handleotherfeature}
                    >

                        Wheelchair friendly
                    </Checkbox>
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

            {/* Width of facing road */}
            <Box className={style.optional_box}>
                <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    Width of facing road
                </Heading>
                <Box display={"flex"} gap={"20px"} w={"300px"} >
                    <Input type="text" variant='flushed' flex={1} required value={facingwidth} onChange={(e) => {
                        e.preventDefault();
                        setFacingWidth(NumericString(e.target.value));
                    }} />
                    <Select flex={1} onChange={(e) => setFacing(e.target.value)} value={facing}>
                        <option value="Meter"> Meter </option>
                        <option value="Feet"> Feet </option>
                    </Select>
                </Box>
            </Box>

            {/* type of flooring */}
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

            {/* location advantage */}
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

export default GuestBanquet;

