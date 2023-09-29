import { Box, Heading } from '@chakra-ui/react';
import React, { useState } from 'react';
import style from "../RentComercial.module.css";
import WareHouse from './WareHouseRent/WareHouse';
import ColdStorageRent from './ColdStorageRent/ColdStorageRent';



const StorageRent = () => {
    const [storageName, setStorageName] = useState("");

    return (
        <Box >
            <Box textAlign={"left"} >
                <Heading as={"h4"} size={"sm"} margin={"10px 0"}>
                    What kind of storage is it?
                </Heading>
                <Box display={"flex"} gap={4}  >
                    <button value={"Ware House"} className={storageName == "Ware House" ? style.setbtn : style.btn} onClick={(e) => setStorageName(e.target.value)} > Ware House </button>
                    <button value={"Cold Storage"} className={storageName == "Cold Storage" ? style.setbtn : style.btn} onClick={(e) => setStorageName(e.target.value)} > Cold Storage </button>
                </Box>
            </Box>

            {storageName == "Ware House" && <WareHouse />}

            {storageName == "Cold Storage" && <ColdStorageRent />}

        </Box>
    )
}

export default StorageRent;
