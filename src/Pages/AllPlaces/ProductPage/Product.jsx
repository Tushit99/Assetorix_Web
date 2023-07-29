import React from "react"; 
import { GrLocation } from "react-icons/gr"; 
import { Link } from "react-router-dom";
import style from "./Product.module.css"; 

const Product = ({ id, img, name, location, price,page }) => {

    return (
        <Link to={`/${page}/${id}`} key={id} className={style.detail_box}>
            <img src={img} alt="imglink" /> 
            <div className={style.detail}> 
                <h5> FOR SALE </h5>
                <h2>{name} </h2>
                <h3>Price: ₹{price}</h3>
                <h3>
                    <GrLocation color={"rgb(0, 153, 255)"} /> {location}
                </h3>  
                <button>   
                    See Detail
                </button>
            </div>
        </Link>
    );
};
export default Product;
