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
                    <GrLocation color={"rgb(255, 0, 0)"} /> {location}
                </h3>  
                <Button 
                    rightIcon={<ViewIcon />}
                    backgroundColor={"rgb(245, 101, 101)"} 
                    color={"white"}> 
                    VIEW DETAILS
                </Button>
            </div>
        </Link>
    );
};
export default Product;
