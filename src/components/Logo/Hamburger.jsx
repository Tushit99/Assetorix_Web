import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom"; 
import style from "./Logo.module.css"; 

const Hamburger = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();

    return (
        <> 
            <Button ref={btnRef} backgroundColor="#0b2033" _hover={{ backgroundColor: "#0b2033" }} onClick={onOpen}>
                <HamburgerIcon w={10} h={10} color="red.500" />
            </Button>
            <Drawer 
                isOpen={isOpen}
                placement="left"
                onClose={onClose}  
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent backgroundColor={"#0b2033"}>
                    <DrawerCloseButton backgroundColor={"white"} />
                    <DrawerHeader>
                        <Logo />
                    </DrawerHeader>

                    <DrawerBody className={style.ham_body} >
                        <Link to={"/"}>Home</Link>
                        <Link to={"/about"}>About</Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Hamburger;
