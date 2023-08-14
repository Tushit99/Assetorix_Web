import * as React from "react";
import { useState } from "react";
import style from "./SellForm.module.css";
import {
    Box,
    Button,
    ButtonGroup,
    Heading,
    IconButton,
    Input,
    Radio,
    RadioGroup,
    Select,
    Stack,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    Textarea,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Checkbox } from "@chakra-ui/react";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";

const SellForm = () => {
    const [look, setlook] = useState("");
    const [type, settype] = useState("");
    const [parking, setParking] = useState(0);
    const [openparking, setOpenparking] = useState(0);
    const [light, setLight] = useState(0);
    const [fans, setFans] = useState(0);
    const [ac, setAc] = useState(0);
    const [tv, setTv] = useState(0);
    const [Beds, setBeds] = useState(0);
    const [wardrobe, setWardrobe] = useState(0);
    const [geyser, setGeyser] = useState(0);
    const [furnishedarr, setfurnishedarr] = useState([]);
    const [furnish, setFurnish] = useState("");
    const [condition, setCondition] = useState("");
    const [oxygen, setOxygen] = useState("");
    const [ups, setUps] = useState("");


    const handlechange = (type, look) => {
        settype(type);
        setlook(look);
    };

    const furnisheddetails = (e) => {
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

    console.log(furnishedarr);

    return (
        <div className={style.post_property}>
            <Box>
                {/* Property Type (what type of property) */}
                <Box>
                    <Heading as={"h1"} size={"xl"} fontWeight={400}>

                        Fill out basic details
                    </Heading>
                    <Heading textAlign={"left"} margin={"20px 0"} as={"h4"} size={"sm"}>
                        I am looking to
                    </Heading>
                    <Tabs variant="unstyled">
                        <TabList gap={3} margin={"0 20px"}>
                            <Tab
                                _selected={{
                                    bg: "blue.50",
                                    border: "1px solid rgba(85, 91, 255, 0.236)",
                                    borderRadius: "18px",
                                }}
                            >
                                Sell
                            </Tab>
                            <Tab
                                _selected={{
                                    bg: "blue.50",
                                    border: "1px solid rgba(85, 90, 255, 0.236)",
                                    borderRadius: "18px",
                                }}
                            >
                                Rent/Lease
                            </Tab>
                            <Tab
                                _selected={{
                                    bg: "blue.50",
                                    border: "1px solid rgba(85, 90, 255, 0.236)",
                                    borderRadius: "18px",
                                }}
                            >
                                PG
                            </Tab>
                        </TabList>
                        <Heading textAlign={"left"} margin={"20px 0"} as={"h3"} size={"md"}>
                            What kind of Property do you have?
                        </Heading>
                        <TabPanels>
                            {/* sell options */}
                            <TabPanel>
                                <Tabs variant="unstyled">
                                    <TabList>
                                        <Tab
                                            _selected={{
                                                bg: "blue.50",
                                                border: "1px solid rgba(85, 91, 255, 0.236)",
                                                borderRadius: "18px",
                                            }}
                                        >
                                            Residential
                                        </Tab>
                                        <Tab
                                            _selected={{
                                                bg: "blue.50",
                                                border: "1px solid rgba(85, 91, 255, 0.236)",
                                                borderRadius: "18px",
                                            }}
                                        >
                                            Commercial
                                        </Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <Box className={style.grid}>
                                                <button
                                                    onClick={() => handlechange("sell", "Flat/Apartment")}
                                                    className={
                                                        look === "Flat/Apartment" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Flat/Apartment
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("sell", "Independent House/villa")
                                                    }
                                                    className={
                                                        look === "Independent House/villa" &&
                                                            type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Independent House/villa
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("sell", "Independent/builder Floor")
                                                    }
                                                    className={
                                                        look === "Independent/builder Floor" &&
                                                            type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Independent/builder Floor
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("sell", "Serviced Apartment")
                                                    }
                                                    className={
                                                        look === "Serviced Apartment" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Serviced Apartment
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Plot/Land")}
                                                    className={
                                                        look === "Plot/Land" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Plot/Land
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("sell", "1 RK/ Studio Apartment")
                                                    }
                                                    className={
                                                        look === "1 RK/ Studio Apartment" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    1 RK/ Studio Apartment
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Farmhouse")}
                                                    className={
                                                        look === "Farmhouse" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Farmhouse
                                                </button>
                                            </Box>
                                        </TabPanel>
                                        <TabPanel>
                                            <Box className={style.grid}>
                                                <button
                                                    onClick={() => handlechange("sell", "Office")}
                                                    className={
                                                        look === "Office" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Office
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Retail")}
                                                    className={
                                                        look === "Retail" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Retail
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Plot/Land")}
                                                    className={
                                                        look === "Plot/Land" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Plot/Land
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Storage")}
                                                    className={
                                                        look === "Storage" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Storage
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Industry")}
                                                    className={
                                                        look === "Industry" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Industry
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Hospitality")}
                                                    className={
                                                        look === "Hospitality" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Hospitality
                                                </button>
                                            </Box>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </TabPanel>
                            {/* rent options */}
                            <TabPanel>
                                <Tabs variant="unstyled">
                                    <TabList>
                                        <Tab
                                            _selected={{
                                                bg: "blue.50",
                                                border: "1px solid rgba(85, 91, 255, 0.236)",
                                                borderRadius: "18px",
                                            }}
                                        >
                                            Residential
                                        </Tab>
                                        <Tab
                                            _selected={{
                                                bg: "blue.50",
                                                border: "1px solid rgba(85, 91, 255, 0.236)",
                                                borderRadius: "18px",
                                            }}
                                        >
                                            Commercial
                                        </Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <Box className={style.grid}>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "Flat/Apartment")
                                                    }
                                                    className={
                                                        look === "Flat/Apartment" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Flat/Apartment
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange(
                                                            "Rent/Lease",
                                                            "Independent House/villa"
                                                        )
                                                    }
                                                    className={
                                                        look === "Independent House/villa" &&
                                                            type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Independent House/villa
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange(
                                                            "Rent/Lease",
                                                            "Independent/builder Floor"
                                                        )
                                                    }
                                                    className={
                                                        look === "Independent/builder Floor" &&
                                                            type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Independent/builder Floor
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "Serviced Apartment")
                                                    }
                                                    className={
                                                        look === "Serviced Apartment" &&
                                                            type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Serviced Apartment
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "Plot/Land")
                                                    }
                                                    className={
                                                        look === "Plot/Land" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Plot/Land
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "1 RK/ Studio Apartment")
                                                    }
                                                    className={
                                                        look === "1 RK/ Studio Apartment" &&
                                                            type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    1 RK/ Studio Apartment
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "Farmhouse")
                                                    }
                                                    className={
                                                        look === "Farmhouse" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Farmhouse
                                                </button>
                                            </Box>
                                        </TabPanel>
                                        <TabPanel>
                                            <Box className={style.grid}>
                                                <button
                                                    onClick={() => handlechange("Rent/Lease", "Office")}
                                                    className={
                                                        look === "Office" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Office
                                                </button>
                                                <button
                                                    onClick={() => handlechange("Rent/Lease", "Retail")}
                                                    className={
                                                        look === "Retail" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Retail
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "Plot/Land")
                                                    }
                                                    className={
                                                        look === "Plot/Land" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Plot/Land
                                                </button>
                                                <button
                                                    onClick={() => handlechange("Rent/Lease", "Storage")}
                                                    className={
                                                        look === "Storage" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Storage
                                                </button>
                                                <button
                                                    onClick={() => handlechange("Rent/Lease", "Industry")}
                                                    className={
                                                        look === "Industry" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Industry
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "Hospitality")
                                                    }
                                                    className={
                                                        look === "Hospitality" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Hospitality
                                                </button>
                                            </Box>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </TabPanel>
                            {/* PG options */}
                            <TabPanel>
                                <Box className={style.grid}>
                                    <button
                                        onClick={() => handlechange("PG", "Flat/Apartment")}
                                        className={
                                            look === "Flat/Apartment" && type === "PG"
                                                ? style.setbtn
                                                : style.btn
                                        }
                                    >
                                        Flat/Apartment
                                    </button>
                                    <button
                                        onClick={() =>
                                            handlechange("PG", "Independent House/villa")
                                        }
                                        className={
                                            look === "Independent House/villa" && type === "PG"
                                                ? style.setbtn
                                                : style.btn
                                        }
                                    >
                                        Independent House/villa
                                    </button>
                                    <button
                                        onClick={() =>
                                            handlechange("PG", "Independent/builder Floor")
                                        }
                                        className={
                                            look === "Independent/builder Floor" && type === "PG"
                                                ? style.setbtn
                                                : style.btn
                                        }
                                    >
                                        Independent/builder Floor
                                    </button>
                                    <button
                                        onClick={() => handlechange("PG", "Serviced Apartment")}
                                        className={
                                            look === "Serviced Apartment" && type === "PG"
                                                ? style.setbtn
                                                : style.btn
                                        }
                                    >
                                        Serviced Apartment
                                    </button>
                                    <button
                                        onClick={() => handlechange("PG", "1 RK/ Studio Apartment")}
                                        className={
                                            look === "1 RK/ Studio Apartment" && type === "PG"
                                                ? style.setbtn
                                                : style.btn
                                        }
                                    >
                                        1 RK/ Studio Apartment
                                    </button>
                                </Box>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                {/* location Detail */}
                <Box className={style.location_form}>
                    <Heading as={"h2"} size={"lg"}>

                        Where is your property located?
                    </Heading>
                    <Heading as={"h5"} size={"sm"}>

                        An accurate location helps you connect with right buyers.
                    </Heading>
                    <Input
                        type="text"
                        padding={"0 10px"}
                        placeholder="Enter City"
                        fontSize={"md"}
                        variant="flushed"
                    />
                    <Input
                        type="text"
                        padding={"0 10px"}
                        placeholder="Apartment / Society"
                        fontSize={"md"}
                        variant="flushed"
                    />
                    <Input
                        type="text"
                        padding={"0 10px"}
                        placeholder="Locality"
                        fontSize={"md"}
                        variant="flushed"
                    />
                    <Input
                        type="text"
                        padding={"0 10px"}
                        placeholder="House No. (optional)"
                        fontSize={"md"}
                        variant="flushed"
                    />
                </Box>

                <Box marginTop={12}>
                    <Heading as={"h3"} size={"md"} margin={"30px 0 10px 0"}>

                        Tell us about your property
                    </Heading>
                    <Heading as={"h4"} size={"sm"} margin={"0 0 30px 0 "}>

                        Add Room Details
                    </Heading>
                    <Box className={style.inp_form_numbers}>
                        <Box textAlign={"left"}>
                            <Text> No. of Beadrooms </Text>
                            <Input
                                type="number"
                                variant="flushed"
                                padding={"0 2px"}
                                placeholder={"Enter number of bedrooms"}
                            />
                        </Box>
                        <Box textAlign={"left"}>
                            <Text> No. of Bathrooms </Text>
                            <Input
                                type="number"
                                variant="flushed"
                                padding={"0 2px"}
                                placeholder={"Enter number of bathrooms"}
                            />
                        </Box>
                        <Box textAlign={"left"}>
                            <Text> No. of Balconies </Text>
                            <Input
                                type="number"
                                variant="flushed"
                                padding={"0 2px"}
                                placeholder={"Enter number of balconies"}
                            />
                        </Box>
                    </Box>
                    {/* ================================ */}
                    {/* office setup */}

                    {/* facilities availble */}

                    {/* ================================ */}
                    {/* add area details */}
                    <Box textAlign={"left"} padding={"10px 0"} >
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
                                type="number"
                                variant="flushed"
                                padding={"0 2px"}
                                placeholder={"Enter Plot area"}
                            />
                            <select className={style.select}>
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
                    <Box padding={"10px 0"} display={"grid"} gap={6} className={style.optional_box}>
                        <Heading as={"h3"} size={"md"}>
                            Other rooms (optional)
                        </Heading>
                        <Box>
                            <button className={style.btn}>Pooja Room</button>
                            <button className={style.btn}> Study Room </button>
                            <button className={style.btn}> Servent Room </button>
                            <button className={style.btn}> Store Room </button>
                        </Box>
                    </Box>
                    {/* furnish */}
                    <Box padding={"10px 0"} display={"grid"} gap={6} className={style.optional_box}>
                        <Heading as={"h3"} size={"md"}>

                            Furnishing (optional)
                        </Heading>
                        <Box>
                            <button className={style.btn}>Furnished</button>
                            <button className={style.btn}> Semi-furnished </button>
                            <button className={style.btn}> Un-furnished </button>
                        </Box>
                        {/* if furnished detail */}
                        <Box padding={"10px 0"} display={"grid"} gap={6}>
                            <Heading as={"h4"} size={"md"}>
                                At least three furnishings are mandatory for furnished
                            </Heading>
                            <Box className={style.furnished_detail}>
                                <Box>
                                    <button
                                        className={style.mns_btn}
                                        disabled={light === 0}
                                        onClick={() => setLight(light - 1)}
                                    >
                                        <MinusIcon fontSize={"12px"} />
                                    </button>
                                    <h3>{light}</h3>
                                    <button
                                        className={style.pls_btn}
                                        onClick={() => setLight(light + 1)}
                                    >
                                        <AddIcon fontSize={"12px"} />
                                    </button>
                                    <h3> Light </h3>
                                </Box>
                                <Box>
                                    <button
                                        className={style.mns_btn}
                                        disabled={fans === 0}
                                        onClick={() => setFans(fans - 1)}
                                    >
                                        <MinusIcon fontSize={"12px"} />
                                    </button>
                                    <h3>{fans}</h3>
                                    <button
                                        className={style.pls_btn}
                                        onClick={() => setFans(fans + 1)}
                                    >
                                        <AddIcon fontSize={"12px"} />
                                    </button>
                                    <h3> Fans </h3>
                                </Box>
                                <Box>
                                    <button
                                        className={style.mns_btn}
                                        disabled={ac === 0}
                                        onClick={() => setAc(ac - 1)}
                                    >
                                        <MinusIcon fontSize={"12px"} />
                                    </button>
                                    <h3>{ac}</h3>
                                    <button
                                        className={style.pls_btn}
                                        onClick={() => setAc(ac + 1)}
                                    >
                                        <AddIcon fontSize={"12px"} />
                                    </button>
                                    <h3> AC </h3>
                                </Box>
                                <Box>
                                    <button
                                        className={style.mns_btn}
                                        disabled={tv === 0}
                                        onClick={() => setTv(tv - 1)}
                                    >
                                        <MinusIcon fontSize={"12px"} />
                                    </button>
                                    <h3>{tv}</h3>
                                    <button
                                        className={style.pls_btn}
                                        onClick={() => setTv(tv + 1)}
                                    >
                                        <AddIcon fontSize={"12px"} />
                                    </button>
                                    <h3> TV </h3>
                                </Box>
                                <Box>
                                    <button
                                        className={style.mns_btn}
                                        disabled={Beds === 0}
                                        onClick={() => setBeds(Beds - 1)}
                                    >
                                        <MinusIcon fontSize={"12px"} />
                                    </button>
                                    <h3>{Beds}</h3>
                                    <button
                                        className={style.pls_btn}
                                        onClick={() => setBeds(Beds + 1)}
                                    >
                                        <AddIcon fontSize={"12px"} />
                                    </button>
                                    <h3> Beds </h3>
                                </Box>
                                <Box>
                                    <button
                                        className={style.mns_btn}
                                        disabled={wardrobe === 0}
                                        onClick={() => setWardrobe(wardrobe - 1)}
                                    >
                                        <MinusIcon fontSize={"12px"} />
                                    </button>
                                    <h3>{wardrobe}</h3>
                                    <button
                                        className={style.pls_btn}
                                        onClick={() => setWardrobe(wardrobe + 1)}
                                    >

                                        <AddIcon fontSize={"12px"} />
                                    </button>
                                    <h3> Wardrobe </h3>
                                </Box>
                                <Box>
                                    <button
                                        className={style.mns_btn}
                                        disabled={geyser === 0}
                                        onClick={() => setGeyser(geyser - 1)}
                                    >

                                        <MinusIcon fontSize={"12px"} />
                                    </button>
                                    <h3>{geyser}</h3>
                                    <button
                                        className={style.pls_btn}
                                        onClick={() => setGeyser(geyser + 1)}
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
                                        isChecked={furnishedarr.includes("Washing_Machine")}
                                        value={"Washing_Machine"}
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
                                        isChecked={furnishedarr.includes("Water_Purifier")}
                                        value={"Water_Purifier"}
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
                                        isChecked={furnishedarr.includes("Modular_Kitchen")}
                                        value={"Modular_Kitchen"}
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
                                        isChecked={furnishedarr.includes("Dinning_Table")}
                                        value={"Dinning_Table"}
                                        icon={<AddIcon />}
                                    >
                                        Dinning Table
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
                                        isChecked={furnishedarr.includes("Exhaust_Fan")}
                                        value={"Exhaust_Fan"}
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
                                    onClick={() => setParking(parking - 1)}
                                >
                                    <MinusIcon fontSize={"12px"} />
                                </button>
                                <h3>{parking}</h3>
                                <button
                                    className={style.mns_btn}
                                    onClick={() => setParking(parking + 1)}
                                >
                                    <AddIcon fontSize={"12px"} />
                                </button>
                            </Box>
                            <Box as={"div"} className={style.inc_dec}>
                                <h3> Open Parking </h3>
                                <button
                                    className={style.pls_btn}
                                    disabled={openparking === 0}
                                    onClick={() => setOpenparking(openparking - 1)}
                                >
                                    <MinusIcon fontSize={"12px"} />
                                </button>
                                <h3>{openparking}</h3>
                                <button
                                    className={style.mns_btn}
                                    onClick={() => setOpenparking(openparking + 1)}
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
                            Total no of floors and your floor details
                        </Text>
                        <Box display={"flex"} alignItems={"center"} gap={5}>
                            <NumberInput variant="flushed" defaultValue={1} min={1} max={20}>
                                <NumberInputField />
                                <NumberInputStepper>
                                    <NumberIncrementStepper />
                                    <NumberDecrementStepper />
                                </NumberInputStepper>
                            </NumberInput>
                            <Select
                                variant="filled"
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
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Select>
                        </Box>
                    </Box>
                    {/* Availability status */}
                    <Box textAlign={"left"}>
                        <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                            Availability Status
                        </Heading>
                        <Box className={style.grid}>
                            <button
                                className={style.btn}
                                borderRadius={"100px"}
                                border={"1px solid rgba(113, 210, 255, 0.897)"}
                                margin={"8px 6px 0 0"}
                                backgroundColor={"blue.50"}
                            >
                                Ready to move
                            </button>
                            <button
                                className={style.btn}
                                borderRadius={"100px"}
                                border={"1px solid rgba(113, 210, 255, 0.897)"}
                                margin={"8px 6px 0 0"}
                                backgroundColor={"blue.50"}
                            >
                                Under construction
                            </button>
                        </Box>
                    </Box>
                    {/* Age of Property */}
                    <Box textAlign={"left"}>
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
                                className={style.btn}
                                borderRadius={"100px"}
                                border={"1px solid rgba(113, 210, 255, 0.897)"}
                                margin={"8px 6px 0 0"}
                                backgroundColor={"blue.50"}
                            >
                                0-1 years
                            </button>
                            <button
                                className={style.btn}
                                borderRadius={"100px"}
                                border={"1px solid rgba(113, 210, 255, 0.897)"}
                                margin={"8px 6px 0 0"}
                                backgroundColor={"blue.50"}
                            >
                                1-5 years
                            </button>
                            <button
                                className={style.btn}
                                borderRadius={"100px"}
                                border={"1px solid rgba(113, 210, 255, 0.897)"}
                                margin={"8px 6px 0 0"}
                                backgroundColor={"blue.50"}
                            >
                                5-10 years
                            </button>
                            <button
                                className={style.btn}
                                borderRadius={"100px"}
                                border={"1px solid rgba(113, 210, 255, 0.897)"}
                                margin={"8px 6px 0 0"}
                                backgroundColor={"blue.50"}
                            >
                                10+ years
                            </button>
                        </Box>
                    </Box>
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
                        <Heading as={"h3"} size={"sm"} margin={"10px 0"} textAlign={"left"}>
                            Ownership
                        </Heading>
                        <Box className={style.grid}>
                            <button
                                className={style.btn}
                                borderRadius={"100px"}
                                border={"1px solid rgba(113, 210, 255, 0.897)"}
                                margin={"8px 6px 0 0"}
                                backgroundColor={"blue.50"}
                            >
                                Freehold
                            </button>
                            <button
                                className={style.btn}
                                borderRadius={"100px"}
                                border={"1px solid rgba(113, 210, 255, 0.897)"}
                                margin={"8px 6px 0 0"}
                                backgroundColor={"blue.50"}
                            >
                                Leasehold
                            </button>
                            <button
                                className={style.btn}
                                borderRadius={"100px"}
                                border={"1px solid rgba(113, 210, 255, 0.897)"}
                                margin={"8px 6px 0 0"}
                                backgroundColor={"blue.50"}
                            >
                                Co-operative society
                            </button>
                            <button
                                className={style.btn}
                                borderRadius={"100px"}
                                border={"1px solid rgba(113, 210, 255, 0.897)"}
                                margin={"8px 6px 0 0"}
                                backgroundColor={"blue.50"}
                            >
                                Powerw of Attorney
                            </button>
                        </Box>
                    </Box>
                    {/* Price Details */}
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
                                    ₹ Price Details
                                </Heading>
                                <Input type="number" variant="flushed" />
                            </Box>
                            <Box display={"grid"} gap={0}>
                                <Heading
                                    as={"h3"}
                                    size={"xs"}
                                    fontWeight={400}
                                    textAlign={"left"}
                                >
                                    ₹ Price Per sq.ft.
                                </Heading>
                                <Input type="number" variant="flushed" />
                            </Box>
                        </Box>
                    </Box>
                    <Box display={"flex"} gap={10} margin={"20px 0"} flexWrap={"wrap"} >
                        <Checkbox >All inclusive price </Checkbox>
                        <Checkbox > Tax and Govt. charges excuded </Checkbox>
                        <Checkbox > Price Negotiable </Checkbox>
                    </Box>
                    <Box>
                        <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                            What makes your property unique
                        </Heading>
                        <Heading as={"h3"} size={"xs"} margin={"10px 0"} textAlign={"left"}>
                            Adding description will increase your listing visibility
                        </Heading>
                        <Textarea height={140}></Textarea>
                    </Box>
                </Box>
                <Box>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Add amenities/unique features
                    </Heading>
                    <Heading as={"h5"} size={"xs"} margin={"10px 0"} textAlign={"left"}>
                        All fields on this page are optional
                    </Heading>
                </Box>
                <Box className={style.optional_box} >
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Amenities
                    </Heading>
                    <Box>
                        <button className={style.btn} > Maintenance Staff </button>
                        <button className={style.btn} > Water Storage </button>
                        <button className={style.btn} > Security/ Fire Alarm </button>
                        <button className={style.btn} > Visitor Parking </button>
                        <button className={style.btn} > Park </button>
                        <button className={style.btn} > Intercom Facility </button>
                        <button className={style.btn} > Feng Shui / Vaastu Compliant </button>
                        <button className={style.btn} > Lift(s) </button>
                    </Box>
                </Box>
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Property Features
                    </Heading>
                    <Box>
                        <button className={style.btn} >High Ceiling Height</button>
                        <button className={style.btn} > False Ceiling Lighting </button>
                        <button className={style.btn} > Piped-gas </button>
                        <button className={style.btn} > Internet/wi-fi connectivity </button>
                        <button className={style.btn} > Centrally Air Renovated </button>
                        <button className={style.btn} > Water Purifier </button>
                        <button className={style.btn} > Recently Renovated </button>
                        <button className={style.btn} > Private Garden / Terrace </button>
                        <button className={style.btn} > Natural Light </button>
                        <button className={style.btn} > Airy Roooms </button>
                        <button className={style.btn} > Spacious Interiors </button>
                    </Box>
                </Box>
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Society/Building feature
                    </Heading>
                    <Box>
                        <button className={style.btn} > Water softening plant </button>
                        <button className={style.btn} > Shopping Centre </button>
                        <button className={style.btn} > Fitness Centre / GYM </button>
                        <button className={style.btn} > Swimming Pool </button>
                        <button className={style.btn} > Club house / Community Center </button>
                        <button className={style.btn} > Security Personnel </button>
                    </Box>
                </Box>
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Additional Features
                    </Heading>
                    <Box>
                        <button className={style.btn} > Separate entry for sevant room </button>
                        <button className={style.btn} > Waste Disposal </button>
                        <button className={style.btn} > No open drainage around </button>
                        <button className={style.btn} > Rain Water Harvesting </button>
                        <button className={style.btn} > Bank Attached Property </button>
                        <button className={style.btn} > Low Density Society </button>
                    </Box>
                </Box>
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Water Source
                    </Heading>
                    <Box>
                        <button className={style.btn} > Municipal corporation </button>
                        <button className={style.btn} > Borewell/Tank </button>
                        <button className={style.btn} > 24*7 Water </button>
                    </Box>
                </Box>
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Overlooking
                    </Heading>
                    <Box>
                        <button className={style.btn} > Pool </button>
                        <button className={style.btn} > Park/Garden </button>
                        <button className={style.btn} > Club </button>
                        <button className={style.btn} > Main Road </button>
                        <button className={style.btn} > Other </button>
                    </Box>
                </Box>
                <Box>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Other Features
                    </Heading>
                    <Box display={"grid"} textAlign={"left"} gap={2} >
                        <Checkbox size={"lg"} > In a gated society </Checkbox>
                        <Checkbox size={"lg"} > Corner Property </Checkbox>
                        <Checkbox size={"lg"} > Pet Friendly </Checkbox>
                        <Checkbox size={"lg"} > Wheelchair friendly </Checkbox>
                    </Box>
                </Box>
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Power Back up
                    </Heading>
                    <Box>
                        <button className={style.btn} > None </button>
                        <button className={style.btn} > Partial </button>
                        <button className={style.btn} > Full </button>
                    </Box>
                </Box>
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Property facing
                    </Heading>
                    <Box>
                        <button className={style.btn} > North </button>
                        <button className={style.btn} > South </button>
                        <button className={style.btn} > East </button>
                        <button className={style.btn} > West </button>
                        <button className={style.btn} > North-East </button>
                        <button className={style.btn} > North-West </button>
                        <button className={style.btn} > South-East </button>
                        <button className={style.btn} > South-West </button>
                    </Box>
                </Box>
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Type of flooring
                    </Heading>
                    <Box>
                        <Select>
                            <option value=""> Select </option>
                            <option value="Marble"> Marble </option>
                            <option value="Concrete"> Concrete </option>
                            <option value="Poloshed_concrete"> Poloshed concrete </option>
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
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}>
                        Width of facing road
                    </Heading>
                    <Box>
                        <Select>
                            <option value=""> Select </option>
                            <option value=""> Feet </option>
                            <option value=""> Meter </option>
                        </Select>
                    </Box>
                </Box>
                <Box className={style.optional_box}>
                    <Heading as={"h3"} size={"md"} margin={"10px 0 4px 0"} textAlign={"left"}>
                        Location Advantages
                        <Heading as={"h5"} size={"xs"} fontWeight={200} margin={"4px 0"} textAlign={"left"}>
                            Highlight the nearby landmarks*
                        </Heading>
                    </Heading>
                    <Box>
                        <button className={style.btn} > Close to Station </button>
                        <button className={style.btn} > Close to School  </button>
                        <button className={style.btn} > Close to Hospital </button>
                        <button className={style.btn} > Close to Market </button>
                        <button className={style.btn} > Close to Railway Station </button>
                        <button className={style.btn} > Close to Airport  </button>
                        <button className={style.btn} > Close to Mall </button>
                        <button className={style.btn} > Close to highway </button>
                    </Box>
                </Box>
                <Heading as={"h5"} size={"xs"} fontWeight={200} margin={"4px 0"} textAlign={"left"}>
                   *Please provide correct information, otherwise your listing might get blocked
                </Heading> 
                <Button> Post Property </Button> 
            </Box>
            <Box backgroundColor={"rgb(232, 244, 255)"} borderRadius={10}></Box>
        </div>
    );
};

export default SellForm;
