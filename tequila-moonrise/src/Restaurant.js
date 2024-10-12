import React, { useRef } from 'react';
import VideoBackground from './Background.js';
import bgVideo from './Starsbg.mp4'; 
import food1 from './restaurantfood1.png';
import food2 from './restaurantfood2.png';
import food3 from './restaurantfood3.png';
import food4 from './restaurantfood4.png';
import './Background.css';
import './Restaurant.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantFoodCard from './RestaurantFoodCard.js';
import MenuFlipBook from './RestaurantMenuFlipBook.js';
import RestoReserveForm from './Restaurant_Reserve.js';
import RestaurantMediaCarousel from './RestaurantMediaCarousel.js';

const Restaurant = () => {
    const menuRef = useRef(null);
    const reserveRef = useRef(null);
    const scrollToMenu = () => {
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    const scrollToReserve = () => {
        reserveRef.current.scrollIntoView({ behavior: 'smooth' });
    };
    

    return (
        <div className='maincontainer'>

            <div className='restoHeaderContainer'>
                <div className='carouselContainer'>
                    <RestaurantMediaCarousel />
                </div>
                
                <div className='restaurantNameContainer'>
                    <p className='restoName'>The Golden Star</p>
                    <div className='restoBtn'>
                        <button className='btnHeader' onClick={scrollToMenu}>Menu</button>
                        <button  className='btnHeader' onClick={scrollToReserve}>Reserve</button>
                    </div>
                </div>
            </div>           

            {/* Food Cards */}
            <div className='chefRecoContainer'>
                <p className='headerTitle'>Chef's Recommendation</p>

                <div className='foodCard'>
                    <RestaurantFoodCard
                        imageSrc={food1}
                        foodname="Food 1"
                        fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <div className='foodCard'>
                    <RestaurantFoodCard
                        imageSrc={food2}
                        foodname="Food 2"
                        fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <div className='foodCard'>
                    <RestaurantFoodCard
                        imageSrc={food3}
                        foodname="Food 3"
                        fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <div className='foodCard'>
                    <RestaurantFoodCard
                        imageSrc={food4}
                        foodname="Food 4"
                        fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </div>

            <div ref={menuRef}>
                <MenuFlipBook />
            </div>

            <div className='restaurantReservation'>
                <p className='headerTitle'>Reservation</p>
                <div ref={reserveRef}>
                    <RestoReserveForm />
                </div>
            </div>

            
        </div>
    );
};

export default Restaurant;