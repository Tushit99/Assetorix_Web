import {
  Avatar,
  Badge,
  Box,
  Button,
  Heading,
  Select,
  Input,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import style from "./QueryPage.module.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const QueryPage = () => {
  const [queryBox, setQueryBox] = useState([]);
  const [serchParam, setSearchParam] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
  const [propertyType, setPropertyType] = useState("");
  const [isLoading, setLoading] = useState(false);
  const demobox = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    let obj = { page };
    if (propertyType != "") {
      obj["formType"] = propertyType;
    }
    setSearchParam(obj);
  }, [page, propertyType]);

  useEffect(() => {
    console.log(location.search);
    handelData();
  }, [location.search]);

  const handelData = async () => {
    try {
      setLoading(true);
      await axios
        .get(`${process.env.REACT_APP_URL}/leadForm/all${location.search}`)
        .then((e) => {
          // console.log(e.data);
          setTotalPages(e.data.totalPages);
          setQueryBox(e.data.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (serchParam.get("page") > 0) {
      setPage(serchParam.get("page"));
      let show = { page: serchParam.get("page") };
      if (serchParam.get("formType") !== null) {
        show["formType"] = serchParam.get("formType");
        setPropertyType(serchParam.get("formType"));
      }
      setSearchParam(show);
    } else {
      let obj = { page };
      if (serchParam.get("formType") !== null) {
        obj["formType"] = serchParam.get("formType");
        setPropertyType(serchParam.get("formType"));
      }
      setSearchParam(obj);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleminpage = () => {
    setPage((prev) => +prev - 1);
  };

  const handleaddpage = () => {
    setPage((prev) => +prev + 1);
  };

  return (
    <Box padding={{ base: "30px 20px 60px 20px", md: "30px 40px 60px 40px" }}>
      {/* pagination position fixed */}
      {/* page change button */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"right"}
        gap={"10px"}
        position={"relative"}
      >
        <Button
          variant={"solid"}
          isDisabled={page <= 1 ? true : false}
          colorScheme={"blue"}
          onClick={handleminpage}
          size={{ base: "xs", md: "sm", lg: "md" }}
        >
          Prev
        </Button>
        <Text> {page} </Text>
        <Button
          variant={"solid"}
          isDisabled={page >= totalPages ? true : false}
          colorScheme={"blue"}
          onClick={handleaddpage}
          size={{ base: "xs", md: "sm", lg: "md" }}
        >
          Next
        </Button>
      </Box>
      {/* heading and other detail */}
      <Heading> Assetorix Query </Heading>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        marginBottom={"10px"}
        gap={"10px"}
      >
        {/* property type */}
        <Box>
          <Select
            minWidth={"120px"}
            variant="outline"
            colorScheme={"blue"}
            size={{ base: "sm", md: "md" }}
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">--</option>
            <option value="Buy"> Buy </option>
            <option value="Sell"> Sell </option>
            <option value="Rent"> Rent </option>
          </Select>
        </Box>
        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
          <Input
            type="text"
            maxW={"200px"}
            size={{ base: "sm", md: "md" }}
            placeholder={"search..."}
            borderRadius={0}
            variant="outline"
            border={"1px solid blue"}
          />
          <Button
            colorScheme="blue"
            size={{ base: "sm", md: "md" }}
            borderRadius={0}
            color={"white"}
          >
            {" "}
            <FaSearch />{" "}
          </Button>
        </Box>
      </Box>
      <Box></Box>
      <Box>
        {isLoading ? (
          // this code is loading box
          <Box className={style.mapbox}>
            {demobox.map((e) => (
              <Box as={"div"} key={e} className={style.flex}>
                <Box flex={1}>
                  <Skeleton
                    height={"80px"}
                    width={"80px"}
                    borderRadius={"8px"}
                    baseColor="#9AE6FF"
                  />
                </Box>
                <Box textAlign={"left"} flex={3}>
                  <Heading size={"md"} as={"h2"}>
                    <Skeleton baseColor="#9AE6FF" />
                  </Heading>
                  <Text fontsize={"md"}>
                    <strong>Property Type:</strong>{" "}
                    <Skeleton baseColor="#9AE6FF" />
                  </Text>
                  <Text fontsize={"lg"} className={style.des}>
                    <strong>Requirement:</strong>{" "}
                    <Skeleton baseColor="#9AE6FF" />
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        ) : (
          // maping data after featching it
          <Box className={style.mapbox}>
            {queryBox.map((e) => (
              <Box as={"div"} key={e._id} className={style.flex}>
                <Box flex={1}>
                  <Avatar size="lg" name={e.name} borderRadius={4} />
                </Box>
                <Box textAlign={"left"} flex={3}>
                  <Box className={style.posttype}>
                    <Badge
                      variant="solid"
                      colorScheme={
                        e.formType == "Rent"
                          ? "red"
                          : e.formType == "Sell"
                          ? "green"
                          : "blue"
                      }
                      fontWeight={"bold"}
                      fontSize="0.7em"
                    >
                      {e.formType}
                    </Badge>
                  </Box>
                  <Heading size={"md"} as={"h2"}>
                    {e.name}
                  </Heading>
                  <Text
                    fontsize={"md"}
                    display={e.propertyType == "None" ? "none" : "block"}
                  >
                    <strong>Property Type:</strong> {e.propertyType}
                  </Text>
                  <Text fontsize={"lg"} className={style.des}>
                    <strong>Requirement:</strong> {e.description}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Box>
      {/* page change button */}
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"right"}
        gap={"10px"} 
        marginTop={"40px"}
        position={"relative"}
      >
        <Button
          variant={"solid"}
          isDisabled={page <= 1 ? true : false}
          colorScheme={"blue"}
          onClick={handleminpage}
          size={{ base: "xs", md: "sm", lg: "md" }}
        >
          Prev
        </Button>
        <Text> {page} </Text>
        <Button
          variant={"solid"}
          isDisabled={page >= totalPages ? true : false}
          colorScheme={"blue"}
          onClick={handleaddpage}
          size={{ base: "xs", md: "sm", lg: "md" }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default QueryPage;
