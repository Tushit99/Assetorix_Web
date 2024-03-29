import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react";
import style from "../PlotLandCommercial.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CleanInputText, NumericString } from "../../../../code";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../Loading";

const IndustrialLand = () => {
  const isCountry = useSelector((state) => state.gloalval);
  const toast = useToast();
  const [country, setCountry] = useState("");
  const [facingwidth, setFacingWidth] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [locality, setLocality] = useState("");
  const [Plotnumber, setPlotnumber] = useState("");
  const [areaPer, setAreaPer] = useState("sq.ft");
  const [ownership, setOwnerShip] = useState("");
  const [pricedetail, setPricedetail] = useState("");
  const [inclusivePrices, setInclusivePrice] = useState([]);
  const [constructionType, setConstructionType] = useState([]);
  const [amenities, setAminity] = useState([]);
  const [propertyFeatures, setPropertyFeature] = useState("");
  const [otherFeature, setOtherFeature] = useState([]);
  const [propertyFacing, setPropertyFacing] = useState("");
  const [facing, setFacing] = useState("Meter");
  const [locationAdv, setLocationAdv] = useState([]);
  // const [totalfloors, setTotalFloors] = useState("");
  const [plotArea, setPlotArea] = useState("");
  const [desc, setDesc] = useState("");
  const [pincollection, setPinCollection] = useState([]);
  const [additionalPrice, setAdditionalPrice] = useState(false);
  const [maintenancePrice, setMaintenancePrice] = useState("");
  const [maintenanceTimePeriod, setMaintenanceTimePeriod] = useState("Monthly");
  const [bookingAmount, setBookingAmount] = useState("");
  const [annualDuesPayble, setAnnualDuesPayble] = useState("");
  const [openSides, setOpenSides] = useState("");
  const [preLeased, setPreLeased] = useState("");
  const [currentRentPerMonth, setCurrentRentPerMonth] = useState("");
  const [leaseTenureInYear, setLeaseTenureInYear] = useState("");
  const [annualRentIncrease, setAnnualRentIncrease] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [plotBreadth, setPlotBreadth] = useState("");
  const [plotLength, setplotLength] = useState("");
  const [expectedBy, setexpectedBy] = useState([]);
  const [ConstructionOnProperty, setConstructionOnProperty] = useState("");
  const [expectedByYear, setExpectedByYear] = useState("");
  const [authorisedBy, setAuthorisedBy] = useState([]);
  const [industryType, setIndustryType] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const navigate = useNavigate();
  const [currency, setCurrency] = useState("₹");
  // state for drop box images
  const [images, setImages] = useState([]);
  const [isDraging, setIsDraging] = useState(false);
  const fileInputRef = useRef(null);

  // please don'nt change any function without any prior knowledge

  useEffect(() => {
    let num = Number(Date().split(" ")[3]);
    let yearbox = [];
    for (let i = num + 1; i < num + 10; i++) {
      yearbox.push(i);
    }
    setexpectedBy(yearbox);
  }, []);

  const handleSubmitData = async (e) => {
    e.preventDefault();
    setClickCount((prev) => prev + 12);
    setIsClicked(true);
    let obj = {
      lookingFor: "Sell",
      propertyGroup: "Commercial",
      propertyType: "Plot / Land",
      plotLandType: "Industrial Lands / Plots",
      address: {
        plotNumber: Plotnumber,
        locality,
        pincode,
        city,
        state,
        country,
      },
      ownership,
      plotLength,
      plotBreadth,
      price: +pricedetail,
      inclusivePrices,
      openSides,
      amenities,
      propertyFeatures,
      preLeased_Rented: preLeased,
      otherFeatures: otherFeature,
      propertyFacing,
      roadFacingWidth: facingwidth,
      roadFacingWidthType: facing,
      // totalFloors: +totalfloors,
      plotArea,
      approvedIndustryTypeList: industryType,
      plotAreaUnit: areaPer,
      propertyApprovalAuthorityList: authorisedBy,
      carpetArea: plotArea,
      expectedByYear,
      carpetAreaUnit: areaPer,
      // otherRoom: extraroom,
      description: desc,
      constructionOnProperty: ConstructionOnProperty,
      constructionOnPropertyList: constructionType,
      countryCurrency: currency,
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
    } else if (!ownership) {
      showToastError("Provide OwnerShip");
    } else if (!pricedetail) {
      showToastError("Provide PriceDetail");
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
    setPincode(e.target.value);
    if (e.target.value.length == 6) {
      pinfetch(e.target.value);
    } else {
      console.log(e.target.value);
    }
  };

  const handleConstructionOnProperty = (e) => {
    e.preventDefault();
    setConstructionOnProperty(e.target.value);
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
  };

  const handleAuthorityBy = (e) => {
    e.preventDefault();
    let newarr = [...authorisedBy];
    let value = e.target.value;

    if (newarr.includes(value)) {
      newarr.splice(newarr.indexOf(value), 1);
    } else {
      newarr.push(value);
    }
    console.log(newarr);
    setAuthorisedBy(newarr);
  };

  const handleOpenSide = (e) => {
    e.preventDefault();
    setOpenSides(e.target.value);
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

  const handleIndustryType = (e) => {
    e.preventDefault();
    const value = e.target.value;

    setIndustryType((prevIndustryType) => {
      if (prevIndustryType.includes(value)) {
        return prevIndustryType.filter((item) => item !== value);
      } else {
        return [...prevIndustryType, value];
      }
    });
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
    <Box className="perfectwidth">
      <form onSubmit={handleSubmitData}>
        <Box className={style.location_form}>
          <Heading size={"lg"} textAlign={"center"}>
            Where is your Industrial Lands/Plots located?
          </Heading>
          <Heading size={"sm"} color={"black"} textAlign={"left"}>
            Location Detail
          </Heading>

          <Input
            type="text" 
            placeholder="Plot number (optional)"
            value={Plotnumber}
            maxLength={"20"} 
            onChange={(e) => setPlotnumber(e.target.value)}
            fontSize={"md"}
            variant="flushed"
          />
          <Input
            type="text"
            placeholder={"Enter pincode"}
            required
            variant="flushed"
            fontSize={"md"}
            maxLength={6}
            value={pincode}
            onChange={handlepinfetch}
          />
          <Input
            type="text"
            required
            placeholder="Enter Locality"
            list="browsers"
            value={locality}
            maxLength={"100"}
            onChange={(e) => setLocality(NumericString(e.target.value))}
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
            maxLength={"100"}
            onChange={(e) => setCity(NumericString(e.target.value))}
            variant="flushed"
          />
          <Input
            type="text"
            required
            placeholder="Enter State"
            value={state}
            maxLength={"100"}
            onChange={(e) => setState(NumericString(e.target.value))}
            fontSize={"md"}
            variant="flushed"
          />
          <Input
            type="text"
            required
            placeholder="Enter Country"
            value={country}
            maxLength={"100"}
            onChange={(e) => setCountry(NumericString(e.target.value))}
            fontSize={"md"}
            variant="flushed"
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

        {/* ========================== Property Dimensions ========================== */}
        <Box as={"div"} textAlign={"left"} display={"grid"}>
          <Heading as={"h3"} marginTop={5} size={"sm"}> 
            Property Dimensions (Optional) 
          </Heading>
          <Input
            type={"text"}
            maxLength={9}
            variant="flushed" 
            width={{base:"100%",md:300}}    
            value={plotLength}
            onChange={(e) => {
              setplotLength(NumericString(e.target.value));
            }}
            placeholder={`Length of plot (in ${areaPer})`}
          />
          <Input
            type={"text"}
            maxLength={9}
            width={{base:"100%",md:300}}    
            variant="flushed" 
            value={plotBreadth}
            onChange={(e) => {
              setPlotBreadth(NumericString(e.target.value));
            }}
            placeholder={`Breadth of plot (in ${areaPer})`}
          />
        </Box>

        {/* ========================== Width of facing road ========================== */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
            Width of facing road
          </Heading>
          <Box display={"flex"} w={"300px"}>
            <Input
              type="text"
              variant={"outline"}
              maxLength={3}
              flex={1}
              placeholder="Enter road width"
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

        {/* ========================== No of open sides ========================== */}
        <Box textAlign={"left"} className={style.optional_box}>
          <Heading as={"h3"} marginTop={5} size={"sm"}> 
            No. of open sides
          </Heading>
          <Box textAlign={"left"} padding={"10px 0 0 0"}>
            <button
              value={"1"}
              onClick={handleOpenSide}
              className={openSides.includes("1") ? style.setbtn : style.btn}
            >
              1
            </button>
            <button
              value={"2"}
              onClick={handleOpenSide}
              className={openSides.includes("2") ? style.setbtn : style.btn}
            >
              2
            </button>
            <button
              value={"3"}
              onClick={handleOpenSide}
              className={openSides.includes("3") ? style.setbtn : style.btn}
            >
              3
            </button>
            <button
              value={"4 or more"}
              onClick={handleOpenSide}
              className={
                openSides.includes("4 or more") ? style.setbtn : style.btn
              }
            >
              4 or more
            </button>
          </Box>
        </Box>

        {/* ============================== Construction Property =============================== */}
        <Box textAlign={"left"} className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} marginTop={5}> 
            Any construction done on this property?
          </Heading>
          <Box textAlign={"left"} padding={"10px 0 0 0"}>
            <button
              onClick={handleConstructionOnProperty}
              value={"Yes"}
              className={
                ConstructionOnProperty.includes("Yes")
                  ? style.setbtn
                  : style.btn
              }
            >
              Yes
            </button>
            <button
              onClick={handleConstructionOnProperty}
              value={"No"}
              className={
                ConstructionOnProperty.includes("No") ? style.setbtn : style.btn
              }
            >
              No
            </button>
          </Box>
        </Box>

        {/* ============================= Type of construction been done =========================== */}
        <Box
          className={style.optional_box}
          display={ConstructionOnProperty == "Yes" ? "grid" : "none"}
        >
          <Heading as={"h3"} size={"sm"} marginTop={5}> 
            What type of construction has been done?
          </Heading>
          <Box>
            <button
              value={"Shed"}
              onClick={handleConstructionType}
              className={
                constructionType.includes("Shed") ? style.setbtn : style.btn
              }
            >
              
              Shed
            </button>
            <button
              value={"Room(s)"}
              onClick={handleConstructionType}
              className={
                constructionType.includes("Room(s)") ? style.setbtn : style.btn
              }
            >
              
              Room(s)
            </button>
            <button
              value={"Washroom"}
              onClick={handleConstructionType}
              className={
                constructionType.includes("Washroom") ? style.setbtn : style.btn
              }
            >
              
              Washroom
            </button>
            <button
              value={"Other"}
              onClick={handleConstructionType}
              className={
                constructionType.includes("Other") ? style.setbtn : style.btn
              }
            >
              
              Other
            </button>
          </Box>
        </Box>

        {/* Property facing */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
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

        {/* ================================= Possession By =============================== */}
        <Box>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
            Possession By
          </Heading>
          <Box>
            <Select 
            width={{base:"100%",md:300}}
              variant={"outline"}
              value={expectedByYear}
              onChange={(e) => setExpectedByYear(e.target.value)}
            >
              <option value="Immediate">Immediate</option>
              <option value="Within 3 Months">Within 3 Months</option>
              <option value="Within 6 Months">Within 6 Months</option>
              {expectedBy.map((e) => (
                <option value={e}> {e} </option>
              ))}
            </Select>
          </Box>
        </Box>

        {/* ============================ Add pricing and details (Ownership) ============================ */}
        <Box>
          {/* OwnerShip detail */}
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
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

        {/* ============================== authority approved by =========================== */}
        <Box>
          <Heading
            as={"h3"}
            size={"sm"}  
            marginTop={5} 
            textAlign={"left"}
          >
            Which authority the property is approved by ?
          </Heading>
          <Box className={style.grid} gap={4}>
            <button
              className={
                authorisedBy.includes("DDA") ? style.setbtn : style.btn
              }
              borderRadius={"100px"}
              border={"1px solid rgba(113, 210, 255, 0.897)"}
              margin={"8px 6px 0 0"}
              onClick={handleAuthorityBy}
              value={"DDA"}
              backgroundColor={"blue.50"}
            >
              DDA
            </button>
            <button
              className={
                authorisedBy.includes("MCD") ? style.setbtn : style.btn
              }
              borderRadius={"100px"}
              border={"1px solid rgba(113, 210, 255, 0.897)"}
              margin={"8px 6px 0 0"}
              onClick={handleAuthorityBy}
              value={"MCD"}
              backgroundColor={"blue.50"}
            >
              MCD
            </button>
            <button
              className={
                authorisedBy.includes("NDMC") ? style.setbtn : style.btn
              }
              borderRadius={"100px"}
              border={"1px solid rgba(113, 210, 255, 0.897)"}
              margin={"8px 6px 0 0"}
              onClick={handleAuthorityBy}
              value={"NDMC"}
              backgroundColor={"blue.50"}
            >
              NDMC
            </button>
          </Box>
        </Box>

        {/* ============================== Price Details ============================ */}
        <Heading as={"h4"} size={"sm"} fontWeight={700} marginTop={5} textAlign={"left"}>
          Additional Pricing Detail (Optional)
        </Heading>
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
                maxLength={9}
                placeholder={`Price`}
                required
                borderRadius={0} 
                w={200}
                onChange={(e) => {
                  setPricedetail(NumericString(e.target.value));
                }}
              />
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
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
            Is it Pre-leased / Pre-Rented ?
          </Heading>
          <Heading
            as={"h5"}
            size={"xs"}
            fontWeight={500}
            
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
              
              Yes
            </button>
            <button
              value={"No"}
              onClick={(e) => {
                e.preventDefault();
                setPreLeased(e.target.value);
              }}
              className={preLeased == "No" ? style.setbtn : style.btn}
            >
              
              No
            </button>
          </Box>
          <Box display={preLeased == "Yes" ? "block" : "none"}>
            <Input
              type="text"
              maxLength="12"
              value={currentRentPerMonth}
              onChange={(e) => {
                e.preventDefault();
                setCurrentRentPerMonth(NumericString(e.target.value));
              }}
              placeholder={"₹ Current rent per month"}
            />
            <Input
              type="text"
              maxLength="12"
              value={leaseTenureInYear}
              onChange={(e) => {
                e.preventDefault();
                setLeaseTenureInYear(NumericString(e.target.value));
              }}
              placeholder={"Lease tenure in years"}
            />
            <Box>
              <Input
                type="text"
                maxLength="12"
                value={annualRentIncrease}
                onChange={(e) => {
                  e.preventDefault();
                  setAnnualRentIncrease(NumericString(e.target.value));
                }}
                placeholder="Annual rent increase in % (Optional)"
              />
              <Input
                type="text"
                maxLength="100"
                value={businessType}
                onChange={(e) => {
                  e.preventDefault();
                  setBusinessType(NumericString(e.target.value));
                }}
                placeholder="Leased to - Business Type (Optional)"
              />
            </Box>
          </Box>
        </Box>

        {/* Approved for Industry Type */}
        <Box>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
            Approved for Industry Type
          </Heading>
          <Menu>
            <MenuButton
              width={"300px"}
              as={Button}
              variant={"outline"}
              borderRadius={0}
              rightIcon={<ChevronDownIcon />}
            >
              {industryType.length == 0
                ? "Select Industry Type"
                : `Selected ${industryType.length} industry`}
            </MenuButton>
            <MenuList display={"grid"} padding={"4px 20px"} marginTop={"-6px"}>
              <Checkbox
                isChecked={industryType.includes("Automobiles")}
                onChange={handleIndustryType}
                value={"Automobiles"}
              >
                Automobiles
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Biotechnology")}
                onChange={handleIndustryType}
                value={"Biotechnology"}
              >
                Biotechnology
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Capital Goods")}
                onChange={handleIndustryType}
                value={"Capital Goods"}
              >
                Capital Goods
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Chemicals")}
                onChange={handleIndustryType}
                value={"Chemicals"}
              >
                Chemicals
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Construction")}
                onChange={handleIndustryType}
                value={"Construction"}
              >
                Construction
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes(
                  "Defence and Aerospace Manufacturing"
                )}
                onChange={handleIndustryType}
                value={"Defence and Aerospace Manufacturing"}
              >
                Defence and Aerospace Manufacturing
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Electronics Hardware")}
                onChange={handleIndustryType}
                value={"Electronics Hardware"}
              >
                Electronics Hardware
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Engineering")}
                onChange={handleIndustryType}
                value={"Engineering"}
              >
                Engineering
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Food processing")}
                onChange={handleIndustryType}
                value={"Food processing"}
              >
                Food processing
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Gems and Jewellery")}
                onChange={handleIndustryType}
                value={"Gems and Jewellery"}
              >
                Gems and Jewellery
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Handicrafts")}
                onChange={handleIndustryType}
                value={"Handicrafts"}
              >
                Handicrafts
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("IT and ITes")}
                onChange={handleIndustryType}
                value={"IT and ITes"}
              >
                IT and ITes
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Leather")}
                onChange={handleIndustryType}
                value={"Leather"}
              >
                Leather
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Manufacturing")}
                onChange={handleIndustryType}
                value={"Manufacturing"}
              >
                Manufacturing
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Medical devices")}
                onChange={handleIndustryType}
                value={"Medical devices"}
              >
                Medical devices
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Metals")}
                onChange={handleIndustryType}
                value={"Metals"}
              >
                Metals
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Mixed")}
                onChange={handleIndustryType}
                value={"Mixed"}
              >
                Mixed
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Petroleum")}
                onChange={handleIndustryType}
                value={"Petroleum"}
              >
                Petroleum
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Pharmaceuticals")}
                onChange={handleIndustryType}
                value={"Pharmaceuticals"}
              >
                Pharmaceuticals
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Renewable Energy")}
                onChange={handleIndustryType}
                value={"Renewable Energy"}
              >
                Renewable Energy
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Software")}
                onChange={handleIndustryType}
                value={"Software"}
              >
                Software
              </Checkbox>
              <Checkbox
                isChecked={industryType.includes("Textiles")}
                onChange={handleIndustryType}
                value={"Textiles"}
              >
                Textiles
              </Checkbox>
            </MenuList>
          </Menu>
        </Box>

        {/* image Drag and Drop area  */}
        <Box>
          <Box className={style.top}>
            <Heading
              color={"black"}
              size={"sm"}
              textAlign={"left"}
              marginTop={5}
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
            marginTop={5}
            textAlign={"left"}
          >
            Add Description and Unique Features of your Property
          </Heading> 
          <Textarea
            height={140}
            placeholder="Add Description"
            value={desc}
            onChange={(e) => {
              let my_cleantext = CleanInputText(e.target.value);
              setDesc(my_cleantext);
            }}
          ></Textarea>
        </Box>
        {/* ============================ Add amenities/unique features ============================ */}
        <Box>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
            Add amenities/unique features
          </Heading>
          <Heading
            as={"h5"}
            size={"xs"}
            fontWeight={400}
            
            textAlign={"left"}
          >
            All fields below are optional
          </Heading>
        </Box>

        {/* ============================ Amenities ============================ */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
            Amenities
          </Heading>
          <Box>
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
                amenities.includes("Conference room") ? style.setbtn : style.btn
              }
              onClick={handleAminities}
              value={"Conference room"}
            >
              Conference room
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
              className={amenities.includes("Lift") ? style.setbtn : style.btn}
              onClick={handleAminities}
              value={"Lift"}
            >
              Lift(s)
            </button>
          </Box>
        </Box>

        {/* ============================ Property Features ============================ */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
            Property Features
          </Heading>
          <Box>
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
                propertyFeatures.includes("Power Back-up")
                  ? style.setbtn
                  : style.btn
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

        {/* ============================ Other Features ============================ */}
        <Box>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
            Other Features
          </Heading>
          <Box display={"grid"} textAlign={"left"} gap={2}>
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

        {/* ============================ location advantage ============================ */}
        <Box className={style.optional_box}>
          <Heading size={"sm"} marginTop={5} textAlign={"left"}>
            Location Advantages
            <Heading
              size={"xs"}
              fontWeight={200} 
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

        {/* =========================== Werning Line ==================================== */}
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
    </Box>
  );
};

export default IndustrialLand;
