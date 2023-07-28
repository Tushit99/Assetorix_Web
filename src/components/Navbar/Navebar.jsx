import React from "react";
import Logo from "../Logo/Logo";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
// import { PiUserListLight } from "react-icons/pi"; 
// import {
//     Button,
//     Popover,
//     PopoverArrow,
//     PopoverBody,
//     PopoverContent,
//     PopoverHeader,
//     PopoverTrigger,
//     Select,
// } from "@chakra-ui/react";
import Hamburger from "../Hamburger/Hamburger";
import { Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger, Button } from "@chakra-ui/react";
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
                        <select style={{border:"0px",outline:"0px"}}>
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                        </select>
                    </div>
                    <Link>home</Link>
                    <Link>About us</Link>
                    <Link>Contact</Link>
                </div>
                <div className={style.login_box}>
                    <Link> <BiSolidUserDetail size={"20px"} color="blue" /> </Link>
                </div>
            </div>
            <div className={style.nav_bottom}>
                <Link to={"/buy"}>Buy</Link>
                <Link>Sell</Link>
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
                            <Link to={"/consulting"}>Consulting</Link>
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
