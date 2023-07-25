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
                <img src={goorej} alt="goorej_img" />
            </Box>
            <Box>
                <img src={shapoourji} alt="shapoourji_img" />
            </Box>
            <Box>
                <img src={Emaar} alt="Emaar_img" />
            </Box>
            <Box>
             <img src={raheja} alt="rahejaimgs" />    
            </Box> 
            <Box>
              <img src={omaxe} alt="omaxe_img" />  
            </Box>  
            <Box>
              <img src={mahindra} alt="mahindra_img" />    
            </Box>
            <Box>
              <img src={ireo} alt="ireo_img" />    
            </Box>
            
            <Box>
              <img src={trump} alt="trump_img" />    
            </Box>
            <Box>
              <img src={cetral} alt="cetral_img" />    
            </Box>
            <Box>
              <img src={adani} alt="adani_img" />    
            </Box> 
            <Box>
              <img src={pioneer} alt="pioneer_img" />    
            </Box>
            <Box padding={"40px"}>
              <img src={soba} alt="soba_img" />  
            </Box> 
        </div> 
        <button className={style.seeall}>SEE ALL</button>
    </div>
  )
}

export default TopDevelopers