import * as React from 'react';
import { useState } from 'react';
import style from "./SellForm.module.css";
import { Box, Button, ButtonGroup, Heading, IconButton, Input, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';


const SellForm = () => {
    const [look, setlook] = useState("");
    const [type, settype] = useState("");
    const [parking, setParking] = useState(0);
    const [openparking, setOpenparking] = useState(0);

    const handlechange = (type, look) => {
        settype(type);
        setlook(look);
    };

    return (
        <div className={style.post_property}>
            <Box>
                {/* Property Type (what type of property) */}
                <Box>
                    <Heading as={"h1"} size={"xl"} fontWeight={400} > Fill out basic details </Heading>
                    <Heading textAlign={"left"} margin={"20px 0"} as={"h4"} size={"sm"} >I am looking to </Heading>
                    <Tabs variant='unstyled'>
                        <TabList gap={3} margin={"0 20px"} >
                            <Tab _selected={{ bg: "blue.50", border: '1px solid rgba(85, 91, 255, 0.236)', borderRadius: "18px" }} >Sell</Tab>
                            <Tab _selected={{ bg: "blue.50", border: '1px solid rgba(85, 90, 255, 0.236)', borderRadius: "18px" }} >Rent/Lease</Tab>
                            <Tab _selected={{ bg: "blue.50", border: '1px solid rgba(85, 90, 255, 0.236)', borderRadius: "18px" }} >PG</Tab>
                        </TabList>
                        <Heading textAlign={"left"} margin={"20px 0"} as={"h3"} size={"md"}>What kind of Property do you have? </Heading>
                        <TabPanels>
                            {/* sell options */}
                            <TabPanel>
                                <Tabs variant="unstyled">
                                    <TabList>
                                        <Tab _selected={{ bg: "blue.50", border: '1px solid rgba(85, 91, 255, 0.236)', borderRadius: "18px" }} >Residential</Tab>
                                        <Tab _selected={{ bg: "blue.50", border: '1px solid rgba(85, 91, 255, 0.236)', borderRadius: "18px" }} >Commercial</Tab>
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
                                                        look === "Independent House/villa" && type === "sell"
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
                                        <Tab _selected={{ bg: "blue.50", border: '1px solid rgba(85, 91, 255, 0.236)', borderRadius: "18px" }} >Residential</Tab>
                                        <Tab _selected={{ bg: "blue.50", border: '1px solid rgba(85, 91, 255, 0.236)', borderRadius: "18px" }} >Commercial</Tab>
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
                                                        handlechange("Rent/Lease", "Independent House/villa")
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
                                                        look === "Serviced Apartment" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Serviced Apartment
                                                </button>
                                                <button
                                                    onClick={() => handlechange("Rent/Lease", "Plot/Land")}
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
                                                    onClick={() => handlechange("Rent/Lease", "Farmhouse")}
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
                                                    onClick={() => handlechange("Rent/Lease", "Plot/Land")}
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
                                        onClick={() => handlechange("PG", "Independent House/villa")}
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
                <form className={style.form}>
                    <Heading as={"h2"} size={"lg"} > Where is your property located? </Heading>
                    <Heading as={"h5"} size={"sm"}> An accurate location helps you connect with right buyers.</Heading>
                    <Input type='text' placeholder='city' fontSize={"sm"} variant='flushed' />
                    <Input type='text' placeholder='Apartment / Society' fontSize={"sm"} variant='flushed' />
                    <Input type='text' placeholder='Locality' fontSize={"sm"} variant='flushed' />
                    <Input type='text' placeholder='House No. ' fontSize={"sm"} variant='flushed' />
                </form> 
                
                <Box>
                    <Heading as={"h3"} size={"md"} margin={"30px 0 10px 0"} > Tell us about your property </Heading>
                    <Heading as={"h4"} size={"sm"} margin={"0 0 30px 0 "} > Add Room Details </Heading>
                    <Box className={style.inp_form_numbers}>
                        <Box textAlign={"left"} >
                            <Text> No. of Beadrooms </Text>
                            <Input type="number" variant='flushed' padding={"0 2px"} placeholder={"Enter number of bedrooms"} />
                        </Box>
                        <Box textAlign={"left"} > 
                            <Text> No. of Bathrooms </Text>
                            <Input type="number" variant='flushed' padding={"0 2px"} placeholder={"Enter number of bathrooms"} />
                        </Box>
                        <Box textAlign={"left"} >
                            <Text> No. of Balconies </Text>
                            <Input type="number" variant='flushed' padding={"0 2px"} placeholder={"Enter number of balconies"} />
                        </Box>
                    </Box>
                    {/* add area details */}
                    <Box textAlign={"left"} >
                        <Heading as={"h3"} margin={"5px 0"} size={"md"} > Add Area Details </Heading>
                        <Text margin={"5px 0"} > Atleast one area type is mandatory </Text>
                        <ButtonGroup className={style.select_land} size='sm' isAttached variant='outline'>
                            <Input type="number" variant='flushed' padding={"0 2px"} placeholder={"Enter Plot area"} />
                            <Select variant='flushed'>
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
                    {/* other Room  */}
                    <Box className={style.optional_box}>
                        <Heading as={"h3"} size={"md"}> Other rooms (optional) </Heading>
                        <Box>
                            <Button>Pooja Room</Button> 
                            <Button> Study Room </Button>
                            <Button> Servent Room </Button>
                            <Button> Store Room </Button>
                        </Box>  
                        <Box>

                        </Box>
                    </Box>
                    {/* furnish */}
                    <Box className={style.optional_box}>
                        <Heading as={"h3"} size={"md"}> Furnishing (optional) </Heading>
                        <Box>
                            <Button>Furnished</Button>
                            <Button> Semi-furnished </Button>
                            <Button> Un-furnished </Button>
                        </Box>
                    </Box>
                    {/* reserved */}
                    <Box className={style.optional_box}>
                        <Heading as={"h3"} size={"md"} > Reserved Parking (optional) </Heading>
                        <div className={style.parking}>
                            <Box className={style.inc_dec}>
                                <h3> Covered Parking </h3>
                                <button className={style.pls_btn} disabled={parking === 0} onClick={() => setParking(parking - 1)}> <MinusIcon fontSize={"12px"} /> </button>
                                <h3>{parking}</h3>
                                <button className={style.mns_btn} onClick={() => setParking(parking + 1)}> <AddIcon fontSize={"12px"} /> </button>
                            </Box>
                            <Box className={style.inc_dec}>
                                <h3> Open Parking </h3>
                                <button className={style.pls_btn} disabled={openparking === 0} onClick={() => setOpenparking(openparking - 1)}> <MinusIcon fontSize={"12px"} /> </button>
                                <h3>{openparking}</h3>
                                <button className={style.mns_btn} onClick={() => setOpenparking(openparking + 1)}> <AddIcon fontSize={"12px"} /> </button>
                            </Box> 
                        </div>
                    </Box>
                    <Box textAlign={"left"}>
                        <Heading as={"h3"} size={"md"} margin={"30px 0 10px 0"} textAlign={"left"}> Floor Details </Heading>
                        <Text textAlign={"left"} margin={"10px 0"}> Total no of floors and your floor details </Text>
                        <Box display={"flex"} alignItems={"center"} gap={20} >
                            <Input variant='flushed' placeholder='Total Floors' />
                            <Select> 
                                <option value="Basement">Basement</option>
                                <option value="Lower Ground">Lower Ground</option>
                                <option value="Ground">Ground</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>    
                            </Select>
                        </Box>
                    </Box>
                    <Box textAlign={"left"}>
                        <Heading as={"h3"} size={"md"} margin={"10px 0"} textAlign={"left"}> Availability Status </Heading>
                        <Button borderRadius={"100px"} border={"1px solid rgba(113, 210, 255, 0.897)"} margin={"8px 6px 0 0"} backgroundColor={"blue.50"} >Ready to move</Button>
                        <Button borderRadius={"100px"} border={"1px solid rgba(113, 210, 255, 0.897)"} margin={"8px 6px 0 0"} backgroundColor={"blue.50"} > Under construction</Button>
                    </Box>
                    <Box textAlign={"left"}>
                        <Heading as={"h3"} size={"md"} margin={"30px 0 10px 0"} textAlign={"left"}> Age of Property </Heading>
                        <Button borderRadius={"100px"} border={"1px solid rgba(113, 210, 255, 0.897)"} margin={"8px 6px 0 0"} backgroundColor={"blue.50"} > 0-1 years </Button>
                        <Button borderRadius={"100px"} border={"1px solid rgba(113, 210, 255, 0.897)"} margin={"8px 6px 0 0"} backgroundColor={"blue.50"} > 1-5 years </Button>
                        <Button borderRadius={"100px"} border={"1px solid rgba(113, 210, 255, 0.897)"} margin={"8px 6px 0 0"} backgroundColor={"blue.50"} > 5-10 years </Button>
                        <Button borderRadius={"100px"} border={"1px solid rgba(113, 210, 255, 0.897)"} margin={"8px 6px 0 0"} backgroundColor={"blue.50"} > 10+ years </Button>
                    </Box>
                </Box>
            </Box>
            <Box backgroundColor={"rgba(114, 154, 191, 0.594)"} borderRadius={10} >

            </Box>
        </div>
    )
}

export default SellForm


