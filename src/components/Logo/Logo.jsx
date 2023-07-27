import React from 'react'
import style from "./Logo.module.css";
import { Link } from 'react-router-dom';  
import assetoix from "./assetorix.png"; 

const Logo = () => {
  return (
    <h2 className={style.logo}>
      <Link to={"/"}>
        <img src={assetoix} alt="logo" />    
      </Link>
    </h2>
  )
}

export default Logo;  
