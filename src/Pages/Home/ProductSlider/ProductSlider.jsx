import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="https://photos.zillowstatic.com/fp/ac089d70e77c3975c9b67044efe480c6-p_e.jpg" alt="" />
            <h2> $1,700,000 </h2>
            <h4>  6 bds5 ba3,727 sqftActive </h4>
            <h4>350 County Road 497, Taylor, TX 76574 </h4>
            <p>KELLER WILLIAMS - LAKE TRAVIS. Listing provided by ABOR</p>
          </div>
          <div>
            <img src="https://photos.zillowstatic.com/fp/590d815b65a39d6ad69e37f9de4be580-p_e.jpg" alt="" />
            <h2> $1,700,000 </h2>
            <h4>  6 bds5 ba3,727 sqftActive </h4>
            <h4>350 County Road 497, Taylor, TX 76574 </h4>
            <p>KELLER WILLIAMS - LAKE TRAVIS. Listing provided by ABOR</p>
          </div>
          <div>
            <img src="https://photos.zillowstatic.com/fp/53b7e30889ece9402443965f9cce9aef-p_e.jpg" alt="" />
            <h2> $1,700,000 </h2>
            <h4>  6 bds5 ba3,727 sqftActive </h4>
            <h4>350 County Road 497, Taylor, TX 76574 </h4>
            <p>KELLER WILLIAMS - LAKE TRAVIS. Listing provided by ABOR</p>
          </div>
          <div> 
            <img src="https://photos.zillowstatic.com/fp/bb1d824e4d58b0637ae2babf45d3c6b2-p_e.jpg" alt="" />
            <h2> $1,700,000 </h2>
            <h4>  6 bds5 ba3,727 sqftActive </h4>
            <h4>350 County Road 497, Taylor, TX 76574 </h4>
            <p>KELLER WILLIAMS - LAKE TRAVIS. Listing provided by ABOR</p>
          </div>
          <div>
            <img src="https://photos.zillowstatic.com/fp/e69febe5a8499e08d954863d9a923e52-p_e.jpg" alt="" />
            <h2> $1,700,000 </h2>
            <h4>  6 bds5 ba3,727 sqftActive </h4>
            <h4>350 County Road 497, Taylor, TX 76574 </h4>
            <p>KELLER WILLIAMS - LAKE TRAVIS. Listing provided by ABOR</p>
          </div>
          <div>
            <img src="https://photos.zillowstatic.com/fp/5ac2412db78590b9c97a9c1af8bf712a-p_e.jpg" alt="" />
            <h2> $1,700,000 </h2>
            <h4>  6 bds5 ba3,727 sqftActive </h4>
            <h4>350 County Road 497, Taylor, TX 76574 </h4>
            <p>KELLER WILLIAMS - LAKE TRAVIS. Listing provided by ABOR</p>
          </div>
        </Slider>
      </div>
    );
  }
}