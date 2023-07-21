import React from 'react'
import style from "./Logo.module.css";
import { Link } from 'react-router-dom';  
// import logo from "./weblogo.png"; 
import log from "./lgo.jpg"

const Logo = () => {
  return (
    <h2 className={style.logo}>
      <Link to={"/"}>
        <img src={log} alt="logo" />   
      </Link>
    </h2>
  )
}

export default Logo;

