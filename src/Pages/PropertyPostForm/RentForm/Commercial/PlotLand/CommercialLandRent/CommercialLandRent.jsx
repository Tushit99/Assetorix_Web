import React, { useEffect, useRef, useState } from "react";
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
import { Checkbox } from "@chakra-ui/react";
import style from "../../RentComercial.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { CleanInputText, NumericString } from "../../../../code";
import { ChevronDownIcon } from "@chakra-ui/icons";



const CommercialLandRent = () => {
  const isCountry = useSelector((state) => state.gloalval);
  const toast = useToast();
  const [country, setCountry] = useState("");
  const [facingwidth, setFacingWidth] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState(0);
  const [state, setState] = useState("");
  const [locality, setLocality] = useState("");
  const [Plotnumber, setPlotnumber] = useState("");
  const [areaPer, setAreaPer] = useState("sq.ft");
  const [ownership, setOwnerShip] = useState("");
  const [pricedetail, setPricedetail] = useState("");
  const [priceSqr, setPriceSqr] = useState("");
  const [inclusivePrices, setInclusivePrice] = useState([]);
  const [constructionType, setConstructionType] = useState([]);
  const [amenities, setAminity] = useState([]);
  const [propertyFeatures, setPropertyFeature] = useState("");
  const [otherFeature, setOtherFeature] = useState([]);
  const [propertyFacing, setPropertyFacing] = useState("");
  const [facing, setFacing] = useState("Meter");
  const [locationAdv, setLocationAdv] = useState([]);
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
    let obj = {
      lookingFor: "Rent",
      propertyGroup: "Commercial",
      propertyType: "Plot / Land",
      plotLandType: "Commercial Land / Institutional Land",
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
      priceUnit: +priceSqr,
      inclusivePrices,
      openSides: openSides,
      amenities,
      propertyFeatures,
      preLeased_Rented: preLeased,
      otherFeatures: otherFeature,
      propertyFacing,
      roadFacingWidth: facingwidth,
      roadFacingWidthType: facing,
      plotArea,
      approvedIndustryTypeList: industryType,
      plotAreaUnit: areaPer,
      propertyApprovalAuthorityList: authorisedBy,
      expectedByYear,
      description: desc,
      constructionOnProperty: ConstructionOnProperty,
      constructionOnPropertyList: constructionType,
      countryCurrency: `${isCountry.country == "india" ? "₹" : "$"}`,
      additionalPricingDetails: {
        maintenancePrice,
        maintenanceTimePeriod,
        bookingAmount,
        annualDuesPayable: annualDuesPayble
      }
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
    } else if (!ownership) {
      showToastError('Provide OwnerShip');
    } else if (!pricedetail) {
      showToastError('Provide PriceDetail');
    } else if (!priceSqr) {
      showToastError('Provide Price Per sq.ft');
    }

    if (locationAdv) {
      obj["locationAdv"] = locationAdv
    }

    if (
      ownership &&
      pricedetail &&

      inclusivePrices &&
      amenities &&
      propertyFeatures &&
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

      if (preLeased == "Yes") {
        let preLeased_RentedDetails = {
          currentRentPerMonth,
          leaseTenureInYear,
          annualRentIncrease,
          businessType
        }
        obj["preLeased_RentedDetails"] = preLeased_RentedDetails
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
    setPincode(e.target.value);
    if (e.target.value.length == 6) {
      pinfetch(e.target.value);
    }
    else {
      console.log(e.target.value);
    }
  }

  const handleConstructionOnProperty = (e) => {
    e.preventDefault();
    setConstructionOnProperty(e.target.value);
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
  }

  const handleOpenSide = (e) => {
    e.preventDefault();
    setOpenSides(e.target.value);
  }

  const handleownership = (e) => {
    e.preventDefault();
    setOwnerShip(e.target.value);
  };

  // const handleAdditionalFeature = (e) => {
  //   e.preventDefault();
  //   let newarr = [...additinalft];
  //   let value = e.target.value;

  //   if (newarr.includes(value)) {
  //     newarr.splice(newarr.indexOf(value), 1);
  //   } else {
  //     newarr.push(value);
  //   }
  //   setAdditinalFeature(newarr);
  // };

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
  }

  const areaCalucation = () => {
    if (pricedetail && plotArea) {
      let max = Math.max(Number(pricedetail), Number(plotArea));
      let min = Math.min(Number(pricedetail), Number(plotArea));
      let ans = Math.round(max / min);
      setPriceSqr(ans);
    }
  }

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


  return (
    <Box className="perfectwidth">
      <form onSubmit={handleSubmitData}>
        <Box className={style.location_form} color={"black"}>
          <Heading size={"lg"}>Where is your property located?</Heading>
          <Heading size={"sm"}>
            An accurate location helps you connect with the right buyers.
          </Heading>

          <Input
            type="text"
            padding={"0 10px"}
            required
            placeholder="Plot number"
            value={Plotnumber}
            onChange={(e) => setPlotnumber(e.target.value)}
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
        {/* =============================== Tell us about your property ============================ */}
        <Box>
          <Heading as={"h3"} size={"md"} margin={"30px 0 10px 0"}>
            Tell us about your property
          </Heading>
        </Box>


        {/* ============================ add area details =============================== */}
        <Box textAlign={"left"} padding={"10px 0 0 0"}>
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
              padding={"0 2px"}
              value={plotArea}
              onChange={(e) => {
                areaCalucation();
                setPlotArea(NumericString(e.target.value));
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



        {/* ========================== Width of facing road ========================== */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
            Width of facing road
          </Heading>
          <Box display={"flex"} gap={"20px"} w={"300px"} >
            <Input type="text" variant='flushed' flex={1} required value={facingwidth} onChange={(e) => {
              e.preventDefault();
              setFacingWidth(e.target.value);
            }} />
            <Select flex={1} onChange={(e) => setFacing(e.target.value)} value={facing}>
              <option value="Meter"> Meter </option>
              <option value="Feet"> Feet </option>
            </Select>
          </Box>
        </Box>

        {/* ========================== No of open sides ========================== */}
        <Box textAlign={"left"} className={style.optional_box}>
          <Heading as={"h3"} size={"md"} > No. of open sides </Heading>
          <Box textAlign={"left"} padding={"10px 0 0 0"}>
            <button value={"1"} onClick={handleOpenSide} className={openSides.includes("1") ? style.setbtn : style.btn} >1</button>
            <button value={"2"} onClick={handleOpenSide} className={openSides.includes("2") ? style.setbtn : style.btn} >2</button>
            <button value={"3"} onClick={handleOpenSide} className={openSides.includes("3") ? style.setbtn : style.btn} >3</button>
            <button value={"4 or more"} onClick={handleOpenSide} className={openSides.includes("4 or more") ? style.setbtn : style.btn} >4 or more</button>
          </Box>
        </Box>

        {/* ============================== Construction Property =============================== */}
        <Box textAlign={"left"} className={style.optional_box}>
          <Heading as={"h3"} size={"md"} > Any construction done on this property? </Heading>
          <Box textAlign={"left"} padding={"10px 0 0 0"}>
            <button onClick={handleConstructionOnProperty} value={"Yes"} className={ConstructionOnProperty.includes("Yes") ? style.setbtn : style.btn} >Yes</button>
            <button onClick={handleConstructionOnProperty} value={"No"} className={ConstructionOnProperty.includes("No") ? style.setbtn : style.btn} >No</button>
          </Box>
        </Box>

        {/* ============================= Type of construction been done =========================== */}
        <Box className={style.optional_box} display={ConstructionOnProperty == "Yes" ? "grid" : "none"}>
          <Heading as={"h3"} size={"md"} > What type of construction has been done? </Heading>
          <Box>
            <button value={"Shed"} onClick={handleConstructionType} className={constructionType.includes("Shed") ? style.setbtn : style.btn} > Shed </button>
            <button value={"Room(s)"} onClick={handleConstructionType} className={constructionType.includes("Room(s)") ? style.setbtn : style.btn} > Room(s) </button>
            <button value={"Washroom"} onClick={handleConstructionType} className={constructionType.includes("Washroom") ? style.setbtn : style.btn} > Washroom </button>
            <button value={"Other"} onClick={handleConstructionType} className={constructionType.includes("Other") ? style.setbtn : style.btn} > Other </button>
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

        {/* ================================= Possession By =============================== */}
        <Box>
          <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
            Possession By
          </Heading>
          <Box>
            <Select variant={"filled"} padding={"0 10px"} value={expectedByYear} onChange={(e) => setExpectedByYear(e.target.value)}>
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

        {/* ============================== authority approved by =========================== */}
        <Box>
          <Heading
            as={"h3"}
            size={"md"}
            margin={"30px 0 10px 0"}
            textAlign={"left"}
          >
            Which authority the property is approved by ?
          </Heading>
          <Box className={style.grid} gap={4}>
            <button
              className={authorisedBy.includes("DDA") ? style.setbtn : style.btn}
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
              className={authorisedBy.includes("MCD") ? style.setbtn : style.btn}
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

        {/* ========================= Approved for Industry Type ============================ */}
        <Box>
          <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
            Approved for Industry Type
          </Heading>
          <Menu>
            <MenuButton width={"300px"} as={Button} variant={"outline"} borderRadius={0} rightIcon={<ChevronDownIcon />}>
              {industryType.length == 0 ? "Select Industry Type" : `Selected ${industryType.length} industry`}
            </MenuButton>
            <MenuList display={"grid"} padding={"4px 20px"} marginTop={"-6px"} >
              <Checkbox isChecked={industryType.includes("Automobiles")} onChange={handleIndustryType} value={"Automobiles"} >Automobiles</Checkbox>
              <Checkbox isChecked={industryType.includes("Biotechnology")} onChange={handleIndustryType} value={"Biotechnology"} >Biotechnology</Checkbox>
              <Checkbox isChecked={industryType.includes("Capital Goods")} onChange={handleIndustryType} value={"Capital Goods"} >Capital Goods</Checkbox>
              <Checkbox isChecked={industryType.includes("Chemicals")} onChange={handleIndustryType} value={"Chemicals"} >Chemicals</Checkbox>
              <Checkbox isChecked={industryType.includes("Construction")} onChange={handleIndustryType} value={"Construction"} >Construction</Checkbox>
              <Checkbox isChecked={industryType.includes("Defence and Aerospace Manufacturing")} onChange={handleIndustryType} value={"Defence and Aerospace Manufacturing"} >Defence and Aerospace Manufacturing</Checkbox>
              <Checkbox isChecked={industryType.includes("Electronics Hardware")} onChange={handleIndustryType} value={"Electronics Hardware"} >Electronics Hardware</Checkbox>
              <Checkbox isChecked={industryType.includes("Engineering")} onChange={handleIndustryType} value={"Engineering"} >Engineering</Checkbox>
              <Checkbox isChecked={industryType.includes("Food processing")} onChange={handleIndustryType} value={"Food processing"} >Food processing</Checkbox>
              <Checkbox isChecked={industryType.includes("Gems and Jewellery")} onChange={handleIndustryType} value={"Gems and Jewellery"} >Gems and Jewellery</Checkbox>
              <Checkbox isChecked={industryType.includes("Handicrafts")} onChange={handleIndustryType} value={"Handicrafts"} >Handicrafts</Checkbox>
              <Checkbox isChecked={industryType.includes("IT and ITes")} onChange={handleIndustryType} value={"IT and ITes"} >IT and ITes</Checkbox>
              <Checkbox isChecked={industryType.includes("Leather")} onChange={handleIndustryType} value={"Leather"} >Leather</Checkbox>
              <Checkbox isChecked={industryType.includes("Manufacturing")} onChange={handleIndustryType} value={"Manufacturing"} >Manufacturing</Checkbox>
              <Checkbox isChecked={industryType.includes("Medical devices")} onChange={handleIndustryType} value={"Medical devices"} >Medical devices</Checkbox>
              <Checkbox isChecked={industryType.includes("Metals")} onChange={handleIndustryType} value={"Metals"} >Metals</Checkbox>
              <Checkbox isChecked={industryType.includes("Mixed")} onChange={handleIndustryType} value={"Mixed"} >Mixed</Checkbox>
              <Checkbox isChecked={industryType.includes("Petroleum")} onChange={handleIndustryType} value={"Petroleum"} >Petroleum</Checkbox>
              <Checkbox isChecked={industryType.includes("Pharmaceuticals")} onChange={handleIndustryType} value={"Pharmaceuticals"} >Pharmaceuticals</Checkbox>
              <Checkbox isChecked={industryType.includes("Renewable Energy")} onChange={handleIndustryType} value={"Renewable Energy"} >Renewable Energy</Checkbox>
              <Checkbox isChecked={industryType.includes("Software")} onChange={handleIndustryType} value={"Software"} >Software</Checkbox>
              <Checkbox isChecked={industryType.includes("Textiles")} onChange={handleIndustryType} value={"Textiles"} >Textiles</Checkbox>
            </MenuList>
          </Menu>
        </Box>

        {/* ============================== Price Details ============================ */}
        <Box>
          <Box>
            <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
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
                    setPricedetail(e.target.value);
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
                <Input
                  type="text"
                  value={priceSqr}
                  readOnly
                />
              </Box> */}
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
            {additionalPrice && <>
              <InputGroup w={"300px"} margin={"10px 0"}>
                <Input w={"60%"} type='text' onChange={(e) => setMaintenancePrice(e.target.value)} value={maintenancePrice} placeholder={"Maintenance Price"} />
                <Select w={"40%"} borderRadius={0} value={maintenanceTimePeriod} onChange={(e) => setMaintenanceTimePeriod(e.target.value)}>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </Select>
              </InputGroup>
              <Input type="text" w={"300px"} value={bookingAmount} onChange={(e) => setBookingAmount(e.target.value)} placeholder="Booking Amount" margin={"10px 0 0 0"} />
              <Input type="text" w={"300px"} value={annualDuesPayble} onChange={(e) => setAnnualDuesPayble(e.target.value)} placeholder="Annual dues payable" margin={"10px 0 0 0"} />
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
                amenities.includes("Service / Goods Lift") ? style.setbtn : style.btn
              }
              onClick={handleAminities}
              value={"Service / Goods Lift"}
            >
              Service / Goods Lift
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
                amenities.includes("Feng Shui / Vaastu Compliant") ? style.setbtn : style.btn
              }
              onClick={handleAminities}
              value={"Feng Shui / Vaastu Compliant"}
            >
              Feng Shui / Vaastu Compliant
            </button>
            <button
              className={
                amenities.includes("Lift") ? style.setbtn : style.btn
              }
              onClick={handleAminities}
              value={"Lift"}
            >
              Lift(S)
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



        {/* ============================ Other Features ============================ */}
        <Box>
          <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
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

export default CommercialLandRent;