import React, { useState } from 'react' 
import style from "../RentComercial.module.css"; 
import { Box, Heading } from '@chakra-ui/react';
import FactoryRent from './Factory/FactoryRent';
import ManufactureRent from './Manufacture/ManufactureRent';

const IndustryRent = () => {
    const [industry, setindustry] = useState("");

    return (
        <Box >
            <Box textAlign={"left"} >
                <Heading as={"h4"} size={"sm"} margin={"10px 0"}>
                    What kind of industry is it?
                </Heading>
                <Box display={"flex"} gap={4}  >
                    <button value={"Factory"} className={industry == "Factory" ? style.setbtn : style.btn} onClick={(e) => setindustry(e.target.value)} > Factory </button>
                    <button value={"Manufacturing"} className={industry == "Manufacturing" ? style.setbtn : style.btn} onClick={(e) => setindustry(e.target.value)} > Manufacturing </button>
                </Box>
            </Box>

            {industry == "Factory" && <FactoryRent />}

            {industry == "Manufacturing" && <ManufactureRent />}

        </Box>
    )
}

export default IndustryRent; 

