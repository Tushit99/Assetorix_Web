import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import style from "./Page2.module.css";
import noida from "../homeImage/noida.jpg";  

const Page2 = () => {
  return (
    <div>
      <Box backgroundColor={"rgb(240,239,237)"} padding={"30px"}>
        <Heading as="h5" size="sm">
          DISCOVER YOUR PROPERTY IN
        </Heading>
        <Heading as="h3" size="xl">
          POPULAR INDIAN CITIES
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
          <Link to={"/delhi"}>DELHI</Link>
          <Link to={"/gurugram"}>GURUGRAM</Link>
          <Link to={"/noida"}> NOIDA </Link>
          <Link to={"/mumbai"}>MUMBAI</Link>
          <Link to={"/bangalore"}>BANGALORE</Link>
          <Link to={"/pune"}>KOLKATA</Link>
        </Grid>
      </Box> 
      {/* amarican */}
      <Box backgroundColor={"rgb(240,239,237)"} padding={"30px"}>
        <Heading as="h5" size="sm">
          DISCOVER YOUR PROPERTY IN
        </Heading>
        <Heading as="h3" size="xl">
          POPULAR NORTH AMARICAN CITIES
        </Heading>
        <Grid
          className={style.box3}
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          padding={"20px 0"}
        >
          <Link to={"#"}>NEW YORK</Link>
          <Link to={"#"}> NEW JERSY </Link>
          <Link to={"#"}> MIAMI </Link>
        </Grid>
      </Box>
    </div>
  );
};

export default Page2;
