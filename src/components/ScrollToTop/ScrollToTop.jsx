// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Using a small timeout to ensure the scroll happens after the component renders
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0); // This gives the render cycle a chance to complete before scrolling
  }, [location]);

  return null;
};

export default ScrollToTop;
