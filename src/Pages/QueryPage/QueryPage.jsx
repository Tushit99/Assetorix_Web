import { Avatar, Badge, Box, Button, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import style from "./QueryPage.module.css";

const QueryPage = () => {
  const [queryBox, setQueryBox] = useState([]);
  const [serchParam, setSearchParam] = useSearchParams();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const location = useLocation();
 

  useEffect(() => {
    let obj = { page };
    setSearchParam(obj);
  }, [page]);

  useEffect(() => {
    console.log(location.search);
    handelData();
  }, [location.search]);

  const handelData = async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_URL}/leadForm/all${location.search}`)
        .then((e) => {
          console.log(e.data);
          setTotalPages(e.data.totalPages);
          setQueryBox(e.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log();
    if (serchParam.get("page") > 0) {
      setPage(serchParam.get("page"));
      let show = { page: serchParam.get("page") };
      setSearchParam(show);
      handelData();
    } else {
      let obj = { page };
      setSearchParam(obj);
      handelData();
    }
  }, []);

  const handleminpage = () => {
    setPage((prev) => +prev - 1);
  };

  const handleaddpage = () => {
    setPage((prev) => +prev + 1);
  };

  return (
    <Box padding={"30px 40px 60px 40px"}>
      <Heading> Assetorix Query </Heading>
      <Box
        display={"flex"}
        marginBottom={"10px"}
        alignItems={"center"}
        justifyContent={"right"}
        gap={"10px"}
      >
        <Button
          variant={"solid"}
          isDisabled={page <= 1 ? true : false}
          colorScheme={"blue"}
          onClick={handleminpage}
        >
          Prev
        </Button>
        <Text> {page} </Text>
        <Button
          variant={"solid"}
          isDisabled={page > totalPages ? true : false}
          colorScheme={"blue"}
          onClick={handleaddpage}
        >
          Next
        </Button>
      </Box>
      <Box>
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
      </Box>
    </Box>
  );
};

export default QueryPage;
