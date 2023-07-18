import React from 'react'
import style from "./Logo.module.css";
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={"/"}>
      <h2 className={style.logo}> <span>ASSET</span>ORIX </h2>
    </Link>
  )
}

export default Logo;

