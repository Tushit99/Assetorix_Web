import React from 'react'
import style from "./Logo.module.css";
import { Link } from 'react-router-dom';  
// import logo from "./weblogo.png"; 
import log from "./lgo.png"

const Logo = () => {
  return (
    <h2 className={style.logo}>
      <Link to={"/"}>
        <img src={"https://www.ametheus.com/wp-content/uploads/2021/12/Ametheus-Logo.png"} alt="logo" />    
      </Link>
    </h2>
  )
}

export default Logo;  
