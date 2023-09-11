import React, { useState } from "react";
import style from "./Sell.module.css";
import img from "./download.jpg";
import {
  Box,
  Button,
  FormLabel,
  HStack,
  Heading,
  Input,
  PinInput,
  PinInputField,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const Sell = () => {
  const [look, setlook] = useState("");
  const [type, settype] = useState("");

  const handlechange = (type, look) => {
    settype(type);
    setlook(look);
  };

  return (
    <div className={style.sell}>
      <Box display={{ base: "none", md: "block" }}>
        <Heading  size={"lg"}>
          Sell or rent your property faster on Assetorix.com
        </Heading>
        <img src={img} alt="img" />
      </Box>

      <div>
        <Heading  size={"lg"}>
          Start posting your property , it's free
        </Heading>
        <Heading
          as={"h5"}
          margin={"8px auto"}
          size={"xs"}
          textAlign={"left"}
          fontWeight={"400"}
        >
          Add Basic Details
        </Heading>
        <Heading
          as={"h5"}
          margin={"8px auto"}
          size={"sm"}
          textAlign={"left"}
          fontWeight={"600"}
        >
          You're looking to ...
        </Heading>
        <Tabs
          variant="soft-rounded"
          padding={"10px 0 0 0"}
          boxShadow={
            "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"
          }
          margin={"10px 0"}
          borderRadius={6}
          colorScheme="twitter"
        >
          <TabList margin={"0 20px"}>
            <Tab>Sell</Tab>
            <Tab>Rent/Lease</Tab>
            <Tab>PG</Tab>
          </TabList>
          <TabPanels>
            {/* sell options */}
            <TabPanel>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Residential</Tab>
                  <Tab>Commercial</Tab>
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
                          look === "Independent House/villa" && type === "sell"
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
                      <button
                        onClick={() => handlechange("sell", "other")}
                        className={
                          look === "other" && type === "sell"
                            ? style.setbtn
                            : style.btn
                        }
                      >
                        other
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
                      <button
                        onClick={() => handlechange("sell", "Other")}
                        className={
                          look === "Other" && type === "sell"
                            ? style.setbtn
                            : style.btn
                        }
                      >
                        Other
                      </button>
                    </Box>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
            {/* rent options */}
            <TabPanel>
              <Tabs variant="enclosed">
                <TabList>
                  <Tab>Residential</Tab>
                  <Tab>Commercial</Tab>
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
                          handlechange("Rent/Lease", "Independent House/villa")
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
                          look === "Serviced Apartment" && type === "Rent/Lease"
                            ? style.setbtn
                            : style.btn
                        }
                      >
                        Serviced Apartment
                      </button>
                      <button
                        onClick={() => handlechange("Rent/Lease", "Plot/Land")}
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
                        onClick={() => handlechange("Rent/Lease", "Farmhouse")}
                        className={
                          look === "Farmhouse" && type === "Rent/Lease"
                            ? style.setbtn
                            : style.btn
                        }
                      >
                        Farmhouse
                      </button>
                      <button
                        onClick={() => handlechange("Rent/Lease", "other")}
                        className={
                          look === "other" && type === "Rent/Lease"
                            ? style.setbtn
                            : style.btn
                        }
                      >
                        other
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
                        onClick={() => handlechange("Rent/Lease", "Plot/Land")}
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
                      <button
                        onClick={() => handlechange("Rent/Lease", "Other")}
                        className={
                          look === "Other" && type === "Rent/Lease"
                            ? style.setbtn
                            : style.btn
                        }
                      >
                        Other
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
                  onClick={() => handlechange("PG", "Independent House/villa")}
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
        <Heading as={"h3"} size={"md"} textAlign={"left"} fontWeight={500}>
          Your Address Detail:
        </Heading>
        <Box display={"grid"} gap={"14px"} margin={"15px 0"}>
          <Box>
            <FormLabel> Door no. </FormLabel>
            <Input
              required
              type="text"
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter door no"
              autoComplete={"off"}
            />
          </Box>
          <Box>
            <FormLabel> Floor no. </FormLabel>
            <Input
              required
              type="text"
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter floor no"
              autoComplete={"off"}
            />
          </Box>
          <Box>
            <FormLabel> House no. </FormLabel>
            <Input
              required
              type="text"
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter house no"
              autoComplete={"off"}
            />
          </Box>
          <Box>
            <FormLabel> Block no. </FormLabel>
            <Input
              required
              type="text"
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter block no"
              autoComplete={"off"}
            />
          </Box>
          <Box>
            <FormLabel> Streat name </FormLabel>
            <Input
              required
              type="text"
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter Streat name"
              autoComplete={"off"}
            />
          </Box>
          <Box>
            <FormLabel> Area name (locality Name) </FormLabel>
            <Input
              required
              type="text"
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter area name"
              autoComplete={"off"}
            />
          </Box>
          <Box>
            <FormLabel> district </FormLabel>
            <Input
              required
              type="text"
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter district"
              autoComplete={"off"}
            />
          </Box>
          <Box>
            <FormLabel> Pincode </FormLabel>
            <HStack>
              <PinInput placeholder="">
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
          </Box>
          <Box>
            <FormLabel> State </FormLabel>
            <Input
              required
              type="text"
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter state"
              autoComplete={"off"}
            />
          </Box>
          <Box>
            <FormLabel> Country </FormLabel>
            <Input
              required
              type="text"
              border={"2px solid rgb(193, 206, 250)"}
              _hover={{ border: "2px solid rgb(171, 81, 255)" }}
              placeholder="Enter country"
              autoComplete={"off"}
            />
          </Box>
        </Box>
        <Heading
          as={"h3"}
          size={"md"}
          textAlign={"left"}
          fontWeight={500}
          margin={"0 0 10px 0"}
        >
          Your contact detail for the tenants to reach you
        </Heading>
        <Input type="text" placeholder={"Phone Number"} maxLength={"12"} />
        {/* Start button */}
        <Button
          onClick={() => handlechange("")}
          w={"100%"}
          backgroundColor={"rgb(46,49,146)"}
          color={"white"}
          borderRadius={0}
          _hover={{ backgroundColor: "rgb(46,49,146)" }}
          margin={"6px 0 0 0"}
        >
          Start Now
        </Button>
      </div>
    </div>
  );
};

export default Sell;
