import React, { useRef } from 'react';
import VideoBackground from '../components/js_functions/Background.js';
import food1 from '../components/img/restaurantfood1.png';
import food2 from '../components/img/restaurantfood2.png';
import food3 from '../components/img/restaurantfood3.png';
import food4 from '../components/img/restaurantfood4.png';
import '../css/Restaurant.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantFoodCard from '../components/js_functions/RestaurantFoodCard.js';
import MenuFlipBook from '../components/js_functions/RestaurantMenuFlipBook.js';
import RestoReserveForm from '../components/js_functions/Restaurant_Reserve.js';
import RestaurantMediaCarousel from '../components/js_functions/RestaurantMediaCarousel.js';

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
                        foodname="Savory Surf and Turf"
                        fooddescription="Tender, grilled steak and succulent shrimp, perfectly seasoned and grilled to perfection"
                    />
                </div>
                <div className='foodCard'>
                    <RestaurantFoodCard
                        imageSrc={food2}
                        foodname="Buttered Lobster Delight"
                        fooddescription="Ultimate luxury with our succulent lobster, lightly steamed to preserve its natural sweetness and drizzled with rich, melted butter"
                    />
                </div>
                <div className='foodCard'>
                    <RestaurantFoodCard
                        imageSrc={food3}
                        foodname="Hearty Meat and Vegetable Medley"
                        fooddescription="Perfectly seared meat wrapped around a vibrant assortment of seasonal vegetables"
                    />
                </div>
                <div className='foodCard'>
                    <RestaurantFoodCard
                        imageSrc={food4}
                        foodname="Tomato Sunrise"
                        fooddescription="Ripe, juicy tomatoes layered with creamy, melted cheese"
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