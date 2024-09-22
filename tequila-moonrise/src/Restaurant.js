import React, { useRef } from 'react';
import VideoBackground from './Background.js';
import bgVideo from './Starsbg.mp4'; 
import food1 from './food1.webp';
import food2 from './food2.webp';
import food3 from './food3.jpg';
import food4 from './food4.jpg';
import './Background.css';
import './Restaurant.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodCard from './FoodCard.js';

import MenuFlipBook from './MenuFlipBook.js';

const Restaurant = () => {
    const menuRef = useRef(null);
    const scrollToMenu = () => {
        menuRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='maincontainer'>
            <VideoBackground videoSrc={bgVideo} />

            {/* Food Header */}
            <div>
                <div className='foodHeader'>
                    <div className='menu'>
                        <button onClick={scrollToMenu}>Menu</button>
                    </div>
                    <div className='headerTitle'>
                        <span>Chef's Recommendation</span>
                    </div>
                </div>
            </div>

            {/* Food Cards */}
            <div className='chefRecoContainer'>
                <div className='foodCard'>
                    <FoodCard
                        imageSrc={food1}
                        foodname="Food 1"
                        fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <div className='foodCard'>
                    <FoodCard
                        imageSrc={food2}
                        foodname="Food 2"
                        fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <div className='foodCard'>
                    <FoodCard
                        imageSrc={food3}
                        foodname="Food 3"
                        fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
                <div className='foodCard'>
                    <FoodCard
                        imageSrc={food4}
                        foodname="Food 4"
                        fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </div>

            <div ref={menuRef}>
                <MenuFlipBook />
            </div>

            
        </div>
    );
};

export default Restaurant;
