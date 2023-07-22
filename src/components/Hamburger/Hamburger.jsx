import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from "@chakra-ui/react"
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
            <Button ref={btnRef} colorScheme='undefined' onClick={onOpen}>
                <HiMenu size={"46px"} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent backgroundColor={"rgb(11,32,51)"} color={"white"} >
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Logo />
                    </DrawerHeader>

                    <DrawerBody className={style.links} display={"grid"}  > 
                        <Link to={"/about"}> About </Link>
                        <Link to={"#"}> Buy </Link>
                        <Link to={"#"}> Rent </Link>
                        <Link to={"#"}> Sale </Link>
                        <Link to={"#"}>Home Loans </Link>
                        <Link to={"/Construction_Management"}>Construction Management</Link>
                        <Link to={"#"}>Partner with Us</Link>
                        <Link to={"/Property_Marketing"}>Property Marketing</Link>
                        <Link to={"#"}>Acquisitions & Dispositions</Link>
                        <Link to={"#"}>Consulting</Link>
                        <Link to={"#"}>Market Research</Link>
                        <Link to={"#"}>Property & Portfolio Sales</Link>
                        <Link to={"#"} > Contact</Link>
                        <Link to={"#"}>Advertise</Link>
                        <Link to={"#"}>Agent Finder</Link>
                        <Link to={"#"}>Help </Link> 

                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Hamburger; 
