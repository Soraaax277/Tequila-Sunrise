import { useState } from 'react';

export function usePageTransition(onTransitionEnd) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [fadeClass, setFadeClass] = useState('');

  const triggerTransition = (callback) => {
    setIsTransitioning(true);

    // Start the fade-in effect
    setTimeout(() => {
      setFadeClass('fade-in'); 

      // Trigger the navigation after fade-in ends 
      setTimeout(() => {
        if (callback) callback(); 

        // Start the fade-out effect after the navigation starts
        setFadeClass('fade-out');

        setTimeout(() => {
          setIsTransitioning(false);
          if (onTransitionEnd) onTransitionEnd(); // Call the onTransitionEnd callback
        }, 1000); // Duration of the fade-out
      }, 1000); // Wait for the fade-in to complete 
      
    }, 100); // Small delay before starting fade-in
  };

  return { isTransitioning, triggerTransition, fadeClass };
}
