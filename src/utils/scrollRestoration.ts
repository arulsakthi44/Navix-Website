import { useCallback, useEffect } from 'react';
import { useNavigate, useLocation, useNavigationType } from 'react-router-dom';

const WORK_SCROLL_KEY = 'navix_work_scroll_state';
const MAX_RESTORE_AGE_MS = 2 * 60 * 60 * 1000; // 2 hours

export interface WorkScrollState {
  projectId: number;
  scrollY: number;
  workUrl: string;
  timestamp: number;
}

/**
 * Saves current scroll position and selected project ID before navigating
 * from the Work page to a project detail page.
 */
export function saveWorkPageScroll(projectId: number): WorkScrollState {
  const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
  const workUrl = window.location.pathname + window.location.search;
  const state: WorkScrollState = {
    projectId,
    scrollY,
    workUrl,
    timestamp: Date.now(),
  };

  try {
    sessionStorage.setItem(WORK_SCROLL_KEY, JSON.stringify(state));
  } catch {
    // Ignore storage quota or disabled storage exceptions
  }

  return state;
}

/**
 * Retrieves valid saved scroll state from sessionStorage.
 */
export function getSavedWorkScroll(): WorkScrollState | null {
  try {
    const raw = sessionStorage.getItem(WORK_SCROLL_KEY);
    if (!raw) return null;
    const parsed: WorkScrollState = JSON.parse(raw);
    if (Date.now() - parsed.timestamp > MAX_RESTORE_AGE_MS) {
      sessionStorage.removeItem(WORK_SCROLL_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Clears saved Work page scroll state (e.g., when intentionally navigating afresh to Work).
 */
export function clearSavedWorkScroll(): void {
  try {
    sessionStorage.removeItem(WORK_SCROLL_KEY);
  } catch {}
}

/**
 * Checks if the navigation to /projects is a return action (Back to Projects or browser Back)
 * that should restore scroll position instead of forcing scroll-to-top.
 */
export function shouldRestoreWorkScroll(
  location: { pathname: string; state?: any },
  navigationType?: string
): boolean {
  if (location.pathname !== '/projects') return false;

  // 1. Explicit restore flag from Back to Projects navigation
  if (location.state?.restoreScroll) return true;

  // 2. Browser Back or Forward (POP navigation) with valid saved state
  if (navigationType === 'POP') {
    const saved = getSavedWorkScroll();
    if (saved && saved.workUrl === location.pathname) return true;
  }

  return false;
}

/**
 * Shared hook used in project detail pages to return to the originating Work page
 * with preserved scroll position.
 */
export function useBackToProjects() {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(() => {
    // If the visitor arrived from the Work page in the current session,
    // use browser back (navigate(-1)) to restore position via browser history
    if (location.state?.fromWorkPage && window.history.length > 1) {
      navigate(-1);
      return;
    }

    // If detail page was refreshed or accessed in the same tab, use sessionStorage
    const saved = getSavedWorkScroll();
    if (saved?.workUrl) {
      navigate(saved.workUrl, {
        state: {
          restoreScroll: true,
          ...saved,
        },
      });
      return;
    }

    // Direct link or external arrival with no originating list state -> fresh top visit
    navigate('/projects');
  }, [navigate, location]);
}

/**
 * Shared hook used on the Work page (Projects.tsx) to reliably restore
 * the scroll position when returning from a project detail page.
 */
export function useWorkPageScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Prevent browser's native restoration from clashing with custom layout timing
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    const isReturn = shouldRestoreWorkScroll(location, navigationType);
    if (!isReturn) return;

    const saved = getSavedWorkScroll();
    if (!saved) return;

    let isCancelled = false;

    // Cancel restoration immediately if the visitor starts scrolling manually
    const cancelRestoration = () => {
      isCancelled = true;
      detachListeners();
    };

    const detachListeners = () => {
      window.removeEventListener('wheel', cancelRestoration);
      window.removeEventListener('touchmove', cancelRestoration);
      window.removeEventListener('keydown', cancelRestoration);
    };

    window.addEventListener('wheel', cancelRestoration, { passive: true });
    window.addEventListener('touchmove', cancelRestoration, { passive: true });
    window.addEventListener('keydown', cancelRestoration, { passive: true });

    const performRestore = () => {
      if (isCancelled) return;

      const targetCard = document.getElementById(`project-card-${saved.projectId}`);
      const navOffset = 90; // sticky header allowance

      if (targetCard) {
        const rect = targetCard.getBoundingClientRect();
        const currentScroll = window.scrollY || document.documentElement.scrollTop || 0;
        const cardAbsoluteTop = rect.top + currentScroll;

        // Check if saved.scrollY places the target card comfortably in view
        const expectedCardTopInViewport = cardAbsoluteTop - saved.scrollY;
        const isCardVisible =
          expectedCardTopInViewport >= 0 &&
          expectedCardTopInViewport <= window.innerHeight * 0.8;

        if (isCardVisible && saved.scrollY > 0) {
          window.scrollTo({ top: saved.scrollY, left: 0, behavior: 'instant' });
          document.documentElement.scrollTop = saved.scrollY;
          document.body.scrollTop = saved.scrollY;
        } else {
          // Fallback anchor: position target card cleanly below sticky header
          const anchorTop = Math.max(0, cardAbsoluteTop - navOffset);
          window.scrollTo({ top: anchorTop, left: 0, behavior: 'instant' });
          document.documentElement.scrollTop = anchorTop;
          document.body.scrollTop = anchorTop;
        }
      } else if (saved.scrollY > 0) {
        window.scrollTo({ top: saved.scrollY, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = saved.scrollY;
        document.body.scrollTop = saved.scrollY;
      }
    };

    // Execute immediately and re-check on consecutive animation frames
    performRestore();
    const frame1 = requestAnimationFrame(() => {
      if (!isCancelled) performRestore();
      const frame2 = requestAnimationFrame(() => {
        if (!isCancelled) {
          performRestore();
          detachListeners();
        }
      });
      return () => cancelAnimationFrame(frame2);
    });

    return () => {
      cancelAnimationFrame(frame1);
      detachListeners();
    };
  }, [location, navigationType]);
}
