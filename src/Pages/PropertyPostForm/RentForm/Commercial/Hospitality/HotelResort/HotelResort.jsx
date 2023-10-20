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
import { Checkbox } from "@chakra-ui/react";
import style from "../../RentComercial.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { CleanInputText, NumericString } from "../../../../code";
// import { AddIcon, MinusIcon } from "@chakra-ui/icons";



const HotelResortRent = () => {
    const isCountry = useSelector((state) => state.gloalval);
    const toast = useToast();
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState(0);
    const [state, setState] = useState("");
    const [locality, setLocality] = useState("");
    const [address, setaddress] = useState("");
    const [room, setRoom] = useState("");
    const [washrooms, setwashrooms] = useState("");
    const [areaPer, setAreaPer] = useState("sq.ft");
    const [availability, setAvailability] = useState("");
    const [fromyear, setFromyear] = useState("");
    const [expectedyear, setExpectedYear] = useState("");
    const [pricedetail, setPricedetail] = useState("");
    const [priceSqr, setPriceSqr] = useState("");
    const [inclusivePrices, setInclusivePrice] = useState([]);
    const [amenities, setAminity] = useState([]);
    const [propertyFeatures, setPropertyFeature] = useState("");
    const [buildingFeature, setBuildingFeature] = useState([]);
    const [additinalft, setAdditinalFeature] = useState([]);
    const [otherFeature, setOtherFeature] = useState([]);
    const [flooring, setFlooring] = useState("");
    const [locationAdv, setLocationAdv] = useState([]);
    const [plotArea, setPlotArea] = useState("");
    const [desc, setDesc] = useState("");
    const [pincollection, setPinCollection] = useState([]);
    const [qualityRating, setqualityRating] = useState("");


    const [additionalPrice, setAdditionalPrice] = useState(false);
    const [maintenancePrice, setMaintenancePrice] = useState("");
    const [maintenanceTimePeriod, setMaintenanceTimePeriod] = useState("Monthly");
    const [bookingAmount, setBookingAmount] = useState("");
    const [annualDuesPayble, setAnnualDuesPayble] = useState("");
    // state for drop box images
    const [images, setImages] = useState([]);
    const [isDraging, setIsDraging] = useState(false);
    const fileInputRef = useRef(null);


    const handleSubmitData = async (e) => {
        e.preventDefault();
        let obj = {
            lookingFor: "Rent",
            propertyGroup: "Commercial",
            propertyType: "Hospitality",
            hospitalityType: "Hotel / Resorts",
            address: {
                address: address,
                locality,
                pincode,
                city,
                state,
                country,
            },
            washrooms,
            rooms: +room,
            plotArea,
            plotAreaUnit: areaPer,
            qualityRating,
            price: +pricedetail,
            priceUnit: +priceSqr,
            inclusivePrices,
            additionalPricingDetails: {
                maintenancePrice,
                maintenanceTimePeriod,
                bookingAmount,
                annualDuesPayable: annualDuesPayble
            },
            description: desc,
            countryCurrency: `${isCountry.country == "india" ? "₹" : "$"}`,

            amenities,
            propertyFeatures,
            society_buildingFeatures: buildingFeature,
            additionalFeatures: additinalft,
            otherFeatures: otherFeature,
            flooring
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
        } else if (!pricedetail) {
            showToastError('Provide PriceDetail');
        } else if (!additinalft) {
            showToastError('Provide Property description');
        } else if (!flooring) {
            showToastError('Provide Flooring');
        }

        if (locationAdv) {
            obj["locationAdv"] = locationAdv
        }

        if (availability == "Ready to move" && fromyear != "") {
            obj["propertyStatus"] = fromyear;
            obj["availabilityStatus"] = availability;
        }
        if (availability == "Under construction" && expectedyear != "") {
            obj["expectedByYear"] = expectedyear;
            obj["availabilityStatus"] = availability;
        }

        if (
            city &&
            locality &&
            address &&
            room &&
            washrooms &&
            pricedetail &&

            inclusivePrices &&
            additinalft &&
            flooring
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
                        });
                        submitImage(e.data.id);
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
        setPincode(NumericString(e.target.value));
        if (e.target.value.length == 6) {
            pinfetch(NumericString(e.target.value));
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
                    padding={"0 10px"}
                    required
                    placeholder="Address (optional)"
                    value={address}
                    onChange={(e) => setaddress(e.target.value)}
                    fontSize={"md"}
                    variant="flushed"
                />
                <Input
                    type="text"
                    placeholder={"Enter pincode"}
                    padding={"0 10px"}
                    required
                    fontSize={"md"}
                    value={pincode}
                    onChange={handlepinfetch}
                />

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
                            variant="flushed"
                            padding={"0 2px"}
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
                            onChange={(e) => {
                                setwashrooms(NumericString(e.target.value));
                            }}
                            value={washrooms}
                            required
                            padding={"0 2px"} />
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
                        <input type="text" placeholder="Enter Plot Area" value={plotArea}
                            onChange={(e) => {
                                areaCalucation();
                                setPlotArea(e.target.value);
                            }}
                            required />
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


            {/* ====================== Price Details ================================ */}
            <Box marginTop={"50"}>
                <Heading as={"h2"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                    What price you are expecting for this property?
                </Heading>
                <Box display={"flex"} alignItems={"center"} gap={5}>
                    <Box display={"grid"} gap={0}>
                        <Heading
                            as={"h3"}
                            size={"xs"}
                            fontWeight={400}
                            textAlign={"left"}
                        >
                            {isCountry.country == "india" ? "₹" : "$"} Expected Rent
                        </Heading>
                        <Input
                            type="text"
                            value={pricedetail}
                            required
                            onChange={(e) => {
                                setPricedetail(NumericString(e.target.value));
                                areaCalucation();
                            }}
                        />
                    </Box>
                    {/* <Box display={"grid"} gap={0}>
                        <Heading
                            as={"h3"}
                            size={"xs"}
                            fontWeight={400}
                            textAlign={"left"}
                        >
                            {isCountry.country == "india" ? "₹" : "$"} Price Per {areaPer}
                        </Heading>
                        <Input
                            type="text"
                            value={priceSqr} 
                        /> 
                    </Box> */}
                </Box>
                <Box display={"flex"} gap={10} margin={"20px 0"} flexWrap={"wrap"}>
                    <Checkbox
                        isChecked={inclusivePrices.includes("Electricity & Water charges excluded")}
                        onChange={(e) => {
                            e.preventDefault();
                            handleinclusiveandtax(e.target.value)
                        }}
                        value={"Electricity & Water charges excluded"}

                    >
                        Electricity & Water charges excluded
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
                <Box>
                    {additionalPrice && <>
                        <InputGroup w={"300px"} margin={"10 0 0 0"}>
                            <Input w={"60%"} type='text' onChange={(e) => setMaintenancePrice(NumericString(e.target.value))} value={maintenancePrice} placeholder={"Maintenance Price"} />
                            <Select w={"40%"} borderRadius={0} value={maintenanceTimePeriod} onChange={(e) => setMaintenanceTimePeriod(e.target.value)}>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </Select>
                        </InputGroup>
                        <Box display={"grid"}>
                            <Input type="text" w={"300px"} value={bookingAmount} onChange={(e) => setBookingAmount(NumericString(e.target.value))} placeholder="Booking Amount" margin={"10px 0 0 0"} />
                            <Input type="text" w={"300px"} value={annualDuesPayble} onChange={(e) => setAnnualDuesPayble(NumericString(e.target.value))} placeholder="Annual dues payable" margin={"10px 0 0 0"} />
                        </Box>

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
                            amenities.includes("waste Disposal") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"waste Disposal"}
                    >
                        waste Disposal
                    </button>
                    <button
                        className={
                            amenities.includes("Rain Water Harvesting") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Rain Water Harvesting"}
                    >
                        Rain Water Harvesting
                    </button>
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
                            amenities.includes("Centrally Air Conditioned") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Centrally Air Conditioned"}
                    >
                        Centrally Air Conditioned
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
                            amenities.includes("Conference room") ? style.setbtn : style.btn
                        }
                        onClick={handleAminities}
                        value={"Conference room"}
                    >
                        Conference room
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
                            amenities.includes("Lift") ? style.setbtn : style.btn
                        }
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
                            propertyFeatures.includes("Security / Fire Alarm")
                                ? style.setbtn
                                : style.btn
                        }
                        value={"Security / Fire Alarm"}
                        onClick={handlePropertyFeature}
                    >
                        Security / Fire Alarm
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

export default HotelResortRent;
