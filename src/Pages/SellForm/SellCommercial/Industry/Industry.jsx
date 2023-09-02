import React, { useState } from 'react'
import Factory from './Factory/Factory';
import Manufacture from './Manufacture/Manufacture'; 
import style from "./Industry.module.css"; 
import { Box, Heading } from '@chakra-ui/react';

const Industry = () => {
  const [industry, setindustry] = useState("");

    return (
        <Box >
            <Box textAlign={"left"} >
                <Heading as={"h4"} size={"sm"} margin={"10px 0"}>
                    What kind of storage is it?
                </Heading>
                <Box display={"flex"} gap={4}  >
                    <button value={"Factory"} className={industry == "Factory" ? style.setbtn : style.btn} onClick={(e) => setindustry(e.target.value)} > Factory </button>
                    <button value={"Manufacturing"} className={industry == "Manufacturing" ? style.setbtn : style.btn} onClick={(e) => setindustry(e.target.value)} > Manufacturing </button>
                </Box>
            </Box>

            {industry == "Factory" && <Factory />}

            {industry == "Manufacturing" && <Manufacture /> } 

        </Box>
    )
} 

export default Industry