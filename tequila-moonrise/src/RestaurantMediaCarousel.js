import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from './restaurantimage1.png';
import CarouselImage2 from './restaurantimage2.png'; 

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
          src={CarouselImage2}
          alt="Third slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}

export default RestaurantMediaCarousel;
