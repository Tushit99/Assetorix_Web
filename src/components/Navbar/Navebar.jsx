import React from "react";
import Logo from "../Logo/Logo";
import style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { PiUserListLight } from "react-icons/pi";
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
} from "@chakra-ui/react";
import Hamburger from "../Hamburger/Hamburger"; 
import {BsFillTelephoneFill} from "react-icons/bs"; 

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
                <Menu padding={0}>
                    <MenuButton
                        padding={"0px"}
                        color={"white"}
                        backgroundColor={"unset"}
                        _hover={{ backgroundColor: "unset" }}
                        _active={{ backgroundColor: "unset" }}
                        as={Button}
                        className={style.thin}
                        display={{ base: "none", lg: "block" }}
                        fontSize={"lg"}
                        fontWeight={"bold"}
                    >
                        Services
                    </MenuButton>
                    <MenuList
                        display={"grid"}
                        className={style.service_box}
                        backgroundColor={"rgb(254, 254, 95)"}
                        textAlign={"left"}
                        marginTop={-2}

                        padding={"2px"}
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
                <Link to="#" className={style.bold}>
                    Help
                </Link>
            </div> 
            <div className={style.right_section}>
                <div className={style.contact}>
                    <Link>Contact</Link> 
                    <BsFillTelephoneFill />
                </div>
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

                        // clip-path: polygon(0 0, 100% 0, 90% 100%, 0% 100%)
                        >
                            <PiUserListLight color="black" size={"30px"} />
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
