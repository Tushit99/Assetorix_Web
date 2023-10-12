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
    const [resBuyArr, setresBuyArr] = useState([]);
    const [resRentArr, setresRentArr] = useState([]);
    const [comBuyArr, setcomBuyArr] = useState([]);
    const [comRentArr, setcomRentArr] = useState([]);
    // const navigate = useNavigate(); 

    const homeback = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    const handleresbuy = (value) => {
        setresBuyArr((prev) => {
            if (prev.includes(value)) {
                let res = prev.filter((item) => item !== value) || [];
                localStorage.setItem("resBuy", JSON.stringify(res));
                return res
            } else {
                let res = [...prev, value];
                localStorage.setItem("resBuy", JSON.stringify(res));
                return res
            }
        });
    }
    const handleresrent = (value) => {
        setresRentArr((prev) => {
            if (prev.includes(value)) {
                let res = prev.filter((item) => item !== value) || [];
                localStorage.setItem("resRent", JSON.stringify(res));
                return res
            } else {
                let res = [...prev, value];
                localStorage.setItem("resRent", JSON.stringify(res));
                return res
            }
        });
    }
    const handleCombuy = (value) => {
        setcomBuyArr((prev) => {
            if (prev.includes(value)) {
                let res = prev.filter((item) => item !== value) || [];
                localStorage.setItem("combuy", JSON.stringify(res));
                return res
            } else {
                let res = [...prev, value];
                localStorage.setItem("combuy", JSON.stringify(res));
                return res
            }
        });
    }
    const handleComRent = (value) => {
        setcomRentArr((prev) => {
            if (prev.includes(value)) {
                let res = prev.filter((item) => item !== value) || [];
                localStorage.setItem("comRent", JSON.stringify(res));
                return res
            } else {
                let res = [...prev, value];
                localStorage.setItem("comRent", JSON.stringify(res));
                return res
            }
        });
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

        localStorage.setItem("resBuy", JSON.stringify([]));
        localStorage.setItem("resBuy", JSON.stringify([]));
        localStorage.setItem("resRent", JSON.stringify([]));
        localStorage.setItem("resRent", JSON.stringify([]));
        localStorage.setItem("combuy", JSON.stringify([]));
        localStorage.setItem("combuy", JSON.stringify([]));
        localStorage.setItem("comRent", JSON.stringify([]));
        localStorage.setItem("comRent", JSON.stringify([]));

    }, []);

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
                    <Link to={"/"} onClick={homeback}>Home</Link>
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
                                        <Link to={"/listing"}> Listings </Link>
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
            {/* =====================================----=================================== */}
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
                                            <Checkbox onChange={(e) => handleresbuy("Flat / Apartment")} isChecked={resBuyArr.includes("Flat / Apartment")} iconSize={"0px"} colorScheme={"blue"}>
                                                Flat/Apartment
                                            </Checkbox>
                                            <Checkbox onChange={(e) => handleresbuy("Independent House / Villa")} isChecked={resBuyArr.includes("Independent House / Villa")} iconSize={"0px"} colorScheme={"blue"}>
                                                Independent House/villa
                                            </Checkbox>
                                            <Checkbox onChange={(e) => handleresbuy("Independent / Builder Floor")} isChecked={resBuyArr.includes("Independent / Builder Floor")} iconSize={"0px"} colorScheme={"blue"}>
                                                Independent/builder Floor
                                            </Checkbox>
                                            <Checkbox onChange={(e) => handleresbuy("Serviced Apartment")} isChecked={resBuyArr.includes("Serviced Apartment")} iconSize={"0px"} colorScheme={"blue"}>
                                                Serviced Apartment
                                            </Checkbox>
                                            <Checkbox onChange={(e) => handleresbuy("Plot / Land")} isChecked={resBuyArr.includes("Plot / Land")} iconSize={"0px"} colorScheme={"blue"}>
                                                Plot/Land
                                            </Checkbox>
                                            <Checkbox onChange={(e) => handleresbuy("1 RK / Studio Apartment")} isChecked={resBuyArr.includes("1 RK / Studio Apartment")} iconSize={"0px"} colorScheme={"blue"}>
                                                1 RK/ Studio Apartment
                                            </Checkbox>
                                            <Checkbox onChange={(e) => handleresbuy("Farmhouse")} isChecked={resBuyArr.includes("Farmhouse")} iconSize={"0px"} colorScheme={"blue"}>
                                                Farmhouse
                                            </Checkbox>
                                        </Box>
                                        <Link to="/residential_buy" state={{ arr: resBuyArr }} >
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
                                        <Box className={style.buy}  >
                                            <Checkbox onChange={(e) => handleCombuy(e.target.value)} value={"Office"} isChecked={comBuyArr.includes("Office")} size={"md"} color={"black"}>
                                                Office
                                            </Checkbox>
                                            <Checkbox onChange={() => handleCombuy("Retail")} isChecked={comBuyArr.includes("Retail")} >Retail</Checkbox>
                                            <Checkbox onChange={() => handleCombuy("Plot / Land")} isChecked={comBuyArr.includes("Plot / Land")} >Plot / Land</Checkbox>
                                            <Checkbox onChange={() => handleCombuy("Storage")} isChecked={comBuyArr.includes("Storage")} >Storage</Checkbox>
                                            <Checkbox onChange={() => handleCombuy("Industry")} isChecked={comBuyArr.includes("Industry")} >Industry</Checkbox>
                                            <Checkbox onChange={() => handleCombuy("Hospitality")} isChecked={comBuyArr.includes("Hospitality")} >Hospitality</Checkbox>
                                        </Box>
                                        <Link to={"/commercial_buy"} params={{ arr: comBuyArr }} >
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
                        <PopoverHeader>Rent Property</PopoverHeader>
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
                                            <Checkbox onChange={() => handleresrent("Flat / Apartment")} isChecked={resRentArr.includes("Flat / Apartment")} iconSize={"0px"} colorScheme={"blue"}>
                                                Flat/Apartment
                                            </Checkbox>
                                            <Checkbox onChange={() => handleresrent("Independent House / villa")} isChecked={resRentArr.includes("Independent House / villa")} iconSize={"0px"} colorScheme={"blue"}>
                                                Independent House/villa
                                            </Checkbox>
                                            <Checkbox onChange={() => handleresrent("Independent / Builder Floor")} isChecked={resRentArr.includes("Independent / Builder Floor")} iconSize={"0px"} colorScheme={"blue"}>
                                                Independent/builder Floor
                                            </Checkbox>
                                            <Checkbox onChange={() => handleresrent("Serviced Apartment")} isChecked={resRentArr.includes("Serviced Apartment")} iconSize={"0px"} colorScheme={"blue"}>
                                                Serviced Apartment
                                            </Checkbox>
                                            <Checkbox onChange={() => handleresrent("Plot / Land")} isChecked={resRentArr.includes("Plot / Land")} iconSize={"0px"} colorScheme={"blue"}>
                                                Plot/Land
                                            </Checkbox>
                                            <Checkbox onChange={() => handleresrent("1RK / Studio Apartment")} isChecked={resRentArr.includes("1RK / Studio Apartment")} iconSize={"0px"} colorScheme={"blue"}>
                                                1 RK/ Studio Apartment
                                            </Checkbox>
                                            <Checkbox onChange={() => handleresrent("Farmhouse")} isChecked={resRentArr.includes("Farmhouse")} iconSize={"0px"} colorScheme={"blue"}>
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
                                            <Checkbox onChange={() => handleComRent("Office")} isChecked={comRentArr.includes("Office")} size={"md"} color={"black"}> Office </Checkbox>
                                            <Checkbox onChange={() => handleComRent("Retail")} isChecked={comRentArr.includes("Retail")} >Retail</Checkbox>
                                            <Checkbox onChange={() => handleComRent("Plot / Land")} isChecked={comRentArr.includes("Plot / Land")} >Plot/Land</Checkbox>
                                            <Checkbox onChange={() => handleComRent("Storage")} isChecked={comRentArr.includes("Storage")} >Storage</Checkbox>
                                            <Checkbox onChange={() => handleComRent("Industry")} isChecked={comRentArr.includes("Industry")} >Industry</Checkbox>
                                            <Checkbox onChange={() => handleComRent("Hospitality")} isChecked={comRentArr.includes("Hospitality")} >Hospitality</Checkbox>
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
