import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import style from "./Listing.module.css";
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { CgClose } from "react-icons/cg";

const Listings = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showbox, setshowBox] = useState(false);


  const myListedProperty = async () => {
    setLoading(true);
    let id = localStorage.getItem("usrId") || undefined;
    let authorization = localStorage.getItem("AstToken") || undefined;

    let head = { id, authorization, 'Content-type': 'application/json' };

    try {
      await axios.get(`${process.env.REACT_APP_URL}/user/listings`, { headers: head }).then((e) => {
        console.log(e.data.data);
        setdata(e.data.data);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  const handleDelete = async (propertyId) => {
    setLoading(true);
    let id = localStorage.getItem("usrId") || undefined;
    let authorization = localStorage.getItem("AstToken") || undefined;

    let head = { id, authorization, 'Content-type': 'application/json' };
    try {
      await axios.delete(`${process.env.REACT_APP_URL}/property/${propertyId}`, { headers: head }).then((e) => {
        myListedProperty()
      }); 
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    setshowBox(false);
  }

  useEffect(() => {
    myListedProperty();
  }, []);

  return (
    <Box my={6} w={"90%"} marginX={"auto"} >
      <Box >
        <Heading> My Posted Data </Heading>
        {loading ? <Loader /> :
          <Box className={style.displaygrid} >
            {data && data?.map((e, i) => (
              <Box key={i}>
                <Image src="https://images.moneycontrol.com/static-mcnews/2017/05/real-estate-Luxury-home.jpg?impolicy=website&width=1600&height=900" alt="img-link" />
                <Heading className={`${style.boldtext} ${style.oneline}`} size={"sm"} > {e?.address?.houseNumber} {e?.address?.apartmentName} {e?.address?.locality} {e?.locatedInside} </Heading>
                <Text> <span className={`${style.boldtext}`}>Price:</span>  {e?.countryCurrency}{e?.price} </Text>
                <Text className={style.oneline}> Property Group: {e.propertyGroup} </Text>
                <Text className={style.oneline}> Property Type: {e.propertyType} </Text>
                <Box className={style.flexequal}>
                  <Link to={`/listing/${e._id}`}> 
                    <Button w={"100%"} as={"button"} variant={'outline'} colorScheme={"blue"} > Edit </Button>
                  </Link>
                  <Button variant={'outline'} colorScheme={'red'} onClick={() => setshowBox(true)} > Delete </Button>
                </Box>
                {/* alert Delete box */}
                <Box position={"fixed"} top={0} left={0} right={0} bottom={0} display={showbox == true ? "grid" : "none"} zIndex={102} backgroundColor={"rgba(255, 255, 255, 0.032)"} >
                  <Box position={"fixed"} top={"18%"} gap={2} left={"34%"} backgroundColor={"rgb(255, 255, 255)"} border={"1px solid rgb(237, 237, 237)"} borderRadius={10} padding={"20px"} display={"grid"}>
                    <Box display={"flex"} gap={10} alignItems={"center"} justifyContent={"space-between"} >
                      <Heading size={"md"}  > Delete Property </Heading>
                      <Button variant={"unstyled"} onClick={() => setshowBox(false)}> <CgClose size={"25px"} /> </Button>
                    </Box>
                    <Box>
                      <Text>Are you sure? You can't undo this action afterwards.</Text>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} justifyContent={"right"}>
                      <Button variant={'outline'} onClick={() => handleDelete(e._id)} colorScheme={'blue'} >Delete</Button>
                    </Box>
                  </Box>
                </Box>
                {/* ===================== */}
              </Box>
            ))}
          </Box>
        }
      </Box>
    </Box>
  )
}

export default Listings; 
