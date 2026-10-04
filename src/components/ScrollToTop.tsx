import { useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';
import { shouldRestoreWorkScroll } from '../utils/scrollRestoration';

export function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    // Prevent global scroll-to-top from overriding Work page scroll restoration
    if (shouldRestoreWorkScroll(location, navigationType)) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname, location.search, navigationType]);

  useEffect(() => {
    if (shouldRestoreWorkScroll(location, navigationType)) {
      return;
    }

    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 10);
    return () => clearTimeout(timer);
  }, [location.pathname, location.search, navigationType]);

  return null;
}
