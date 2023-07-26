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

// amaricon 
import baine from "./amaricon/baine.jpeg"; 
import vanco from "./amaricon/vanco.png"; 
import beacon from "./amaricon/beacon.webp"; 
import omar from "./amaricon/omar.jpg";  
import martin from "./amaricon/martin.jpg"; 
import perfect from "./amaricon/perfect.png"; 
import randr from "./amaricon/randr.webp"; 
import cmm from "./amaricon/cmm.jpg"; 


const TopDevelopers = () => {
  return ( 
    <div>
      <div className={style.top_dev} >
        <h1> TOP DEVELOPERS IN INDIA </h1>
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
      <div className={style.top_dev} >
        <h1> TOP DEVELOPERS IN AMERICA (EAST COAST) </h1>
        <div className={style.devloper}>
          <Box>
            <img src={baine} alt="baineimg" />
          </Box> 
          <Box>
            <img src={vanco} alt="vancoimg" />
          </Box> 
          <Box>
            <img src={beacon} alt="beaconimg" />
          </Box> 
          <Box>
            <img src={omar} alt="omarimg" />
          </Box> 
          <Box>
            <img src={martin} alt="martinimg" />
          </Box> 
          <Box>
            <img src={perfect} alt="perfectimg" />
          </Box> 
          <Box>
            <img src={randr} alt="randrimg" />
          </Box> 
          <Box>
            <img src={cmm} alt="cmmimg" />
          </Box> 
        </div>
        <button className={style.seeall}>SEE ALL</button> 
      </div>
    </div>
  )
}

export default TopDevelopers