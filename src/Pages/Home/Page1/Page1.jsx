import React from "react";
import {
    Box,
    Button,
    Text,
    useBreakpointValue,
    Input,
    Select,
} from "@chakra-ui/react";
import style from "./Page1.module.css";
import img from "./back.webp";
import { GrFormSearch } from "react-icons/gr";

const Page1 = () => {
    return (
        <>
            <Box
                w={"full"}
                h={"95vh"}
                backgroundImage={img}
                backgroundSize={"cover"}
                display={{ base: "grid", lg: "flex" }}
                alignItems={"center"}
                backgroundPosition={"center"}
            >
                <Box
                    w={"full"}
                    className={style.topbox} >
                    <Text
                        color={"white"}
                        fontWeight={700}
                        lineHeight={1.2}
                        textAlign={"left"}
                        textShadow={"#000000 3px 4px 20px"}
                        fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })}
                    >
                        "I Think" to "I Own"
                        {/* Want I Think to I Own Status ? */}
                    </Text>
                    <Box w={"100%"}>
                        <div className={style.fields}>
                            <div>
                                <Select
                                    size="md"
                                    backgroundColor={"rgb(46,49,146)"}
                                    color={"white"}
                                    outline={0}
                                    fontSize={{ base: "sm", lg: "lg" }}
                                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                    style={{ borderradius: "20px" }}
                                    border={0}
                                >
                                    <option value="delhi" >
                                        Delhi
                                    </option>
                                    <option value="noida" >
                                        Gurugram
                                    </option>
                                    <option value="noida" >
                                        Noida
                                    </option>
                                    <option value="noida" >
                                        Mumbai
                                    </option>
                                    <option value="noida" >
                                        Bangalore
                                    </option>
                                    <option value="noida" >
                                        Kolkata 
                                    </option>
                                </Select>
                                <Button
                                    borderradius={"4px"}
                                    _hover={{ color: "white" }}
                                    fontSize={{ base: "sm", lg: "lg" }}
                                    color={"white"}
                                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                    backgroundColor={"rgb(114,154,191)"}
                                // border={"1px solid black"}
                                >
                                    Buy
                                </Button>
                                <Button
                                    borderradius={"4px"}
                                    color={"white"}
                                    _hover={{ color: "white" }}
                                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                    fontSize={{ base: "sm", lg: "lg" }}
                                    backgroundColor={"rgb(94, 174, 248)"}
                                // border={"1px solid black"}
                                >
                                    Sale
                                </Button>
                                <Button
                                    borderradius={"4px"}
                                    color={"white"}
                                    _hover={{ color: "white" }}
                                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                    fontSize={{ base: "sm", lg: "lg" }}
                                    backgroundColor={"rgb(16, 101, 180)"}
                                // border={"1px solid black"}
                                >
                                    Rent
                                </Button>
                            </div>
                            <div>
                                <Select
                                    size="md"
                                    backgroundColor={"white"}
                                    color={"black"}
                                    fontSize={{ base: "10px", lg: "lg" }}
                                    outline={0}
                                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                    style={{ borderradius: "20px" }}
                                    border={0}
                                >
                                    <option value="Residential" borderradius={0}>
                                        Residential
                                    </option>
                                    <option value="Commercial" borderradius={0}>
                                        Commercial
                                    </option>
                                </Select>
                                <Input
                                    type="text"
                                    border={0}
                                    height={"38px"}
                                    maxWidth={"400px"} 
                                    w={"60%"}
                                    marginLeft={"2px"}
                                    placeholder={"Search locality, project or builder"}
                                    color={"black"} 
                                    fontSize={{ base: "xs", lg: "lg" }}
                                    _active={{ border: "0px", outline: "0px" }}
                                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                    fontWeight={400}
                                    backgroundColor={"white"}
                                    borderradius={0}
                                />
                                <Button padding={0} m={"2px"}> <GrFormSearch size={"30px"} /> </Button>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Page1;
