import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
import Logo from "../Logo/Logo";
import Hamburger from "../Logo/Hamburger";
import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";

const Navebar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.hamburger_menu}>
                <Hamburger />
            </div>
            <div className={style.nav_logo}>
                <Logo />
            </div>
            <div className={style.nav_link}>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                {/* contact info */}
                <Popover   >
                    <PopoverTrigger>
                        <Button padding={0} bg={"unset"} _hover={{ bg: "undet" }} _active={{ bg: "unset" }} color={"white"} >Contact</Button>
                    </PopoverTrigger>
                    <PopoverContent bg={"rgb(11,32,51)"} color={"white"} >
                        <PopoverArrow bg={"rgb(11,32,51)"} />
                        <PopoverCloseButton /> 
                        <PopoverHeader>Contact Info</PopoverHeader>
                        <PopoverBody textAlign={"left"} >
                            <h3>Ametheus Holdings Pvt Ltd </h3>
                            <h3>Address: 27, 2nd Floor, </h3>
                            <h3>Hauz Khas Village,</h3>
                            <h3>New Delhi 110016,</h3>
                            <h3>India Phone: +91-11-41670666,</h3>
                            <h3>+91-1140074433, +91-9999099538</h3>
                        </PopoverBody>
                    </PopoverContent>
                </Popover> 
                <Link>Agent Finder</Link>
            </div>
            <div>
                <button className={style.signup} >
                    <Link to={"/login"}>
                        LogIn
                    </Link>

                </button>
            </div>
        </div>
    );
};

export default Navebar;
