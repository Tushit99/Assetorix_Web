import React from 'react' 
import Product from './ProductPage/Product';
import style from "./place.module.css";

const data = [
  {
    id: 1,
    name: "Godrej Exquisite Noida",
    img: "https://www.investoxpert.com/_next/image?url=https%3A%2F%2Fdestinationcompress.s3.ap-south-1.amazonaws.com%2F12ce4162-9e99-45f0-808f-41138c825aac.jpg&w=1920&q=75",
    location: "Sector 27,Greater Noida",
    price: "2.43 Cr to 3.00 Cr",
  },
  {
    id: 2,
    name: "Godrej Exquisite Noida",
    img: "https://www.investoxpert.com/_next/image?url=https%3A%2F%2Fdestinationcompress.s3.ap-south-1.amazonaws.com%2F08293dd5-5c8b-4c51-ab43-f1a15b721b0b.jpeg&w=1920&q=75",
    location: "Greater Noida West,Noida",
    price: "75 Lakh to 1.39 Cr",
  },
  {
    id: 3,
    name: "Godrej Exquisite Noida",
    img: "https://www.investoxpert.com/_next/image?url=https%3A%2F%2Fdestinationcompress.s3.ap-south-1.amazonaws.com%2F12ce4162-9e99-45f0-808f-41138c825aac.jpg&w=1920&q=75",
    location: "Sector 27,Greater Noida",
    price: "2.43 Cr to 3.00 Cr",
  },
  {
    id: 4,
    name: "Godrej Exquisite Noida",
    img: "https://www.investoxpert.com/_next/image?url=https%3A%2F%2Fdestinationcompress.s3.ap-south-1.amazonaws.com%2F08293dd5-5c8b-4c51-ab43-f1a15b721b0b.jpeg&w=1920&q=75",
    location: "Greater Noida West,Noida",
    price: "62 Lakh to 2.41 Cr",
  },
]

const Bangalore = () => {
  return (
    <z className={style.head_box}>
      <div>
        <h1>Lets find your dream property at  <span> BANGALORE </span></h1>
      </div>
      <div className={style.products}>
        {data.map((e) => (
          <Product {...e} bangalore={"bangalore"} key={e.id} />
        ))}
      </div>
    </z>
  )
}

export default Bangalore; 
