import React from 'react';
import style from "./Sell.module.css";  
import img from "./download.jpg"; 
import { Box, Button, Checkbox, Heading, Input, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';

const Sell = () => {
    return (
        <div className={style.sell}>
            <div>
                <Heading as={"h2"} size={"lg"}>Sell or rent your property faster on Assetorix.com </Heading>  
                <img src={img} alt="img" />
            </div>
            <div>
                <Heading as={"h2"} size={"lg"}> Start posting your property , it's free </Heading>
                <Heading as={"h5"} size={"xs"} textAlign={"left"} fontWeight={"400"} >Add Basic Details</Heading>
                <Heading as={"h5"} size={"sm"} textAlign={"left"} fontWeight={"600"} > You're looking to ... </Heading>
                <Tabs
                    variant='soft-rounded'
                    padding={"10px 0 0 0"}
                    boxShadow={"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}
                    margin={"10px 0"} 
                    borderRadius={6}
                    colorScheme='twitter' >
                    <TabList margin={"0 20px"}>
                        <Tab>Sell</Tab>
                        <Tab>Rent/Lease</Tab>
                        <Tab>PG</Tab>
                    </TabList>
                    <TabPanels>
                        {/* sell options */}
                        <TabPanel>
                            <Box className={style.grid}>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Flat/Apartment
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Independent House/villa
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Independent/builder Floor
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Serviced Apartment
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Plot/Land
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    1 RK/ Studio Apartment
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Farmhouse
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    other
                                </Checkbox>
                            </Box>
                        </TabPanel>
                        {/* rent options */}
                        <TabPanel>
                            <Box className={style.grid}>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Flat/Apartment
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Independent House/villa
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Independent/builder Floor
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Serviced Apartment
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    1 RK/ Studio Apartment
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Farmhouse
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    other
                                </Checkbox>
                            </Box>
                        </TabPanel>
                        {/* PG options */}
                        <TabPanel>
                            <Box className={style.grid}>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Flat/Apartment
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Independent House/villa
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Independent/builder Floor
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    Serviced Apartment
                                </Checkbox>
                                <Checkbox iconSize={"0px"} colorScheme={"blue"}>
                                    1 RK/ Studio Apartment
                                </Checkbox>
                            </Box>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Heading as={"h3"} size={"md"} textAlign={"left"} fontWeight={500} margin={"0 0 10px 0"} >Your contact detail for the tenants to reach you</Heading>
                <Input type='number' placeholder={"Phone Number"} maxLength={"12"} />
                <Text>Are you a registered user? Login</Text> 
                {/* Start Button */}
                <Button 
                w={"100%"} 
                backgroundColor={"rgb(46,49,146)"} 
                color={"white"} 
                borderRadius={0} 
                _hover={{ backgroundColor: "rgb(46,49,146)" }} 
                margin={"6px 0 0 0"}>Start Now</Button>
            </div>
        </div>
    )
}

export default Sell;  
