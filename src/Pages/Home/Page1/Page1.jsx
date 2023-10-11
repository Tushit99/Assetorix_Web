import React from "react";
import {
  Box,
  Button,
  Text,
  useBreakpointValue,
  Input,
  Select,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Tabs,
  Tab,
  TabPanel,
  TabList,
  TabPanels,
  Checkbox,
} from "@chakra-ui/react";
import style from "./Page1.module.css";
import video from "./assetorix.mp4";
import { Search2Icon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLookingFor } from "../../../Redux/globalval/action";

const Page1 = () => {
  const { country } = useSelector((state) => state.gloalval);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePageRent = () => {
    dispatch(changeLookingFor("Rent/Lease"));
    navigate("/post");
  }

  const handlePageSell = () => {
    dispatch(changeLookingFor("sell"));
    navigate("/post");
  }

  return (
    <div className={style.pagetop}>

      <video autoPlay loop muted className={style.video_panal}>
        <source src={video} type="video/mp4" />
      </video> 
      <Box w={"full"} className={style.topbox}>
        <Text
          color={"white"}
          fontWeight={700}
          lineHeight={1.2} 
          textAlign={"left"}
          marginTop={20}
          className={style.word}
          userSelect={"none"}
          textShadow={"#000000 3px 4px 20px"}
          fontSize={useBreakpointValue({ base: "4xl", md: "6xl" })}
        >
          “I Think” to “I Own”
        </Text>
        <Box w={"100%"}>
          <div className={style.fields}>
            <div>
              {country == "usa" ? (
                <Select
                  size="md"
                  backgroundColor={"#d2ab67cb"}
                  color={"white"}
                  outline={0}
                  fontSize={{ base: "sm", lg: "lg" }}
                  fontWeight={{ base: "500", lg: "bold" }}
                  boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                  style={{ borderradius: "20px" }}
                  className={style.select_city}
                  border={0}
                >
                  <option value="delhi">New York</option>
                  <option value="delhi">New Jersy</option>
                  <option value="delhi">Miami</option>
                </Select>
              ) : (
                <Select
                  size="md"
                  backgroundColor={"#d2ab67cb"}
                  color={"white"}
                  outline={0}
                  fontSize={{ base: "sm", lg: "lg" }}
                  fontWeight={{ base: "500", lg: "bold" }}
                  boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                  style={{ borderradius: "20px" }}
                  className={style.select_city}
                  border={0}
                >
                  <option value="delhi">Delhi</option>
                  <option value="noida">Gurugram</option>
                  <option value="noida">Noida</option>
                  <option value="noida">Mumbai</option>
                  <option value="noida">Bangalore</option>
                  <option value="noida">Kolkata</option>
                </Select>
              )}

              <Popover>
                <PopoverTrigger>
                  <Button
                    backgroundColor={"#d2ab67cb"}
                    color={"white"}
                    fontSize={{ base: "sm", lg: "lg" }}
                    fontWeight={{ base: "500", lg: "bold" }}
                    _hover={{ color: "white" }}
                  >
                    Buy
                  </Button>
                </PopoverTrigger>
                <PopoverContent w={{ base: "320px", md: "400px" }}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Buy Property</PopoverHeader>
                  <PopoverBody>
                    {/* one */}
                    <Tabs variant="enclosed">
                      <TabList>
                        <Tab>Residential</Tab>
                        <Tab>Commercial</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <Box className={style.buy}>
                            <Checkbox iconSize={"0px"} colorScheme={"green"}>
                              Flat/Apartment
                            </Checkbox>
                            <Checkbox iconSize={"0px"} colorScheme={"green"}>
                              Independent House/villa
                            </Checkbox>
                            <Checkbox iconSize={"0px"} colorScheme={"green"}>
                              Independent/builder Floor
                            </Checkbox>
                            <Checkbox iconSize={"0px"} colorScheme={"green"}>
                              Serviced Apartment
                            </Checkbox>
                            <Checkbox iconSize={"0px"} colorScheme={"green"}>
                              Plot/Land
                            </Checkbox>
                            <Checkbox iconSize={"0px"} colorScheme={"green"}>
                              1 RK/ Studio Apartment
                            </Checkbox>
                            <Checkbox iconSize={"0px"} colorScheme={"green"}>
                              Farmhouse
                            </Checkbox>
                            <Checkbox iconSize={"0px"} colorScheme={"green"}>
                              other
                            </Checkbox>
                          </Box>
                          <Button backgroundColor={"rgb(46,49,146)"} color={"white"} width={"100%"}>Start Now</Button>
                        </TabPanel>
                        <TabPanel>
                          <Box className={style.buy}>
                            <Checkbox size={"md"} color={"black"}> Office </Checkbox>
                            <Checkbox>Retail</Checkbox>
                            <Checkbox>Plot/Land</Checkbox>
                            <Checkbox>Storage</Checkbox>
                            <Checkbox>Industry</Checkbox>
                            <Checkbox>Hospitality</Checkbox>
                            <Checkbox>Other</Checkbox>
                          </Box>
                          <Button backgroundColor={"rgb(46,49,146)"} color={"white"} width={"100%"} >Start Now</Button>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
              <Button
                borderradius={"4px"}
                color={"white"}
                _hover={{ color: "white" }}
                boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                fontSize={{ base: "sm", lg: "lg" }}
                fontWeight={{ base: "500", lg: "bold" }}
                backgroundColor={"#d2ab67cb"}
                onClick={handlePageSell}
              >
                <Link to={"/post"}>Sell</Link>
              </Button> 

              {/* ================================================ */}   
              <Popover>
                    <PopoverTrigger>
                        <Button
                            borderradius={"4px"}
                            color={"white"}
                            w={"100%"}
                            _hover={{ color: "white" }}
                            boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                            fontSize={{ base: "sm", lg: "lg" }}
                            fontWeight={{ base: "500", lg: "bold" }}
                            backgroundColor={"#d2ab67cb"}
                        >
                            Rent  
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent w={{ base: "320px", md: "400px" }} marginTop={"-5px"} color={"black"}>
                        <PopoverArrow />
                        <PopoverHeader>Rent Property</PopoverHeader>
                        <PopoverBody>
                            {/* one */}
                            <Tabs variant="enclosed">
                                <TabList>
                                    <Tab>Residential</Tab>
                                    <Tab>Commercial</Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <Box className={style.buy}>
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
                                        </Box>
                                        <Link to="/residential_rent">
                                            <Button
                                                backgroundColor={"rgb(46,49,146)"}
                                                color={"white"} 
                                                w={"100%"}  
                                                className={style.start_btn}
                                            >
                                                Start Now
                                            </Button>
                                        </Link>
                                    </TabPanel>
                                    <TabPanel>
                                        <Box className={style.buy}>
                                            <Checkbox size={"md"} color={"black"}>
                                                Office
                                            </Checkbox>
                                            <Checkbox>Retail</Checkbox>
                                            <Checkbox>Plot/Land</Checkbox>
                                            <Checkbox>Storage</Checkbox>
                                            <Checkbox>Industry</Checkbox>
                                            <Checkbox>Hospitality</Checkbox> 
                                        </Box>
                                        <Link to={"/commercial_rent"}> 
                                            <Button
                                                backgroundColor={"rgb(46,49,146)"}
                                                color={"white"} 
                                                w={"100%"}  
                                                className={style.start_btn}
                                            >
                                                Start Now
                                            </Button>
                                        </Link>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>




              {/* =========================================== */}
              {/* <Button
                borderradius={"4px"}
                color={"white"}
                w={"100%"}
                _hover={{ color: "white" }}
                boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                fontSize={{ base: "sm", lg: "lg" }}
                fontWeight={{ base: "500", lg: "bold" }}
                backgroundColor={"#d2ab67cb"}
                onClick={handlePageRent}
              >
                Rent
              </Button> */} 
            </div>
            <div>
              <Input
                type="text"
                border={0}
                height={"38px"}
                minWidth={{ base: "85%", lg: "600px" }}
                marginLeft={"2px"}
                placeholder={"Search locality, project or builder"}
                color={"black"}
                fontSize={{ base: "xs", lg: "lg" }}
                _active={{ border: "0px", outline: "0px" }}
                boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                fontWeight={400}
                backgroundColor={"rgba(255, 255, 255, 0.767)"}
                clipPath={{
                  base: "polygon(0 0, 100% 0, 97.4% 50%, 100% 100%, 0 100%)",
                  md: "polygon(0 0, 100% 0, 98% 50%, 100% 100%, 0 100%)",
                }}
              />
              <span id={style.btn_serch}></span>
              <Button
                _hover={{ backgroundColor: "#d2ab67" }}
                backgroundColor={"#d2ab67b0"}
              >
                {" "}
                <Search2Icon size={"30px"} className={style.white} />{" "}
              </Button>
            </div>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default Page1;
