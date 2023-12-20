import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";  

const detail = [
  {
    id: 1,
    description: "React Carousel with Server Side Rendering Support – Part 1",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    description:
      "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    description: "React Carousel with Server Side Rendering Support – Part 1",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    description: "React Carousel with Server Side Rendering Support – Part 1",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 6,
    description: "React Carousel with Server Side Rendering Support – Part 1",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 7,
    description:
      "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 8,
    description: "React Carousel with Server Side Rendering Support – Part 2",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 9,
    description: "React Carousel with Server Side Rendering Support – Part 1",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 10,
    description: "React Carousel with Server Side Rendering Support – Part 1",
    headline: "w3js.com - web front-end studio",
    image:
      "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  },
];

const WithStyles = ({ description, headline, image }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box maxW={"1000px"} backgroundColor={"gray.200"}>
      <Carousel responsive={responsive}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div>
        <div>Item 5</div>
        <div>Item 6</div>
        <div>Item 7</div>
        <div>Item 8</div>
        <div>Item 9</div>
        <div>Item 10</div>
      </Carousel>
    </Box>
  );
};

export default WithStyles;
