import React, { useEffect, useState } from "react";
import Logo from "../Logo/Logo";
import style from "./TopNavbar.module.css";
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
import { useDispatch, useSelector } from "react-redux";
import { userPreLog, userlogout } from "../../Redux/userauth/action";
import { changeLookingFor, changecountry } from "../../Redux/globalval/action";

const TopNavbar = () => {
    const data = useSelector((state) => state.userreducer);
    const [scroll, setScroll] = useState(0);
    const [country, setCountry] = useState("india");
    const dispatch = useDispatch();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.pageYOffset);
        });

        let userid = localStorage.getItem("usrId") || undefined;
        let usertoken = localStorage.getItem("AstToken") || undefined;

        if (userid && usertoken) {
            let body = {
                id: userid,
                authorization: usertoken,
            };
            // console.log(body)
            dispatch(userPreLog(body));
        }

        let storedVal = localStorage.getItem("astcountry");
        if (!storedVal) {
            dispatch(changecountry("india"));
            setCountry("india");
        } else {
            dispatch(changecountry(storedVal));
            setCountry(storedVal);
        }
    }, []);

    const handlePageRent = () => {
        dispatch(changeLookingFor("Rent/Lease"));
    }

    const handlePageSell = () => {
        dispatch(changeLookingFor("sell"));
    }

    const handlecountry = (val) => {
        setCountry(val);
        localStorage.setItem("astcountry", val);
        dispatch(changecountry(val));
    };

    const handlelogout = () => {
        dispatch(userlogout());
    }

    return (
        <div id={style.nav_back_space}>
            <div className={style.head_nav}>
                <div className={style.top_navbar3}>
                    <div className={style.hamburger2}>
                        <Hamburger />
                    </div>
                    <div className={style.logo}>
                        <Logo />
                    </div>
                    <div className={style.login_data2}>
                        <div className={style.country}>
                            <select onChange={(e) => handlecountry(e.target.value)}
                                value={country} style={{ border: "0px", outline: "0px" }}>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                            </select>
                        </div>
                        <Link to={"/"}>home</Link>
                        <Link to={"/about"}>About us</Link>
                        <Link to={"/contact"}>Contact</Link>
                    </div>
                    {/* login signin button */}
                    <div className={style.login_box}>
                        <Popover>
                            <PopoverTrigger>
                                <Button
                                    borderRadius={"30px"}
                                    rightIcon={
                                        <IoIosArrowDown
                                            size={"20px"}
                                            _hover={{ backgroundColor: "unset" }}
                                            color="rgb(46,49,146)"
                                        />
                                    }
                                >
                                    {data.user.name ? (
                                        <span className={style.alpha}>
                                            {data.user.name[0].toUpperCase()}
                                        </span>
                                    ) : (
                                        <BiSolidUserDetail size={"24px"} color="rgb(46,49,146)" />
                                    )}
                                </Button>
                            </PopoverTrigger>
                            {data.user.name ? (
                                <PopoverContent >
                                    <PopoverArrow />
                                    <PopoverHeader>Welcome to Assetorix</PopoverHeader>
                                    <PopoverBody >
                                        <Text margin={"0 0 8px 0"}>
                                            Hello {(data.user.name).toUpperCase()}
                                        </Text>
                                        <Box className={style.log_links}>
                                            <Link to={"/profile"}> Profile </Link>
                                            <Link> Wishlist </Link>
                                            <Link> recently visited </Link>
                                            <Link> Listings </Link>
                                            <Link> Purchased </Link>
                                        </Box>
                                        <Button onClick={handlelogout} className={style.logout_btn} > Logout </Button>
                                    </PopoverBody>
                                </PopoverContent>
                            ) : (
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
                            )}
                        </Popover>
                    </div>
                </div>
                <div className={style.nav_bottom2}>
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
                        <PopoverContent w={{ base: "320px", md: "400px" }}>
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
                    <Link onClick={handlePageSell} to={"/post"}>Sell</Link>
                    <Link>Home Loans</Link>
                    <Link onClick={handlePageRent} to={"/post"}>Rent</Link>
                    <Link>Advertise</Link>
                    <Link>Agent Finder</Link>
                    <Popover>
                        <PopoverTrigger>
                            <button>Corporate Services</button>
                        </PopoverTrigger>
                        <PopoverContent>
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
        </div>
    );
};

export default TopNavbar;
