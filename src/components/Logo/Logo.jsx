import React from 'react'
import style from "./Logo.module.css";
import { Link } from 'react-router-dom';  
import assetoix from "./assetorix.png"; 
import { Image } from '@chakra-ui/react';

const Logo = () => {
  return (
    <h2 className={style.logo}>
      <Link to={"/"}>
        <Image src={assetoix} alt="logo" />    
      </Link> 
    </h2> 
  ) 
}

export default Logo;  

