import { Box, Grid, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./Page2.module.css";
import { useSelector } from "react-redux";  

const Page2 = () => {
  const { country } = useSelector((state) => state.gloalval);


  return (
    <div> 
      {country == "usa" ?
        <Box backgroundColor={"rgb(255, 255, 255)"} padding={"30px"}>
          <Heading as="h5" size="sm"> 
            DISCOVER YOUR PROPERTY IN
          </Heading> 
          <Heading as="h3" size="xl">
            POPULAR NORTH AMERICAN CITIES
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
        :
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
            <Link >DELHI</Link>
            <Link >GURUGRAM</Link>
            <Link > NOIDA </Link>
            <Link >MUMBAI</Link>
            <Link >BANGALORE</Link>
            <Link >KOLKATA</Link>
          </Grid>
        </Box>
      }
    </div>
  );
};

export default Page2;
