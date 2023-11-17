import { Box } from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3, 
    };
    return (
      <Box backgroundColor={"transparent"}> 
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div> 
            <img src="https://t4.ftcdn.net/jpg/00/83/13/71/360_F_83137163_meiv7XtUpGvoynM45koimiZTl6DJZ1fB.jpg" alt="imageijsv" />
          </div>
          <div>
            <img src="https://t4.ftcdn.net/jpg/00/83/13/71/360_F_83137163_meiv7XtUpGvoynM45koimiZTl6DJZ1fB.jpg" alt="imageijsv" />
          </div>
          <div>
            <img src="https://t4.ftcdn.net/jpg/00/83/13/71/360_F_83137163_meiv7XtUpGvoynM45koimiZTl6DJZ1fB.jpg" alt="imageijsv" />
          </div>
          <div>
            <img src="https://t4.ftcdn.net/jpg/00/83/13/71/360_F_83137163_meiv7XtUpGvoynM45koimiZTl6DJZ1fB.jpg" alt="imageijsv" />
          </div>
          <div>
            <img src="https://t4.ftcdn.net/jpg/00/83/13/71/360_F_83137163_meiv7XtUpGvoynM45koimiZTl6DJZ1fB.jpg" alt="imageijsv" />
          </div>
          <div>
            <img src="https://t4.ftcdn.net/jpg/00/83/13/71/360_F_83137163_meiv7XtUpGvoynM45koimiZTl6DJZ1fB.jpg" alt="imageijsv" />
          </div> 
        </Slider>
      </Box>
    );
  }
}