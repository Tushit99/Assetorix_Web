import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import style from "./Page2.module.css";
import noida from "../homeImage/noida.jpg";

const Page2 = () => {
  return (
    <Box backgroundColor={"rgb(240,239,237)"} padding={"30px"}>
      <Heading as="h5" size="sm">
        DISCOVER YOUR PROPERTY IN
      </Heading>
      <Heading as="h3" size="xl">
        POPULAR CITIES
      </Heading>
      <Grid
        className={style.box} 
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
        padding={"20px 0"}
      >
        <Link to={"/noida"}> NOIDA </Link>
        <Link to={"/gurugram"}>GURUGRAM</Link>
        <Link to={"/delhi"}>DELHI</Link>
        <Link to={"/mumbai"}>MUMBAI</Link>
        <Link to={"/bangalore"}>BANGALORE</Link>
        <Link to={"/pune"}>PUNE</Link>
      </Grid>
    </Box>
  );
};

export default Page2;
