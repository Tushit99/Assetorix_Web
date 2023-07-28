import React from "react";
import {
    Box,
    Button,
    Text,
    useBreakpointValue,
    Input,
    Select,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    Tabs,
    Tab,
    TabPanel,
    TabList,
    TabPanels,
    Checkbox,
} from "@chakra-ui/react";
import style from "./Page1.module.css";
// import img from "./back.webp"; 
import video from "./Ametheus.mp4";
import { GrFormSearch } from "react-icons/gr";

const Page1 = () => {
    return (
        <div className={style.pagetop} >
            {/* <Box
                w={"full"}
                h={"95vh"}
                backgroundImage={video}
                backgroundSize={"cover"}
                display={{ base: "grid", lg: "flex" }}
                alignItems={"center"}
                backgroundPosition={"center"}
            > */}

            <video autoPlay loop muted className={style.video_panal} >
                <source src={video} type="video/mp4" />
            </video>
            <Box
                w={"full"}
                className={style.topbox} >
                <Text
                    color={"white"}
                    fontWeight={700}
                    lineHeight={1.2}
                    textAlign={"left"} 
                    userSelect={"none"} 
                    textShadow={"#000000 3px 4px 20px"}
                    fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })}
                >
                    “I Think” to “I Own”
                </Text>
                <Box w={"100%"}>
                    <div className={style.fields}>
                        <div>
                            <Select
                                size="md"
                                backgroundColor={"rgb(46,49,146)"}
                                color={"white"}
                                outline={0}
                                fontSize={{ base: "sm", lg: "lg" }}
                                boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                style={{ borderradius: "20px" }} 
                                fontWeight={"500"}
                                className={style.select_city}
                                border={0} 
                            >
                                <option value="delhi" >
                                    Delhi
                                </option>
                                <option value="noida" >
                                    Gurugram
                                </option>
                                <option value="noida" >
                                    Noida
                                </option>
                                <option value="noida" >
                                    Mumbai
                                </option>
                                <option value="noida" >
                                    Bangalore
                                </option>
                                <option value="noida" >
                                    Kolkata
                                </option>
                            </Select>
                            <Popover>
                                <PopoverTrigger>
                                    <Button
                                        backgroundColor={"rgb(110, 137, 226)"}
                                        color={"white"}
                                        _hover={{ color: "white" }}
                                    >Buy</Button>
                                </PopoverTrigger>
                                <PopoverContent w={{ base: "320px", md: "400px" }} >
                                    <PopoverArrow />
                                    <PopoverCloseButton />
                                    <PopoverHeader>
                                        Buy Property
                                    </PopoverHeader>
                                    <PopoverBody>
                                        {/* one */}
                                        <Tabs variant='enclosed'>
                                            <TabList>
                                                <Tab>Residential</Tab>
                                                <Tab>Commercial</Tab>
                                            </TabList>
                                            <TabPanels >
                                                <TabPanel>
                                                    <Box className={style.buy}>
                                                        <Checkbox iconSize={'0px'} colorScheme={'green'}>
                                                            Flat/Apartment
                                                        </Checkbox>
                                                        <Checkbox iconSize={'0px'} colorScheme={'green'}>
                                                            Independent House/villa
                                                        </Checkbox>
                                                        <Checkbox iconSize={'0px'} colorScheme={'green'}>
                                                            Independent/builder Floor
                                                        </Checkbox>
                                                        <Checkbox iconSize={'0px'} colorScheme={'green'}>
                                                            Serviced Apartment
                                                        </Checkbox>
                                                        <Checkbox iconSize={'0px'} colorScheme={'green'}>
                                                            Plot/Land
                                                        </Checkbox>
                                                        <Checkbox iconSize={'0px'} colorScheme={'green'}>
                                                            1 RK/ Studio Apartment
                                                        </Checkbox>
                                                        <Checkbox iconSize={'0px'} colorScheme={'green'}>
                                                            Farmhouse
                                                        </Checkbox>
                                                        <Checkbox iconSize={'0px'} colorScheme={'green'}>
                                                            other
                                                        </Checkbox>
                                                    </Box>
                                                    <Button className={style.start_btn}>Start Now</Button>
                                                </TabPanel>
                                                <TabPanel>
                                                    <Box className={style.buy}>
                                                        <Checkbox size={"md"} color={"black"}>
                                                            Office
                                                        </Checkbox>
                                                        <Checkbox >
                                                            Retail
                                                        </Checkbox>
                                                        <Checkbox >
                                                            Plot/Land
                                                        </Checkbox>
                                                        <Checkbox >
                                                            Storage
                                                        </Checkbox>
                                                        <Checkbox >
                                                            Industry
                                                        </Checkbox>
                                                        <Checkbox >
                                                            Hospitality
                                                        </Checkbox>
                                                        <Checkbox >
                                                            Other
                                                        </Checkbox>
                                                    </Box>
                                                    <Button className={style.start_btn}>Start Now</Button>
                                                </TabPanel>
                                            </TabPanels>
                                        </Tabs>
                                    </PopoverBody>
                                </PopoverContent >
                            </Popover >
                            <Button
                                borderradius={"4px"}
                                color={"white"}
                                _hover={{ color: "white" }}
                                boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                fontSize={{ base: "sm", lg: "lg" }}
                                backgroundColor={"rgb(94, 174, 248)"}
                            > 
                                Sell
                            </Button>
                            <Button
                                borderradius={"4px"}
                                color={"white"}
                                _hover={{ color: "white" }}
                                boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                fontSize={{ base: "sm", lg: "lg" }}
                                backgroundColor={"rgb(16, 101, 180)"}
                            // border={"1px solid black"}
                            >
                                Rent
                            </Button>
                        </div >
                        <div>
                            <Select
                                size="md"
                                backgroundColor={"white"}
                                color={"black"}
                                fontSize={{ base: "11px", lg: "lg" }}
                                outline={0} 
                                fontWeight={"md"}
                                boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                style={{ borderradius: "20px" }}
                                border={0}
                            >
                                <option value="Residential" borderradius={0}>
                                    Residential
                                </option>
                                <option value="Commercial" borderradius={0}>
                                    Commercial
                                </option>
                            </Select>
                            <Input
                                type="text"
                                border={0}
                                height={"38px"}
                                maxWidth={"400px"}
                                w={"60%"}
                                marginLeft={"2px"}
                                placeholder={"Search locality, project or builder"}
                                color={"black"}
                                fontSize={{ base: "xs", lg: "lg" }}
                                _active={{ border: "0px", outline: "0px" }}
                                boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                fontWeight={400}
                                backgroundColor={"white"}
                                borderradius={0}
                            />
                            <Button padding={0} m={"2px"}> <GrFormSearch size={"30px"} /> </Button>
                        </div>
                    </div >
                </Box >
            </Box >
            {/* </Box> */}
        </div >
    );
};

export default Page1;
