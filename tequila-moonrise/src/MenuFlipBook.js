import React, { useState, useRef } from "react";
import "./Restaurant.css"; // Ensure your styles are correctly imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowCircleLeft,faArrowCircleRight,} from "@fortawesome/free-solid-svg-icons";
import frontCover from './Menu1.png';
import page1back from './Menu2.png';
import page2front from './Menu3.png';
import page2back from './Menu4.png';
import page3front from './Menu5.png';
import page3back from './Menu6.png';
import page4front from './Menu7.png';
import page4back from './Menu8.png';


const MenuFlipBook = () => {
  const [currentLocation, setCurrentLocation] = useState(1);
  const numOfPapers = 4;
  const maxLocation = numOfPapers + 1;

  const bookRef = useRef(null);
  const paperRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const openBook = () => {
    bookRef.current.style.transform = "translateX(50%)";
  };

  const closeBook = (isAtBeginning) => {
    bookRef.current.style.transform = isAtBeginning
      ? "translateX(0%)"
      : "translateX(100%)";
  };

  const goNextPage = () => {
    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          openBook();
          paperRefs[0].current.classList.add("flipped");
          paperRefs[0].current.style.zIndex = 1;
          break;
        case 2:
          paperRefs[1].current.classList.add("flipped");
          paperRefs[1].current.style.zIndex = 2;
          break;
        case 3:
          paperRefs[2].current.classList.add("flipped");
          paperRefs[2].current.style.zIndex = 3;
          break;
        case 4:
          paperRefs[3].current.classList.add("flipped");
          paperRefs[3].current.style.zIndex = 4;
          closeBook(false);
          break;
        default:
          throw new Error("unknown state");
      }
      setCurrentLocation((prev) => prev + 1);
    }
  };

  const goPrevPage = () => {
    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          closeBook(true);
          paperRefs[0].current.classList.remove("flipped");
          paperRefs[0].current.style.zIndex = 4;
          break;
        case 3:
          paperRefs[1].current.classList.remove("flipped");
          paperRefs[1].current.style.zIndex = 3;
          break;
        case 4:
          openBook();
          paperRefs[2].current.classList.remove("flipped");
          paperRefs[2].current.style.zIndex = 2;
          break;
        case 5:
          openBook();
          paperRefs[3].current.classList.remove("flipped");
          paperRefs[3].current.style.zIndex = 1;
          break;
        default:
          throw new Error("unknown state");
      }
      setCurrentLocation((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className="menunavcontainer">
        {/* Book */}
        <div className="menuContainer">
          <div id="book" className="book" ref={bookRef}>
           
            {/* Paper 1 */}
            <div id="p1" className="paper" ref={paperRefs[0]}>
              
              <div className="front">
                <div id="f1" className="front-content">
                  <img src={frontCover} alt="menu cover" />
                </div>
              </div>
              
              <div className="back">
                <div id="b1" className="back-content">
                <img src={page1back} alt="Hors dOeuvre and Amuse-Bouche" />
                </div>
              </div>
            </div>
            
            {/* Paper 2 */}
            <div id="p2" className="paper" ref={paperRefs[1]}>
              
              <div className="front">
                <div id="f2" className="front-content">
                <img src={page2front} alt="Soup and Appetizer" />
                </div>
              </div>
              
              <div className="back">
                <div id="b2" className="back-content">
                <img src={page2back} alt="Salad and Fish" />
                </div>
              </div>
            </div>
            
            {/* Paper 3 */}
            <div id="p3" className="paper" ref={paperRefs[2]}>
              
              <div className="front">
                <div id="f3" className="front-content">
                <img src={page3front} alt="First Main Course and Palate Cleanser" />
                </div>
              </div>
              
              <div className="back">
                <div id="b3" className="back-content">
                <img src={page3back} alt="Second Main Course and Cheese Course" />
                </div>
              </div>

            </div>

            {/* Paper 4 */}
            <div id="p4" className="paper" ref={paperRefs[3]}>
              
              <div className="front">
                <div id="f4" className="front-content">
                <img src={page4front} alt="Dessert and Mignardise" />
                </div>
              </div>
              
              <div className="back">
                <div id="b4" className="back-content">
                <img src={page4back} alt="backCover" />
                </div>
              </div>

            </div>

          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="btnContainer">
          <button id="prev-btn" onClick={goPrevPage}>
            <FontAwesomeIcon className="btnIcon" icon={faArrowCircleLeft} />
          </button>
          <button id="next-btn" onClick={goNextPage}>
            <FontAwesomeIcon className="btnIcon" icon={faArrowCircleRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuFlipBook;