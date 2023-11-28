import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Select,
    useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { HiMenu } from "react-icons/hi";
import Logo from "../Logo/Logo";
import { Link, useNavigate } from "react-router-dom";
import style from "./Hamburger.module.css";
import { ChevronUpIcon } from "@chakra-ui/icons";
// import { changeLookingFor } from "../../Redux/globalval/action";
// import { useDispatch } from "react-redux";

const Hamburger = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const navigate = useNavigate();

    const handlePage = (e) => {
        let value = e.target.value;
        if (value == "Residential") {
            navigate("/residential_buy");
        } else if (value == "Commercial") {
            navigate("/commercial_buy");
        }
        onClose();
    }

    const handlePageSell = (e) => {
        let value = e.target.value;
        if (value == "Residential") {
            navigate("/residential_rent");
        } else if (value == "Commercial") {
            navigate("/commercial_rent");
        }
        onClose();

    }


    return (
        <>
            <Button
                ref={btnRef}
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
                placement="left"
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"xs"}
            >
                <DrawerOverlay />
                <DrawerContent className={style.drawer}>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <div onClick={onClose}>
                            <Logo />
                        </div>
                    </DrawerHeader>

                    <DrawerBody
                        className={style.links}
                        display={"flex"}
                        flexDirection={"column"}
                        color={"black"}
                        gap={3} 
                    >
                        <Link to={"/about"} className={style.outer} onClick={onClose}>
                            About
                        </Link> 
                        <Select w={"100%"} border={"1px solid #dae0e8"} _hover={{border:"1px solid #2b6cb0"}} borderRadius={0} colorScheme={"blue"} margin={0} variant={"outline"} onChange={handlePage} placeholder="Buy" >
                            <option value="Commercial"> Commercial </option>
                            <option value="Residential"> Residential </option>
                        </Select>
                        <Link to="/post" className={style.outer} onClick={onClose}> Post & Sell </Link>
                        <Select w={"100%"} border={"1px solid #dae0e8"} _hover={{border:"1px solid #2b6cb0"}} borderRadius={0} colorScheme={"blue"} margin={0} variant={"outline"} onChange={handlePageSell} placeholder="Rent" >
                            <option value="Commercial"> Commercial </option>
                            <option value="Residential"> Residential </option>
                        </Select>
                        <Link to={"#"} className={style.outer} onClick={onClose}>
                            Home Loans
                        </Link>
                        <Link to={"#"} className={style.outer} onClick={onClose}>
                            Advertise
                        </Link>
                        <Link to={"#"} className={style.outer} onClick={onClose}>
                            Agent Finder
                        </Link>
                        {/* ======= Menu ====== */}
                        <Menu>
                            <MenuButton
                                as={Button}
                                textAlign={"left"}
                                _hover={{ border: "1px solid #2b6cb0" }}
                                variant={"outline"}
                                borderRadius={0}
                                border={"1px solid #dae0e8"}
                                colorScheme={"blue"}
                                rightIcon={<ChevronUpIcon />}>
                                Actions 
                            </MenuButton>
                            <MenuList >
                                <MenuItem onClick={onClose}>
                                    <Link to={"/Construction_Management"}>
                                        Construction Management
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={onClose}>
                                    <Link to={"/partner"}>Partner with Us</Link>
                                </MenuItem>
                                <MenuItem onClick={onClose}>
                                    <Link to={"/Property_Marketing"}>Property Marketing</Link>
                                </MenuItem>
                                <MenuItem onClick={onClose}>
                                    <Link to={"/acquisitions_and_dispositions"}>
                                        Acquisitions & Dispositions
                                    </Link>
                                </MenuItem>
                                {/* <MenuItem onClick={onClose}>
                                    <Link to={"/consulting"}>Consulting</Link>
                                </MenuItem> */}
                                <MenuItem onClick={onClose}>
                                    <Link to={"/marketresearch"}>Market Research</Link>
                                </MenuItem>
                                <MenuItem onClick={onClose}>
                                    <Link to={"/portfolio_planning"}>
                                        Property & Portfolio Sales
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={onClose}>
                                    <Link to={"/usa_real_state"}> USA Real State</Link>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        {/* ======= Contact =======  */}
                        <Link to={"/contact"} className={style.outer} onClick={onClose}>
                            Contact
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Hamburger;

