import { useEffect } from 'react';

/**
 * Custom hook to lock body and html scroll 100% when any modal/drawer is open.
 * Prevents background movement, bounce, chaining and touch bleeding on mobile & desktop.
 */
export function useBodyScrollLock(isLocked) {
  useEffect(() => {
    if (!isLocked) return;

    // Get current scroll position
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
    // Save original styles
    const originalBodyStyle = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
      touchAction: document.body.style.touchAction
    };

    // Apply strict freeze locks
    document.documentElement.classList.add('modal-open');
    document.body.classList.add('modal-open');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Global wheel & touch handler to reject any backdrop bleed
    const handleTouch = (e) => {
      const target = e.target;
      const isInsideModal = target && target.closest && target.closest('.modal-scrollable');
      if (!isInsideModal) {
        if (e.cancelable) {
          e.preventDefault();
        }
      }
    };

    window.addEventListener('touchmove', handleTouch, { passive: false });

    return () => {
      window.removeEventListener('touchmove', handleTouch);
      document.documentElement.classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      document.body.style.position = originalBodyStyle.position || '';
      document.body.style.top = originalBodyStyle.top || '';
      document.body.style.left = originalBodyStyle.left || '';
      document.body.style.right = originalBodyStyle.right || '';
      document.body.style.width = originalBodyStyle.width || '';
      document.body.style.overflow = originalBodyStyle.overflow || '';
      document.documentElement.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }, [isLocked]);
}
