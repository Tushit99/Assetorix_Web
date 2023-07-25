import React from 'react';  
import style from "./Developer.module.css";  
import { Box } from '@chakra-ui/react';  
import raheja from "./raheja-developers.png"; 
import omaxe from "./omaxe.jpg"; 
import dlf from "./dlf.png";  
import m3m from "./m3m.png"; 
import trump from "./trump.png"; 
import cetral from "./CentralPark.jpg"; 
import adani from "./adani.jpg"; 
import pioneer from "./medium.webp"; 
import mahindra from "./Mahindra.png"; 
import ireo from "./ireo.jpeg"; 
import soba from "./Sobha_Developers_Ltd._Corporate_Logo.jpg"
import goorej from "./goorej.jpg"; 
import Emaar from "./Emaar.png"; 
import shapoourji from "./Shapoorji.png"; 


const TopDevelopers = () => {
  return (
    <div className={style.top_dev} >
        <h1> Top Developers </h1> 
        <div className={style.devloper}>
            <Box>
              <img src={dlf} alt="dlfimg" />    
            </Box>  
            <Box padding={"40px"}> 
              <img src={m3m} alt="" />    
            </Box>  
            <Box>
                <img src={goorej} alt="goorejimg" />
            </Box>
            <Box>
                <img src={shapoourji} alt="goorejimg" />
            </Box>
            <Box>
                <img src={Emaar} alt="goorejimg" />
            </Box>
            <Box>
             <img src={raheja} alt="rahejaimgs" />    
            </Box> 
            <Box>
              <img src={omaxe} alt="" />  
            </Box>  
            <Box>
              <img src={mahindra} alt="" />    
            </Box>
            <Box>
              <img src={ireo} alt="" />    
            </Box>
            
            <Box>
              <img src={trump} alt="" />    
            </Box>
            <Box>
              <img src={cetral} alt="" />    
            </Box>
            <Box>
              <img src={adani} alt="" />    
            </Box> 
            <Box>
              <img src={pioneer} alt="" />    
            </Box>
            <Box padding={"40px"}>
              <img src={soba} alt="" />    
            </Box>
        </div> 
        <button>SEE ALL</button>
    </div>
  )
}

export default TopDevelopers