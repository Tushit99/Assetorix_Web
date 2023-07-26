import React from "react";
import Logo from "../Logo/Logo";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { PiUserListLight } from "react-icons/pi";
import {
    Button, 
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from "@chakra-ui/react";
import Hamburger from "../Hamburger/Hamburger"; 

const Navebar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.nav_hamb}>
                <Hamburger />
            </div>
            <div className={style.logo}>
                <Link to={"/"}>
                    <Logo />
                </Link>
            </div>
            <div className={style.nav_link}>
                <Link to={"/"} className={style.thin}>
                    Buy
                </Link>
                <Link to={"/"} className={style.thin}>
                    Rent 
                </Link>
                <Link to={"/"} className={style.thin}>
                    Sale
                </Link>
                <Link to="#" className={style.bold}>
                    Home Loans
                </Link>

                <Link to="#" className={style.thin}>
                    Advertise
                </Link>
                <Link to="#" className={style.bold}>
                    Agent Finder
                </Link>
                {/* Services */}
                <Popover>
                    <PopoverTrigger >
                        <Button
                            padding={0} 
                            color={"white"}
                            as={Button} 
                            fontSize={"lg"}
                            backgroundColor={"unset"}
                            _hover={{ background: "unset" }}
                            _active={{ background: "unset" }}
                            fontWeight={"bold"} 
                        >
                            Services
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent boxShadow={"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"}>
                        <PopoverArrow />
                        <PopoverBody className={style.box_cs}> 
                            <Link to={"/Construction_Management"}>Construction Management</Link>
                            <Link to={"#"}>Partner with Us</Link>
                            <Link to={"/Property_Marketing"}>Property Marketing</Link>
                            <Link to={"#"}>Acquisitions & Dispositions</Link>
                            <Link to={"#"}>Consulting</Link>
                            <Link to={"#"}>Market Research</Link>
                            <Link to={"#"}>Property & Portfolio Sales</Link>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
 
                {/* help */}
                <Popover>
                    <PopoverTrigger >
                        <Button
                            padding={"0px"}
                            color={"white"}
                            as={Button}
                            fontSize={"lg"}
                            backgroundColor={"unset"}
                            _hover={{ background: "unset" }}
                            _active={{ background: "unset" }}
                            fontWeight={"bold"} 
                        >
                            Help
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent boxShadow={"rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"} >
                        <PopoverArrow />
                        <PopoverBody className={style.box_cs}> 
                            <Link to="#">help</Link>
                        </PopoverBody>
                    </PopoverContent>
                </Popover> 
            </div>
            <div className={style.right_section}>
                <div className={style.contact}>
                    <Link>Contact</Link> 
                </div>
                <Popover>
                    <PopoverTrigger >
                        <Button
                            padding={"0px"}
                            color={"white"}
                            as={Button}
                            fontSize={"lg"}
                            backgroundColor={"unset"}
                            _hover={{ background: "unset" }}
                            _active={{ background: "unset" }}
                            fontWeight={"bolder"}
                        >
                            <PiUserListLight o fontWeight={"500"} color="blue" size={"30px"} />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent border={0} >
                        <PopoverArrow />
                        <PopoverHeader> Welcome User </PopoverHeader>
                        <PopoverBody>
                            <div className={style.user_section}>
                                <Link to={"/signup"}>Signin</Link>
                                <Link to={"/login"}> Login </Link>
                            </div>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
};

export default Navebar;
