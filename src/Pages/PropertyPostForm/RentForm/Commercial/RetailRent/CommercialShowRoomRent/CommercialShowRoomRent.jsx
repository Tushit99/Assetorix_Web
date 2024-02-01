import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Input,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon, MinusIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import style from "../../RentComercial.module.css";
import { useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  CleanInputText,
  IndianDateConverter,
  NumericString,
} from "../../../../code";
import axios from "axios";
import Loading from "../../../../Loading";
import { useNavigate } from "react-router-dom";

const CommercialShowRoomRent = () => {
  const isCountry = useSelector((state) => state.gloalval);
  const [located, setLocated] = useState("");
  const toast = useToast();
  const [country, setCountry] = useState("");
  const [facingwidth, setFacingWidth] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [locality, setLocality] = useState("");
  const [type, setType] = useState("");
  const [locatedNear, setlocatedNear] = useState([]);
  const [areaPer, setAreaPer] = useState("sq.ft");
  const [entranceWidth, setentranceWidth] = useState("");
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
  const [facing, setFacing] = useState("Meter");
  const [locationAdv, setLocationAdv] = useState([]);
  const [totalfloors, setTotalFloors] = useState("");
  const [plotArea, setPlotArea] = useState("");
  const [desc, setDesc] = useState("");
  const [pincollection, setPinCollection] = useState([]);
  const [ceilingHeight, setceilingHeight] = useState("");
  const [parking, setParking] = useState("");
  const [parkingType, setParkingType] = useState([]);
  const [fireSafty, setFireSafty] = useState([]);
  const [entranceWidthUnit, setentranceWidthUnit] = useState("ft.");
  const [ceilingHeightUnit, setceilingHeightUnit] = useState("ft.");
  const [floorOn, setFloorOn] = useState("Ground");
  const [suitableFor, setsuitableFor] = useState([]);
  const [maintenancePrice, setMaintenancePrice] = useState("");
  const [maintenanceTimePeriod, setMaintenanceTimePeriod] = useState("Monthly");
  const [bookingAmount, setBookingAmount] = useState("");
  const [additionalPrice, setAdditionalPrice] = useState(false);
  const [washroomType, setWashroomType] = useState("");
  const [privateWashroom, setPrivateWashroom] = useState(0);
  const [sharedWashroom, setSharedWashroom] = useState(0);
  const [lockPeriod, setlockPeriod] = useState("");
  const [rentIncreasePercent, setRentIncreasePercent] = useState("");
  const [securityDeposit, setSecurityDeposit] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [availableFrom, setavailableFrom] = useState("");
  const [clickCount, setClickCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  // state for drop box images
  const [images, setImages] = useState([]);
  const navigate = useNavigate();
  const [isDraging, setIsDraging] = useState(false);
  const fileInputRef = useRef(null);

  // please don'nt change any function without any prior knowledge

  // submit function

  const handleSubmitData = async (e) => {
    e.preventDefault();
    let obj = {
      lookingFor: "Rent",
      propertyGroup: "Commercial",
      propertyType: "Retail",
      retailSpaceType: "Commercial Showrooms",
      address: {
        type: type,
        locality,
        pincode,
        city,
        state,
        country,
      },
      price: +pricedetail,
      priceUnit: +priceSqr,
      floorOn,
      totalFloors: +totalfloors,
      locatedNear,
      inclusivePrices,
      amenities,
      locatedInside: located,
      propertyFeatures,
      society_buildingFeatures: buildingFeature,
      additionalFeatures: additinalft,
      otherFeatures: otherFeature,
      fireSafety: fireSafty,
      expectedYearlyRent: rentIncreasePercent,
      lockInPeriod: lockPeriod,
      securityDeposit,
      propertyFacing,
      washrooms: washroomType,
      parking: parking,
      suitableFor: suitableFor,
      roadFacingWidth: facingwidth,
      roadFacingWidthType: facing,
      shopFacedSize: {
        entranceWidth: entranceWidth,
        entranceWidthUnit,
        ceilingHeight,
        ceilingHeightUnit: ceilingHeightUnit,
      },
      carpetArea: plotArea,
      carpetAreaUnit: areaPer,
      description: desc,
      countryCurrency: currency,
      additionalPricingDetails: {
        maintenancePrice,
        maintenanceTimePeriod,
        bookingAmount,
      },
      locationAdv: locationAdv,
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
    } else if (!pricedetail) {
      showToastError("Provide PriceDetail");
    } else if (!priceSqr) {
      showToastError("Provide Price Per sq.ft");
    } else if (!additinalft) {
      showToastError("Provide Property description");
    } else if (!propertyFacing) {
      showToastError("Provide Property Facing");
    } else if (!facing) {
      showToastError("Provide Facing");
    } else if (!totalfloors) {
      showToastError("Provide Total Floors");
    } else if (!facingwidth) {
      showToastError("Provide facing width");
    }

    if (
      city &&
      locality &&
      type &&
      pricedetail &&
      inclusivePrices &&
      additinalft &&
      propertyFacing &&
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

      if (securityDeposit == "Fixed") {
        obj["depositValue"] = depositAmount;
      }

      if (securityDeposit == "Multiple of Rent") {
        obj["multipleOfRent"] = depositAmount;
      }

      if (washroomType == "Available") {
        let washroomDetails = {
          privateWashrooms: privateWashroom,
          sharedWashrooms: sharedWashroom,
        };
        obj["washroomDetails"] = washroomDetails;
      }

      if (availability == "Ready to move" && fromyear != "") {
        obj["propertyStatus"] = fromyear;
        obj["availabilityStatus"] = availability;
        obj["availableFrom"] = availableFrom;
      }

      if (availability == "Under construction" && expectedyear != "") {
        obj["expectedByYear"] = expectedyear;
        obj["availabilityStatus"] = availability;
      }

      if (parking == "Available") {
        obj["parkingTypeList"] = parkingType;
      }

      // else {
      try {
        // let response = await fetch("http://localhost:4500/property/", {
        //     method: "POST",
        //     headers: head,
        //     body: JSON.stringify(obj)
        // });
        // let data = await response.json();
        setClickCount((prev) => prev + 12);
        setIsClicked(true);
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
            if (images.length) {
              submitImage(e.data.id);
            } else {
              setIsClicked(false);
              navigate("/listing");
            }
          });
      } catch (error) {
        toast({
          title: error.response.data.msg,
          status: "error",
          duration: 2000,
        });
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
      });
    } catch (error) {
      console.log(error);
      setIsClicked(false);
    }
    navigate("/listing");
    setIsClicked(false);
  };

  // pincode of 3 letter
  const handlepinfetch = (e) => {
    let val = NumericString(e.target.value);
    setPincode(val);
    if (val.length == 6) {
      pinfetch(Number(val));
    }
  };

  // pincode to fetch data
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

  const handleDepositAmount = (e) => {
    setDepositAmount(NumericString(e.target.value));
  };

  const handleSecurityDeposit = (e) => {
    e.preventDefault();
    setSecurityDeposit(e.target.value);
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

  const handleEntranceWidth = (e) => {
    e.preventDefault();
    setentranceWidth(CleanInputText(e.target.value));
  };

  const handleCeilingHeight = (e) => {
    e.preventDefault();
    setceilingHeight(CleanInputText(e.target.value));
  };

  const handleLocatedNear = (e) => {
    e.preventDefault();
    let newarr = [...locatedNear];
    let value = e.target.value;

    if (newarr.includes(value)) {
      newarr.splice(newarr.indexOf(value), 1);
    } else {
      newarr.push(value);
    }
    setlocatedNear(newarr);
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
  };

  const handleparkingType = (e) => {
    e.preventDefault();

    let newarr = [...parkingType];
    let value = e.target.value;

    if (newarr.includes(value)) {
      newarr.splice(newarr.indexOf(value), 1);
    } else {
      newarr.push(value);
    }
    console.log(newarr);
    setParkingType(newarr);
  };

  const handlebusinessType = (e) => {
    e.preventDefault();
    let newarr = [...suitableFor];
    let value = e.target.value;

    if (newarr.includes(value)) {
      newarr.splice(newarr.indexOf(value), 1);
    } else {
      newarr.push(value);
    }
    setsuitableFor(newarr);
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

  return (
    <div>
      <Box>
        <Heading size={"sm"}>Your shop is located inside</Heading>
        <Box display={"flex"} flexWrap={"wrap"} gap={4}>
          <button
            value={"Mall"}
            className={located == "Mall" ? style.setbtn : style.btn}
            onClick={(e) => setLocated(e.target.value)}
          >
            Mall
          </button>
          <button
            value={"Commercial Project"}
            className={
              located == "Commercial Project" ? style.setbtn : style.btn
            }
            onClick={(e) => setLocated(e.target.value)}
          >
            Commercial Project
          </button>
          <button
            value={"Residential Project"}
            className={
              located == "Residential Project" ? style.setbtn : style.btn
            }
            onClick={(e) => setLocated(e.target.value)}
          >
            Residential Project
          </button>
          <button
            value={"Retail Complex/8uilding"}
            className={
              located == "Retail Complex/8uilding" ? style.setbtn : style.btn
            }
            onClick={(e) => setLocated(e.target.value)}
          >
            Retail Complex/8uilding
          </button>
          <button
            value={"Market / High Street"}
            className={
              located == "Market / High Street" ? style.setbtn : style.btn
            }
            onClick={(e) => setLocated(e.target.value)}
          >
            Market / High Street
          </button>
          <button
            value={"Other"}
            className={located == "Other" ? style.setbtn : style.btn}
            onClick={(e) => setLocated(e.target.value)}
          >
            Other
          </button>
        </Box>
      </Box>
      <Box display={located == "" ? "none" : "block"}>
        <form onSubmit={handleSubmitData}>
          {/* property location */}
          <Box className={style.location_form}>
            <Heading size={"lg"} textAlign={"center"}>
              Where is your Commercial Showrooms located?
            </Heading>
            <Heading size={"sm"} textAlign={"left"}>
              Location Detail
            </Heading>
            <Input
              type="text"
              required
              placeholder={`${located} (optional)`}
              value={type}
              onChange={(e) => setType(e.target.value)}
              fontSize={"sm"}
              variant="flushed"
            />
            <Input
              type="text"
              placeholder={"Enter pincode"}
              required
              variant="flushed"
              fontSize={"sm"}
              value={pincode}
              onChange={handlepinfetch}
            />
            <Input
              type="text"
              required
              placeholder="Enter Locality"
              list="browsers"
              value={locality}
              onChange={(e) => setLocality(e.target.value)}
              fontSize={"sm"}
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
              fontSize={"sm"}
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
              fontSize={"sm"}
              variant="flushed"
            />
            <Input
              type="text"
              required
              placeholder="Enter Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              fontSize={"sm"}
              variant="flushed"
            />
          </Box>
          {/* Property Detail */}
          <Box>
            {/* ====================================== */}
            {/* ============================ add area details ============================ */}
            <Box textAlign={"left"} padding={"10px 0"}>
              <Heading as={"h3"} size={"sm"}>
                Add Area Details
              </Heading>
              <Text> Carpet area is mandatory </Text>
              <InputGroup
                className={style.select_land}
                isAttached
                margin={0}
                width={{ base: "100%", md: 300 }}
                variant="outline"
              >
                <Input
                  type="text"
                  value={plotArea}
                  onChange={(e) => {
                    areaCalucation();
                    setPlotArea(NumericString(e.target.value));
                  }}
                  required
                  placeholder={"Carpet Area"}
                />
                <Select
                  borderRadius={0}
                  variant={"outline"}
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
                </Select>
              </InputGroup>
            </Box>

            {/* Shop facade size (Optional) */}
            <Box>
              <Heading as={"h3"} size={"sm"}>
                Shop facade size (Optional)
              </Heading>
              <Box display={"flex"} w={"300px"} margin={"10px 0"}>
                <Input
                  type="text"
                  placeholder={"Entrance width"}
                  flex={5}
                  borderRadius={0}
                  value={entranceWidth}
                  onChange={handleEntranceWidth}
                />
                <Select
                  borderRadius={0}
                  borderLeft={0}
                  flex={3}
                  value={entranceWidthUnit}
                  onChange={(e) =>
                    setentranceWidthUnit(NumericString(e.target.value))
                  }
                >
                  <option value="ft">ft.</option>
                  <option value="mt">mt.</option>
                </Select>
              </Box>
              <Box display={"flex"} w={"300px"} margin={"10px 0"}>
                <Input
                  type="text"
                  placeholder={"Ceiling Height"}
                  flex={5}
                  borderRadius={0}
                  value={ceilingHeight}
                  onChange={handleCeilingHeight}
                />
                <Select
                  borderRadius={0}
                  borderLeft={0}
                  flex={3}
                  value={ceilingHeightUnit}
                  onChange={(e) =>
                    setceilingHeightUnit(NumericString(e.target.value))
                  }
                >
                  <option value="ft">ft.</option>
                  <option value="mt">mt.</option>
                </Select>
              </Box>
            </Box>

            {/* ============================ washrooms ================================ */}
            <Box padding={"10px 0 8px 0"} display={"grid"}>
              <Heading textAlign={"left"} as={"h3"} size={"sm"}>
                Washrooms
              </Heading>
              <Box
                display={"grid"}
                padding={"10px 0 8px 0"}
                gridTemplateColumns={"repeat(1,1fr)"}
                gap={2}
              >
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
                      washroomType === "Not-Available"
                        ? style.setbtn
                        : style.btn
                    }
                  >
                    Not-Available
                  </button>
                </Box>
                <Box display={washroomType == "Available" ? "block" : "none"}>
                  <Box
                    display={"flex"}
                    w={340}
                    alignItems={"center"}
                    margin={"10px"}
                  >
                    <Text flex={8} textAlign={"left"}>
                      No. of Private Washrooms
                    </Text>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setPrivateWashroom((prev) => prev - 1);
                      }}
                      className={
                        privateWashroom == 0
                          ? style.washroom_hide
                          : style.washroom_dec
                      }
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
                  <Box
                    display={"flex"}
                    w={340}
                    alignItems={"center"}
                    margin={"10px"}
                  >
                    <Text flex={8} textAlign={"left"}>
                      No. of Shared Washrooms
                    </Text>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSharedWashroom((prev) => prev - 1);
                      }}
                      className={
                        sharedWashroom == 0
                          ? style.washroom_hide
                          : style.washroom_dec
                      }
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

            {/* ============================ floor details ============================ */}
            <Box textAlign={"left"}>
              <Heading as={"h3"} size={"sm"} textAlign={"left"}>
                Floor Details
              </Heading>
              <Text textAlign={"left"}>Total no of floors</Text>
              <InputGroup isAttached width={{ base: "100%", md: 300 }}>
                <Input
                  type="text"
                  value={totalfloors}
                  placeholder="Enter total floor"
                  onChange={(e) => {
                    setTotalFloors(NumericString(e.target.value));
                  }}
                  required
                  w={300}
                />
                <Select
                  id="floorSelectTag"
                  variant={"outline"}
                  onChange={(e) => setFloorOn(e.target.value)}
                  value={floorOn}
                  w={180}
                  borderRadius={0}
                >
                  <option value="Ground">Ground</option>
                  <option value="Basement">Basement</option>
                  <option value="Lower Ground">Lower Ground</option>
                  {Array.from(Array(Number(totalfloors)).keys()).map((e) => {
                    return <option value={e + 1}>{e + 1}</option>;
                  })}
                </Select>
              </InputGroup>
            </Box>

            {/* ============================ Located Near (optional) ============================ */}
            <Box className={style.optional_box}>
              <Heading as={"h3"} size={"sm"}>
                Located Near (Optional)
              </Heading>
              <Box>
                <button
                  value={"Entrance"}
                  className={
                    locatedNear.includes("Entrance") ? style.setbtn : style.btn
                  }
                  onClick={handleLocatedNear}
                >
                  Entrance
                </button>
                <button
                  value={"Elevator"}
                  className={
                    locatedNear.includes("Elevator") ? style.setbtn : style.btn
                  }
                  onClick={handleLocatedNear}
                >
                  Elevator
                </button>
                <button
                  value={"Stairs"}
                  className={
                    locatedNear.includes("Stairs") ? style.setbtn : style.btn
                  }
                  onClick={handleLocatedNear}
                >
                  Stairs
                </button>
              </Box>
            </Box>

            {/* ============================ Parking Type ============================ */}
            <Box className={style.optional_box}>
              <Heading as={"h3"} size={"sm"}>
                Parking Type
              </Heading>
              <Box>
                <button
                  value={"Available"}
                  className={parking == "Available" ? style.setbtn : style.btn}
                  onClick={(e) => {
                    e.preventDefault();
                    setParking(e.target.value);
                  }}
                >
                  Available
                </button>
                <button
                  value={"Not-Available"}
                  className={
                    parking == "Not-Available" ? style.setbtn : style.btn
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setParking(e.target.value);
                  }}
                >
                  Not-Available
                </button>
              </Box>
              <Box
                display={parking == "Available" ? "flex" : "none"}
                flexWrap={"wrap"}
                gap={4}
              >
                <button
                  value={"Private Parking"}
                  onClick={handleparkingType}
                  className={
                    parkingType.includes("Private Parking")
                      ? style.setbtn
                      : style.btn
                  }
                >
                  Private Parking
                </button>
                <button
                  value={"Public Parking"}
                  onClick={handleparkingType}
                  className={
                    parkingType.includes("Public Parking")
                      ? style.setbtn
                      : style.btn
                  }
                >
                  Public Parking
                </button>
                <button
                  value={"Multilevel Parking"}
                  onClick={handleparkingType}
                  className={
                    parkingType.includes("Multilevel Parking")
                      ? style.setbtn
                      : style.btn
                  }
                >
                  Multilevel Parking
                </button>
              </Box>
            </Box>

            {/* ================= Availability status ============================ */}
            <Box textAlign={"left"} className={style.optional_box}>
              <Heading
                as={"h3"}
                size={"sm"}
                margin={"10px 0"}
                textAlign={"left"}
              >
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

            {/* ================= Age of Property ============================ */}
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
                    className={
                      fromyear == "0-1 year" ? style.setbtn : style.btn
                    }
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
                    className={
                      fromyear == "1-5 years" ? style.setbtn : style.btn
                    }
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
                    className={
                      fromyear == "10+ years" ? style.setbtn : style.btn
                    }
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
                {/* ============================= Available form (date) ============================= */}
                <Box textAlign={"left"} display={"grid"}>
                  <Heading
                    as={"h3"}
                    size={"sm"}
                    margin={"4px 0"}
                    textAlign={"left"}
                  >
                    Available from
                  </Heading>
                  <Input
                    value={availableFrom}
                    onChange={(e) => setavailableFrom(e.target.value)}
                    color="blue"
                    type={"date"}
                    w={300}
                  />
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

            {/* ============================ Suitable for business types ============================ */}
            <Box textAlign={"left"}>
              <Heading margin={"10px 0"} size={"sm"}>
                Suitable for business types
              </Heading>
              <Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    borderRadius={0}
                    variant={"outline"}
                    rightIcon={<ChevronDownIcon />}
                  >
                    Select business type
                  </MenuButton>
                  <MenuList
                    display={"grid"}
                    borderRadius={0}
                    marginTop={"-8px"}
                    marginBottom={"-8px"}
                    overflowY={"scroll"}
                    h={"200px"}
                    padding={"4px 10px"}
                  >
                    <Checkbox
                      value={"ATM"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      ATM
                    </Checkbox>
                    <Checkbox
                      value={"Bakery"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Bakery
                    </Checkbox>
                    <Checkbox
                      value={"Boutique"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Boutique
                    </Checkbox>
                    <Checkbox
                      value={"Clinic"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Clinic
                    </Checkbox>
                    <Checkbox
                      value={"Clothes"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Clothes
                    </Checkbox>
                    <Checkbox
                      value={"Cloud Kitchen"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Cloud Kitchen
                    </Checkbox>
                    <Checkbox
                      value={"Coffee"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Coffee
                    </Checkbox>
                    <Checkbox
                      value={"Dental Clinic"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Dental Clinic
                    </Checkbox>
                    <Checkbox
                      value={"Fast Food"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Fast Food
                    </Checkbox>
                    <Checkbox
                      value={"Footwear"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Footwear
                    </Checkbox>
                    <Checkbox
                      value={"Gym"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Gym
                    </Checkbox>
                    <Checkbox
                      value={"Jewellery"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Jewellery
                    </Checkbox>
                    <Checkbox
                      value={"Juice"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Juice
                    </Checkbox>
                    <Checkbox
                      value={"Meat"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Meat
                    </Checkbox>
                    <Checkbox
                      value={"Medical"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Medical
                    </Checkbox>
                    <Checkbox
                      value={"Mobile"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Mobile
                    </Checkbox>
                    <Checkbox
                      value={"Pub/Bar"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Pub/Bar
                    </Checkbox>
                    <Checkbox
                      value={"Restaurants"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Restaurants
                    </Checkbox>
                    <Checkbox
                      value={"Salon/Spa"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Salon/Spa
                    </Checkbox>
                    <Checkbox
                      value={"Mobile"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Mobile
                    </Checkbox>
                    <Checkbox
                      value={"Stationery"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Stationery
                    </Checkbox>
                    <Checkbox
                      value={"Sweet"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Sweet
                    </Checkbox>
                    <Checkbox
                      value={"Tea Stall"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Tea Stall
                    </Checkbox>
                    <Checkbox
                      value={"Other business type"}
                      className={style.select}
                      onChange={handlebusinessType}
                    >
                      Other business type
                    </Checkbox>
                  </MenuList>
                </Menu>
              </Box>
            </Box>

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
            </Box>

            {/* ============================ Price Details ============================ */}
            <Box>
              <Box>
                <Heading
                  as={"h3"}
                  size={"sm"}
                  margin={"10px 0"}
                  textAlign={"left"}
                >
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
                      {isCountry.country == "india" ? "₹" : "$"} Price Details
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
                      {isCountry.country == "india" ? "₹" : "$"} PriceareaUnit : Per {areaPer}
                    </Heading>
                    <Input type="text"
                      value={priceSqr} 
                      
                    />
                  </Box> */}
                </Box>
              </Box>
              <Box
                display={"flex"}
                gap={10}
                margin={"20px 0"}
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
              <Box>
                {additionalPrice && (
                  <>
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
                        onChange={(e) =>
                          setMaintenanceTimePeriod(e.target.value)
                        }
                      >
                        <option value="Monthly">Monthly</option>
                        <option value="Yearly">Yearly</option>
                      </Select>
                    </InputGroup>
                    <Input
                      type="text"
                      w={"300px"}
                      value={bookingAmount}
                      onChange={(e) => setBookingAmount(e.target.value)}
                      placeholder="Booking Amount"
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
            </Box>

            {/* ============================ Security deposit ============================ */}
            <Box className={style.optional_box}>
              <Heading
                as={"h3"}
                size={"sm"}
                margin={"10px 0"}
                textAlign={"left"}
              >
                Security deposit
              </Heading>
              <Box>
                <button
                  value={"Fixed"}
                  className={
                    securityDeposit == "Fixed" ? style.setbtn : style.btn
                  }
                  onClick={handleSecurityDeposit}
                >
                  Fixed
                </button>
                <button
                  value={"Multiple of Rent"}
                  className={
                    securityDeposit == "Multiple of Rent"
                      ? style.setbtn
                      : style.btn
                  }
                  onClick={handleSecurityDeposit}
                >
                  Multiple of Rent
                </button>
                <button
                  value={"None"}
                  className={
                    securityDeposit == "None" ? style.setbtn : style.btn
                  }
                  onClick={handleSecurityDeposit}
                >
                  None
                </button>
              </Box>
              <Box
                display={
                  securityDeposit == "Multiple of Rent" ||
                  securityDeposit == "Fixed"
                    ? "block"
                    : "none"
                }
              >
                <Input
                  type="text"
                  w={300}
                  value={depositAmount}
                  onChange={handleDepositAmount}
                  placeholder={`${
                    securityDeposit == "Fixed" ? "Deposit Value" : ""
                  } ${
                    securityDeposit == "Multiple of Rent"
                      ? "No. of months (Max 30)"
                      : ""
                  }`}
                />
              </Box>
            </Box>

            {/* Lock - in Period */}
            <Box>
              <Heading
                as={"h4"}
                size={"sm"}
                fontWeight={700}
                textAlign={"left"}
              >
                Lock - in Period
              </Heading>
              <Input
                type="text"
                width={{ base: "100%", md: 300 }}
                placeholder="Enter Lock-in Period"
                variant={"outline"}
                value={lockPeriod}
                onChange={(e) => setlockPeriod(NumericString(e.target.value))}
              />
            </Box>

            {/* Yearly rent is expected to increase by */}
            <Box>
              <Heading as={"h3"} size={"sm"} textAlign={"left"}>
                Yearly rent is expected to increase by
              </Heading>
              <Input
                type="text"
                width={{ base: "100%", md: 300 }}
                placeholder="Percentage (%) of increase in rent"
                onChange={(e) =>
                  setRentIncreasePercent(NumericString(e.target.value))
                }
                value={rentIncreasePercent}
              />
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
                        Browse
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
                      <img
                        src={URL.createObjectURL(image.image)}
                        alt="images"
                      />
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
                margin={"10px 0"}
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
          </Box>
          {/* ============================ Add amenities/unique features ============================ */}
          <Box>
            <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
              Add amenities/unique features
            </Heading>
            <Heading
              as={"h5"}
              placeholder="Add Description"
              fontWeight={400}
              size={"xs"}
              textAlign={"left"}
            >
              All fields on this page are optional
            </Heading>
          </Box>
          {/* ============================ Amenities ============================ */}
          <Box className={style.optional_box}>
            <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
              Amenities
            </Heading>
            <Box>
              <button
                className={
                  amenities.includes("Service / Goods Lift")
                    ? style.setbtn
                    : style.btn
                }
                onClick={handleAminities}
                value={"Service / Goods Lift"}
              >
                Service / Goods Lift
              </button>
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
                  amenities.includes("Waste Disposal")
                    ? style.setbtn
                    : style.btn
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
                  amenities.includes("Visitor Parking")
                    ? style.setbtn
                    : style.btn
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
                  amenities.includes("Near Bank") ? style.setbtn : style.btn
                }
                onClick={handleAminities}
                value={"Near Bank"}
              >
                Near Bank
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
                  amenities.includes("Lift") ? style.setbtn : style.btn
                }
                onClick={handleAminities}
                value={"Lift"}
              >
                Lift(s)
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
                  propertyFeatures.includes("Feng Shui / Vaastu Compliant")
                    ? style.setbtn
                    : style.btn
                }
                value={"Feng Shui / Vaastu Compliant"}
                onClick={handlePropertyFeature}
              >
                Feng Shui / Vaastu Compliant
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
                isChecked={otherFeature.includes("Main Road Facing")}
                value={"Main Road Facing"}
                onChange={handleotherfeature}
              >
                Main Road Facing
              </Checkbox>
              <Checkbox
                size={"lg"}
                isChecked={otherFeature.includes("Corner Property")}
                value={"Corner Property"}
                onChange={handleotherfeature}
              >
                Corner Property
              </Checkbox>
            </Box>
          </Box>
          {/* ============================ Fire safety mesures ============================ */}
          <Box textAlign={"left"} className={style.optional_box}>
            <Heading as={"h3"} size={"sm"} margin={"10px 0"}>
              Fire safety measures include
            </Heading>
            <Box>
              <button
                className={
                  fireSafty.includes("Fire Extinguisher")
                    ? style.setbtn
                    : style.btn
                }
                onClick={handlefireSafty}
                value={"Fire Extinguisher"}
              >
                Fire Extinguisher
              </button>
              <button
                className={
                  fireSafty.includes("Fire Sensors") ? style.setbtn : style.btn
                }
                onClick={handlefireSafty}
                value={"Fire Sensors"}
              >
                Fire Sensors
              </button>
              <button
                className={
                  fireSafty.includes("Sprinklers") ? style.setbtn : style.btn
                }
                onClick={handlefireSafty}
                value={"Sprinklers"}
              >
                Sprinklers
              </button>
              <button
                className={
                  fireSafty.includes("Fire Hose") ? style.setbtn : style.btn
                }
                onClick={handlefireSafty}
                value={"Fire Hose"}
              >
                Fire Hose
              </button>
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

          {/* ============================ Width of facing road ============================ */}
          <Box>
            <Heading as={"h3"} size={"sm"} textAlign={"left"}>
              Width of facing road
            </Heading>
            <InputGroup isAttached width={{ base: "100%", md: 300 }}>
              <Input
                type="text"  
                maxLength={3}
                variant="outline"
                required
                placeholder="Enter road width"
                value={facingwidth}
                onChange={(e) => {
                  e.preventDefault();
                  setFacingWidth(NumericString(e.target.value));
                }}
              /> 
              <Select  
                borderRadius={0}  
                onChange={(e) => setFacing(e.target.value)}
                value={facing}
              >
                <option value="Meter"> Meter </option>
                <option value="Feet"> Feet </option>
              </Select>
            </InputGroup>
          </Box>
          {/* ============================ location advantage ============================ */}
          <Box className={style.optional_box}>
            <Heading size={"sm"} margin={"10px 0 4px 0"} textAlign={"left"}>
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
                  locationAdv.includes("Close to Mall")
                    ? style.setbtn
                    : style.btn
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
            *Please provide correct information, otherwise your listing might
            get blocked
          </Heading>
          {isClicked && <Loading />}
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
    </div>
  );
};

export default CommercialShowRoomRent;
