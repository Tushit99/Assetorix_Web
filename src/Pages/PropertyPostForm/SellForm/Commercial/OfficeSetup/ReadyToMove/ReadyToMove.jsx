import React, { useState, useEffect, useRef } from "react";
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
  Checkbox,
  useToast,
  RadioGroup,
  Stack,
  Radio,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import style from "../OfficeSetup.module.css";
import { useSelector } from "react-redux";
import { AddIcon, ChevronDownIcon, MinusIcon } from "@chakra-ui/icons";
import axios from "axios";
import { CleanInputText, NumericString, WordandNumber } from "../../../../code";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../Loading";

const ReadyToMove = () => {
  const isCountry = useSelector((state) => state.gloalval);
  const toast = useToast();
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [state, setState] = useState("");
  const [locality, setLocality] = useState("");
  const [minseat, setMinseat] = useState("");
  const [maxseat, setMaxseat] = useState("");
  const [cabins, setCabins] = useState("");
  const [meetingRoom, setMeetingRoom] = useState("");
  const [washroomType, setWashroomType] = useState("");
  const [privateWashroom, setPrivateWashroom] = useState(0);
  const [sharedWashroom, setSharedWashroom] = useState(0);
  const [conferenceRoom, setConferenceRoom] = useState("");
  const [receptionArea, setReceptionArea] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [centralAirConditioning, setcentralAirConditioning] = useState("");
  const [oxygenDuct, setOxygenDuct] = useState("");
  const [ups, setUps] = useState("");
  const [fireSafty, setFireSafty] = useState([]);
  const [stairCase, setStairCase] = useState("");
  const [liftStatus, setLiftStatus] = useState("");
  const [liftPassenger, setLiftPassenger] = useState(0);
  const [liftService, setLiftService] = useState(0);
  const [modernLifts, setModernLifts] = useState(false);
  const [parkingStatus, setParkingStatus] = useState("");
  const [parkingArr, setParkingArr] = useState([]);
  const [parkingTotalNumber, setParkingTotalNumber] = useState("");
  const [preLeased, setPreLeased] = useState("");
  const [fireNOC, setFireNOC] = useState("");
  const [occupancyCertificate, setOccupancyCertificate] = useState("");
  const [locatedInside, setLocatedInside] = useState("");
  const [pantrySize, setPantrySize] = useState("");
  const [pantryType, setPantryType] = useState("");
  const [floorNumber, setFloorNumber] = useState([]);
  const [pricedetail, setPricedetail] = useState("");
  const [previouslyUsedList, setpreviouslyUsedList] = useState([]);
  const [currentRentPerMonth, setCurrentRentPerMonth] = useState("");
  const [leaseTenureInYear, setLeaseTenureInYear] = useState("");
  const [annualRentIncrease, setAnnualRentIncrease] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [pantryTypeUnit, setPantryTypeUnit] = useState("sq.ft");
  const [currency, setCurrency] = useState("₹");

  const [areaPer, setAreaPer] = useState("sq.ft");
  const [availability, setAvailability] = useState("");
  const [fromyear, setFromyear] = useState("");
  const [expectedyear, setExpectedYear] = useState("");
  const [ownership, setOwnerShip] = useState("");
  const [inclusivePrices, setInclusivePrice] = useState([]);
  const [amenities, setAminity] = useState([]);
  const [locationAdv, setLocationAdv] = useState([]);
  const [totalfloors, setTotalFloors] = useState("");
  const [plotArea, setPlotArea] = useState("");
  const [desc, setDesc] = useState("");
  const [pincollection, setPinCollection] = useState([]);
  const [maintenancePrice, setMaintenancePrice] = useState("");
  const [maintenanceTimePeriod, setMaintenanceTimePeriod] = useState("Monthly");
  const [zoneType, setZoneType] = useState("");
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
      propertyType: "Office",
      officeType: "Ready to move office space",
      address: {
        locality,
        pincode,
        city,
        state,
        country,
        zoneType,
        locatedInside,
      },
      ownership,
      price: +pricedetail,
      inclusivePrices,
      amenities,
      locationAdv,
      carpetArea: plotArea,
      carpetAreaUnit: areaPer,
      description: desc,
      countryCurrency: currency,
      additionalPricingDetails: {
        maintenancePrice,
        maintenanceTimePeriod,
      },
      officeSetup: {
        minSeats: minseat,
        maxSeats: maxseat,
        cabins: cabins,
        meetingRooms: meetingRoom,
      },
      preLeased_Rented: preLeased,
      washrooms: washroomType,
      conferenceRoom,
      receptionArea,
      pantryType,
      facilityAvailable: {
        furnishing,
        centralAirConditioning,
        oxygenDuct,
        ups,
      },
      totalFloors: +totalfloors,
      floorOn: floorNumber,
      fireSafety: fireSafty,
      previouslyUsedList,
      staircases: stairCase,
      lift: liftStatus,
      parking: parkingStatus,
      preLeased,
      noc: fireNOC,
      occupancy: occupancyCertificate,
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
    } else if (!totalfloors) {
      showToastError("Provide Total Floors");
    }

    if (locationAdv) {
      obj["locationAdv"] = locationAdv;
    }

    if (city && locality && ownership && inclusivePrices && totalfloors) {
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

      if (washroomType == "Available") {
        let washroomDetails = {
          privateWashrooms: privateWashroom,
          sharedWashrooms: sharedWashroom,
        };
        obj["washroomDetails"] = washroomDetails;
      }

      if (pantryType == "Private" || pantryType == "Shared") {
        obj["pantrySize"] = pantrySize;
        obj["pantrySizeUnit"] = pantryTypeUnit;
      }
      if (liftStatus == "Available") {
        obj["liftDetails"] = {
          passenger: liftPassenger,
          service: liftService,
          modern: modernLifts,
        };
      }

      if (parkingStatus == "Available") {
        obj["parkingDetailsList"] = parkingArr;
        obj["parkingCount"] = parkingTotalNumber;
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
        console.log("data", obj);
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
    let val = NumericString(e.target.value);
    setPincode(val);
    if (val.length == 6) {
      pinfetch(val);
    } else {
      console.log(val);
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

  const handleFloorNumber = (e) => {
    e.preventDefault();
    let newarr = [...floorNumber];
    let value = e.target.value;

    if (newarr.includes(value)) {
      newarr.splice(newarr.indexOf(value), 1);
    } else {
      newarr.push(value);
    }
    if (newarr.includes("")) {
      newarr.splice(newarr.indexOf(""), 1);
    }
    setFloorNumber(newarr);
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

  const FileSystemHandle = (e) => {
    let newarr = [...previouslyUsedList];
    let value = e;

    if (newarr.includes(value)) {
      newarr.splice(newarr.indexOf(value), 1);
    } else {
      newarr.push(value);
    }
    console.log(newarr);
    setpreviouslyUsedList(newarr);
  };

  // // ======--- image upload function

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
    <form onSubmit={handleSubmitData}>
      {/* property location */}
      <Box className={style.location_form}>
        <Heading size={"lg"} color={"black"} textAlign={"center"}>
          Where is your Ready to move office space located?
        </Heading>
        <Heading size={"sm"} color={"black"} textAlign={"left"}>
          Location Detail
        </Heading>

        <Select
          fontSize={"md"}
          variant="flushed"
          as={"select"}
          onChange={(e) => setLocatedInside(e.target.value)}
          value={locatedInside}
        >
          <option value="">Located in side</option>
          <option value="IT Park">IT Park</option>
          <option value="Business Park"> Business Park </option>
          <option value="Other"> Other </option>
        </Select>

        <Select
          fontSize={"md"}
          variant="flushed"
          as={"select"}
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
        <Input
          type="text"
          placeholder={"Enter pincode"}
          required
          maxLength={6}
          fontSize={"md"}
          variant="flushed"
          value={pincode}
          onChange={handlepinfetch}
        />
        <Input
          type="text"
          required
          placeholder="Enter Locality"
          list="browsers"
          maxLength={"100"}
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
          required
          placeholder="Enter City"
          fontSize={"md"}
          maxLength={"100"}
          value={city}
          onChange={(e) => setCity(WordandNumber(e.target.value))}
          variant="flushed"
        />
        <Input
          type="text"
          required
          placeholder="Enter State"
          value={state}
          maxLength={"100"}
          onChange={(e) => setState(WordandNumber(e.target.value))}
          fontSize={"md"}
          variant="flushed"
        />

        <Input
          type="text"
          required
          placeholder="Enter Country"
          value={country}
          maxLength={"100"}
          onChange={(e) => setCountry(WordandNumber(e.target.value))}
          fontSize={"md"}
          variant="flushed"
        />
      </Box>
      {/* Property Detail */}
      <Box>
        {/* ====================================== */}
        {/* add area details */}
        <Box textAlign={"left"}>
          <Heading as={"h3"} marginTop={5} size={"sm"}>
            Add Area Details
          </Heading>
          <InputGroup
            isAttached
            width={{ base: "100%", md: 300 }}
            variant="outline"
          >
            <Input
              type="text"
              maxLength={9}
              placeholder="Enter area detail" 
              value={plotArea}
              borderRadius={0}
              onChange={(e) => {
                setPlotArea(NumericString(e.target.value));
              }}
              required
            />
            <Select
              borderRadius={0}
              value={areaPer}
              placeholder="Enter area detail"
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

        {/* Office Setup  */}
        <Box>
          <Heading as={"h3"} marginTop={5} size={"sm"} textAlign={"left"}>
            Describe your office setup
          </Heading>
          <Box
            display={{ base: "grid", md: "flex" }}
            gap={10}
            flexWrap={"nowrap"}
          >
            <Input
              type="text"
              maxLength={4}
              placeholder="Min no. of Seats"
              value={minseat}
              onChange={(e) => setMinseat(NumericString(e.target.value))}
            />
            <Input
              type="text"
              maxLength={5}
              placeholder="Max no. of Seats (optional)"
              value={maxseat}
              onChange={(e) => setMaxseat(NumericString(e.target.value))}
            />
            <Input
              type="text"
              maxLength={4}
              placeholder="No. of Cabins"
              value={cabins}
              onChange={(e) => setCabins(NumericString(e.target.value))}
            />
          </Box>
        </Box>

        {/* No. of Meeting Rooms */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} marginTop={5} size={"sm"}>
            No. of Meeting Rooms
          </Heading>
          <Box>
            <Input
              type="text"
              placeholder="No. of Meeting Rooms"
              value={meetingRoom}
              width={{ base: "100%", md: 300 }}
              maxLength={5}
              onChange={(e) => setMeetingRoom(NumericString(e.target.value))}
            />
          </Box>
        </Box>

        {/* Washrooms */}
        <Box display={"grid"}>
          <Heading textAlign={"left"} marginTop={5} as={"h3"} size={"sm"}>
            Washrooms
          </Heading>
          <Box display={"grid"} gridTemplateColumns={"repeat(1,1fr)"} gap={2}>
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

        {/* Conference Room */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} marginTop={5} size={"sm"} textAlign={"left"}>
            Conference Room
          </Heading>
          <Box>
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
        <Box>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
            Reception Area
          </Heading>
          <Box display={"flex"} gap={10} padding={"12px 0 0 0"}>
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
        <Box>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
            Pantry Type
          </Heading>
          <Box
            display={"flex"}
            gap={{ base: 5, md: 10 }}
            flexWrap={"wrap"}
            textAlign={"left"}
          >
            <button
              value={"Shared Pantry"}
              onClick={(e) => {
                e.preventDefault();
                setPantryType(e.target.value);
              }}
              className={
                pantryType === "Shared Pantry" ? style.setbtn : style.btn
              }
            >
              Shared Pantry
            </button>
            <button
              value={"No Shared Pantry"}
              onClick={(e) => {
                e.preventDefault();
                setPantryType(e.target.value);
              }}
              className={
                pantryType === "No Shared Pantry" ? style.setbtn : style.btn
              }
            >
              No Shared Pantry
            </button>
          </Box>
          <Box
            display={pantryType == "Shared Pantry" ? "flex" : "none"}
            marginTop={2}
          >
            <InputGroup w={340}>
              <Input
                type="text"
                maxLength={6}
                border={"1px solid rgb(222, 222, 255)"}
                value={pantrySize}
                onChange={(e) => setPantrySize(NumericString(e.target.value))}
                _hover={{ backgroundColor: "#fffff" }}
                backgroundColor={"white"}
                variant={"filled"}
                flex={4}
                placeholder="Pantry Size (optional)"
              />
              <Select
                variant={"outline"}
                flex={2}
                borderRadius={0}
                value={pantryTypeUnit}
                onChange={(e) => {
                  setPantryTypeUnit(e.target.value);
                }}
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
        <Box textAlign={"left"} maxWidth={"100%"}>
          <Heading as={"h3"} size={"sm"} marginTop={5}>
            Please select the facilities available
          </Heading>
          <Box
            display={{ base: "grid", md: "flex" }}
            flexWrap={"wrap"}
            maxWidth={"96%"}
            margin={{ base: "10px", md: "5px 14px" }}
            w={500}
            gap={{ base: 0, md: 6 }}
          >
            <Text flex={4}>Furnishing</Text>
            <RadioGroup onChange={setFurnishing} value={furnishing}>
              <Stack direction="row">
                <Radio value="Available">Available</Radio>
                <Radio value="Not-Available">Not-Available</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box
            display={{ base: "grid", md: "flex" }}
            flexWrap={"wrap"}
            maxWidth={"96%"}
            margin={{ base: "10px", md: "5px 14px" }}
            w={500}
            gap={{ base: 0, md: 6 }}
          >
            <Text flex={4}>Central Air Conditioning</Text>
            <RadioGroup
              onChange={setcentralAirConditioning}
              value={centralAirConditioning}
            >
              <Stack direction="row">
                <Radio value="Available">Available</Radio>
                <Radio value="Not-Available">Not-Available</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box
            display={{ base: "grid", md: "flex" }}
            flexWrap={"wrap"}
            maxWidth={"96%"}
            margin={{ base: "10px", md: "5px 14px" }}
            w={500}
            gap={{ base: 0, md: 6 }}
          >
            <Text flex={4}>Oxygen Duct</Text>
            <RadioGroup onChange={setOxygenDuct} value={oxygenDuct}>
              <Stack direction="row">
                <Radio value="Available">Available</Radio>
                <Radio value="Not-Available">Not-Available</Radio>
              </Stack>
            </RadioGroup>
          </Box>
          <Box
            display={{ base: "grid", md: "flex" }}
            flexWrap={"wrap"}
            maxWidth={"96%"}
            margin={{ base: "10px", md: "5px 14px" }}
            w={500}
            gap={{ base: 0, md: 6 }}
          >
            <Text flex={4}>UPS</Text>
            <RadioGroup onChange={setUps} value={ups}>
              <Stack direction="row">
                <Radio value="Available">Available</Radio>
                <Radio value="Not-Available">Not-Available</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>

        {/* Fire safety mesures */}
        <Box textAlign={"left"} className={style.optional_box}>
          <Heading as={"h3"} marginTop={5} size={"sm"}>
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

        {/* floor details */}
        <Box textAlign={"left"}>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
            Floor Details
          </Heading>
          <Box display={"flex"} alignItems={"center"}>
            <Input
              type="text"
              placeholder="Enter Total floor"
              value={totalfloors}
              variant={"outline"}
              maxLength={2}
              onChange={(e) => {
                setTotalFloors(NumericString(e.target.value));
              }}
              required
              w={180}
            />
            <Box>
              <Menu>
                <MenuButton
                  variant={"outline"}
                  borderRadius={0}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  {floorNumber.length
                    ? `Selected ${floorNumber.length} floor`
                    : "Enter Floor No."}
                </MenuButton>
                <MenuList
                  display={"flex"}
                  maxHeight={200}
                  overflow={"scroll"}
                  overflowX={"hidden"}
                  flexDirection={"column"}
                  padding={"8px 10px"}
                >
                  <Checkbox
                    isChecked={floorNumber.includes("Basement")}
                    onChange={handleFloorNumber}
                    value={"Basement"}
                  >
                    Basement
                  </Checkbox>
                  <Checkbox
                    isChecked={floorNumber.includes("Lower Ground")}
                    onChange={handleFloorNumber}
                    value={"Lower Ground"}
                  >
                    Lower Ground
                  </Checkbox>
                  <Checkbox
                    isChecked={floorNumber.includes("Ground")}
                    onChange={handleFloorNumber}
                    value={"Ground"}
                  >
                    Ground
                  </Checkbox>
                  {Array.from(Array(Number(totalfloors)).keys()).map((e, i) => {
                    return (
                      <Checkbox
                        isChecked={floorNumber.includes(`${e + 1}`)}
                        key={i}
                        onChange={handleFloorNumber}
                        value={e + 1}
                      >
                        {e + 1}
                      </Checkbox>
                    );
                  })}
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>

        {/* Staicases */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} marginTop={5} size={"sm"}>
            No. of Staircases (Optional)
          </Heading>
          <Input
            width={300}
            type="text"
            placeholder="No. of Staircases"
            variant={"flushed"}
            maxLength={"5"}
            onChange={(e) => setStairCase(NumericString(e.target.value))}
            value={stairCase}
          />
        </Box>

        {/* Lift */}
        <Box textAlign={"left"} className={style.optional_box}>
          <Heading as={"h3"} marginTop={5} size={"sm"}>
            Lifts
          </Heading>
          <Box>
            <button
              value={"Available"}
              onClick={(e) => {
                e.preventDefault();
                setLiftStatus(e.target.value);
              }}
              className={liftStatus == "Available" ? style.setbtn : style.btn}
            >
              Available
            </button>
            <button
              value={"Not-Available"}
              onClick={(e) => {
                e.preventDefault();
                setLiftStatus(e.target.value);
              }}
              className={
                liftStatus == "Not-Available" ? style.setbtn : style.btn
              }
            >
              Not-Available
            </button>
          </Box>
          {/* lift availability detail */}
          <Box
            padding={"0 40px"}
            display={liftStatus == "Available" ? "flex" : "none"}
            flexWrap={"wrap"}
            gap={"10px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box display={"flex"} alignItems={"center"}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setLiftPassenger((prev) => prev - 1);
                }}
                className={
                  liftPassenger == 0 ? style.washroom_hide : style.washroom_dec
                }
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
              <Text margin={"0 10px"} flex={4}>
                Passenger Lifts
              </Text>
            </Box>
            <Box padding={"0 40px"}>
              <Checkbox
                onChange={() => {
                  setModernLifts(!modernLifts);
                  console.log(modernLifts);
                }}
              >
                Modern lifts (Optional)
              </Checkbox>
            </Box>
          </Box>
          <Box
            padding={"0 40px"}
            display={liftStatus == "Available" ? "flex" : "none"}
            alignItems={"center"}
            width={300}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setLiftService((prev) => prev - 1);
              }}
              className={
                liftService == 0 ? style.washroom_hide : style.washroom_dec
              }
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
            <Text margin={"0 10px"} flex={4}>
              Service Lifts
            </Text>
          </Box>
        </Box>

        {/* Parking */}
        <Box className={style.optional_box}>
          <Heading as={"h3"} marginTop={5} size={"sm"}>
            Parking
          </Heading>
          <Box>
            <button
              value={"Available"}
              onClick={(e) => {
                e.preventDefault();
                setParkingStatus(e.target.value);
              }}
              className={
                parkingStatus == "Available" ? style.setbtn : style.btn
              }
            >
              Available
            </button>
            <button
              value={"Not-Available"}
              onClick={(e) => {
                e.preventDefault();
                setParkingStatus(e.target.value);
              }}
              className={
                parkingStatus == "Not-Available" ? style.setbtn : style.btn
              }
            >
              Not-Available
            </button>
          </Box>
          <Box display={parkingStatus == "Available" ? "grid" : "none"} gap={2}>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              gap={4}
              alignItems={"center"}
            >
              <Checkbox
                onChange={handleNumberOfParking}
                value={"Private Parking in Basement"}
                isChecked={parkingArr.includes("Private Parking in Basement")}
              >
                Private Parking in Basement
              </Checkbox>
              <Checkbox
                onChange={handleNumberOfParking}
                value={"Private Parking Outside"}
                isChecked={parkingArr.includes("Private Parking Outside")}
              >
                Private Parking Outside
              </Checkbox>
              <Checkbox
                onChange={handleNumberOfParking}
                value={"Public Parking"}
                isChecked={parkingArr.includes("Public Parking")}
              >
                Public Parking
              </Checkbox>
            </Box>
            <Input
              type="text"
              placeholder="Enter no. of Parkings"
              value={parkingTotalNumber}
              maxLength={"4"}
              onChange={(e) => {
                e.preventDefault();
                setParkingTotalNumber(NumericString(e.target.value));
              }}
            />
          </Box>
        </Box>

        {/* Availability status */}
        <Box textAlign={"left"} className={style.optional_box}>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
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
            <Heading as={"h3"} size={"md"} marginTop={5} textAlign={"left"}>
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
            <Heading as={"h3"} size={"md"} marginTop={5} textAlign={"left"}>
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

        {/* Priceing Detail  */}
        <Box>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
            Price Details
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
        </Box>

        <Box display={"flex"} gap={10} marginTop={5} flexWrap={"wrap"}>
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

        {/* Additional Pricing Detail (Optional) */}
        <Box display={"grid"}>
          <Heading
            as={"h4"}
            size={"sm"}
            marginTop={5}
            fontWeight={700}
            textAlign={"left"}
          >
            Additional Pricing Detail (Optional)
          </Heading>
          <InputGroup w={"300px"}>
            <Input
              w={"60%"}
              type="text"
              maxLength={9}
              onChange={(e) =>
                setMaintenancePrice(NumericString(e.target.value))
              }
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
        </Box>

        {/* Pre-leased / Pre-Ented */}
        <Box className={style.optional_box}>
          <Box>
            <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
              Is it Pre-leased / Pre-Rented ?
            </Heading>
            <Text> for properties that are already rented out </Text>
          </Box>
          <Box>
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
        </Box>

        {/* pre-leased / pre-Rented */}
        <Box display={preLeased == "Yes" ? "grid" : "none"}>
          <Heading
            as={"h4"}
            size={"sm"}
            marginTop={5}
            fontWeight={700}
            textAlign={"left"}
          >
            Pre-leased / Pre-Rented Details
          </Heading>
          <Heading size={"xs"} fontWeight={500} textAlign={"left"}>
            Lease / Rent related details Of your property
          </Heading>
          <Box>
            <Input
              type="text"
              maxLength={9}
              value={currentRentPerMonth}
              onChange={(e) => {
                e.preventDefault();
                setCurrentRentPerMonth(NumericString(e.target.value));
              }}
              placeholder={`${currency} Current rent per month`}
            />
            <Input
              type="text"
              maxLength={9}
              value={leaseTenureInYear}
              onChange={(e) => {
                e.preventDefault();
                setLeaseTenureInYear(NumericString(e.target.value));
              }}
              placeholder={`${currency} Current rent per month`}
            />
            <Box>
              <Input
                type="text"
                maxLength={9}
                value={annualRentIncrease}
                onChange={(e) => {
                  e.preventDefault();
                  setAnnualRentIncrease(NumericString(e.target.value));
                }}
                placeholder="Annual rent increase in % (Optional)"
              />
              <Input
                type="text"
                maxLength={"100"}
                value={businessType}
                onChange={(e) => {
                  e.preventDefault();
                  setBusinessType(WordandNumber(e.target.value));
                }}
                placeholder="Leased to - Business Type (Optional)"
              />
            </Box>
          </Box>
        </Box>

        {/* office fire NOC Certified */}
        <Box className={style.optional_box}>
          <Box>
            <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
              Is your office fire NOC Certified
            </Heading>
          </Box>
          <Box>
            <button
              value={"Yes"}
              onClick={(e) => {
                e.preventDefault();
                setFireNOC(e.target.value);
              }}
              className={fireNOC == "Yes" ? style.setbtn : style.btn}
            >
              Yes
            </button>
            <button
              value={"No"}
              onClick={(e) => {
                e.preventDefault();
                setFireNOC(e.target.value);
              }}
              className={fireNOC == "No" ? style.setbtn : style.btn}
            >
              No
            </button>
          </Box>
        </Box>

        {/* Occupancy Certificate */}
        <Box className={style.optional_box}>
          <Box>
            <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
              Occupancy Certificate
            </Heading>
          </Box>
          <Box>
            <button
              value={"Yes"}
              onClick={(e) => {
                e.preventDefault();
                setOccupancyCertificate(e.target.value);
              }}
              className={
                occupancyCertificate == "Yes" ? style.setbtn : style.btn
              }
            >
              Yes
            </button>
            <button
              value={"No"}
              onClick={(e) => {
                e.preventDefault();
                setOccupancyCertificate(e.target.value);
              }}
              className={
                occupancyCertificate == "No" ? style.setbtn : style.btn
              }
            >
              No
            </button>
          </Box>
        </Box>

        {/* office previously used for */}
        <Box>
          <Box>
            <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
              Your office was previously used for (Optional)
            </Heading>
            <Text textAlign={"left"}> * You can select upto 3 </Text>
          </Box>
          <Box margin={0} textAlign={"left"}>
            <Menu>
              <MenuButton
                px={4}
                as={Button}
                py={2}
                borderRadius="md"
                borderWidth="1px"
                textAlign={"left"}
                width={{ base: "100%", md: 300 }}
                _hover={{ bg: "white" }}
                _expanded={{ bg: "white" }}
                _focus={{ bg: "white" }}
                rightIcon={<ChevronDownIcon />}
              >
                {previouslyUsedList.length
                  ? `selected ${previouslyUsedList.length}`
                  : "Select"}
              </MenuButton>
              <MenuList
                display={"grid"}
                padding={"4px 10px"}
                width={{ base: "100%", md: 300 }}
                marginTop={"-6px"}
                marginBottom={"-6px"}
              >
                <Checkbox
                  isChecked={previouslyUsedList.includes("Backend Office")}
                  value={"Backend Office"}
                  onChange={(e) => {
                    e.preventDefault();
                    FileSystemHandle(e.target.value);
                  }}
                >
                  Backend Office
                </Checkbox>
                <Checkbox
                  isChecked={previouslyUsedList.includes("CA Office")}
                  value={"CA Office"}
                  onChange={(e) => {
                    e.preventDefault();
                    FileSystemHandle(e.target.value);
                  }}
                >
                  CA Office
                </Checkbox>
                <Checkbox
                  isChecked={previouslyUsedList.includes("Fronted Office")}
                  value={"Fronted Office"}
                  onChange={(e) => {
                    e.preventDefault();
                    FileSystemHandle(e.target.value);
                  }}
                >
                  Fronted Office
                </Checkbox>
                <Checkbox
                  isChecked={previouslyUsedList.includes(
                    "Small Office Purpose"
                  )}
                  value={"Small Office Purpose"}
                  onChange={(e) => {
                    e.preventDefault();
                    FileSystemHandle(e.target.value);
                  }}
                >
                  Small Office Purpose
                </Checkbox>
                <Checkbox
                  isChecked={previouslyUsedList.includes("Traders Office")}
                  value={"Traders Office"}
                  onChange={(e) => {
                    e.preventDefault();
                    FileSystemHandle(e.target.value);
                  }}
                >
                  Traders Office
                </Checkbox>
                <Checkbox
                  isChecked={previouslyUsedList.includes("Advocate Office")}
                  value={"Advocate Office"}
                  onChange={(e) => {
                    e.preventDefault();
                    FileSystemHandle(e.target.value);
                  }}
                >
                  Advocate Office
                </Checkbox>
              </MenuList>
            </Menu>
          </Box>
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

        {/* property Description */}
        <Box>
          <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
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

      {/* Amenities */}
      <Box className={style.optional_box}>
        <Heading as={"h3"} size={"sm"} marginTop={5} textAlign={"left"}>
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
            className={amenities.includes("ATM") ? style.setbtn : style.btn}
            onClick={handleAminities}
            value={"ATM"}
          >
            ATM
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
              amenities.includes("Shopping Centre") ? style.setbtn : style.btn
            }
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
              amenities.includes("Cafeteria / Food Court")
                ? style.setbtn
                : style.btn
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

      {/* location advantage (near to which place) */}
      <Box className={style.optional_box}>
        <Heading size={"sm"} textAlign={"left"}>
          Location Advantages
          <Heading
            size={"xs"}
            fontWeight={200}
            marginTop={5}
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
        marginTop={5}
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
        disabled={clickCount <= 0 ? true : false}
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
