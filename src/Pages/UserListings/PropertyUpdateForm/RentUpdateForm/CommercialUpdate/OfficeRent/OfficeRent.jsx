import React, { useState } from 'react'
import style from "../RentComercial.module.css";
import { Box, Heading } from '@chakra-ui/react';
import ReadyMove from './ReadyMove/ReadyMove';
import BareShell from './BareShellOffice/BareShell';
import Coworkingspace from './Coworkingspace/Coworkingspace';



const OfficeRent = () => {
  const [officeOpt, setOfficeOpt] = useState("");

  return (
    <Box >
      <Heading size={"md"} margin={"10px 0 14px 0"} textAlign={"left"} >
        What kind of office is it ?
      </Heading>
      <Box display={"flex"} gap={10} justifyContent={"left"} alignItems={"center"} >
        <button value={"Ready to move office space"} onClick={(e) => setOfficeOpt(e.target.value)} className={officeOpt == "Ready to move office space" ? style.setbtn : style.btn} >Ready to move office space</button>
        <button value={"Bare shell office space"} onClick={(e) => setOfficeOpt(e.target.value)} className={officeOpt == "Bare shell office space" ? style.setbtn : style.btn} >Bare shell office space</button>
        <button value={"Co-working office space"} onClick={(e) => setOfficeOpt(e.target.value)} className={officeOpt == "Co-working office space" ? style.setbtn : style.btn} >Co-working office space</button>
      </Box>

      <Box>

        {officeOpt == "Ready to move office space" && <ReadyMove />}

        {officeOpt == "Bare shell office space" && <BareShell />}  

      

         {/* {officeOpt == "Co-working office space" && <Coworkingspace /> } */}

      </Box>
    </Box>
  )
}


export default OfficeRent;


