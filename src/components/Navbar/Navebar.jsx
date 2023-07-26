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
import { Select } from "@chakra-ui/react"; 
import {BiSolidUserDetail} from "react-icons/bi"

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
                    <div className={style.country}>
                        <select>
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
                <Link>Buy</Link>
                <Link>Rent</Link>
                <Link>Sale</Link>
                <Link>Home Loans</Link>
                <Link>Advertise</Link>
                <Link>Agent Finder</Link>
                <Link>Help</Link>
                <Link> Corporate Services</Link>
            </div>
        </div>
    );
};

export default Navebar;
