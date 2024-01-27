import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Input,
  InputGroup,
  NumberInput,
  InputRightElement,
  NumberInputField,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import style from "../Storage.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CleanInputText, NumericString } from "../../../../code";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../Loading";

const WareHouse = () => {
  const isCountry = useSelector((state) => state.gloalval);
  const toast = useToast();
  const [country, setCountry] = useState("");
  const [facingwidth, setFacingWidth] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [locality, setLocality] = useState("");
  const [address, setAddress] = useState("");
  const [washrooms, setwashrooms] = useState("");
  const [areaPer, setAreaPer] = useState("sq.ft");
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
  const [additinalft, setAdditinalFeature] = useState([]);
  const [currency, setCurrency] = useState("₹");
  const [otherFeature, setOtherFeature] = useState([]);
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
  const [annualDuesPayble, setAnnualDuesPayble] = useState("");
  const [bookingAmount, setBookingAmount] = useState("");
  const [preLeased, setPreLeased] = useState("");
  const [currentRentPerMonth, setCurrentRentPerMonth] = useState("");
  const [leaseTenureInYear, setLeaseTenureInYear] = useState("");
  const [annualRentIncrease, setAnnualRentIncrease] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();
  // state for drop box images
  const [images, setImages] = useState([]);
  const [isDraging, setIsDraging] = useState(false);
  const fileInputRef = useRef(null);
  // please don'nt change any function without any prior knowledge

  const handleSubmitData = async (e) => {
    e.preventDefault();
    setClickCount((prev) => prev + 12);
    setIsClicked(true);
    let obj = {
      lookingFor: "Sell",
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
      ownership,
      price: +pricedetail,
      priceUnit: +priceSqr,
      inclusivePrices,
      amenities,
      propertyFeatures,
      preLeased_Rented: preLeased,
      society_buildingFeatures: buildingFeature,
      additionalFeatures: additinalft,
      otherFeatures: otherFeature,
      propertyFacing,
      flooring,
      roadFacingWidth: facingwidth,
      roadFacingWidthType: facing,
      totalFloors: +totalfloors,
      plotArea,
      plotAreaUnit: areaPer,
      carpetArea: plotArea,
      carpetAreaUnit: areaPer,
      description: desc,
      countryCurrency: `${isCountry.country == "india" ? "₹" : "$"}`,
      additionalPricingDetails: {
        maintenancePrice,
        maintenanceTimePeriod,
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
    } else if (!washrooms) {
      showToastError("Provide washrooms");
    } else if (!ownership) {
      showToastError("Provide OwnerShip");
    } else if (!pricedetail) {
      showToastError("Provide PriceDetail");
    } else if (!additinalft) {
      showToastError("Provide Property description");
    }

    if (locationAdv) {
      obj["locationAdv"] = locationAdv;
    }

    if (
      ownership &&
      pricedetail &&
      inclusivePrices &&
      amenities &&
      propertyFeatures &&
      preLeased &&
      desc
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

      if (preLeased == "Yes") {
        let preLeased_RentedDetails = {
          currentRentPerMonth,
          leaseTenureInYear,
          annualRentIncrease,
          businessType,
        };
        obj["preLeased_RentedDetails"] = preLeased_RentedDetails;
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
            submitImage(e.data.id);
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

  // image uploading after uploading the data:
  const submitImage = async (productID) => {
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
        url: `${process.env.REACT_APP_URL}/upload/${productID}`,
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

  const handlepinfetch = (e) => {
    setPincode(NumericString(e.target.value));
    if (e.target.value.length == 6) {
      pinfetch(NumericString(e.target.value));
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

  // ======--- image upload function

  const selectFiles = () => {
    fileInputRef.current.click();
  };

  const removeImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
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

  if (isClicked) {
    <Loading />;
  }

  return (
    <div>
      <form onSubmit={handleSubmitData}>
        <Box className={style.location_form}>
          <Heading size={"lg"} textAlign={"center"}>Where is your property located?</Heading>
          <Heading size={"sm"} color={"black"} textAlign={"left"}>
            Location Detail
          </Heading>

          <Input
            type="text"  
            placeholder="Address (optional)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fontSize={"md"}
            variant="flushed"
          />
         <Input
            type="text"
            placeholder={"Enter pincode"}
            required
            fontSize={"md"}
            value={pincode}
            maxLength={"6"}
            variant="flushed"
            onChange={handlepinfetch} 
          /> 
          <Input
            type="text" 
            required
            placeholder="Enter Locality"
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
        {/* =============================== Tell us about your property ============================ */}
        <Heading
          as={"h4"}
          size={"sm"} 
          textAlign={"left"}
        >
          Add Room Details
        </Heading>

        {/* ============================== No. of Washrooms ====================================== */}
        <Box textAlign={"left"}> 
          <Input
            type="text"
            variant={"outline"} 
            placeholder="Enter no. of washroom" 
            width={{base:"100%",md:300}}  
            onChange={(e) => setwashrooms(NumericString(e.target.value))}
            value={washrooms}
            required 
          />
        </Box>

        {/* ============================ add area details =============================== */}
        <Box textAlign={"left"}>
          <Heading as={"h3"} marginTop={5} size={"sm"}>
            Add Area Details
          </Heading>
          <InputGroup
            w={300}
            size="md"
            marginTop={2}
            isAttached
            variant="outline"
          >
            <Input
              type="text"
              value={plotArea}
              placeholder="Enter area detail"
              w={200}
              maxLength={"6"}
              onChange={(e) => {
                setPlotArea(NumericString(e.target.value));
              }}
              required
            />
            <InputRightElement width={100}>
              <Select
                value={areaPer}
                borderRadius={0}
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
            </InputRightElement>
          </InputGroup>
        </Box>

        {/* ========================== Availability status =============================== */}
        <Box textAlign={"left"} className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
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
              size={"sm"}
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
              size={"sm"}
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
            size={"sm"}
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

        {/* ============================== Price Details ============================ */}
        <Box>
          <Heading
            as={"h3"}
            size={"sm"}
            marginTop={5}
            textAlign={"left"}
          >
            Price Details
          </Heading>
          <Box display={"flex"} alignItems={"center"} gap={5}>
            <InputGroup w={300} gap={2}>
              <Select
                w={"-moz-fit-content"}
                value={currency}
                borderRadius={0}
                onChange={(e) => setCurrency(e.target.value)}
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
                borderRadius={0}
                w={200}
                onChange={(e) => {
                  setPricedetail(NumericString(e.target.value));
                }}
              />
            </InputGroup>
          </Box>
          {/* ============================== inclusive charges (checkbox) ==============================  */}
          <Box
            display={"flex"}
            gap={{ base: 2, md: 10 }}
            marginTop={3}
            flexWrap={"wrap"}
          >
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
        </Box>

        {/* Additional Pricing Detail (Optional) */}
        <Heading
          as={"h4"}
          size={"sm"}
          marginTop={{ base: 5, md: 8 }}
          fontWeight={700}
          textAlign={"left"}
        >
          Additional Pricing Detail (Optional)
        </Heading>
        <InputGroup w={"300px"}>
          <Input
            w={"60%"}
            type="text"
            onChange={(e) => setMaintenancePrice(NumericString(e.target.value))}
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

        <Box display={"grid"} marginTop={"6px"}>
          {additionalPrice && (
            <>
              <Input
                type="text"
                w={"300px"}
                value={bookingAmount}
                onChange={(e) =>
                  setBookingAmount(NumericString(e.target.value))
                }
                placeholder="Booking Amount"
                margin={"10px 0 0 0"}
              />
              <Input
                type="text"
                w={"300px"}
                value={annualDuesPayble}
                onChange={(e) =>
                  setAnnualDuesPayble(NumericString(e.target.value))
                }
                placeholder="Annual Dues Payable"
                margin={"10px 0 0 0"}
              />
            </>
          )}
          <Heading
            as={"h3"}
            size={"sm"}
            marginTop={2}
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

        {/* ============================ Is it Pre-leased / Pre-Rented ? ============================ */}
        <Box textAlign={"left"}>
          <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
            Is it Pre-leased / Pre-Rented ?
          </Heading>
          <Heading
            as={"h5"}
            size={"xs"}
            fontWeight={500}
            margin={"10px 0"}
            textAlign={"left"}
          >
            for properties that are already rented out
          </Heading>
          <Box display={"flex"} gap={5}>
            <button
              value={"Yes"}
              onClick={(e) => {
                e.preventDefault();
                setPreLeased(e.target.value);
              }}
              className={preLeased == "Yes" ? style.setbtn : style.btn}
            >
              {" "}
              Yes{" "}
            </button>
            <button
              value={"No"}
              onClick={(e) => {
                e.preventDefault();
                setPreLeased(e.target.value);
              }}
              className={preLeased == "No" ? style.setbtn : style.btn}
            >
              {" "}
              No{" "}
            </button>
          </Box>
          <Box display={preLeased == "Yes" ? "block" : "none"}>
            <Input
              type="text"
              value={currentRentPerMonth}
              onChange={(e) => {
                e.preventDefault();
                setCurrentRentPerMonth(e.target.value);
              }}
              placeholder={"₹ Current rent per month"}
            />
            <Input
              type="text"
              value={leaseTenureInYear}
              onChange={(e) => {
                e.preventDefault();
                setLeaseTenureInYear(e.target.value);
              }}
              placeholder={"Lease tenure in years"}
            />
            <Box>
              <Input
                type="text"
                value={annualRentIncrease}
                onChange={(e) => {
                  e.preventDefault();
                  setAnnualRentIncrease(e.target.value);
                }}
                placeholder="Annual rent increase in % (Optional)"
              />
              <Input
                type="text"
                value={businessType}
                onChange={(e) => {
                  e.preventDefault();
                  setBusinessType(e.target.value);
                }}
                placeholder="Leased to - Business Type (Optional)"
              />
            </Box>
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
              {" "}
              Upload Your Property image{" "}
            </Heading>
          </Box>
          <Box className={style.card}>
            <Box
              className={style.dragArea}
              onDragOver={ondragover}
              onDragLeave={ondragleave}
              onDrop={ondrop}
            >
              {isDraging ? (
                <Text className={style.select}>Drop image here</Text>
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

        {/* ============================ Property unique discription ============================ */}
        <Box>
          <Heading
            as={"h3"}
            size={"sm"}
            fontWeight={600} 
            textAlign={"left"}
          >
            Add Description and Unique Features of your Property
          </Heading> 
          <Textarea
            height={140}
            value={desc}
          placeholder="Add Description"
          onChange={(e) => {
              let my_cleantext = CleanInputText(e.target.value);
              setDesc(my_cleantext);
            }}
          ></Textarea>
        </Box>
        {/* ============================ Add amenities/unique features ============================ */}


        {/* ============================ Amenities ============================ */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
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
                amenities.includes("Access to High Speed Internet")
                  ? style.setbtn
                  : style.btn
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
          </Box>
        </Box>
        {/* ============================ Property Features ============================ */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
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
                propertyFeatures.includes("+ power Back-up")
                  ? style.setbtn
                  : style.btn
              }
              value={"+ power Back-up"}
              onClick={handlePropertyFeature}
            >
              power Back-up
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
          <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
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
                buildingFeature.includes("Lift") ? style.setbtn : style.btn
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
          <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
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
          <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
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
          <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
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

        {/* ============================ Type of flooring ============================ */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
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
          <Heading size={"sm"} textAlign={"left"}>
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
    </div>
  );
};

export default WareHouse;
