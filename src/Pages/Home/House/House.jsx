import React from 'react';  
import style from "./House.module.css"; 
import img1 from "./buyhome.jpg"; 
import img2 from "./salehome.jpg"; 
import img3 from "./renthouse.jpg"; 

const House = () => {
  return (
    <div className={style.box}> 
        <div>
            <img src={img1} alt="img1" />
            <h2> Buy a Home </h2>
            <p>Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.</p> 
            <button className={style.btn}>Browse Home</button>
        </div>
        <div> 
            <img src={img2} alt="img2" />  
            <h2> Sell a Home </h2> 
            <p>No matter what path you take to sell your home, we can help you navigate a successful sale.</p> 
            <button className={style.btn}>See Your Options</button>
        </div>
        <div>
            <img src={img3} alt="img3" />   
            <h2> Rent a Home </h2> 
            <p>We're creating a seamless online experience - from shopping on the largest rental network, to applying, to paying rent.</p> 
            <button className={style.btn}>Find rentals</button>
        </div>
    </div>
  )
}

export default House; 

