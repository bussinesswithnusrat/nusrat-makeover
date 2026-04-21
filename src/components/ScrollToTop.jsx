import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Standard full page refresh simulation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Can also be 'smooth', but 'instant' acts more like a full refresh
    });
  }, [pathname]);

  return null;
}
