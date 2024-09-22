import React, { useState, useRef } from "react";
import "./Restaurant.css"; // Ensure your styles are correctly imported
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const MenuFlipBook = () => {
  const [currentLocation, setCurrentLocation] = useState(1);
  const numOfPapers = 3;
  const maxLocation = numOfPapers + 1;

  const bookRef = useRef(null);
  const paperRefs = [useRef(null), useRef(null), useRef(null)];

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
          paperRefs[0].current.style.zIndex = 3;
          break;
        case 3:
          paperRefs[1].current.classList.remove("flipped");
          paperRefs[1].current.style.zIndex = 2;
          break;
        case 4:
          openBook();
          paperRefs[2].current.classList.remove("flipped");
          paperRefs[2].current.style.zIndex = 1;
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
                  <h1>Front 1</h1>
                </div>
              </div>
              
              <div className="back">
                <div id="b1" className="back-content">
                  <h1>Back 1</h1>
                </div>
              </div>
            </div>
            
            {/* Paper 2 */}
            <div id="p2" className="paper" ref={paperRefs[1]}>
              
              <div className="front">
                <div id="f2" className="front-content">
                  <h1>Front 2</h1>
                </div>
              </div>
              
              <div className="back">
                <div id="b2" className="back-content">
                  <h1>Back 2</h1>
                </div>
              </div>
            </div>
            
            {/* Paper 3 */}
            <div id="p3" className="paper" ref={paperRefs[2]}>
              
              <div className="front">
                <div id="f3" className="front-content">
                  <h1>Front 3</h1>
                </div>
              </div>
              
              <div className="back">
                <div id="b3" className="back-content">
                  <h1>Back 3</h1>
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
