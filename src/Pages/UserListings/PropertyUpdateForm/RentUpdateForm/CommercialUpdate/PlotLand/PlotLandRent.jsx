import { Box, Heading } from '@chakra-ui/react';
import style from "../RentComercial.module.css"; 
import React, { useState } from 'react' 
import CommercialLandRent from './CommercialLandRent/CommercialLandRent';
import AgriculturalLandRent from './AgriculturalLand/AgriculturalLandRent';
import IndustrialLand from './IndustrialLand/IndustrialLand';


const PlotLandRent = () => {
    const [plotType, setPlotType] = useState("");

    return (
        <div>
            <Box className={style.optional_box}>  
                <Heading size={"md"}>
                    What kind of plot / land is it ?
                </Heading>  
                <Box>  
                    <button value={"Commercial Land / lnst. Land"} className={plotType == "Commercial Land / lnst. Land" ? style.setbtn : style.btn} onClick={(e) => setPlotType(e.target.value)} >
                        Commercial Land/lnst. Land
                    </button>
                    <button value={"Agricultural / Farm Land"} className={plotType == "Agricultural / Farm Land" ? style.setbtn : style.btn} onClick={(e) => setPlotType(e.target.value)} >
                        Agricultural/Farm Land
                    </button>
                    <button value={"Industrial Lands / Plots"} className={plotType == "Industrial Lands / Plots" ? style.setbtn : style.btn} onClick={(e) => setPlotType(e.target.value)} >
                        Industrial Lands/Plots
                    </button>
                </Box> 

                 {plotType == "Commercial Land / lnst. Land" && <CommercialLandRent />} 
 
                 {plotType == "Agricultural / Farm Land" && <AgriculturalLandRent />}  
                 
                 {plotType == "Industrial Lands / Plots" && <IndustrialLand />}  

            </Box>
        </div>
    )
}

export default PlotLandRent; 

