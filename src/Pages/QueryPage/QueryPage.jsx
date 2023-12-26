import { Avatar, Badge, Box, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import style from "./QueryPage.module.css";

const QueryPage = () => {
  const [queryBox, setQueryBox] = useState([]);
  const [serchParam, setSearchParam] = useSearchParams();
  const [page, setPage] = useState(1);

  const handelData = async () => {
    try {
      await axios
        .get(`${process.env.REACT_APP_URL}/leadForm/all`)
        .then((e) => {
          console.log(e.data.data);
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
    if (serchParam.get("page") > 0) {
      setSearchParam(serchParam.get("page"));
    }
    handelData();
  }, []);

  return (
    <Box padding={"20px 40px 40px 40px"}>
      <Heading> Assetorix Query </Heading>
      <Box className={style.mapbox}>
        {queryBox.map((e) => (
          <Box as={"div"} key={e._id} className={style.flex}>
            <Box flex={1}>
              <Avatar size="lg" name={e.name} borderRadius={4} />
            </Box>
            <Box textAlign={"left"} flex={3} >
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
              <Text fontsize={"lg"}>
                <strong>Requirement:</strong> {e.description}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default QueryPage;
