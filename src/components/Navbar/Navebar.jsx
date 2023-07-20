import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
import Logo from "../Logo/Logo";  
import Hamburger from "../Logo/Hamburger";

const Navebar = () => {
    return (
        <div className={style.navbar}>
            <div className={style.hamburger_menu}>
                <Hamburger /> 
            </div>
            <div className={style.nav_logo}>
                <Logo /> 
            </div> 
            <div className={style.nav_link}>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
            </div>
            <div>
                <button className={style.signup} >
                    <Link to={"/login"}>
                        LogIn
                    </Link> 
                </button>
            </div>
        </div>
    );
};

export default Navebar;
