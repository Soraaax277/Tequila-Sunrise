export const initializeBook = (setCurrentLocation) => {
    const book = document.getElementById("book");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
  
    let currentLocation = 1;
    const numOfPapers = 3;
    const maxLocation = numOfPapers + 1;
  
    const openBook = () => {
      book.style.transform = "translateX(50%)";
      prevBtn.style.transform = "translateX(-180px)";
      nextBtn.style.transform = "translateX(180px)";
    };
  
    const closeBook = (isAtBeginning) => {
      if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
      } else {
        book.style.transform = "translateX(100%)";
      }
      prevBtn.style.transform = "translateX(0px)";
      nextBtn.style.transform = "translateX(0px)";
    };
  
    const goNextPage = () => {
      if (currentLocation < maxLocation) {
        switch (currentLocation) {
          case 1:
            openBook();
            document.getElementById("p1").classList.add("flipped");
            document.getElementById("p1").style.zIndex = 1;
            break;
          case 2:
            document.getElementById("p2").classList.add("flipped");
            document.getElementById("p2").style.zIndex = 2;
            break;
          case 3:
            document.getElementById("p3").classList.add("flipped");
            document.getElementById("p3").style.zIndex = 3;
            closeBook(false);
            break;
          default:
            throw new Error("unknown state");
        }
        currentLocation++;
        setCurrentLocation(currentLocation);
      }
    };
  
    const goPrevPage = () => {
      if (currentLocation > 1) {
        switch (currentLocation) {
          case 2:
            closeBook(true);
            document.getElementById("p1").classList.remove("flipped");
            document.getElementById("p1").style.zIndex = 3;
            break;
          case 3:
            document.getElementById("p2").classList.remove("flipped");
            document.getElementById("p2").style.zIndex = 2;
            break;
          case 4:
            openBook();
            document.getElementById("p3").classList.remove("flipped");
            document.getElementById("p3").style.zIndex = 1;
            break;
          default:
            throw new Error("unknown state");
        }
        currentLocation--;
        setCurrentLocation(currentLocation);
      }
    };
  
    return { goNextPage, goPrevPage };
  };