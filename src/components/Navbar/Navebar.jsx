import React from "react";
import Logo from "../Logo/Logo";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import { Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, Button, Box, Text } from "@chakra-ui/react";
import { BiSolidUserDetail } from "react-icons/bi"

const Navebar = () => {
    return (
        <div className={style.head_nav}>
            <div className={style.top_navbar}>
                <div className={style.hamburger}>
                    <Hamburger />
                </div>
                <div className={style.logo}>
                    <Logo />
                </div>
                <div className={style.login_data}>
                    <div className={style.country} >
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
                            <Button borderRadius={"30px"}>
                                {/* icon */}
                                <BiSolidUserDetail size={"20px"} color="blue" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverHeader>Welcome to Assetorix</PopoverHeader>
                            <PopoverBody > 
                                <Text margin={"0 0 8px 0"}>Login for more futuristic experience</Text>
                                <Box display={"flex"} justifyContent={"space-around"} margin={"0 0 8px 0"} alignItems={"center"}>
                                    <Link className={style.logbtn} to={"/login"}>Login</Link>
                                    <Link className={style.logbtn} to={"/signup"}>Sign Up</Link>
                                </Box>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </div>
            </div>
            <div className={style.nav_bottom}>
                <Link to={"/buy"}>Buy</Link>
                <Link >Sell</Link>
                <Link>Home Loans</Link>
                <Link>Rent</Link>
                <Link>Advertise</Link>
                <Link>Agent Finder</Link>
                <Popover >
                    <PopoverTrigger>
                        <button>Corporate Services</button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody className={style.option} >
                            <Link to={"/Construction_Management"}>Construction Management</Link>
                            <Link to={"/partner"}>Partner with Us</Link>
                            <Link to={"/Property_Marketing"}>Property Marketing</Link>
                            <Link to={"/acquisitions_and_dispositions"}>Acquisitions & Dispositions</Link>
                            {/* <Link to={"/consulting"}>Consulting</Link> */}
                            <Link to={"/marketresearch"}>Market Research</Link>
                            <Link to={"/portfolio_planning"}>Property & Portfolio Sales</Link>
                            <Link to={"/usa_real_state"} > USA Real State</Link>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default Navebar;
