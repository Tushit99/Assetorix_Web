import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import {
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Button,
    Box,
    Text,
    Tabs,
    Tab,
    TabPanel,
    TabList,
    TabPanels,
    Checkbox, 
} from "@chakra-ui/react";
import { BiSolidUserDetail } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const Navebar = () => { 
    const [scroll, setScroll] = useState(0);   

    useEffect(() => { 
      window.addEventListener("scroll", () => {
        setScroll(window.pageYOffset);
      });
    }, []);   

    // console.log(scroll); 


    return (
        <div className={style.head_nav}>
            <div className={scroll > 20 ? style.top_navbar3 : style.top_navbar}>
                <div className={style.hamburger}>
                    <Hamburger />
                </div>
                <div className={style.logo}>
                    <Logo />
                </div>
                <div className={scroll > 20 ? style.login_data2 : style.login_data}>
                    <div className={scroll > 20 ? style.country2 : style.country }>
                        <select style={{ border: "0px", outline: "0px" }}>
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>
                    <Link to={"/"}>home</Link>
                    <Link to={"/about"}>About us</Link>
                    <Link to={"/contact"}>Contact</Link>
                </div>
                <div className={style.login_box}>
                    <Popover>
                        <PopoverTrigger> 
                            <Button borderRadius={"30px"} rightIcon={<IoIosArrowDown size={"20px"} color="rgb(46,49,146)" />}>
                                {/* icon */}
                                <BiSolidUserDetail size={"24px"} color="rgb(46,49,146)" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader>Welcome to Assetorix</PopoverHeader>
                            <PopoverBody>
                                <Text margin={"0 0 8px 0"}>
                                    Login for more futuristic experience
                                </Text>
                                <Box
                                    display={"flex"}
                                    justifyContent={"space-around"}
                                    margin={"0 0 8px 0"}
                                    alignItems={"center"} 
                                >
                                    <Link className={style.logbtn} to={"/login"}>
                                        Login
                                    </Link>
                                    <Link className={style.logbtn} to={"/signup"}>
                                        Sign Up
                                    </Link>
                                </Box>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className={scroll > 20 ? style.nav_bottom2 : style.nav_bottom }>
                {/* Buy button  */}
                <Popover>
                    <PopoverTrigger>
                        <Button
                            backgroundColor={"unset"}
                            color={"auto"} 
                            fontWeight={400}
                            _hover={{ color: "unset" }}
                            _active={{ color: "unset" }}
                        >
                            Buy
                        </Button>
                    </PopoverTrigger> 
                    <PopoverContent w={{ base: "320px", md: "400px" }} color={"black"}>
                        <PopoverArrow /> 
                        <PopoverHeader>Buy Property</PopoverHeader>
                        <PopoverBody>
                            {/* one */}
                            <Tabs variant="enclosed"> 
                                <TabList>
                                    <Tab>Residential</Tab>
                                    <Tab>Commercial</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <Box className={style.buy}>
                                            <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                                Flat/Apartment
                                            </Checkbox>
                                            <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                                Independent House/villa
                                            </Checkbox>
                                            <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                                Independent/builder Floor
                                            </Checkbox>
                                            <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                                Serviced Apartment
                                            </Checkbox>
                                            <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                                Plot/Land
                                            </Checkbox>
                                            <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                                1 RK/ Studio Apartment
                                            </Checkbox>
                                            <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                                Farmhouse
                                            </Checkbox>
                                            <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                                other
                                            </Checkbox>
                                        </Box>
                                        <Button backgroundColor={"rgb(46,49,146)"} color={"white"} className={style.start_btn}>Start Now</Button>
                                    </TabPanel>
                                    <TabPanel>
                                        <Box className={style.buy}>
                                            <Checkbox size={"md"} color={"black"}>
                                                Office
                                            </Checkbox>
                                            <Checkbox>Retail</Checkbox>
                                            <Checkbox>Plot/Land</Checkbox>
                                            <Checkbox>Storage</Checkbox>
                                            <Checkbox>Industry</Checkbox>
                                            <Checkbox>Hospitality</Checkbox>
                                            <Checkbox>Other</Checkbox>
                                        </Box>
                                        <Button backgroundColor={"rgb(46,49,146)"} color={"white"} className={style.start_btn}>Start Now</Button>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                {/* ghbnjkl */}
                <Link>Sell</Link>
                <Link>Home Loans</Link>
                <Link>Rent</Link>
                <Link>Advertise</Link>
                <Link>Agent Finder</Link>
                <Popover>
                    <PopoverTrigger>
                        <button>Corporate Services</button>
                    </PopoverTrigger>
                    <PopoverContent padding={0}>
                        <PopoverArrow />
                        <PopoverBody className={style.option}>
                            <Link to={"/Construction_Management"}>
                                Construction Management
                            </Link>
                            <Link to={"/partner"}>Partner with Us</Link>
                            <Link to={"/Property_Marketing"}>Property Marketing</Link>
                            <Link to={"/acquisitions_and_dispositions"}>
                                Acquisitions & Dispositions
                            </Link>
                            {/* <Link to={"/consulting"}>Consulting</Link> */}
                            <Link to={"/market_research"}>Market Research</Link>
                            <Link to={"/portfolio_planning"}>Property & Portfolio Sales</Link>
                            <Link to={"/usa_real_state"}> USA Real State</Link>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default Navebar;
