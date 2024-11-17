import { useState } from 'react';

export function usePageTransition(onTransitionEnd) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideClass, setSlideClass] = useState('');
  const [videoClass, setVideoClass] = useState('');

  const triggerTransition = (callback) => {
    setIsTransitioning(true);
    setSlideClass('slide-up'); // Start the slide-up overlay effect
    setVideoClass('slide-up-video'); // Start the video slide-up effect

    // Wait briefly to ensure the class is applied before playing the video
    setTimeout(() => {
      const videoElement = document.getElementById('transition-video');

      // Preload the next page content before video starts exiting
      if (callback) callback(); // Navigate to the next page now

      // Listen for the `timeupdate` event to trigger the slide-up animation
      videoElement.ontimeupdate = () => {
        const remainingTime = videoElement.duration - videoElement.currentTime;
        if (remainingTime <= 2) {
          // Start the slide-up exit animation
          setSlideClass('slide-up-exit');
          setVideoClass('slide-up-exit-video');
        }
      };

      videoElement.play();

      // Reset transition state when the video ends
      videoElement.onended = () => {
        setTimeout(() => {
          setIsTransitioning(false); // Reset the transition state
          if (onTransitionEnd) onTransitionEnd(); // Call onTransitionEnd if provided
        }, 1000); // Exit animation duration
      };
    }, 100);
  };

  return { isTransitioning, triggerTransition, slideClass, videoClass };
}
