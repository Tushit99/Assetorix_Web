import { Box, Button, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from "./Listing.module.css";
import Loader from './Loader';
import { Link } from 'react-router-dom';

const Listings = () => {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

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
                <Text> Property Type: {e.propertyType} </Text> 
                <Box className={style.flexequal}> 
                  <Link to={`/listing/${e._id}`}>
                    <Button w={"100%"} as={"button"} variant={'outline'} colorScheme={"blue"} > Edit </Button>
                  </Link> 
                  <Button variant={'outline'} colorScheme={'red'} > Delete </Button>
                </Box> 
              </Box>
            ))}
          </Box>
        }
      </Box>
    </Box>
  )
}

export default Listings; 
