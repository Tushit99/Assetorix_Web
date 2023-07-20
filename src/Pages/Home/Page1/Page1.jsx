import React from "react";
import {
    Box,
    Button,
    Text,
    VStack,
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
                    "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
                }
                backgroundSize={"cover"} 
                display={{base:"grid",lg:"flex"}}   
                alignItems={"center"} 
                className={style.home_top}
                backgroundPosition={"center center"}
            >
                <Box w={"full"} flex={5} align={"flex-start"} spacing={6}>
                    <Text
                        color={"white"}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: "4xl", md: "5xl" })}
                    >
                        Agents. Tours. Home Loans. Homes.
                    </Text>
                    <Box direction={"row"} w={"100%"} >
                        <div className={style.fields}>
                            <div >
                                <Button
                                    w={"148px"}
                                    borderradius={"4px"}
                                    _hover={{ color: "white" }}
                                    color={"white"}
                                    backgroundColor={"rgb(245,101,101)"}
                                    border={"1px solid black"}
                                >
                                    Buy Property
                                </Button>
                                <Button
                                    w={"148px"}
                                    borderradius={"4px"}
                                    color={"white"}
                                    _hover={{ color: "white" }}
                                    backgroundColor={"rgb(11,32,51)"}
                                    border={"1px solid black"}
                                >
                                    Rent Property
                                </Button>
                            </div>
                            <div >
                                <Select
                                    size="md"
                                    w={"174px"}
                                    backgroundColor={"white"}
                                    color={"black"}
                                    outline={0}
                                    style={{ borderradius: "20px" }}
                                    border={0}
                                >
                                    <option value="Residential" borderradius={0} >Residential</option>
                                    <option value="Commercial" borderradius={0} > Commercial</option>
                                </Select>
                                <Input
                                    type="text"
                                    border={0}
                                    height={"38px"}
                                    w={"100%"}
                                    marginLeft={"2px"}
                                    placeholder={"Search locality, landmark, project or builder"}
                                    color={"black"}
                                    fontSize={"lg"}
                                    fontWeight={400}
                                    backgroundColor={"white"}
                                    borderradius={0}
                                />
                            </div>
                        </div>
                    </Box>
                </Box>
                <Box flex={2} display={"flex"} flexDirection={"column"} alignItems={"flex-start"} fontSize={"3xl"} className={style.links} >  
                    <Link to={"/Construction_Management"} >Construction Management</Link>  
                    <Link to={"#"} >Partner with Us</Link>  
                    <Link to={"/Property_Marketing"} >Property Marketing</Link>  
                    <Link to={"#"} >Acquisitions & Dispositions</Link>  
                    <Link to={"#"} >Consulting</Link>  
                    <Link to={"#"} >Market Research</Link>  
                    <Link to={"#"} >Property & Portfolio Sales</Link>  
                    <Link to={"#"} >OVERSEAS REAL-ESTATE</Link>  
                    <Link to={"#"} >USA Real-Estate</Link>   
                </Box>
            </Box>
        </>
    );
};

export default Page1;
