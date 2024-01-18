import React, { useEffect, useState } from "react";
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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
} from "@chakra-ui/react";
import style from "./Page1.module.css";
import video from "./assetorix.mp4";
import { Search2Icon } from "@chakra-ui/icons";
import { Link, json, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeLookingFor } from "../../../Redux/globalval/action";
import backimg from "./Screenshot 10-12-2023 09.38.37.png"
import { Blurhash } from "react-blurhash";
import axios from "axios";
import SearchShow from "./SearchShow"; 
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io"; 
import WithStyles from "./Query/WithStyles";



const Page1 = () => {
  const { country, notification } = useSelector((state) => state.gloalval);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchInp, setSearchInp] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showOpt, setShowOpt] = useState([]);
  const [typelook, setLook] = useState("Sell");
  const [typeGroup, setGroup] = useState("Residential");
  const [resBuyArr, setresBuyArr] = useState([]);
  const [resRentArr, setresRentArr] = useState([]);
  const [comBuyArr, setcomBuyArr] = useState([]);
  const [comRentArr, setcomRentArr] = useState([]);

  useEffect(() => {
    const storedNotification = JSON.parse(localStorage.getItem("key")) || null;

    if (storedNotification == null) {
      onOpen();
      const now = new Date();
      const item = {
        value: 1,
        expiry: now.getTime() + (12 * 60 * 60 * 1000),
      };
      localStorage.setItem("key", JSON.stringify(item));
    }
  }, []);

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

  useEffect(() => {
    handleSearch(searchInp);
  }, [typelook, typeGroup]);

  const handleSearch = async (inp) => {
    if (inp.length == 0) {
      return
    }
    console.log(typelook, typeGroup);
    try {
      await axios.get(`${process.env.REACT_APP_URL}/property/search?search=${inp}&lookingFor=${typelook}&propertyGroup=${typeGroup}`).then((e) => {
        setShowOpt(e.data.data);
        console.log(e.data.data);
      })
    } catch (err) {
      console.log(err);
    }
  }

  const handlePageSell = () => {
    dispatch(changeLookingFor("sell"));
    navigate("/post");
  }

  return (
    <div className={style.pagetop}>
      {/* ============ notification box =================== */}
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} >
        <ModalOverlay
          bg='blackAlpha.200'
          backdropFilter='blur(3px)' />
        <ModalContent marginTop={"120px"} backgroundColor={""} >
          <ModalHeader> Beta Testing </ModalHeader>
          <ModalCloseButton /> 
          <ModalBody paddingBottom={"20px"}>
            <Text className={style.acolor}>
              The beta testing phase is currently in progress.
              We kindly request interested property dealers and agents
              to contact us at <a href="tel:+91-9717990777"> +91 9717990777,</a> or to email us at <a href="mailto:info@assetorix.com">info@assetorix.com</a>
            </Text>
          </ModalBody>
          {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button> */}
        </ModalContent>
      </Modal>
      {/* ============================= */}
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
                    fontWeight={400}
                    _hover={{ color: "unset" }}
                    _active={{ color: "unset" }}
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
                     backgroundColor={"#d2ab67cb"}
                     color={"white"} 
                    fontWeight={400}
                    _hover={{ color: "unset" }}
                    _active={{ color: "unset" }}
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
            <Box display={"flex"} alignItems={"center"}>
              <Box height={"38px"} position={"relative"} minWidth={{ base: "85%", lg: "600px" }} display={"flex"} flexDirection={"column"} >
                <InputGroup className={style.inpbox}>
                  {/* option for sell and buy - commercial and residential */}
                  <Menu closeOnSelect={false} zIndex={5}>
                    <MenuButton
                      as={Button}
                      backgroundColor={"rgba(255, 255, 255, 0.767)"}
                      width={"170px"}
                      height={"38px"}
                      padding={"0 10px"}
                      borderRadius='xs'
                      color={"rgb(51, 51, 51)"}
                      rightIcon={<IoIosArrowDown />}  >
                      {typelook} 
                    </MenuButton>
                    <MenuList minWidth='140px' popperPlacement="bottom-end" margin={"-5px auto -5px auto"} borderradius={0} fontSize={{ base: "2xs", md: "sm", lg: "md" }} padding={0} >
                      <MenuOptionGroup defaultValue='Sell' fontSize={{ base: "2xs", md: "sm", lg: "md" }} onChange={(e) => setLook(e)} title='Property' type='radio'>
                        <MenuItemOption value='Sell'>Sell</MenuItemOption>
                        <MenuItemOption value='Rent'>Rent</MenuItemOption>
                      </MenuOptionGroup>
                      <MenuDivider />
                      <MenuOptionGroup title='Property Type' fontSize={{ base: "2xs", md: "sm", lg: "md" }} defaultValue={"Residential"} onChange={(e) => setGroup(e)} type='radio'>
                        <MenuItemOption value='Residential'>Residential</MenuItemOption>
                        <MenuItemOption value='Commercial'>Commercial</MenuItemOption>
                      </MenuOptionGroup>
                    </MenuList>
                  </Menu>
                  {/* ================ input ============== */}
                  <Input
                    type="text"
                    border={0}
                    height={"38px"}
                    minWidth={{ base: "75%", lg: "360px" }}
                    marginLeft={"2px"}
                    placeholder={"Search locality, project or builder"}
                    color={"black"}
                    onChange={(e) => {
                      setSearchInp(e.target.value)
                      handleSearch(e.target.value);
                    }} 
                    fontSize={{ base: "xs", lg: "lg" }}
                    _active={{ border: "0px", outline: "0px" }}
                    boxShadow={"rgba(0, 0, 0, 0.817) 4px 15px 18px"}
                    fontWeight={400}
                    backgroundColor={"rgba(255, 255, 255, 0.767)"}
                    clipPath={{
                      base: "polygon(0 0, 96% 0, 98.5% 50%, 96% 100%, 0 100%)",
                      md: "polygon(0 0, 96% 0, 98% 50%, 96% 100%, 0 100%)",
                    }}
                  /> 
                </InputGroup>
                <Box
                  margin={{ base: "40px 0 0 101px", md: "40px 0 0 136px" }}
                  zIndex={1}
                  border={0}  
                  position={"absolute"}
                  minWidth={{ base: "75%", lg: "520px" }}
                  padding={"0 10px"}
                  backgroundColor={"rgb(255, 255, 255)"}
                  display={searchInp.length > 0 ? "grid" : "none"}>
                  {showOpt.map((e) => (
                    <SearchShow e={e} key={e._id} />
                  ))}
                </Box>
              </Box>
              <span id={style.btn_serch}></span>  
              <span id={style.btn_serch2}></span>
              <Button
                className={style.searchbtn}
                _hover={{ backgroundColor: "#d2ab67" }}
                backgroundColor={"#d2ab67b0"}
              >
                <Search2Icon size={"30px"} className={style.white} />
              </Button>
            </Box> 
          </div>
        </Box>
      </Box> 
      <Box>
        <WithStyles /> 
      </Box>
    </div>
  );
};

export default Page1;
