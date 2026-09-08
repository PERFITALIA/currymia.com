import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function usePageLoader() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
    
    // Trigger page loader on route change
    // This can be expanded to trigger other loading logic
  }, [location.pathname]);
}
