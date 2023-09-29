import { Box, Heading } from '@chakra-ui/react';
import React, { useState } from 'react'
import style from "../../SellForm.module.css";  
import CommercialShop from './Retail/CommercialShop/CommercialShop';
import CommercialShowroom from './Retail/CommercialShowroom/CommercialShowroom';

const Retail = () => { 
    const [retailSpaceAvailable, setretailSpaceAvailable] = useState("");  

  return (
    <Box textAlign={"left"}>
        <Heading  size={"md"} > What type of retail space do you have ? </Heading>  
        <button value={"Commercial Shops"} style={{margin:"10px"}} className={retailSpaceAvailable=="Commercial Shops" ? style.setbtn : style.btn} onClick={(e)=>setretailSpaceAvailable(e.target.value)} > Commercial Shops</button> 
        <button value={"Commercial Showrooms"} style={{margin:"10px"}} className={retailSpaceAvailable=="Commercial Showrooms" ? style.setbtn : style.btn} onClick={(e)=>setretailSpaceAvailable(e.target.value)} > Commercial Showrooms</button> 

        {retailSpaceAvailable == "Commercial Shops" && <CommercialShop />} 

        {retailSpaceAvailable == "Commercial Showrooms" && <CommercialShowroom />}  

    </Box>
  )
}  

export default Retail; 

