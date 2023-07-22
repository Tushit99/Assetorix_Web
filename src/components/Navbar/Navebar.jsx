import React from "react";
import Logo from "../Logo/Logo";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { PiUserListLight } from "react-icons/pi"
import { Box, Button, Menu, MenuButton, MenuList, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";
import Hamburger from "../Hamburger/Hamburger";

const Navebar = () => {
    return (
        <div className={style.navbar} >
            <div className={style.nav_hamb} >
                <Hamburger /> 
            </div>
            <div className={style.logo}  >
                <Link to={"/"} >
                    <Logo /> 
                </Link> 
            </div> 
            <div className={style.nav_link} >
                <Link to={"/about"} className={style.bold}> About </Link>
                <Link to={"/about"} className={style.thin} > Buy </Link>
                <Link to={"/"} className={style.thin} > Rent </Link>
                <Link to={"/"} className={style.thin} > Sale </Link>
                <Link to="#" className={style.bold}>Home Loans </Link>

                <Menu padding={0} >
                    <MenuButton
                        padding={"0px"}
                        color={"white"}
                        backgroundColor={"unset"}
                        _hover={{ backgroundColor: "unset" }}
                        _active={{ backgroundColor: "unset" }}
                        as={Button}
                        className={style.thin} 
                        display={{base:"none",lg:"block"}}
                        fontSize={"lg"}
                        fontWeight={"200"}
                    >
                        Services
                    </MenuButton>
                    <MenuList
                        display={"grid"}
                        gap={"20px"}
                        backgroundColor={"rgb(11,32,51)"}
                        textAlign={"left"}
                        marginTop={-2}
                        color={"white"} 
                        padding={"10px"}
                    >
                        <Link to={"/Construction_Management"}>Construction Management</Link>
                        <Link to={"#"}>Partner with Us</Link>
                        <Link to={"/Property_Marketing"}>Property Marketing</Link>
                        <Link to={"#"}>Acquisitions & Dispositions</Link>
                        <Link to={"#"}>Consulting</Link>
                        <Link to={"#"}>Market Research</Link>
                        <Link to={"#"}>Property & Portfolio Sales</Link>
                    </MenuList>
                </Menu>
                <Link to="#" className={style.thin}> Contact</Link>
                <Link to="#" className={style.thin}>Advertise</Link>
                <Link to="#" className={style.bold}>Agent Finder</Link>
                <Link to="#" className={style.bold}>Help </Link>
                <Popover>
                    <PopoverTrigger>
                        <Button
                            padding={"0px"}
                            color={"white"}
                            as={Button}
                            fontSize={"lg"}
                            border={0}
                            backgroundColor={"unset"}
                            _hover={{ background: "unset" }}
                            _active={{ background: "unset" }}
                            fontWeight={"400"}
                        >
                            <PiUserListLight size={"30px"} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent border={0} backgroundColor={"rgb(11,32,51)"}>
                        <PopoverArrow backgroundColor={"rgb(11,32,51)"} />
                        <PopoverHeader > Welcome User </PopoverHeader>
                        <PopoverBody >
                            <div className={style.user_section}>
                                <Link to={"/signup"}>Signin</Link>
                                <Link to={"/login"} > Login </Link>
                            </div>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default Navebar;
