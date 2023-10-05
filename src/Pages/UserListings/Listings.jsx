import { Box, Button, Divider, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import style from "./Listing.module.css";
import Loader from './Loader';

import buildingimg from "./mgpng.png"
import DeleteBox from './DeleteBox';

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
    <Box position={"relative"} display={"flex"} my={6}>
      {/* property Listing */}
      <Box flex={10} w={"90%"} borderRadius={10} padding={"10px 20px"} marginX={"auto"} backgroundColor={"rgba(255, 255, 255, 0)"} >
        <Box >
          <Heading size={"md"} textAlign={"left"} marginLeft={"40px"}> My Posted Property </Heading>
          <Divider margin={"6px 0"} />
          {loading ? <Loader /> :
            <Box className={style.displaygrid} backgroundColor={"white"} padding={5} borderRadius={10} >
              {data && data?.map((e, i) => (
                <DeleteBox key={i} myListedProperty={myListedProperty} e={e} /> 
              ))}
            </Box>
          }
        </Box>
      </Box>
      {/* addvertise */}
      <Box 
        // zIndex={"-4"} 
        // clipPath={"polygon(50% 0, 100% 0, 100% 59%, 100% 100%, 45% 100%, 0 100%, 0 0, 56% 100%, 0 100%, 100% 100%)"} 
        flex={6}
      >
        <Image
          position={"sticky"}
          top={"100px"}
          src={buildingimg} alt="png" />
      </Box>
    </Box>
  )
}

export default Listings; 
