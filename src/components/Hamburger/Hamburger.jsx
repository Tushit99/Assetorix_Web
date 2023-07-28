import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Select, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react";
import { HiMenu } from "react-icons/hi";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import style from "./Hamburger.module.css"; 


const Hamburger = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <>
            <Button ref={btnRef}
                backgroundColor={"unset"}
                onClick={onOpen}
                _hover={{ backgroundColor: "unset" }}
                _active={{ backgroundColor: "unset" }}
                padding={0}
                m={0}
            >
                <HiMenu size={"30px"} color="blue" />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent className={style.drawer} >
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <div onClick={onClose}>
                            <Logo />  
                        </div> 
                    </DrawerHeader>

                    <DrawerBody className={style.links} display={"flex"} flexDirection={"column"} color={"black"} gap={3} >
                        <Link to={"/about"} onClick={onClose}> About </Link>
                        <Link to={"/buy"} onClick={onClose}> Buy </Link> 
                        <Link to={"#"} onClick={onClose}> Rent </Link>
                        <Link to={"#"} onClick={onClose}> Sell </Link>
                        <Link to={"#"} onClick={onClose}>Home Loans </Link>
                        <Link to={"#"} onClick={onClose}>Advertise</Link>
                        <Link to={"#"} onClick={onClose}>Agent Finder</Link> 
                        <Select placeholder="Corporate Services" onChange={onClose} color={"black"} _hover={{color:"black"}} className={style.options}> 
                            <option value="" > 
                                <Link to={"/Construction_Management"} >Construction Management</Link>
                            </option> 
                            <option value="" >
                                <Link to={"/partner"} >Partner with Us</Link>
                            </option>
                            <option value="" >
                                <Link to={"/Property_Marketing"} >Property Marketing</Link>
                            </option>
                            <option value="" >
                                <Link to={"/acquisitions_and_dispositions"} >Acquisitions & Dispositions</Link>
                            </option>
                            <option value="" >
                                <Link to={"/consulting"} >Consulting</Link>
                            </option>
                            <option value="" >
                                <Link to={"/marketresearch"} >Market Research</Link>
                            </option>
                            <option value="" >
                                <Link to={"/portfolio_planning"} >Property & Portfolio Sales</Link>
                            </option>
                            <option value="">
                                <Link to={"/usa_real_state"} > USA Real State</Link>
                            </option>
                        </Select>
                        <Link to={"#"} onClick={onClose}> Contact</Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Hamburger; 
