import {useEffect, useState } from "react";
import style from "./SellForm.module.css";
import {
    Box, 
    Heading, 
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs, 
} from "@chakra-ui/react"; 
import FlatAppartment from "./FlatAppartment/FlatAppartment";
import IndependentHouse from "./IndependentHouse/IndependentHouse";
import Independentbuilder from "./Independentbuilder/Independentbuilder";
import ServicedApartment from "./ServicedApartment/ServicedApartment";
import RKStudio from "./RKStudio/RKStudio";
import FarmHouse from "./FarmHouse/FarmHouse";
import PlotLand from "./PlotLand/PlotLand";

const SellForm = () => {
    const [look, setlook] = useState("");
    const [type, settype] = useState(""); 
    const [typeofplace, setTypeOf] = useState(""); 

    const handlechange = (type, look) => {
        settype(type);
        setlook(look);
    };   

    useEffect(()=>{
        settype("sell"); 
        setlook("Flat/Apartment"); 
    },[])


    return (
        <div className={style.post_property}>
            <Box>
                {/* Property Type (what type of property) */}
                <Box>
                    <Heading as={"h1"} size={"xl"} fontWeight={400}>

                        Fill out basic details
                    </Heading>
                    <Heading textAlign={"left"} margin={"20px 0"} as={"h4"} size={"sm"}>
                        I am looking to
                    </Heading>
                    <Tabs variant="unstyled">
                        <TabList gap={3} margin={"0 20px"}>
                            <Tab
                                _selected={{
                                    bg: "blue.50",
                                    border: "1px solid rgba(85, 91, 255, 0.236)",
                                    borderRadius: "18px",
                                }} 
                            >
                                Sell
                            </Tab>
                            <Tab
                                _selected={{
                                    bg: "blue.50",
                                    border: "1px solid rgba(85, 90, 255, 0.236)",
                                    borderRadius: "18px",
                                }}
                            >
                                Rent/Lease
                            </Tab>
                            <Tab
                                _selected={{
                                    bg: "blue.50",
                                    border: "1px solid rgba(85, 90, 255, 0.236)",
                                    borderRadius: "18px",
                                }}
                            >
                                PG
                            </Tab>
                        </TabList>
                        <Heading textAlign={"left"} margin={"20px 0"} as={"h3"} size={"md"}>
                            What kind of Property do you have?
                        </Heading>
                        <TabPanels>
                            {/* sell options */}
                            <TabPanel>
                                <Tabs variant="unstyled">
                                    <TabList>
                                        <Tab
                                            _selected={{
                                                bg: "blue.50",
                                                border: "1px solid rgba(85, 91, 255, 0.236)",
                                                borderRadius: "18px",
                                            }}
                                        >
                                            Residential
                                        </Tab>
                                        <Tab
                                            _selected={{
                                                bg: "blue.50",
                                                border: "1px solid rgba(85, 91, 255, 0.236)",
                                                borderRadius: "18px",
                                            }} 
                                            onClick={()=>setTypeOf("Commercial")}
                                        >
                                            Commercial
                                        </Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <Box className={style.grid}>
                                                <button
                                                    onClick={() => handlechange("sell", "Flat/Apartment")}
                                                    className={
                                                        look === "Flat/Apartment" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Flat/Apartment
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("sell", "Independent House/villa")
                                                    }
                                                    className={
                                                        look === "Independent House/villa" &&
                                                            type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Independent House/villa
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("sell", "Independent/builder Floor")
                                                    }
                                                    className={
                                                        look === "Independent/builder Floor" &&
                                                            type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Independent/builder Floor
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("sell", "Serviced Apartment")
                                                    }
                                                    className={
                                                        look === "Serviced Apartment" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Serviced Apartment
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Plot/Land")}
                                                    className={
                                                        look === "Plot/Land" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Plot/Land
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("sell", "1 RK/ Studio Apartment")
                                                    }
                                                    className={
                                                        look === "1 RK/ Studio Apartment" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    1 RK/ Studio Apartment
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Farmhouse")}
                                                    className={
                                                        look === "Farmhouse" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Farmhouse
                                                </button>
                                            </Box>
                                        </TabPanel>
                                        <TabPanel>
                                            <Box className={style.grid}>
                                                <button
                                                    onClick={() => handlechange("sell", "Office")}
                                                    className={
                                                        look === "Office" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Office
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Retail")}
                                                    className={
                                                        look === "Retail" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Retail
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Plot/Land")}
                                                    className={
                                                        look === "Plot/Land" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Plot/Land
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Storage")}
                                                    className={
                                                        look === "Storage" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Storage
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Industry")}
                                                    className={
                                                        look === "Industry" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Industry
                                                </button>
                                                <button
                                                    onClick={() => handlechange("sell", "Hospitality")}
                                                    className={
                                                        look === "Hospitality" && type === "sell"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Hospitality
                                                </button>
                                            </Box>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </TabPanel>
                            {/* rent options */}
                            <TabPanel>
                                <Tabs variant="unstyled">
                                    <TabList>
                                        <Tab
                                            _selected={{
                                                bg: "blue.50",
                                                border: "1px solid rgba(85, 91, 255, 0.236)",
                                                borderRadius: "18px",
                                            }}
                                        >
                                            Residential
                                        </Tab>
                                        <Tab
                                            _selected={{
                                                bg: "blue.50",
                                                border: "1px solid rgba(85, 91, 255, 0.236)",
                                                borderRadius: "18px",
                                            }}
                                        >
                                            Commercial
                                        </Tab>
                                    </TabList>
                                    <TabPanels>
                                        <TabPanel>
                                            <Box className={style.grid}>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "Flat/Apartment")
                                                    }
                                                    className={
                                                        look === "Flat/Apartment" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Flat/Apartment
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange(
                                                            "Rent/Lease",
                                                            "Independent House/villa"
                                                        )
                                                    }
                                                    className={
                                                        look === "Independent House/villa" &&
                                                            type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Independent House/villa
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange(
                                                            "Rent/Lease",
                                                            "Independent/builder Floor"
                                                        )
                                                    }
                                                    className={
                                                        look === "Independent/builder Floor" &&
                                                            type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Independent/builder Floor
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "Serviced Apartment")
                                                    }
                                                    className={
                                                        look === "Serviced Apartment" &&
                                                            type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Serviced Apartment
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "Plot/Land")
                                                    }
                                                    className={
                                                        look === "Plot/Land" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Plot/Land
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "1 RK/ Studio Apartment")
                                                    }
                                                    className={
                                                        look === "1 RK/ Studio Apartment" &&
                                                            type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    1 RK/ Studio Apartment
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "Farmhouse")
                                                    }
                                                    className={
                                                        look === "Farmhouse" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Farmhouse
                                                </button>
                                            </Box>
                                        </TabPanel>
                                        <TabPanel>
                                            <Box className={style.grid}>
                                                <button
                                                    onClick={() => handlechange("Rent/Lease", "Office")}
                                                    className={
                                                        look === "Office" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Office
                                                </button>
                                                <button
                                                    onClick={() => handlechange("Rent/Lease", "Retail")}
                                                    className={
                                                        look === "Retail" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Retail
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "Plot/Land")
                                                    }
                                                    className={
                                                        look === "Plot/Land" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Plot/Land
                                                </button>
                                                <button
                                                    onClick={() => handlechange("Rent/Lease", "Storage")}
                                                    className={
                                                        look === "Storage" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Storage
                                                </button>
                                                <button
                                                    onClick={() => handlechange("Rent/Lease", "Industry")}
                                                    className={
                                                        look === "Industry" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Industry
                                                </button>
                                                <button
                                                    onClick={() =>
                                                        handlechange("Rent/Lease", "Hospitality")
                                                    }
                                                    className={
                                                        look === "Hospitality" && type === "Rent/Lease"
                                                            ? style.setbtn
                                                            : style.btn
                                                    }
                                                >
                                                    Hospitality
                                                </button>
                                            </Box>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </TabPanel>
                            {/* PG options */}
                            <TabPanel>
                                <Box className={style.grid}>
                                    <button
                                        onClick={() => handlechange("PG", "Flat/Apartment")}
                                        className={
                                            look === "Flat/Apartment" && type === "PG"
                                                ? style.setbtn
                                                : style.btn
                                        }
                                    >
                                        Flat/Apartment
                                    </button>
                                    <button
                                        onClick={() =>
                                            handlechange("PG", "Independent House/villa")
                                        }
                                        className={
                                            look === "Independent House/villa" && type === "PG"
                                                ? style.setbtn
                                                : style.btn
                                        }
                                    >
                                        Independent House/villa
                                    </button>
                                    <button
                                        onClick={() =>
                                            handlechange("PG", "Independent/builder Floor")
                                        }
                                        className={
                                            look === "Independent/builder Floor" && type === "PG"
                                                ? style.setbtn
                                                : style.btn
                                        }
                                    >
                                        Independent/builder Floor
                                    </button>
                                    <button
                                        onClick={() => handlechange("PG", "Serviced Apartment")}
                                        className={
                                            look === "Serviced Apartment" && type === "PG"
                                                ? style.setbtn
                                                : style.btn
                                        }
                                    >
                                        Serviced Apartment
                                    </button>
                                    <button
                                        onClick={() => handlechange("PG", "1 RK/ Studio Apartment")}
                                        className={
                                            look === "1 RK/ Studio Apartment" && type === "PG"
                                                ? style.setbtn
                                                : style.btn
                                        }
                                    >
                                        1 RK/ Studio Apartment
                                    </button>
                                </Box>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box> 
                
                {/* Flat/Apartment */} 
                { type=="sell" && look=="Flat/Apartment" && <FlatAppartment />} 
                
                {/* Independent House/villa */}
                { type=="sell" && look=="Independent House/villa" && <IndependentHouse />}  
                
                {/* Independent/builder Floor */}  
                {type=="sell" && look=="Independent/builder Floor" && <Independentbuilder />}  


                {/* Serviced Apartment */} 
                {type=="sell" && look=="Serviced Apartment" && <ServicedApartment />}  
                
                {/* 1 RK/ Studio Apartment */} 
                {type=="sell" && look=="1 RK/ Studio Apartment" && <RKStudio /> } 

                 {/* Serviced Apartment */}  
                 {type=="sell" && look=="Farmhouse" && <FarmHouse />} 

                 {/* Plot/Land */} 
                 {type=="sell" && look=="Plot/Land" && <PlotLand /> }

            </Box>
            <Box backgroundColor={"rgb(232, 244, 255)"} borderRadius={10}></Box>
        </div>
    );
};

export default SellForm;
