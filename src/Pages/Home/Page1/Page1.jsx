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
import { Link } from "react-router-dom";

const Page1 = () => {
    return (
        <>
            <Box
                w={"full"}
                h={"95vh"}
                backgroundImage={
                    "url('https://media.bizj.us/view/img/12240780/gettyimages-1160735734*750xx2121-1193-0-111.jpg')"
                }
                backgroundSize={"cover"}
                display={{ base: "grid", lg: "flex" }}
                alignItems={"center"}
                backgroundPosition={"center"} 
            >
                <Box
                    w={"full"}
                    className={style.topbox}
                >
                    <Text
                        color={"white"}
                        fontWeight={700}
                        lineHeight={1.2} 
                        textShadow={"#000000 3px 4px 20px"}
                        fontSize={useBreakpointValue({ base: "4xl", md: "5xl" })}
                    >
                        Agents. Tours. Home Loans. Homes.
                    </Text>
                    <Box w={"100%"}>
                        <div className={style.fields}>
                            <div>
                                <Select
                                    size="md"
                                    w={"174px"}
                                    backgroundColor={"white"}
                                    color={"black"}
                                    outline={0}
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
                                    w={"60%"} 
                                    marginLeft={"2px"}
                                    placeholder={"Search locality, landmark, project or builder"}
                                    color={"black"}
                                    fontSize={"lg"}
                                    _active={{border:"0px",outline:"0px"}}
                                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"} 
                                    fontWeight={400}
                                    backgroundColor={"white"}
                                    borderradius={0}
                                />
                            </div>
                            <div>
                                <Button
                                    w={"148px"}
                                    borderradius={"4px"}
                                    _hover={{ color: "white" }} 
                                    fontSize={"lg"}   
                                    color={"white"}
                                    backgroundColor={"rgb(114,154,191)"}
                                    border={"1px solid black"}
                                >
                                    Buy Property
                                </Button>
                                <Button
                                    w={"148px"}
                                    borderradius={"4px"}
                                    color={"white"}
                                    _hover={{ color: "white" }} 
                                    fontSize={"lg"}
                                    backgroundColor={"rgb(11,32,51)"}
                                    border={"1px solid black"}
                                >
                                    Rent Property
                                </Button>
                            </div> 
                        </div>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Page1;
