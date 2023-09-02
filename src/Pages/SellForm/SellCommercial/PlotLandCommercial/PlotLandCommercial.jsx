import { Box, Heading } from '@chakra-ui/react';
import style from "./PlotLandCommercial.module.css";
import React, { useState } from 'react'
import CommercialLand from './CommercialLand/CommercialLand';
import AgricalturalFarm from './AgricalturalFarm/AgricalturalFarm';

const PlotLandCommercial = () => {
    const [plotType, setPlotType] = useState("");

    return (
        <div>
            <Box>
                <Heading size={"md"}>
                    What kind of plot / land is it?
                </Heading>
                <Box>
                    <button value={"Commercial Land / lnst. Land"} className={plotType == "Commercial Land / lnst. Land" ? style.setbtn : style.btn} onClick={(e) => setPlotType(e.target.value)} >
                        Commercial Land/lnst. Land
                    </button>
                    <button value={"Agricultural x/ Farm Land"} className={plotType == "Agricultural / Farm Land" ? style.setbtn : style.btn} onClick={(e) => setPlotType(e.target.value)} >
                        Agricultural/Farm Land
                    </button>
                    <button value={"Industrial Lands / Plots"} className={plotType == "Industrial Lands / Plots" ? style.setbtn : style.btn} onClick={(e) => setPlotType(e.target.value)} >
                        Industrial Lands/Plots
                    </button>
                </Box>

                {plotType == "Commercial Land / lnst. Land" && <CommercialLand />}

                {plotType == "Agricultural x/ Farm Land" && <AgricalturalFarm />}  
                 
                

            </Box>
        </div>
    )
}

export default PlotLandCommercial;
