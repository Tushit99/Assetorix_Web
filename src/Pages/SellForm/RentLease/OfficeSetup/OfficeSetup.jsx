import React, { useState } from 'react'
import style from "./OfficeSetup.module.css";
import { Box } from '@chakra-ui/react'; 
import ReadyToMove from './ReadyToMove/ReadyToMove';
import Bareshellspace from './Bareshellspace/Bareshellspace';
import CoWorkingspace from './CoWorkingspace/CoWorkingspace';

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

            {officeOpt == "Bare shell office space" && <Bareshellspace />}    

            {officeOpt =="Co-working office space" && <CoWorkingspace /> }


        </Box>
    )
}

export default OfficeSetup;

