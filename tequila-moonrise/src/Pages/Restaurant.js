import React, { useState, useEffect } from 'react';
import VideoBackground from '../Functions/Background';
import bgVideo from '../img/Starsbg.mp4'; 
import food1 from '../img/food1.webp';
import food2 from '../img/food2.webp';
import food3 from '../img/food3.jpg';
import food4 from '../img/food4.jpg';
import '../PagesCss/Background.css';
import '../PagesCss/Restaurant.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodCard from '../Functions/FoodCard.js';
import { initializeBook } from '../Functions/MenuFlipBook.js';

const Restaurant = () => {
    const [currentLocation, setCurrentLocation] = useState(1);

    useEffect(() => {
      const { goNextPage, goPrevPage } = initializeBook(setCurrentLocation);
  
      // Set button click handlers
      document.getElementById("next-btn").onclick = goNextPage;
      document.getElementById("prev-btn").onclick = goPrevPage;
  
      // Cleanup function to remove handlers on unmount
      return () => {
        document.getElementById("next-btn").onclick = null;
        document.getElementById("prev-btn").onclick = null;
      };
    }, []);
  

  return (
    <div className='maincontainer'>
      <VideoBackground videoSrc={bgVideo} />

        <div>
            <div className='foodHeader'>
                <div className='menu'>
                    <button>Menu</button>
                </div>
                <div className='headerTitle'>
                    <span>Chef's Recommendation</span>
                </div>
            </div>
        </div>

        <div className='chefRecoContainer'>
            <div className='foodCard'>
                <FoodCard
                    imageSrc={food1}
                    foodname="Food 1" 
                    fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                />
            </div> 

            <div className='foodCard'>
            <FoodCard
                    imageSrc={food2}
                    foodname="Food 2" 
                    fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                /> 
            </div>

            <div className='foodCard'>
                <FoodCard
                    imageSrc={food3}
                    foodname="Food 3" 
                    fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                />
            </div> 

            <div className='foodCard'>
            <FoodCard
                    imageSrc={food4}
                    foodname="Food 4" 
                    fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                /> 
            </div>

            <div className='foodCard'>
                <FoodCard
                    imageSrc={food1}
                    foodname="Food 5" 
                    fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                />
            </div> 

            <div className='foodCard'>
            <FoodCard
                    imageSrc={food2}
                    foodname="Food 6" 
                    fooddescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
                /> 
            </div>
        </div>

        <div className='Menu'>
            <div className='foodHeader'>
                <div className='menu'>
                    <button>Menu</button>
                </div>
                <div className='headerTitle'>
                    <span>Menu</span>
                </div>
            </div>
        </div>

        {/* Book Structure */}
        <button id="prev-btn">
          <i className="fas fa-arrow-circle-left"></i>
        </button>

        <div id="book" className="book">
          {Array.from({ length: 3 }, (_, index) => (
            <div id={`p${index + 1}`} className="paper" key={index}>
              <div className="front">
                <div id={`f${index + 1}`} className="front-content">
                  <h1>Front {index + 1}</h1>
                </div>
              </div>
              <div className="back">
                <div id={`b${index + 1}`} className="back-content">
                  <h1>Back {index + 1}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button id="next-btn">
          <i className="fas fa-arrow-circle-right"></i>
        </button>
      </div>

  );
};

export default Restaurant;