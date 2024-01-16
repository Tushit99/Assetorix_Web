import React, { useEffect, useRef, useState } from "react";
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
import style from "../Residential.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CleanInputText, NumericString } from "../../../code";
import { useNavigate, useParams } from "react-router-dom";
import LoadingBox from "../../../Loadingbox";
import Extraimg from "../../Extraimg/Extraimg";

const IndependentHouseUpdate = () => {
  const { productID } = useParams();
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
  const [bedroom, setBedRoom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [balconey, setBalcony] = useState("");
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
  const [inclusivePrices, setInclusivePrice] = useState([]);
  const [amenities, setAminity] = useState([]);
  const [propertyFeatures, setPropertyFeature] = useState("");
  const [buildingFeature, setBuildingFeature] = useState([]);
  const [additinalft, setAdditinalFeature] = useState([]);
  const [watersource, setWaterSource] = useState([]);
  const [overLook, setoverlook] = useState([]);
  const [otherFeature, setOtherFeature] = useState([]);
  const [powerbackup, setPowerbackup] = useState("");
  const [propertyFacing, setPropertyFacing] = useState("");
  const [flooring, setFlooring] = useState("");
  const [facing, setFacing] = useState("Meter");
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
  const [isDraging, setIsDraging] = useState(false);
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [currency, setCurrency] = useState("₹");
  const [savedImages, setSavedImages] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();

  const handleSubmitData = async (e) => {
    e.preventDefault();
    setClickCount((prev) => prev + 12);
    setIsClicked(true);
    let obj = {
      lookingFor: "Sell",
      propertyGroup: "Residential",
      propertyType: "Independent House / Villa",
      address: {
        apartmentName: appartment,
        houseNumber: houseNo,
        locality,
        pincode,
        city,
        state,
        country,
      },
      roomDetails: {
        bedroom,
        bathroom,
        balcony: balconey,
      },
      ownership,
      price: +pricedetail, 
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

    if (!locality) {
      showToastError("Provide locality");
    } else if (!bedroom) {
      showToastError("Provide bedroom");
    } else if (!bathroom) {
      showToastError("Provide bathroom");
    } else if (!balconey) {
      showToastError("Provide balconey");
    } else if (!furnishedarr) {
      showToastError("Provide Furnished Field");
    } else if (!ownership) {
      showToastError("Provide OwnerShip");
    } else if (!pricedetail) {
      showToastError("Provide PriceDetail");
    } else if (!additinalft) {
      showToastError("Provide Property description");
    } else if (!watersource) {
      showToastError("Provide Water Source");
    } else if (!overLook) {
      showToastError("Provide Overlooking");
    } else if (!powerbackup) {
      showToastError("Provide Power Backup");
    } else if (!propertyFacing) {
      showToastError("Provide Property Facing");
    } else if (!flooring) {
      showToastError("Provide Flooring");
    } else if (!facing) {
      showToastError("Provide Facing");
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
      bedroom &&
      bathroom &&
      balconey &&
      furnishedarr &&
      ownership &&
      pricedetail &&
      inclusivePrices &&
      additinalft &&
      watersource &&
      overLook &&
      powerbackup &&
      propertyFacing &&
      flooring &&
      facing &&
      totalfloors
    ) {
      let id = localStorage.getItem("usrId") || undefined;
      let authorization = localStorage.getItem("AstToken") || undefined;

      let head = { id, authorization, "Content-type": "application/json" };

      if (!id || !authorization) {
        toast({
          title: "Kindly log in to access property posting.",
          description: "Login required for posting property.",
          status: "error",
          duration: 2000,
          position: "top-right",
        });
        return;
      }

      if (furnished == "Furnished" || furnished == "Semi-Furnished") {
        obj.furnishedObj = {
          Light: light,
          Fan: fans,
          AC: ac,
          TV: tv,
          Bed: Beds,
          Wardrobe: wardrobe,
          Geyser: geyser,
        };
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
        await axios
          .patch(`${process.env.REACT_APP_URL}/property/${productID}`, obj, {
            headers: head,
          })
          .then((e) => {
            toast({
              title: e.data.msg,
              description: e.data.msg,
              status: "success",
              duration: 2000,
            });
            if (images.length) {
              submitImage(productID);
            } else {
              setClickCount((prev) => prev - 12);
              setIsClicked(false);
              // navigate("/listing");
            }
          });
      } catch (error) {
        toast({
          title: error.response.data.msg,
          status: "error",
          duration: 2000,
        });
        console.log(error);
        setClickCount((prev) => prev - 12);
        setIsClicked(false);
      }
    } else {
      toast({
        title: "Form un-filled",
        description: "Please fill all required fields.",
        status: "info",
        duration: 2000,
        position: "top-right",
      });
      setClickCount((prev) => prev - 12);
      setIsClicked(false);
    }
  };

  const submitImage = async (singleproductID) => {
    try {
      let id = localStorage.getItem("usrId") || undefined;
      let authorization = localStorage.getItem("AstToken") || undefined;

      let headersList = {
        Accept: "*/*",
        Authorization: authorization,
        id: id,
      };

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
      };

      await axios.request(reqOptions).then((e) => {
        setIsClicked(false);
        navigate("/listing");
      });
    } catch (error) {
      console.log(error);
      setIsClicked(false);
      navigate("/listing");
    }
    setIsClicked(false);
  };

  const handleDataFetch = async () => {
    await axios
      .get(`${process.env.REACT_APP_URL}/property/single/${productID}`)
      .then((detail) => {
        let e = detail.data.data;
        console.log(e);
        setCountry(e?.address?.country);
        setFacingWidth(e?.roadFacingWidth);
        setCity(e?.address?.city);
        setApartment(e?.address?.apartmentName);
        setPincode(e?.address?.pincode);
        setState(e.address.state);
        setLocality(e.address.locality);
        setHouseNo(e.address.houseNumber);
        setBedRoom(e.roomDetails.bedroom);
        setBathroom(e.roomDetails.bathroom);
        setBalcony(e?.roomDetails.balcony);
        setParking(e?.parking?.closeParking);
        setOpenparking(e?.parking?.openParking);
        setFurnished(e?.furnished);
        if (e.furnished == "Furnished" || e.furnished == "Semi-Furnished") {
          setLight(e?.furnishedObj?.light);
          setFans(e?.furnishedObj?.fans);
          setAc(e?.furnishedObj?.ac);
          setTv(e?.furnishedObj?.tv);
          setBeds(e?.furnishedObj?.beds);
          setWardrobe(e?.furnishedObj?.wardrobe);
          setGeyser(e?.furnishedObj?.geyser);
          setfurnishedarr(e?.furnishedList);
        }
        setExtraRoom(e?.otherRoom);
        setAvailability(e?.availabilityStatus);
        setFromyear(e?.propertyStatus);
        setExpectedYear(e?.expectedByYear);
        setOwnerShip(e?.ownership);
        setPricedetail(e?.price); 
        setInclusivePrice(e?.inclusivePrices);
        setAminity(e?.amenities);
        setPropertyFeature(e?.propertyFeatures);
        setBuildingFeature(e?.society_buildingFeatures);
        setAdditinalFeature(e?.additionalFeatures);
        setWaterSource(e?.waterSources);
        setoverlook(e?.overLookings);
        setOtherFeature(e?.otherFeatures);
        setPowerbackup(e?.powerBackup);
        setPropertyFacing(e?.propertyFacing);
        setFlooring(e?.flooring);
        setFacing(e?.roadFacingWidthType);
        setLocationAdv(e?.locationAdv);
        setTotalFloors(e?.totalFloors);
        setPlotArea(e?.plotArea);
        setDesc(e?.description);
        setMaintenancePrice(e?.additionalPricingDetails?.maintenancePrice);
        setMaintenanceTimePeriod(
          e?.additionalPricingDetails?.maintenanceTimePeriod
        );

        if (
          e?.additionalPricingDetails?.expectedRental ||
          e?.additionalPricingDetails?.bookingAmount ||
          e?.additionalPricingDetails?.annualDuesPayable
        ) {
          setAdditionalPrice(true);
          setExpectedRentel(e?.additionalPricingDetails?.expectedRental);
          setBookingAmount(e?.additionalPricingDetails?.bookingAmount);
          setAnnualDuesPayble(e?.additionalPricingDetails?.annualDuesPayable);
        } else {
          setAdditionalPrice(false);
        }

        setSavedImages(e.images);
      });
  };

  useEffect(() => {
    handleDataFetch();
  }, []);

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
  };

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
  };
 

  // =================
  const selectFiles = () => {
    fileInputRef.current.click();
  };

  const onFileSelect = (e) => {
    let files = e.target.files;
    if (files.length === 0) {
      return;
    }
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") {
        continue;
      }
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prev) => [
          ...prev,
          {
            name: files[i].name,
            image: files[i],
          },
        ]);
      }
    }
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const ondragleave = (event) => {
    event.preventDefault();
    setIsDraging(false);
    console.log("leave");
  };

  const ondragover = (event) => {
    event.preventDefault();
    setIsDraging(true);
    event.dataTransfer.dropEffect = "copy";
    console.log("over the box");
  };

  const ondrop = (event) => {
    event.preventDefault(); // Add this line
    setIsDraging(false);
    const files = event.dataTransfer.files;
    console.log(event.dataTransfer.files);

    if (files.length === 0) {
      return;
    }

    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") {
        continue;
      }
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prev) => [
          ...prev,
          {
            name: files[i].name,
            image: files[i],
          },
        ]);
      }
    }
    console.log("droped");
  };

  const deleteimagePermanently = async (propertyId, propertyKey) => {
    try {
      let userId = localStorage.getItem("usrId") || undefined;
      let authorizationToken = localStorage.getItem("AstToken") || undefined;

      console.log("id==== ", userId, "token", authorizationToken);

      let headers = {
        id: userId,
        authorization: authorizationToken,
        "Content-type": "application/json",
      };

      let data = { key: propertyKey };

      await axios
        .delete(`${process.env.REACT_APP_URL}/upload/${propertyId}`, {
          headers,
          data,
        })
        .then((response) => {
          console.log(response);
          handleDataFetch();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      w={"94%"}
      padding={"0 20px"}
      margin={"40px auto"}   
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
    >
      <form onSubmit={handleSubmitData}>
        {/* property location */}
        <Box className={style.location_form}>
          <Heading size={"lg"}>Edit your Independent House Detail</Heading>
          <Heading size={"sm"}>Location Detail</Heading>
          <Input
            type="text"
            required
            placeholder="House No. (optional)"
            value={houseNo}
            onChange={(e) => setHouseNo(e.target.value)}
            fontSize={"md"}
            variant="flushed"
          />
          <Input
            type="text"
            required
            placeholder="Apartment / Society"
            fontSize={"md"}
            value={appartment}
            onChange={(e) => setApartment(e.target.value)}
            variant="flushed"
          />
          <Input
            type="text"
            placeholder={"Enter pincode"}
            value={pincode}
            variant="flushed"
            onChange={handlepinfetch}
            required
          />
          <Input
            type="text"
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
            required
            placeholder="Enter City"
            fontSize={"md"}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            variant="flushed"
          />
          <Input
            type="text"
            required
            placeholder="Enter State"
            value={state}
            onChange={(e) => setState(e.target.value)}
            fontSize={"md"}
            variant="flushed"
          />
          <Input
            type="text"
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
          <Heading as={"h4"} size={"sm"} margin={"0 0 30px 0 "}>
            Add Room Details
          </Heading>
          <Box as={"div"} className={style.inp_form_numbers}>
            <Box textAlign={"left"}>
              <Text> No. of Bedrooms </Text>
              <Input
                type="text"
                variant="flushed"
                onChange={(e) => setBedRoom(e.target.value)}
                value={bedroom}
                required
              />
            </Box>
            <Box textAlign={"left"}>
              <Text> No. of Bathrooms </Text>
              <Input
                type="text"
                variant="flushed"
                onChange={(e) => setBathroom(e.target.value)}
                value={bathroom}
                required
              />
            </Box>
            <Box textAlign={"left"}>
              <Text> No. of Balconies </Text>
              <Input
                type="text"
                variant="flushed"
                onChange={(e) => setBalcony(e.target.value)}
                value={balconey}
                required
              />
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
                value={plotArea}
                onChange={(e) => {
                  setPlotArea(NumericString(e.target.value));
                }}
                required
                type="text"
              />
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
              Furnishing (optional)
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
              <Heading
                as={"h4"}
                fontWeight={400}
                size={"sm"}
                color={"#656565"}
              ></Heading>
              <Box className={style.furnished_detail}>
                <Box>
                  <button
                    className={style.mns_btn}
                    disabled={light === 0}
                    onClick={(e) => {
                      e.preventDefault();
                      setLight(light - 1);
                    }}
                  >
                    <MinusIcon fontSize={"12px"} />
                  </button>
                  <h3>{light}</h3>
                  <button
                    className={style.pls_btn}
                    onClick={(e) => {
                      e.preventDefault();
                      setLight(light + 1);
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
                      setFans(fans - 1);
                    }}
                  >
                    <MinusIcon fontSize={"12px"} />
                  </button>
                  <h3>{fans}</h3>
                  <button
                    className={style.pls_btn}
                    onClick={(e) => {
                      e.preventDefault();
                      setFans(fans + 1);
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
                      setAc(ac - 1);
                    }}
                  >
                    <MinusIcon fontSize={"12px"} />
                  </button>
                  <h3>{ac}</h3>
                  <button
                    className={style.pls_btn}
                    onClick={(e) => {
                      e.preventDefault();
                      setAc(ac + 1);
                    }}
                  >
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
                      setTv(tv - 1);
                    }}
                  >
                    <MinusIcon fontSize={"12px"} />
                  </button>
                  <h3>{tv}</h3>
                  <button
                    className={style.pls_btn}
                    onClick={(e) => {
                      e.preventDefault();
                      setTv(tv + 1);
                    }}
                  >
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
                      setBeds(Beds - 1);
                    }}
                  >
                    <MinusIcon fontSize={"12px"} />
                  </button>
                  <h3>{Beds}</h3>
                  <button
                    className={style.pls_btn}
                    onClick={(e) => {
                      e.preventDefault();
                      setBeds(Beds + 1);
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
                      setWardrobe(wardrobe - 1);
                    }}
                  >
                    <MinusIcon fontSize={"12px"} />
                  </button>
                  <h3>{wardrobe}</h3>
                  <button
                    className={style.pls_btn}
                    onClick={(e) => {
                      e.preventDefault();
                      setWardrobe(wardrobe + 1);
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
                      setGeyser(geyser - 1);
                    }}
                  >
                    <MinusIcon fontSize={"12px"} />
                  </button>
                  <h3>{geyser}</h3>
                  <button
                    className={style.pls_btn}
                    onClick={(e) => {
                      e.preventDefault();
                      setGeyser(geyser + 1);
                    }}
                  >
                    <AddIcon fontSize={"12px"} />
                  </button>
                  <h3> Geyser </h3>
                </Box>
                <Box>
                  <Checkbox
                    onChange={furnisheddetails}
                    isChecked={furnishedarr?.includes("Sofa")}
                    value={"Sofa"}
                    icon={<AddIcon />}
                  >
                    Sofa
                  </Checkbox>
                </Box>
                <Box>
                  <Checkbox
                    onChange={furnisheddetails}
                    isChecked={furnishedarr?.includes("Washing Machine")}
                    value={"Washing Machine"}
                    icon={<AddIcon />}
                  >
                    Washing Machine
                  </Checkbox>
                </Box>
                <Box>
                  <Checkbox
                    onChange={furnisheddetails}
                    isChecked={furnishedarr?.includes("Stove")}
                    value={"Stove"}
                    icon={<AddIcon />}
                  >
                    Stove
                  </Checkbox>
                </Box>
                <Box>
                  <Checkbox
                    onChange={furnisheddetails}
                    isChecked={furnishedarr?.includes("Fridge")}
                    value={"Fridge"}
                    icon={<AddIcon />}
                  >
                    Fridge
                  </Checkbox>
                </Box>
                <Box>
                  <Checkbox
                    onChange={furnisheddetails}
                    isChecked={furnishedarr?.includes("Water Purifier")}
                    value={"Water Purifier"}
                    icon={<AddIcon />}
                  >
                    Water Purifier
                  </Checkbox>
                </Box>
                <Box>
                  <Checkbox
                    onChange={furnisheddetails}
                    isChecked={furnishedarr?.includes("Microwave")}
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
          {/* reserved */}
          <Box className={style.optional_box}>
            <Heading as={"h3"} size={"md"}>
              Reserved Parking (optional)
            </Heading>
            <div className={style.parking}>
              <Box as={"div"} className={style.inc_dec}>
                <h3> Covered Parking </h3>
                <button
                  className={style.pls_btn}
                  disabled={parking === 0}
                  onClick={(e) => {
                    e.preventDefault();
                    setParking(parking - 1);
                  }}
                >
                  <MinusIcon fontSize={"12px"} />
                </button>
                <h3>{parking}</h3>
                <button
                  className={style.mns_btn}
                  onClick={(e) => {
                    e.preventDefault();
                    setParking(parking + 1);
                  }}
                >
                  <AddIcon fontSize={"12px"} />
                </button>
              </Box>
              <Box as={"div"} className={style.inc_dec}>
                <h3> Open Parking </h3>
                <button
                  className={style.pls_btn}
                  disabled={openparking === 0}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenparking(openparking - 1);
                  }}
                >
                  <MinusIcon fontSize={"12px"} />
                </button>
                <h3>{openparking}</h3>
                <button
                  className={style.mns_btn}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenparking(openparking + 1);
                  }}
                >
                  <AddIcon fontSize={"12px"} />
                </button>
              </Box>
            </div>
          </Box>
          {/* floor details */}
          <Box textAlign={"left"}>
            <Heading
              as={"h3"}
              size={"md"}
              margin={"30px 0 10px 0"}
              textAlign={"left"}
            >
              Floor Details
            </Heading>
            <Text textAlign={"left"} margin={"10px 0"}>
              Total no of floors
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
                  availability == "Under construction"
                    ? style.setbtn
                    : style.btn
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
                  className={
                    fromyear == "5-10 years" ? style.setbtn : style.btn
                  }
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
            <Heading
              as={"h3"}
              size={"sm"}
              marginTop={{ base: 10, md: 5 }}
              textAlign={"left"}
            >
              Price Details
            </Heading>
            <Box display={"flex"} alignItems={"center"} gap={5}>
              <InputGroup w={300} gap={2}>
                <Select
                  w={"-moz-fit-content"}
                  value={currency}
                  onClick={(e) => setCurrency(e.target.value)}
                >
                  <option value="₹">₹ INR </option>
                  <option value="$">$ USD </option>
                </Select>
                <Input
                  type="text"
                  value={pricedetail}
                  maxLength={"10"}
                  placeholder={`Price`}
                  required
                  w={200}
                  onChange={(e) => {
                    setPricedetail(NumericString(e.target.value));
                  }}
                />
              </InputGroup>
            </Box>
          </Box>
          {/* Additional (Checkbox) */}
          <Box display={"flex"} gap={10} margin={"20px 0"} flexWrap={"wrap"}>
            <Checkbox
              isChecked={inclusivePrices.includes("All inclusive price")}
              onChange={(e) => {
                e.preventDefault();
                handleinclusiveandtax(e.target.value);
              }}
              value={"All inclusive price"}
            >
              All inclusive price
            </Checkbox>
            <Checkbox
              isChecked={inclusivePrices.includes(
                "Tax and Govt. charges excluded"
              )}
              onChange={(e) => {
                e.preventDefault();
                handleinclusiveandtax(e.target.value);
              }}
              value={"Tax and Govt. charges excluded"}
            >
              Tax and Govt. charges excluded
            </Checkbox>
            <Checkbox
              isChecked={inclusivePrices.includes("Price Negotiable")}
              onChange={(e) => {
                e.preventDefault();
                handleinclusiveandtax(e.target.value);
              }}
              value={"Price Negotiable"}
            >
              Price Negotiable
            </Checkbox>
          </Box>

          {/* Additonal Pricing Detail */}
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
              )}{" "}
              Add more pricing details
            </Heading>
          </Box>
          <Box>
            <Heading
              as={"h3"}
              size={"md"}
              fontWeight={600}
              margin={"10px 0"}
              textAlign={"left"}
            >
              Add Description and Unique Features of your Property
            </Heading>
            <Heading
              as={"h3"}
              size={"xs"}
              fontWeight={400}
              color={"#777777"}
              margin={"10px 0"}
              textAlign={"left"}
            >
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

        {/* image Drag and Drop area  */}
        <Box>
          <Box className={style.top}>
            <Heading
              color={"black"}
              size={"sm"}
              textAlign={"left"}
              margin={"10px 0"}
            >
              Upload Your Property image
            </Heading>
          </Box>
          <Box className={style.savedImages}>
            {savedImages?.map((w) => (
              <Extraimg
                e={w}
                propertyid={productID}
                deleteimagePermanently={deleteimagePermanently}
                key={w._id}
              />
            ))}
          </Box>
          <Box className={style.card}>
            <Box
              border={
                isDraging ? "2px dashed rgb(46,49,146)" : "2px dashed #9e9e9e"
              }
              className={style.dragArea}
              onDragOver={ondragover}
              onDragLeave={ondragleave}
              onDrop={ondrop}
            >
              {isDraging ? (
                <Text textAlign={"center"} color={"rgb(0, 134, 254)"}>
                  Drop image here
                </Text>
              ) : (
                <>
                  Drag & Drop image here or
                  <Text
                    className={style.select}
                    role="button"
                    onClick={selectFiles}
                  >
                    {" "}
                    Browse{" "}
                  </Text>
                </>
              )}
              <input
                type={"file"}
                name="image"
                accept="image/jpg, image/png, image/jpeg"
                formMethod="post"
                formEncType="multipart/form-data"
                className={style.file}
                multiple
                ref={fileInputRef}
                onChange={onFileSelect}
              />
            </Box>
            <Box className={style.container}>
              {images.map((image, index) => (
                <Box className={style.image} key={index}>
                  <Text
                    className={style.delete}
                    onClick={() => removeImage(index)}
                  >
                    &#10006;
                  </Text>
                  <img src={URL.createObjectURL(image.image)} alt="images" />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Add amenities/unique features */}
        <Box>
          <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
            Add amenities/unique features
          </Heading>
          <Heading
            as={"h5"}
            size={"xs"}
            fontWeight={400}
            margin={"10px 0"}
            textAlign={"left"}
          >
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
                amenities.includes("Maintenance Staff")
                  ? style.setbtn
                  : style.btn
              }
              onClick={handleAminities}
              value={"Maintenance Staff"}
            >
              Maintenance Staff
            </button>
            <button
              className={
                amenities.includes("Rain Water Harvesting")
                  ? style.setbtn
                  : style.btn
              }
              onClick={handleAminities}
              value={"Rain Water Harvesting"}
            >
              Rain Water Harvesting
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
              className={amenities.includes("Park") ? style.setbtn : style.btn}
              onClick={handleAminities}
              value={"Park"}
            >
              Park
            </button>
            <button
              className={
                amenities.includes("Intercom Facility")
                  ? style.setbtn
                  : style.btn
              }
              onClick={handleAminities}
              value={"Intercom Facility"}
            >
              Intercom Facility
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
              className={
                amenities.includes("Pivate Garden / Terrace")
                  ? style.setbtn
                  : style.btn
              }
              onClick={handleAminities}
              value={"Pivate Garden / Terrace"}
            >
              Pivate Garden / Terrace
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
                propertyFeatures.includes("Centrally Air Renovated")
                  ? style.setbtn
                  : style.btn
              }
              value={"Centrally Air Renovated"}
              onClick={handlePropertyFeature}
            >
              Centrally Air Renovated
            </button>
            <button
              className={
                propertyFeatures.includes("Water Purifier")
                  ? style.setbtn
                  : style.btn
              }
              value={"Water Purifier"}
              onClick={handlePropertyFeature}
            >
              Water Purifier
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
                propertyFeatures.includes("Airy Roooms")
                  ? style.setbtn
                  : style.btn
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
        {/* Water Source */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
            Water Source
          </Heading>
          <Box>
            <button
              className={
                watersource.includes("Municipal corporation")
                  ? style.setbtn
                  : style.btn
              }
              onClick={(e) => {
                e.preventDefault();
                handleWaterSource(e.target.value);
              }}
              value={"Municipal corporation"}
            >
              Municipal corporation
            </button>
            <button
              className={
                watersource.includes("Borewell / Tank")
                  ? style.setbtn
                  : style.btn
              }
              onClick={(e) => {
                e.preventDefault();
                handleWaterSource(e.target.value);
              }}
              value={"Borewell / Tank"}
            >
              Borewell/Tank
            </button>
            <button
              className={
                watersource.includes("24*7 Water") ? style.setbtn : style.btn
              }
              onClick={(e) => {
                e.preventDefault();
                handleWaterSource(e.target.value);
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
                setPowerbackup(e.target.value);
              }}
            >
              None
            </button>
            <button
              className={powerbackup == "Partial" ? style.setbtn : style.btn}
              value={"Partial"}
              onClick={(e) => {
                e.preventDefault();
                setPowerbackup(e.target.value);
              }}
            >
              Partial
            </button>
            <button
              className={powerbackup == "Full" ? style.setbtn : style.btn}
              value={"Full"}
              onClick={(e) => {
                e.preventDefault();
                setPowerbackup(e.target.value);
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
                setPropertyFacing(e.target.value);
              }}
              value={"North"}
            >
              North
            </button>
            <button
              className={propertyFacing == "South" ? style.setbtn : style.btn}
              onClick={(e) => {
                e.preventDefault();
                setPropertyFacing(e.target.value);
              }}
              value={"South"}
            >
              South
            </button>
            <button
              className={propertyFacing == "East" ? style.setbtn : style.btn}
              onClick={(e) => {
                e.preventDefault();
                setPropertyFacing(e.target.value);
              }}
              value={"East"}
            >
              East
            </button>
            <button
              className={propertyFacing == "West" ? style.setbtn : style.btn}
              onClick={(e) => {
                e.preventDefault();
                setPropertyFacing(e.target.value);
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
                setPropertyFacing(e.target.value);
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
                setPropertyFacing(e.target.value);
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
                setPropertyFacing(e.target.value);
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
                setPropertyFacing(e.target.value);
              }}
              value={"South-West"}
            >
              South-West
            </button>
          </Box>
        </Box>
        {/* Type of flooring */}
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
        {/* Width of facing road */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
            Width of facing road
          </Heading>
          <Box display={"flex"} gap={"20px"} w={"300px"}>
            <Input
              type="text"
              maxLength={5}
              variant="flushed"
              flex={1}
              required
              value={facingwidth}
              onChange={(e) => {
                e.preventDefault();
                setFacingWidth(NumericString(e.target.value));
              }}
            />
            <Select
              flex={1}
              onChange={(e) => setFacing(e.target.value)}
              value={facing}
            >
              <option value="Meter"> Meter </option>
              <option value="Feet"> Feet </option>
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
                locationAdv.includes("Close to School")
                  ? style.setbtn
                  : style.btn
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
                locationAdv.includes("Close to Market")
                  ? style.setbtn
                  : style.btn
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
          Update Property{" "}
        </Button>
      </form>
    </Box>
  );
};

export default IndependentHouseUpdate;
