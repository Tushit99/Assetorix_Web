import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import style from "./Page2.module.css";
import { Link } from "react-router-dom";

const Page2 = () => {
    return (
        <Box backgroundColor={"rgb(240,239,237)"} padding={"30px"}>
            <Heading as="h5" size="sm">
                DISCOVER YOUR PROPERTY IN
            </Heading>
            <Heading as="h3" size="xl" >
                POPULAR CITIES
            </Heading>
            <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={6} padding={"20px 0"}>
                <Link to={"/noida"}>
                    <GridItem
                        w="100%"
                        padding={"60px"}
                        backgroundColor={"rgb(174, 174, 174)"}
                        borderRadius={"10px"}
                    >
                        NOIDA
                    </GridItem>
                </Link>
                <Link to={"/gurugram"}>
                    <GridItem
                        w="100%"
                        padding={"60px"}
                        backgroundColor={"rgb(174, 174, 174)"}
                        borderRadius={"10px"}
                    >
                        GURUGRAM
                    </GridItem>
                </Link>
                <Link to={"/delhi"}> 
                    <GridItem
                        w="100%"
                        padding={"60px"}
                        backgroundColor={"rgb(174, 174, 174)"}
                        borderRadius={"10px"}
                    >
                        DELHI
                    </GridItem>
                </Link>
                <Link to={"/mumbai"}>
                    <GridItem
                        w="100%"
                        padding={"60px"}
                        backgroundColor={"rgb(174, 174, 174)"}
                        borderRadius={"10px"}
                    >
                        MUMBAI
                    </GridItem>
                </Link>
                <Link to={"/bangalore"}>
                    <GridItem
                        w="100%"
                        padding={"60px"}
                        backgroundColor={"rgb(174, 174, 174)"}
                        borderRadius={"10px"}
                    >
                        BANGALORE
                    </GridItem>
                </Link>
                <Link to={"/pune"}>
                    <GridItem
                        w="100%"
                        padding={"60px"}
                        backgroundColor={"rgb(174, 174, 174)"}
                        borderRadius={"10px"}
                    >
                        PUNE
                    </GridItem>
                </Link>
            </Grid>
        </Box>
    );
};

export default Page2;
