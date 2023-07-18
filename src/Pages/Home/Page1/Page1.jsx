import React from "react";
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue, 
    Input,
    Select,
} from "@chakra-ui/react";
import style from "./Page1.module.css";

const Page1 = () => {
    return (
        <Flex
            w={"full"}
            h={"90vh"}
            backgroundImage={
                "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"center center"}
        >
            <VStack
                w={"full"}
                justify={"center"}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            >
                <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
                    <Text
                        color={"white"}
                        fontWeight={700} 
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
                    >
                        Agents. Tours. Home Loans. Homes.
                    </Text>
                    <Stack direction={"row"}>
                        <Button bg={"rgb(245,101,101)"} rounded={"full"} color={"white"}>
                            Show me more
                        </Button>
                        <Button
                            bg={"whiteAlpha.300"}
                            rounded={"full"}
                            color={"white"}
                            _hover={{ bg: "whiteAlpha.500" }}
                        >
                            Show me more
                        </Button>
                    </Stack>
                </Stack>
                <div className={style.fields}>
                    <div >
                        <Button
                            w={"140px"}
                            borderRadius={"4px"}
                            _hover={{ color: "white" }}
                            color={"white"}
                            backgroundColor={"rgb(245,101,101)"}
                            border={"1px solid black"}
                        >
                            Buy Property
                        </Button>
                        <Button
                            w={"140px"}
                            borderRadius={"4px"}
                            color={"white"}
                            _hover={{ color: "white" }}
                            backgroundColor={"rgb(11,32,51)"}
                            border={"1px solid black"}
                        >
                            Rent Property
                        </Button>
                    </div>
                    <div alignItems='center' gap={"2px"} >
                        <Select
                            size="md"
                            w={"174px"}
                            backgroundColor={"white"}
                            color={"black"}
                            outline={0}
                            borderRadius={0}
                            border={0}
                        > 
                            <option value="Residential" borderRadius={0} >Residential</option>
                            <option value="Commercial" borderRadius={0} > Commercial</option>
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
                            borderRadius={0}
                        />
                    </div>
                </div>
            </VStack>
        </Flex>
    );
};

export default Page1;
