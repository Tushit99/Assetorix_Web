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

const Page1 = () => {
    return (
        <>
            <Box
                w={"full"}
                h={"95vh"}
                backgroundImage={
                    "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
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
                        textAlign={"left"}
                        textShadow={"#000000 3px 4px 20px"}
                        fontSize={useBreakpointValue({ base: "5xl", md: "6xl" })}
                    >
                        "I Think" to "I Own"
                        {/* Want I Think to I Own Status ? */}
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
                                    w={"60%"}
                                    marginLeft={"2px"}
                                    placeholder={"Search locality, landmark, project or builder"}
                                    color={"black"}
                                    fontSize={"lg"}
                                    _active={{ border: "0px", outline: "0px" }}
                                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                    fontWeight={400}
                                    backgroundColor={"white"}
                                    borderradius={0}
                                />
                            </div>
                            <div>
                                <Button
                                    w={"170px"}
                                    borderradius={"4px"}
                                    _hover={{ color: "white" }}
                                    fontSize={"lg"}
                                    color={"white"}
                                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                    backgroundColor={"rgb(114,154,191)"}
                                    border={"1px solid black"}
                                >
                                    Buy Property
                                </Button>
                                <Button
                                    w={"170px"}
                                    borderradius={"4px"}
                                    color={"white"}
                                    _hover={{ color: "white" }}
                                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                    fontSize={"lg"}
                                    backgroundColor={"rgb(94, 174, 248)"}
                                    border={"1px solid black"}
                                >
                                    Sale Property
                                </Button>
                                <Button
                                    w={"170px"}
                                    borderradius={"4px"}
                                    color={"white"}
                                    _hover={{ color: "white" }}
                                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                    fontSize={"lg"}
                                    backgroundColor={"rgb(16, 101, 180)"}
                                    border={"1px solid black"}
                                >
                                    Rent Property
                                </Button>

                                <Select
                                    size="md"
                                    w={"170px"}
                                    backgroundColor={"rgb(46,49,146)"}
                                    color={"white"}
                                    outline={0}
                                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                                    style={{ borderradius: "20px" }}
                                    border={0}
                                >
                                    <option value="delhi" borderradius={0}>
                                        Delhi
                                    </option>
                                    <option value="noida" borderradius={0}>
                                        Noida
                                    </option>
                                </Select>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Page1;
