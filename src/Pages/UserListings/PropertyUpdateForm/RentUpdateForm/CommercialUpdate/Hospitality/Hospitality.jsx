import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import style from "../RentComercial.module.css";
import HotelResortRent from './HotelResort/HotelResort';
import GuestBanquetRent from './GuestBanquet/GuestBanquet';

const HospitalityRent = () => {
    const [type, setType] = useState("");

    return (
        <div>
            <Box display={"flex"} flexWrap={"wrap"} gap={4} >
                <button value={"Hotel/Resorts"} className={type == "Hotel/Resorts" ? style.setbtn : style.btn} onClick={(e) => setType(e.target.value)} >Hotel/Resorts</button>
                <button value={"Guest-House/Banquet-Halls"} className={type == "Guest-House/Banquet-Halls" ? style.setbtn : style.btn} onClick={(e) => setType(e.target.value)} >Guest-House/Banquet-Halls</button>
            </Box>

            {type == "Hotel/Resorts" && <HotelResortRent />}

            {type == "Guest-House/Banquet-Halls" && <GuestBanquetRent />}

        </div>
    )
}

export default HospitalityRent;
