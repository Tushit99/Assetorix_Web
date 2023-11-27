import React, { useState } from "react";
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
import backimg from "./Screenshot 10-12-2023 09.38.37.png"
import { Blurhash } from "react-blurhash";


const Page1 = () => {
  const { country } = useSelector((state) => state.gloalval);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [resBuyArr, setresBuyArr] = useState([]);
  const [resRentArr, setresRentArr] = useState([]);
  const [comBuyArr, setcomBuyArr] = useState([]);
  const [comRentArr, setcomRentArr] = useState([]);
  // const [imageLoaded, setImageLoaded] = useState(false);  


  // useState(()=>{
  //   const img = new Image();  
  //   img.onload = ()=>{
  //     setImageLoaded(true);  
  //   }  
  //   img.src = backimg; 
  // },[backimg])

  // const handlePageRent = () => {
  //   dispatch(changeLookingFor("Rent/Lease"));
  //   navigate("/post");
  // }

  const handlePageSell = () => {
    dispatch(changeLookingFor("sell"));
    navigate("/post");
  }

  const handleresbuy = (value) => {
    setresBuyArr((prev) => {
      if (prev.includes(value)) {
        let res = prev.filter((item) => item !== value) || [];
        localStorage.setItem("resBuy", JSON.stringify(res));
        return res
      } else {
        let res = [...prev, value];
        localStorage.setItem("resBuy", JSON.stringify(res));
        return res
      }
    });
  }
  const handleresrent = (value) => {
    setresRentArr((prev) => {
      if (prev.includes(value)) {
        let res = prev.filter((item) => item !== value) || [];
        localStorage.setItem("resRent", JSON.stringify(res));
        return res
      } else {
        let res = [...prev, value];
        localStorage.setItem("resRent", JSON.stringify(res));
        return res
      }
    });
  }
  const handleCombuy = (value) => {
    setcomBuyArr((prev) => {
      if (prev.includes(value)) {
        let res = prev.filter((item) => item !== value) || [];
        localStorage.setItem("combuy", JSON.stringify(res));
        return res
      } else {
        let res = [...prev, value];
        localStorage.setItem("combuy", JSON.stringify(res));
        return res
      }
    });
  }

  const handleComRent = (value) => {
    setcomRentArr((prev) => {
      if (prev.includes(value)) {
        let res = prev.filter((item) => item !== value) || [];
        localStorage.setItem("comRent", JSON.stringify(res));
        return res
      } else {
        let res = [...prev, value];
        localStorage.setItem("comRent", JSON.stringify(res));
        return res
      }
    });
  }  

  return (
    <div className={style.pagetop}>
      {/* img will be shown untill the video is not there */}
      <img src={backimg} loading={"lazy"} className={style.video_picture2} alt="backimg" />
      <Box className={style.video_picture} >
        <Blurhash
          hash="L[H1*rRkWCj[~UV[WCfk?GaeaybH"
          height={"100vh"}
          width={"100%"}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      </Box>

      {/* video at backr */}
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
                <PopoverContent w={{ base: "320px", md: "400px" }} marginTop={"-5px"} color={"black"}>
                  <PopoverArrow />
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
                            <Checkbox onChange={(e) => handleresbuy("Flat / Apartment")} isChecked={resBuyArr.includes("Flat / Apartment")} iconSize={"0px"} colorScheme={"blue"}>
                              Flat/Apartment
                            </Checkbox>
                            <Checkbox onChange={(e) => handleresbuy("Independent House / Villa")} isChecked={resBuyArr.includes("Independent House / Villa")} iconSize={"0px"} colorScheme={"blue"}>
                              Independent House/villa
                            </Checkbox>
                            <Checkbox onChange={(e) => handleresbuy("Independent / Builder Floor")} isChecked={resBuyArr.includes("Independent / Builder Floor")} iconSize={"0px"} colorScheme={"blue"}>
                              Independent/builder Floor
                            </Checkbox>
                            <Checkbox onChange={(e) => handleresbuy("Serviced Apartment")} isChecked={resBuyArr.includes("Serviced Apartment")} iconSize={"0px"} colorScheme={"blue"}>
                              Serviced Apartment
                            </Checkbox>
                            <Checkbox onChange={(e) => handleresbuy("Plot / Land")} isChecked={resBuyArr.includes("Plot / Land")} iconSize={"0px"} colorScheme={"blue"}>
                              Plot/Land
                            </Checkbox>
                            <Checkbox onChange={(e) => handleresbuy("1 RK / Studio Apartment")} isChecked={resBuyArr.includes("1 RK / Studio Apartment")} iconSize={"0px"} colorScheme={"blue"}>
                              1 RK/ Studio Apartment
                            </Checkbox>
                            <Checkbox onChange={(e) => handleresbuy("Farmhouse")} isChecked={resBuyArr.includes("Farmhouse")} iconSize={"0px"} colorScheme={"blue"}>
                              Farmhouse
                            </Checkbox>
                          </Box>
                          <Link to="/residential_buy" state={{ arr: resBuyArr }} >
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
                          <Box className={style.buy}  >
                            <Checkbox onChange={(e) => handleCombuy(e.target.value)} value={"Office"} isChecked={comBuyArr.includes("Office")} size={"md"} color={"black"}>
                              Office
                            </Checkbox>
                            <Checkbox onChange={() => handleCombuy("Retail")} isChecked={comBuyArr.includes("Retail")} >Retail</Checkbox>
                            <Checkbox onChange={() => handleCombuy("Plot / Land")} isChecked={comBuyArr.includes("Plot / Land")} >Plot / Land</Checkbox>
                            <Checkbox onChange={() => handleCombuy("Storage")} isChecked={comBuyArr.includes("Storage")} >Storage</Checkbox>
                            <Checkbox onChange={() => handleCombuy("Industry")} isChecked={comBuyArr.includes("Industry")} >Industry</Checkbox>
                            <Checkbox onChange={() => handleCombuy("Hospitality")} isChecked={comBuyArr.includes("Hospitality")} >Hospitality</Checkbox>
                          </Box>
                          <Link to={"/commercial_buy"} params={{ arr: comBuyArr }} >
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
                                            <Checkbox onChange={() => handleresrent("Flat / Apartment")} isChecked={resRentArr.includes("Flat / Apartment")} iconSize={"0px"} colorScheme={"blue"}>
                                                Flat/Apartment
                                            </Checkbox>
                                            <Checkbox onChange={() => handleresrent("Independent House / villa")} isChecked={resRentArr.includes("Independent House / villa")} iconSize={"0px"} colorScheme={"blue"}>
                                                Independent House/villa
                                            </Checkbox>
                                            <Checkbox onChange={() => handleresrent("Independent / Builder Floor")} isChecked={resRentArr.includes("Independent / Builder Floor")} iconSize={"0px"} colorScheme={"blue"}>
                                                Independent/builder Floor
                                            </Checkbox>
                                            <Checkbox onChange={() => handleresrent("Serviced Apartment")} isChecked={resRentArr.includes("Serviced Apartment")} iconSize={"0px"} colorScheme={"blue"}>
                                                Serviced Apartment
                                            </Checkbox>
                                            <Checkbox onChange={() => handleresrent("Plot / Land")} isChecked={resRentArr.includes("Plot / Land")} iconSize={"0px"} colorScheme={"blue"}>
                                                Plot/Land
                                            </Checkbox>
                                            <Checkbox onChange={() => handleresrent("1RK / Studio Apartment")} isChecked={resRentArr.includes("1RK / Studio Apartment")} iconSize={"0px"} colorScheme={"blue"}>
                                                1 RK/ Studio Apartment
                                            </Checkbox>
                                            <Checkbox onChange={() => handleresrent("Farmhouse")} isChecked={resRentArr.includes("Farmhouse")} iconSize={"0px"} colorScheme={"blue"}>
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
                                            <Checkbox onChange={() => handleComRent("Office")} isChecked={comRentArr.includes("Office")} size={"md"} color={"black"}> Office </Checkbox>
                                            <Checkbox onChange={() => handleComRent("Retail")} isChecked={comRentArr.includes("Retail")} >Retail</Checkbox>
                                            <Checkbox onChange={() => handleComRent("Plot / Land")} isChecked={comRentArr.includes("Plot / Land")} >Plot/Land</Checkbox>
                                            <Checkbox onChange={() => handleComRent("Storage")} isChecked={comRentArr.includes("Storage")} >Storage</Checkbox>
                                            <Checkbox onChange={() => handleComRent("Industry")} isChecked={comRentArr.includes("Industry")} >Industry</Checkbox>
                                            <Checkbox onChange={() => handleComRent("Hospitality")} isChecked={comRentArr.includes("Hospitality")} >Hospitality</Checkbox>
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
