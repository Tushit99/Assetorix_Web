import { Box, Heading } from '@chakra-ui/react'; 
import style from "../RentComercial.module.css"; 
import React, { useState } from 'react'; 
import CommercialShopRent from './CommercialShopRent/CommercialShopRent';
import CommercialShowRoomRent from './CommercialShowRoomRent/CommercialShowRoomRent';

const RetailRent = () =>{ 
    const [retailSpaceAvailable, setretailSpaceAvailable] = useState("");   

  return (
    <Box textAlign={"left"}>
        <Heading  size={"md"} > What type of retail space do you have ? </Heading>  
        <button value={"Commercial Shops"} style={{margin:"10px"}} className={retailSpaceAvailable=="Commercial Shops" ? style.setbtn : style.btn} onClick={(e)=>setretailSpaceAvailable(e.target.value)} > Commercial Shops</button> 
        <button value={"Commercial Showrooms"} style={{margin:"10px"}} className={retailSpaceAvailable=="Commercial Showrooms" ? style.setbtn : style.btn} onClick={(e)=>setretailSpaceAvailable(e.target.value)} > Commercial Showrooms</button> 
  
        {retailSpaceAvailable == "Commercial Shops" && <CommercialShopRent />}  

        {retailSpaceAvailable == "Commercial Showrooms" && <CommercialShowRoomRent />} 

    </Box>
  )
}  

export default RetailRent  


