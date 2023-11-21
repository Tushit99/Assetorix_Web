import React, { useEffect, useRef, useState } from "react";
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
// import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import style from "../../RentComercial.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { CleanInputText, NumericString } from "../../../../code";
import { useNavigate, useParams } from "react-router-dom";
import LoadingBox from "../../../../Loadingbox";
import Extraimg from "../../../../SellUpdateForm/Extraimg/Extraimg";



const WareHouseRentUpdate = () => {
    const { productID } = useParams();
    const isCountry = useSelector((state) => state.gloalval);
    const toast = useToast();
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [state, setState] = useState("");
    const [locality, setLocality] = useState("");
    const [address, setAddress] = useState("");
    const [washrooms, setwashrooms] = useState(0);
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
    const [propertyFacing, setPropertyFacing] = useState("");
    const [locationAdv, setLocationAdv] = useState([]);
    const [plotArea, setPlotArea] = useState("");
    const [desc, setDesc] = useState("");
    const [pincollection, setPinCollection] = useState([]);
    const [additionalPrice, setAdditionalPrice] = useState(false);
    const [maintenancePrice, setMaintenancePrice] = useState("");
    const [maintenanceTimePeriod, setMaintenanceTimePeriod] = useState("Monthly");
    const [bookingAmount, setBookingAmount] = useState("");
    const [annualDuesPayble, setAnnualDuesPayble] = useState("");
    const [flooring, setFlooring] = useState("");
    const [isDraging, setIsDraging] = useState(false);
    const fileInputRef = useRef(null);
    const [images, setImages] = useState([]);
    const [savedImages, setSavedImages] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const navigate = useNavigate();
    // please don'nt change any function without any prior knowledge

    const handleDataFetch = async () => {
        await axios.get(`${process.env.REACT_APP_URL}/property/single/${productID}`).then((detail) => {
            let e = detail.data.data;
            console.log(e);
            setCountry(e?.address?.country);
            setCity(e?.address?.city);
            setPincode(e?.address?.pincode);
            setState(e.address.state);
            setAddress(e.address.address);
            setLocality(e.address.locality);
            setwashrooms(e.washrooms);
            // if (e.preLeased_Rented == "Yes") {
            //     setCurrentRentPerMonth(e.preLeased_RentedDetails.currentRentPerMonth);
            //     setLeaseTenureInYear(e.preLeased_RentedDetails.leaseTenureInYear);
            //     setAnnualRentIncrease(e.preLeased_RentedDetails.annualRentIncrease);
            //     setBusinessType(e.preLeased_RentedDetails.businessType);
            // } 
            setOtherFeature(e.otherFeatures);
            setBuildingFeature(e.society_buildingFeatures);
            setAdditinalFeature(e.additionalFeatures);
            setPropertyFacing(e.propertyFacing);
            setFlooring(e.flooring);

            setPlotArea(e.plotArea);
            setAvailability(e.availabilityStatus);
            if (e.availabilityStatus == "Ready to move") {
                setFromyear(e.propertyStatus);
            }
            else if (e.availabilityStatus == "Under construction") {
                setExpectedYear(e.expectedByYear);
            }
            setPricedetail(e.price);
            setPriceSqr(e.priceUnit);
            setPropertyFeature(e.propertyFeatures);
            setInclusivePrice(e.inclusivePrices);
            setMaintenancePrice(e.additionalPricingDetails.maintenancePrice);
            setMaintenanceTimePeriod(e.additionalPricingDetails.maintenanceTimePeriod);
            setBookingAmount(e.additionalPricingDetails.bookingAmount);
            setDesc(e.description);
            setAminity(e.amenities);
            setLocationAdv(e.locationAdv);
            setSavedImages(e.images);

        })
    }

    useEffect(() => {
        handleDataFetch();
    }, []);

    const handleSubmitData = async (e) => {
        e.preventDefault();
        setClickCount((prev) => prev + 12);
        setIsClicked(true);
        let obj = {
            lookingFor: "Rent",
            propertyGroup: "Commercial",
            propertyType: "Storage",
            storageType: "Ware House",
            address: {
                address,
                locality,
                pincode,
                city,
                state,
                country,
            },
            washrooms,
            price: +pricedetail,
            priceUnit: +priceSqr,
            inclusivePrices,
            amenities,
            flooring,
            propertyFeatures,
            society_buildingFeatures: buildingFeature,
            additionalFeatures: additinalft,
            otherFeatures: otherFeature,
            plotArea,
            plotAreaUnit: areaPer,
            propertyFacing,
            carpetArea: plotArea,
            carpetAreaUnit: areaPer,
            // otherRoom: extraroom,
            description: desc,
            countryCurrency: `${isCountry.country == "india" ? "₹" : "$"}`,
            additionalPricingDetails: {
                maintenancePrice,
                maintenanceTimePeriod,
                bookingAmount,
                annualDuesPayable: annualDuesPayble
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
        } else if (!washrooms) {
            showToastError('Provide washrooms');
        } else if (!pricedetail) {
            showToastError('Provide PriceDetail');
        } else if (!additinalft) {
            showToastError('Provide Property description');
        }

        if (locationAdv) {
            obj["locationAdv"] = locationAdv
        }

        if (
            pricedetail &&

            inclusivePrices &&
            amenities &&
            propertyFeatures &&
            // preLeased &&
            desc
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
                await axios.patch(`${process.env.REACT_APP_URL}/property/${productID}`, obj, { headers: head })
                    .then((e) => {
                        toast({
                            title: e.data.msg,
                            description: e.data.msg,
                            status: 'success',
                            duration: 2000,
                        })
                        if (images.length) {
                            submitImage(productID);
                        } else {
                            setClickCount((prev) => prev - 12);
                            setIsClicked(false);
                        }
                    });
            } catch (error) {
                toast({
                    title: error.response.data.msg,
                    status: 'error',
                    duration: 2000,
                })
                setClickCount((prev) => prev - 12);
                setIsClicked(false);
            }
        }
        else {
            toast({
                title: 'Form un-filled',
                description: "Please fill all required fields.",
                status: 'info',
                duration: 2000,
                position: 'top-right'
            })
            setClickCount((prev) => prev - 12);
            setIsClicked(false);
        }
    };

    const submitImage = async (singleproductID) => {
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
                url: `${process.env.REACT_APP_URL}/upload/${singleproductID}`,
                method: "POST",
                headers: headersList,
                data: bodyContent,
            }

            await axios.request(reqOptions).then((e) => {
                setIsClicked(false);
                navigate("/listing");
            })
        } catch (error) {
            console.log(error);
            setIsClicked(false);
            navigate("/listing");
        }
        setIsClicked(false);
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

    const areaCalucation = () => {
        if (pricedetail && plotArea) {
            let max = Math.max(Number(pricedetail), Number(plotArea));
            let min = Math.min(Number(pricedetail), Number(plotArea));
            let ans = Math.round(max / min);
            setPriceSqr(ans);
        }
    }

    // ================= 
    const selectFiles = () => {
        fileInputRef.current.click();
    }

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

    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

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

    const deleteimagePermanently = async (propertyId, propertyKey) => {
        try {
            let userId = localStorage.getItem("usrId") || undefined;
            let authorizationToken = localStorage.getItem("AstToken") || undefined;

            console.log("id==== ", userId, "token", authorizationToken);

            let headers = {
                id: userId,
                authorization: authorizationToken,
                'Content-type': 'application/json'
            };

            let data = { key: propertyKey };

             

            await axios.delete(`${process.env.REACT_APP_URL}/upload/${propertyId}`, { headers, data }).then((response) => {
                console.log(response);
                handleDataFetch()
            });

        } catch (error) {
            console.log(error);
        }
    }  
    

    return (
        <Box w={"94%"} padding={"0 20px"} margin={"auto"} boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}>
            <form onSubmit={handleSubmitData}>
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
                        onChange={(e) => setAddress(e.target.value)}
                        fontSize={"md"}
                        variant="flushed"
                    />
                    <Input type="text"
                        placeholder={"Enter pincode"}
                        required
                        onChange={handlepinfetch}
                        value={pincode}

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
                            {pincollection.map((e, i) => (
                                <option key={i} value={e.locality} />
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
                {/* =============================== Tell us about your property ============================ */}
                <Box>
                    <Heading as={"h3"} size={"md"} margin={"30px 0 10px 0"}>
                        Tell us about your property
                    </Heading>
                    <Heading as={"h4"} size={"sm"} margin={"0 0 30px 0 "}>
                        Add Room Details
                    </Heading>
                </Box>

                {/* ============================== No. of Washrooms ====================================== */}
                <Box>
                    <Box textAlign={"left"} >
                        <Text> No. of Washrooms </Text>
                        <Input type="text"
                            onChange={(e) => setwashrooms(NumericString(e.target.value))}
                            value={washrooms}
                            required
                        />
                    </Box>
                </Box>

                {/* ============================ add area details =============================== */}
                <Box textAlign={"left"} padding={"10px 0"}>
                    <Heading as={"h3"} margin={"5px 0"} size={"md"}>
                        Add Area Details
                    </Heading>
                    <Text margin={"5px 0"}> Plot area is mandatory </Text>
                    <ButtonGroup
                        className={style.select_land}
                        size="sm"
                        isAttached
                        variant="outline"
                    >
                        <Input
                            type="text"
                            padding={"0 2px"}
                            value={plotArea}
                            onChange={(e) => {
                                areaCalucation();
                                setPlotArea(e.target.value);
                            }}
                            required
                        />
                        <Select value={areaPer} borderRadius={0} onChange={(e) => {
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

                {/* ========================== Availability status =============================== */}
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

                {/* ========================== Age of Property ================================= */}
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
                {/* ============================== property Age-end ============================== */}


                {/* ============================ Add pricing and details ============================ */}
                <Box>
                    <Heading
                        as={"h3"}
                        size={"md"}
                        margin={"30px 0 0 0"}
                        textAlign={"left"}
                    >
                        Add pricing details
                    </Heading>
                </Box>

                {/* ============================== Price Details ============================ */}
                <Box>
                    <Box>
                        <Heading as={"h3"} fontSize={"12px"} fontWeight={300} marginBottom={3} textAlign={"left"}>
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
                                <Input type="text" value={pricedetail}
                                    required
                                    onChange={(e) => {
                                        setPricedetail(NumericString(e.target.value));
                                        areaCalucation();
                                    }} />
                            </Box>
                            <Box display={"grid"} gap={0}>
                                <Heading
                                    as={"h3"}
                                    size={"xs"}
                                    fontWeight={400}
                                    textAlign={"left"}
                                >
                                    {isCountry.country == "india" ? "₹" : "$"} Price Per {areaPer}
                                </Heading>
                                <Input type="text" readOnly value={priceSqr} />
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} gap={10} margin={"10px 0"} flexWrap={"wrap"}>
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
                            <InputGroup w={"300px"} margin={"10px 0"}>
                                <Input w={"60%"} type='text' onChange={(e) => setMaintenancePrice(NumericString(e.target.value))} value={maintenancePrice} placeholder={"Maintenance Price"} />
                                <Select w={"40%"} borderRadius={0} value={maintenanceTimePeriod} onChange={(e) => setMaintenanceTimePeriod(e.target.value)}>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Yearly">Yearly</option>
                                </Select>
                            </InputGroup>
                            <Box display={"grid"}>
                                <Input type="text" w={"300px"} value={bookingAmount} onChange={(e) => setBookingAmount(NumericString(e.target.value))} placeholder="Booking Amount" margin={"10px 0 0 0"} />
                                <Input type="text" w={"300px"} value={annualDuesPayble} onChange={(e) => setAnnualDuesPayble(NumericString(e.target.value))} placeholder="Annual Dues Payble" margin={"10px 0 0 0"} />
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
                    <Box className={style.savedImages}>
                        {savedImages?.map((w) => (
                            <Extraimg e={w} propertyid={productID} deleteimagePermanently={deleteimagePermanently} key={w._id} />
                        ))}
                    </Box>
                    <Box className={style.card}>
                        <Box border={isDraging ? "2px dashed rgb(46,49,146)" : "2px dashed #9e9e9e"} className={style.dragArea} onDragOver={ondragover} onDragLeave={ondragleave} onDrop={ondrop} >
                            {isDraging ? (
                                <Text textAlign={"center"} color={"rgb(0, 134, 254)"} >Drop image here</Text>
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

                {/* ============================ Add amenities/unique features ============================ */}
                <Box>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Add amenities/unique features
                    </Heading>
                    <Heading as={"h5"} size={"xs"} fontWeight={400} margin={"10px 0"} textAlign={"left"}>
                        All fields on this page are optional
                    </Heading>
                </Box>

                {/* ============================ Amenities ============================ */}
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
                                amenities.includes("Rain Water Harvesting") ? style.setbtn : style.btn
                            }
                            onClick={handleAminities}
                            value={"Rain Water Harvesting"}
                        >
                            Rain Water Harvesting
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
                                amenities.includes("Visitor Parking") ? style.setbtn : style.btn
                            }
                            onClick={handleAminities}
                            value={"Visitor Parking"}
                        >
                            Visitor Parking
                        </button>
                        <button
                            className={amenities.includes("ATM") ? style.setbtn : style.btn}
                            onClick={handleAminities}
                            value={"ATM"}
                        >
                            ATM
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
                                amenities.includes("Security Personnel")
                                    ? style.setbtn
                                    : style.btn
                            }
                            onClick={handleAminities}
                            value={"Security Personnel"}
                        >
                            Security Personnel
                        </button>
                        <button
                            className={amenities.includes("Feng Shui / Vaastu Compliant") ? style.setbtn : style.btn}
                            onClick={handleAminities}
                            value={"Feng Shui / Vaastu Compliant"}
                        >
                            Feng Shui / Vaastu Compliant
                        </button>
                    </Box>
                </Box>

                {/* ============================ Property Features ============================ */}
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
                                propertyFeatures.includes("power Back-up")
                                    ? style.setbtn
                                    : style.btn
                            }
                            value={"power Back-up"}
                            onClick={handlePropertyFeature}
                        >
                            power Back-up
                        </button>
                        <button
                            className={
                                propertyFeatures.includes("Reserved Parking") ? style.setbtn : style.btn
                            }
                            value={"Reserved Parking"}
                            onClick={handlePropertyFeature}
                        >
                            Reserved Parking
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
                                propertyFeatures.includes("Intercom Facility")
                                    ? style.setbtn
                                    : style.btn
                            }
                            value={"Intercom Facility"}
                            onClick={handlePropertyFeature}
                        >
                            Intercom Facility
                        </button>
                    </Box>
                </Box>

                {/* ============================ Society/Building feature ============================ */}
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
                                buildingFeature.includes("CCTV Surveillance")
                                    ? style.setbtn
                                    : style.btn
                            }
                            onClick={HandleBuildingFeature}
                            value={"CCTV Surveillance"}
                        >
                            CCTV Surveillance
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
                                buildingFeature.includes("Lift")
                                    ? style.setbtn
                                    : style.btn
                            }
                            onClick={HandleBuildingFeature}
                            value={"Lift"}
                        >
                            Lift(s)
                        </button>
                    </Box>
                </Box>

                {/* ============================ Additional Features ============================ */}
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

                {/* ============================ Other Features ============================ */}
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

                {/* ============================ Property facing ============================ */}
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

                {/* ============================ Type of flooring ============================ */}
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

                {/* ============================ location advantage ============================ */}
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
                {isClicked && <LoadingBox />}
                <Button
                    margin={"20px 0"}
                    type="submit"
                    w={"100%"}
                    disabled={clickCount <= 0 ? true : false}
                    backgroundColor={"rgb(46,49,146)"}
                    _hover={{ backgroundColor: "rgb(74, 79, 223)" }}
                    color={"#ffffff"}
                >
                    Post Property
                </Button>

            </form>
        </Box>
    )
}

export default WareHouseRentUpdate;


