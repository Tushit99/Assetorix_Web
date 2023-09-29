import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';  
import HotelResort from './HotelResort/HotelResort'; 
import style from "./Hospitality.module.css";  
import GuestBanquet from './GuestBanquet/GuestBanquet';

const Hospitality = () => { 
    const [type, setType] = useState("");

    return (
        <div> 
            <Box display={"flex"} flexWrap={"wrap"} gap={4} > 
                <button value={"Hotel/Resorts"} className={type=="Hotel/Resorts" ? style.setbtn : style.btn} onClick={(e) => setType(e.target.value)} >Hotel/Resorts</button>
                <button value={"Guest-House/Banquet-Halls"} className={type=="Guest-House/Banquet-Halls" ? style.setbtn : style.btn} onClick={(e) => setType(e.target.value)} >Guest-House/Banquet-Halls</button>
            </Box>  

            {type == "Hotel/Resorts" && <HotelResort />}

            {type == "Guest-House/Banquet-Halls" && <GuestBanquet />} 

        </div> 
    )
}

export default Hospitality;

