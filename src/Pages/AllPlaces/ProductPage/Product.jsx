import React from "react";
import style from "../place.module.css";
import { GrLocation } from "react-icons/gr";
import { Button } from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Product = ({ id, img, name, location, price,page }) => {

    return (
        <Link to={`/${page}/${id}`} key={id} className={style.detail_box}>
            <img src={img} alt="imglink" /> 
            <div>
                <h5> FOR SALE </h5>
                <h2>{name} </h2>
                <h3>Price: ₹{price}</h3>
                <h3>
                    <GrLocation color={"rgb(0, 153, 255)"} /> {location}
                </h3>  
                <button style={{backgroundColor:"rgb(0, 153, 255)",width:"300px",borderRadius:"10px",margin:"10px auto",color:"#fffff",fontWeight:"500",padding:"6px auto"}}>   
                    See Detail
                </button>
            </div>
        </Link>
    );
};
export default Product;
