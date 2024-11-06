import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../img/restaurantimage1.png';
import CarouselImage2 from '../img/restaurantimage2.png'; 
import CarouselImage3 from '../img/restaurantimage3.png';

function RestaurantMediaCarousel() {
  return (
    <Carousel fade>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImage1}
          alt="First slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImage2}
          alt="Second slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CarouselImage3}
          alt="Third slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default RestaurantMediaCarousel;
