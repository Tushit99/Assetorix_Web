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
            <Button ref={btnRef}
                backgroundColor={"unset"}
                onClick={onOpen}
                _hover={{ backgroundColor: "unset" }}
                _active={{ backgroundColor: "unset" }}
            >
                <HiMenu size={"40px"} />
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

                    <DrawerBody className={style.links} display={"grid"}  >
                        <Link to={"/about"} onClick={onClose}> About </Link>
                        <Link to={"#"} onClick={onClose}> Buy </Link>
                        <Link to={"#"} onClick={onClose}> Rent </Link>
                        <Link to={"#"} onClick={onClose}> Sale </Link>
                        <Link to={"#"} onClick={onClose}>Home Loans </Link>
                        <Link to={"/Construction_Management"} onClick={onClose}>Construction Management</Link>
                        <Link to={"#"} onClick={onClose}>Partner with Us</Link>
                        <Link to={"/Property_Marketing"} onClick={onClose}>Property Marketing</Link>
                        <Link to={"#"} onClick={onClose}>Acquisitions & Dispositions</Link>
                        <Link to={"#"} onClick={onClose}>Consulting</Link>
                        <Link to={"#"} onClick={onClose}>Market Research</Link>
                        <Link to={"#"} onClick={onClose}>Property & Portfolio Sales</Link>
                        <Link to={"#"} onClick={onClose}> Contact</Link>
                        <Link to={"#"} onClick={onClose}>Advertise</Link>
                        <Link to={"#"} onClick={onClose}>Agent Finder</Link>
                        <Link to={"#"} onClick={onClose}>Help </Link>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Hamburger; 
