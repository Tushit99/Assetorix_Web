import React, { useState } from 'react'
import style from "./OfficeSetup.module.css";
import ReadyToMove from './ReadyToMove/ReadyToMove';
import { Box } from '@chakra-ui/react';

const OfficeSetup = () => {
    const [officeOpt, setOfficeOpt] = useState("");

    return (
        <Box >
            <Box display={"flex"} gap={10} justifyContent={"center"} alignItems={"center"} >
                <button value={"Ready to move office space"} onClick={(e) => setOfficeOpt(e.target.value)} className={officeOpt == "Ready to move office space" ? style.setbtn : style.btn} >Ready to move office space</button>
                <button value={"Bare shell office space"} onClick={(e) => setOfficeOpt(e.target.value)} className={officeOpt == "Bare shell office space" ? style.setbtn : style.btn} >Bare shell office space</button>
                <button value={"Co-working office space"} onClick={(e) => setOfficeOpt(e.target.value)} className={officeOpt == "Co-working office space" ? style.setbtn : style.btn} >Co-working office space</button>   
            </Box>

            {officeOpt == "Ready to move office space" && <ReadyToMove />}  

        </Box>
    )
}

export default OfficeSetup;

