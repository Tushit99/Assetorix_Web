import { Avatar, Badge, Box, Button } from "@chakra-ui/react";
import { Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import style from "./WithStyles.module.css";   
import {useNavigate } from "react-router-dom";
import DetailBox from "./DetailBox";


const WithStyles = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchdata = async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_URL}/leadForm/all`)
        .then((e) => {
          console.log(e.data.data);
          setData(e.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }; 
  const handlequerypage = ()=>{
    navigate("/query")
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <Box position={"relative"} className={style.topbox}>
      <Heading > Query by Other Users </Heading> 
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={5000}
        centerMode={false} 
        draggable
        focusOnSelect={false}  
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false} 
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            // partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            // partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            // partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        // showDots={"false"}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data.map((e) => (
          <Box key={e._id} className={style.mapbox}>
            <Box flex={1} className={`${style.placeCenter}`}>
              <Avatar size="md" name={e.name} />
            </Box> 
            <Box textAlign={"left"} flex={3}>
              <Heading size={"md"} as={"h2"}>
                {e.name}
              </Heading>
              <Text
                fontsize={"md"}
                display={e.propertyType == "None" ? "none" : "block"}
              >
                <strong>Property Type:</strong> {e.propertyType}
              </Text>
              <Text fontsize={"lg"} className={style.desbox}>
                <strong>Requirement:</strong> {e.description}
              </Text>
              <Badge
                variant="solid"
                colorScheme={
                  e.formType == "Rent"
                    ? "red"
                    : e.formType == "Sell"
                    ? "green"
                    : "blue"
                }
                fontWeight={"extrabold"}
                fontSize="0.8em"
                className={style.placeTop}
              >
                {e.formType}
              </Badge>
            </Box> 
            <DetailBox /> 
          </Box>
        ))}
      </Carousel> 
      <Box display={"flex"} alignItems={"center"} justifyContent={"right"}>
        <Button variant={"outline"} colorScheme="blue" onClick={handlequerypage} >
          Browse More
        </Button>
      </Box>
    </Box>
  );
};

export default WithStyles;
