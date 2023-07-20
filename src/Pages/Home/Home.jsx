import React from "react";
import Page1 from "./Page1/Page1";
import Page2 from "./Page2/Page2";
import House from "./House/House";
import { ImArrowUp2, ImArrowDown2 } from "react-icons/im";

const Home = () => {

  // scrole to top 
  
  return (
    <div>
      {/* page1 top section  */}
      <Page1 />
      {/* page1 2 section */}
      <Page2 />
      {/* House */}
      <House />
      {/* product Slider  */}

      {/* top buttom button */} 

    </div>
  );
};

export default Home;
