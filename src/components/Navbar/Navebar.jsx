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
import { useDispatch, useSelector } from "react-redux";
import { changeLookingFor, changecountry } from "../../Redux/globalval/action";
import { userPreLog, userlogout } from "../../Redux/userauth/action";

const Navebar = () => {
    const data = useSelector((state) => state.userreducer);
    const [scroll, setScroll] = useState(0);
    const [country, setCountry] = useState("india");
    const dispatch = useDispatch();
    // const navigate = useNavigate(); 

    const homeback = ()=>{
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); 
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.pageYOffset); 
        });

        let userid = localStorage.getItem("usrId") || undefined;
        let authorization = localStorage.getItem("AstToken") || undefined;

        // console.log("presented  3987y",userid , authorization , Object.keys(data.user).length === 0);  
        if (userid && authorization && Object.keys(data.user).length === 0) { 
            let body = {
                id: userid,
                authorization,
            };
            dispatch(userPreLog(body)); 
        }
        // console.log(data.user.name) 

        let storedVal = localStorage.getItem("astcountry");
        if (!storedVal) {
            dispatch(changecountry("india"));
            setCountry("india");
        } else {
            dispatch(changecountry(storedVal));
            setCountry(storedVal);
        }
    }, []);

    // const handlePageRent = () => {
    //     dispatch(changeLookingFor("Rent/Lease"));
    // }

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

    // console.log(data);

    return (
        <div className={style.head_nav}> 
            {/*  Top Navbar Section (logo home about contact) */}
            <div className={scroll > 20 ? style.top_navbar3 : style.top_navbar}>
                <div className={style.hamburger}>
                    <Hamburger />
                </div>
                <div className={style.logo}>
                    <Logo />
                </div>
                <div className={scroll > 20 ? style.login_data2 : style.login_data}>
                    <div className={scroll > 20 ? style.country2 : style.country}>
                        <select
                            onChange={(e) => handlecountry(e.target.value)}
                            value={country}
                            style={{ border: "0px", outline: "0px" }}
                        >
                            <option value="india">India</option>
                            <option value="usa">USA</option>    
                        </select>
                    </div>
                    <Link to={"/"} onClick={homeback}>home</Link>
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
                                        <Link to={"/wishlist"}> Wishlist </Link>
                                        <Link to={"/recently_visited"}> recently visited </Link>
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
            {/* bottom section (buy, sell , home Loans , rent , advertise , agent finder , corporate services) */}
            <div className={scroll > 20 ? style.nav_bottom2 : style.nav_bottom}>
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
                    <PopoverContent w={{ base: "320px", md: "400px" }} marginTop={"-5px"} color={"black"}>
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
                                        </Box>
                                        <Link to="/residential_buy">
                                            <Button
                                                backgroundColor={"rgb(46,49,146)"}
                                                color={"white"} 
                                                w={"100%"} 
                                                className={style.start_btn}
                                            >
                                                Start Now
                                            </Button>
                                        </Link>
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
                                        </Box>
                                        <Link to={"/commercial_buy"}> 
                                            <Button
                                                backgroundColor={"rgb(46,49,146)"}
                                                color={"white"}
                                                w={"100%"}  
                                                className={style.start_btn}
                                            >
                                                Start Now
                                            </Button>
                                        </Link>
                                    </TabPanel>
                                </TabPanels> 
                            </Tabs>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
                {/* Sell */}
                <Link onClick={handlePageSell} to={"/post"}>Sell</Link>
                <Link>Home Loans</Link>
                {/* Rent button */}
                <Popover>
                    <PopoverTrigger>
                        <Button
                            backgroundColor={"unset"}
                            color={"auto"}
                            fontWeight={400}
                            _hover={{ color: "unset" }} 
                            _active={{ color: "unset" }}
                        >
                            Rent  
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent w={{ base: "320px", md: "400px" }} marginTop={"-5px"} color={"black"}>
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
                                        </Box>
                                        <Link to="/residential_rent">
                                            <Button
                                                backgroundColor={"rgb(46,49,146)"}
                                                color={"white"} 
                                                w={"100%"}  
                                                className={style.start_btn}
                                            >
                                                Start Now
                                            </Button>
                                        </Link>
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
                                        </Box>
                                        <Link to={"/commercial_rent"}> 
                                            <Button
                                                backgroundColor={"rgb(46,49,146)"}
                                                color={"white"} 
                                                w={"100%"}  
                                                className={style.start_btn}
                                            >
                                                Start Now
                                            </Button>
                                        </Link>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
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
