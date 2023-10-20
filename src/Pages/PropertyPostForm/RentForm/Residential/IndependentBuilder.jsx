import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Input,
  NumberInput,
  NumberInputField,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import axios from "axios";
import style from "../RentForm.module.css";
import { CleanInputText, NumericString, WordandNumber } from "../../code";
import { InputGroup } from "@chakra-ui/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";




const IndependentBuilderRent = () => {
  const isCountry = useSelector((state) => state.gloalval);
  const toast = useToast();
  const [country, setCountry] = useState("");
  const [facingwidth, setFacingWidth] = useState("");
  const [city, setCity] = useState("");
  const [appartment, setApartment] = useState("");
  const [pincode, setPincode] = useState("");
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
  const [propertyAge, setpropertyAge] = useState("");
  const [ownership, setOwnerShip] = useState("");
  const [priceSqr, setPriceSqr] = useState("");
  const [amenities, setAminity] = useState([]);
  const [propertyFeatures, setPropertyFeature] = useState("");
  const [buildingFeature, setBuildingFeature] = useState([]);
  const [additinalft, setAdditinalFeature] = useState("");
  const [otherFeature, setOtherFeature] = useState([]);
  const [powerbackup, setPowerbackup] = useState("");
  const [propertyFacing, setPropertyFacing] = useState("");
  const [flooring, setFlooring] = useState("");
  const [facing, setFacing] = useState("Meter");
  const [locationAdv, setLocationAdv] = useState([]);
  const [totalfloors, setTotalFloors] = useState("");
  const [floorOn, setFloorOn] = useState("Ground");
  const [plotArea, setPlotArea] = useState("");
  const [desc, setDesc] = useState("");
  const [pincollection, setPinCollection] = useState([]);
  const [willingTo, setWillingTo] = useState([]);
  const [preferredAgreement, setpreferredAgreement] = useState("");
  const [agentContact, setagentContact] = useState("No");
  const [additionalPrice, setAdditionalPrice] = useState(false);
  const [inclusivePrices, setinclusivePrices] = useState([]);
  const [maintenancePrice, setMaintenancePrice] = useState("");
  const [maintenanceTimePeriod, setMaintenanceTimePeriod] = useState("Monthly");
  const [membershipCharge, setMembershipCharge] = useState("");
  const [bookingAmount, setBookingAmount] = useState("");
  const [securityDeposit, setSecurityDeposit] = useState("None");
  const [depositAmount, setDepositAmount] = useState("");
  const [agreementDuration, setagreementDuration] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [availableFrom, setavailableFrom] = useState("");
  const [expectedRentel, setExpectedRentel] = useState("");
  const [annualDuesPayble, setAnnualDuesPayble] = useState("");
  // state for drop box images
  const [images, setImages] = useState([]);
  const [isDraging, setIsDraging] = useState(false);
  const fileInputRef = useRef(null);


  const handleSubmitData = async (e) => {
    e.preventDefault();
    let obj = {
      lookingFor: "Rent",
      propertyGroup: "Residential",
      propertyType: "Independent / Builder Floor",
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
      agreementType: preferredAgreement,
      price: +priceSqr,
      willingToRent: willingTo,
      amenities,
      inclusivePrices,
      propertyFeatures,
      society_buildingFeatures: buildingFeature,
      additionalFeatures: additinalft,
      otherFeatures: otherFeature,
      powerBackup: powerbackup,
      propertyFacing,
      needAgentHelp: agentContact,
      durationAgreement: agreementDuration,
      monthsOfNotice: noticePeriod,
      flooring,
      propertyStatus: propertyAge,
      roadFacingWidth: facingwidth,
      roadFacingWidthType: facing,
      securityDeposit,
      totalFloors: +totalfloors,
      floorOn,
      carpetArea: plotArea,
      furnished,
      carpetAreaUnit: areaPer,
      parking: {
        openParking: openparking,
        closeParking: parking,
      },
      otherRoom: extraroom,
      description: desc,
      availableFrom: availableFrom,
      countryCurrency: `${isCountry.country == "india" ? "₹" : "$"}`,
      additionalPricingDetails: {
        maintenancePrice,
        maintenanceTimePeriod,
        expectedRental: expectedRentel,
        bookingAmount,
        annualDuesPayable: annualDuesPayble
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
    } else if (!priceSqr) {
      showToastError("Provide Price Per sq.ft");
    } else if (!additinalft) {
      showToastError("Provide Property description");
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
    } else if (!floorOn) {
      showToastError("Provide Floor number");
    } else if (!facingwidth) {
      showToastError("Provide facing width");
    }

    if (securityDeposit == "Fixed") {
      obj["depositValue"] = depositAmount;
    }


    if (securityDeposit == "Multiple of Rent") {
      obj["multipleOfRent"] = depositAmount;
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

      additinalft &&
      powerbackup &&
      propertyFacing &&
      flooring &&
      facing &&
      totalfloors &&
      floorOn
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
        obj['furnishedObj'] = {
          light,
          fans,
          ac,
          tv,
          beds: Beds,
          wardrobe,
          geyser,
        };
        obj["furnishedList"] = furnishedarr;
      }

      // else {
      try {
        // console.log("data",obj); 
        // let response = await fetch(`${process.env.REACT_APP_URL}/property/`, {
        //     method: "POST",
        //     headers: head,
        //     body: JSON.stringify(obj)
        // });
        // console.log("data",obj,response); 
        // let data = await response.json();
        // console.log("data",obj,data); 
        await axios
          .post(`${process.env.REACT_APP_URL}/property/`, obj, {
            headers: head,
          })
          .then((e) => {
            // console.log(e, obj);
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
    let val = NumericString(e.target.value);
    setPincode(val);
    if (val.length == 6) {
      pinfetch(val);
    } else {

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

  // const areaCalucation = () => {
  //   if (pricedetail && plotArea) {
  //     let max = Math.max(Number(pricedetail), Number(plotArea));
  //     let min = Math.min(Number(pricedetail), Number(plotArea));
  //     let ans = Math.round(max / min);
  //     setPriceSqr(ans);
  //   }
  // } 

  const handlePreferredAgreement = (e) => {
    e.preventDefault();
    setpreferredAgreement(e.target.value);
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

  const handleWillingto = (e) => {
    e.preventDefault();
    const value = e.target.value;

    setWillingTo((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
    console.log(willingTo);
  }


  const handlepropertyAge = (e) => {
    e.preventDefault();
    setpropertyAge(e.target.value);
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

  const handleMonthNotice = (e) => {
    e.preventDefault();
    setNoticePeriod(e.target.value);
  }

  const handleinclusivePrices = (e) => {
    e.preventDefault();
    let newarr = [...inclusivePrices];
    let value = e.target.value;

    if (newarr.includes(value)) {
      newarr.splice(newarr.indexOf(value), 1);
    } else {
      newarr.push(value);
    }
    setinclusivePrices(newarr);
  }

  const handleSecurityDeposit = (e) => {
    e.preventDefault();
    setSecurityDeposit(e.target.value);
  }

  const handleDepositAmount = (e) => {
    setDepositAmount(NumericString(e.target.value));
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
    <form onSubmit={handleSubmitData}>
      {/* property location */}
      <Box className={style.location_form}>
        <Heading size={"lg"}>Where is your property located?</Heading>
        <Heading size={"sm"}>
          An accurate location helps you connect with the right buyers.
        </Heading>

        <Input
          type="text"
          maxLength={"100"}
          required
          placeholder="House No. (optional)"
          value={houseNo}
          onChange={(e) => setHouseNo(WordandNumber(e.target.value))}
          fontSize={"md"}
          variant="flushed"
        />
        <Input
          type="text"
          maxLength={"100"}
          required
          placeholder="Apartment / Society Name"
          fontSize={"md"}
          value={appartment}
          onChange={(e) => setApartment(WordandNumber(e.target.value))}
          variant="flushed"
        />
        <Input
          type="text"
          placeholder={"Enter pincode"}
          maxLength={"6"}
          required
          variant="flushed"
          fontSize={"md"}
          value={pincode}
          onChange={handlepinfetch}
        />
        <Input
          type="text"
          maxLength={"100"}
          required
          placeholder="Locality Name"
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
        ) : (
          ""
        )}

        <Input
          type="text"
          maxLength={"100"}
          required
          placeholder="City Name"
          fontSize={"md"}
          value={city}
          onChange={(e) => setCity(WordandNumber(e.target.value))}
          variant="flushed"
        />
        <Input
          type="text"
          maxLength={"100"}
          required
          placeholder="State Name"
          value={state}
          onChange={(e) => setState(WordandNumber(e.target.value))}
          fontSize={"md"}
          variant="flushed"
        />
        <Input
          type="text"
          maxLength={"100"}
          required
          placeholder="Country Name"
          value={country}
          onChange={(e) => setCountry(WordandNumber(e.target.value))}
          fontSize={"md"}
          variant="flushed"
        />
      </Box>
      {/* Property Detail */}
      <Box marginTop={12}>
        <Heading as={"h4"} size={"md"} textAlign={"left"} margin={"0 0 20px 0 "}>
          Add Room Details
        </Heading>
        {/* Room Detail */}
        <Box as={"div"} className={style.inp_form_numbers}>
          <Box textAlign={"left"}>
            <Text> No. of Bedrooms </Text>
            <Input
              type="text"
              variant="flushed"
              maxLength={"2"}
              onChange={(e) => setBedRoom(NumericString(e.target.value))}
              value={bedroom}
              required
            />
          </Box>
          <Box textAlign={"left"}>
            <Text> No. of Bathrooms </Text>
            <Input
              type="text"
              variant="flushed"
              maxLength={"2"}
              onChange={(e) => setBathroom(NumericString(e.target.value))}
              value={bathroom}
              required
            />
          </Box>
          <Box textAlign={"left"}>
            <Text> No. of Balconies </Text>
            <Input type="text"
              variant="flushed"
              maxLength={"2"}
              onChange={(e) => setBalcony(NumericString(e.target.value))}
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
              type="text"
              maxLength={"6"}
              value={plotArea}
              onChange={(e) => {
                // areaCalucation();
                setPlotArea(NumericString(e.target.value));
              }}
              required
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
        {/* =========================  furnish ==========================  */}
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

        {/* ========================= reserved ========================= */}
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

        {/* ========================= floor details ========================= */}
        <Box textAlign={"left"}>
          <Heading
            as={"h3"}
            size={"md"}
            textAlign={"left"}
          >
            Floor Details
          </Heading>
          <Text textAlign={"left"} margin={"10px 0"}>
            Total no of floors and your floor details
          </Text>
          <Box display={"flex"} alignItems={"center"} gap={5}>
            <Input type="text"
              placeholder="Total no of Floor"
              maxLength={"2"}
              w={300}
              variant={"flushed"}
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
                  setTotalFloors(NumericString(e.target.value));
                }
              }}
              required
              value={totalfloors} />
            <Select
              id="floorSelectTag"
              variant={"flushed"}
              onChange={(e) => setFloorOn(e.target.value)}
              value={floorOn}
              w={180}
              borderRadius={0}
              _hover={{
                backgroundColor: "rgb(255, 255, 255)",
                borderBottom: "1px solid blue",
                borderLeft: "0",
                borderRight: "0",
                borderTop: "0",
              }}
              borderTop={"0"}
              borderLeft={"0"}
              borderBottom={"1px solid blue"}
              backgroundColor={"rgb(255, 255, 255)"}
            >
              <option value="Ground">Ground</option>
              <option value="Basement">Basement</option>
              <option value="Lower Ground">Lower Ground</option>
              {Array.from(Array(Number(totalfloors)).keys()).map((e) => {
                return <option value={e + 1}>{e + 1}</option>;
              })}
            </Select>
          </Box>
        </Box>

        {/* ========================= Age of Property ========================= */}
        <Box textAlign={"left"} className={style.optional_box}>
          <Heading
            as={"h3"}
            size={"md"}
            textAlign={"left"}
          >
            Age of Property
          </Heading>
          <Box className={style.grid}>
            <button
              className={propertyAge == "0-1 year" ? style.setbtn : style.btn}
              borderRadius={"100px"}
              onClick={handlepropertyAge}
              value={"0-1 year"}
              border={"1px solid rgba(113, 210, 255, 0.897)"}
              margin={"8px 6px 0 0"}
              backgroundColor={"blue.50"}
            >
              0-1 years
            </button>
            <button
              className={propertyAge == "1-5 years" ? style.setbtn : style.btn}
              borderRadius={"100px"}
              onClick={handlepropertyAge}
              value={"1-5 years"}
              border={"1px solid rgba(113, 210, 255, 0.897)"}
              margin={"8px 6px 0 0"}
              backgroundColor={"blue.50"}
            >
              1-5 years
            </button>
            <button
              className={propertyAge == "5-10 years" ? style.setbtn : style.btn}
              borderRadius={"100px"}
              onClick={handlepropertyAge}
              value={"5-10 years"}
              border={"1px solid rgba(113, 210, 255, 0.897)"}
              margin={"8px 6px 0 0"}
              backgroundColor={"blue.50"}
            >
              5-10 years
            </button>
            <button
              className={propertyAge == "10+ years" ? style.setbtn : style.btn}
              borderRadius={"100px"}
              onClick={handlepropertyAge}
              value={"10+ years"}
              border={"1px solid rgba(113, 210, 255, 0.897)"}
              margin={"8px 6px 0 0"}
              backgroundColor={"blue.50"}
            >
              10+ years
            </button>
          </Box>
        </Box>

        {/* ============================= Available from (date) ============================= */}
        <Box textAlign={"left"} display={"grid"}>
          <Heading as={"h3"} size={"md"} margin={"4px 0"} textAlign={"left"}>
            Available from
          </Heading>
          <Input value={availableFrom} onChange={(e) => setavailableFrom(e.target.value)} color='blue' type={"date"} w={300} />
        </Box>

        {/* ========================= Willing to rent out to ========================= */}
        <Box>
          <Heading as={"h3"} size={"sm"} margin={"14px 0"} textAlign={"left"}>
            Willing to rent out to
          </Heading>
          <Box textAlign={"left"} display={"flex"} flexWrap={"wrap"} gap={5} >
            <button
              value={"Family"}
              onClick={handleWillingto}
              className={willingTo.includes("Family") ? style.setbtn : style.btn}
            >
              Family
            </button>
            <button
              value={"Single men"}
              onClick={handleWillingto}
              className={willingTo.includes("Single men") ? style.setbtn : style.btn}
            >
              Single men
            </button>
            <button
              value={"Single women"}
              onClick={handleWillingto}
              className={willingTo.includes("Single women") ? style.setbtn : style.btn}
            >
              Single women
            </button>
          </Box>
        </Box>

        {/* ===================================== Are you 0k with brokers contacting you? ============================== */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} textAlign={"left"}>
            Are you ok with Agents contacting you?
          </Heading>
          <Box >
            <button
              value={"Yes"}
              onClick={(e) => {
                e.preventDefault();
                setagentContact(e.target.value);
              }}
              className={agentContact == "Yes" ? style.setbtn : style.btn}
            >
              Yes
            </button>
            <button
              value={"No"}
              onClick={(e) => {
                e.preventDefault();
                setagentContact(e.target.value);
              }}
              className={agentContact == "No" ? style.setbtn : style.btn}
            >
              No
            </button>
          </Box>
        </Box>

        {/* ====================== Preferred agreement type =============================== */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} margin={"14px 0"} textAlign={"left"}>
            Preferred agreement type
          </Heading>
          <Box>
            <button onClick={handlePreferredAgreement} value={"Company lease agreement"} className={preferredAgreement == "Company lease agreement" ? style.setbtn : style.btn}  >Company lease agreement</button>
            <button onClick={handlePreferredAgreement} value={"Any"} className={preferredAgreement == "Any" ? style.setbtn : style.btn}  >Any</button>
          </Box>
        </Box>

        {/* ==============================  Rent Detail  ==================================== */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} textAlign={"left"}>
            Rent Details
          </Heading>
          <Box>
            <Input maxLength={"10"} type="text" w={"40%"} borderRadius={0} value={priceSqr} onChange={(e) => {
              e.preventDefault();
              setPriceSqr(NumericString(e.target.value));
            }} placeholder={"₹ Expected Rent"} />
          </Box>
          {/* pricing checkbox */}
          <Box display={"flex"} flexWrap={"wrap"} gap={5}>
            <Checkbox isChecked={inclusivePrices.includes("Electricity & Water charges excluded")} value={"Electricity & Water charges excluded"} onChange={handleinclusivePrices} >Electricity & Water charges excluded</Checkbox>
            <Checkbox isChecked={inclusivePrices.includes("price Negotiable")} value={"price Negotiable"} onChange={handleinclusivePrices} >price Negotiable</Checkbox>
          </Box>
          {/* Additional Pricing Detail (Optional) */}
          <Box display={"grid"}>
            {additionalPrice && <>
              <Heading as={"h4"} size={"sm"} margin={"10px 0"} fontWeight={700} textAlign={"left"}>
                Additional Pricing Detail (Optional)
              </Heading>
              <InputGroup w={"300px"} margin={"10px 0"}>
                <Input maxLength={"9"} w={"60%"} type='text' onChange={(e) => setMaintenancePrice(NumericString(e.target.value))} value={maintenancePrice} placeholder={"Maintenance Price"} />
                <Select w={"40%"} borderRadius={0} value={maintenanceTimePeriod} onChange={(e) => setMaintenanceTimePeriod(e.target.value)}>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </Select>
              </InputGroup>
              <Input maxLength={"9"} type="text" w={"300px"} value={expectedRentel} onChange={(e) => setExpectedRentel(NumericString(e.target.value))} placeholder="Expected rental" margin={"0"} />
              <Input maxLength={"9"} type="text" w={"300px"} value={bookingAmount} onChange={(e) => setBookingAmount(NumericString(e.target.value))} placeholder="Booking Amount" margin={"10px 0 0 0"} />
              <Input maxLength={"9"} type="text" w={"300px"} value={annualDuesPayble} onChange={(e) => setAnnualDuesPayble(NumericString(e.target.value))} placeholder="Annual dues payable" margin={"10px 0 0 0"} />
              <Input maxLength={"9"} type="text" w={"300px"} value={membershipCharge} onChange={(e) => setMembershipCharge(NumericString(e.target.value))} placeholder="Membership charges" margin={"10px 0 0 0"} />
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

        {/* ============================ Security deposit ============================ */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
            Security deposit
          </Heading>
          <Box>
            <button value={"Fixed"} className={securityDeposit == "Fixed" ? style.setbtn : style.btn} onClick={handleSecurityDeposit}> Fixed </button>
            <button value={"Multiple of Rent"} className={securityDeposit == "Multiple of Rent" ? style.setbtn : style.btn} onClick={handleSecurityDeposit}> Multiple of Rent </button>
            <button value={"None"} className={securityDeposit == "None" ? style.setbtn : style.btn} onClick={handleSecurityDeposit}> None </button>
          </Box>
          <Box display={securityDeposit == "None" ? "none" : "block"}>
            <Input maxLength={"9"} type="text" w={300} value={depositAmount} onChange={handleDepositAmount} placeholder={`${securityDeposit == "Fixed" ? "Deposit Value" : ""} ${securityDeposit == "Multiple of Rent" ? "No. of months (Max 30)" : ""}`} />
          </Box>
        </Box>

        {/* Duration of agriment */}
        <Box>
          <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
            Duration of agreement
          </Heading>
          <Select onChange={(e) => setagreementDuration(e.target.value)} value={agreementDuration} >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Select>
        </Box>

        {/* Months of Notice */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
            Months of Notice (Optional)
          </Heading>
          <Box>
            <button onClick={handleMonthNotice} className={noticePeriod == "None" ? style.setbtn : style.btn} value={"None"}> None </button>
            <button onClick={handleMonthNotice} className={noticePeriod == "1 month" ? style.setbtn : style.btn} value={"1 month"}> 1 month </button>
            <button onClick={handleMonthNotice} className={noticePeriod == "2 months" ? style.setbtn : style.btn} value={"2 months"}> 2 month </button>
            <button onClick={handleMonthNotice} className={noticePeriod == "3 months" ? style.setbtn : style.btn} value={"3 months"}> 3 month </button>
            <button onClick={handleMonthNotice} className={noticePeriod == "4 months" ? style.setbtn : style.btn} value={"4 months"}> 4 month </button>
            <button onClick={handleMonthNotice} className={noticePeriod == "5 months" ? style.setbtn : style.btn} value={"5 months"}> 5 month </button>
            <button onClick={handleMonthNotice} className={noticePeriod == "6 months" ? style.setbtn : style.btn} value={"6 months"}> 6 month </button>
          </Box>
        </Box>

        {/* ========================= Add pricing and details ========================= */}
        <Box>
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

      {/* ========================== What makes your property unique ================================  */}
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

      {/* ========================= Add amenities/unique features ================================== */}
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

      {/* ========================= Amenities ================================== */}
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
              amenities.includes("Water Disposal") ? style.setbtn : style.btn
            }
            onClick={handleAminities}
            value={"Water Disposal"}
          >
            Water Disposal
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
              amenities.includes("Visitor Parking") ? style.setbtn : style.btn
            }
            onClick={handleAminities}
            value={"Visitor Parking"}
          >
            Visitor Parking
          </button>
          <button
            className={
              amenities.includes("Water purifier")
                ? style.setbtn
                : style.btn
            }
            onClick={handleAminities}
            value={"Water purifier"}
          >
            Water purifier
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
              amenities.includes("Piped-gas") ? style.setbtn : style.btn
            }
            onClick={handleAminities}
            value={"Piped-gas"}
          >
            Piped-gas
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
      {/* ========================= Property Features ================================== */}
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
              propertyFeatures.includes("Piped-gas") ? style.setbtn : style.btn
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
      {/* ========================= Society/Building feature ================================== */}
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
      {/* ========================= Additional Features ================================== */}
      <Box className={style.optional_box}>
        <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
          Additional Features
        </Heading>
        <Box>
          <button
            className={
              additinalft.includes("Separate entry for servant room")
                ? style.setbtn
                : style.btn
            }
            value={"Separate entry for servant room"}
            onClick={handleAdditionalFeature}
          >
            Separate entry for servant room
          </button>
          <button
            className={
              additinalft.includes("No open drainage around") ? style.setbtn : style.btn
            }
            value={"No open drainage around"}
            onClick={handleAdditionalFeature}
          >
            No open drainage around
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

      {/* ============================ Other Features ==================================== */}
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

      {/* ============================ Power Back up ==================================== */}
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

      {/* ============================ Property facing ==================================== */}
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

      {/* ============================ Type of flooring ==================================== */}
      <Box className={style.optional_box}>
        <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
          Type of flooring
        </Heading>
        <Box>
          <Select
            w={300}
            variant={"flushed"}
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

      {/* ============================ Width of facing road ==================================== */}
      <Box className={style.optional_box}>
        <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
          Width of facing road
        </Heading>
        <Box display={"flex"} gap={"20px"} w={"300px"}>
          <Input
            type="text"
            maxLength={"3"}
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
            variant={"flushed"}
            onChange={(e) => setFacing(e.target.value)}
            value={facing}
          >
            <option value="Meter"> Meter </option>
            <option value="Feet"> Feet </option>
          </Select>
        </Box>
      </Box>

      {/* ============================ Location Advantages ==================================== */}
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
    </form>
  );
};

export default IndependentBuilderRent;

