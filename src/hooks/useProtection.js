import { useState, useEffect } from 'react';

export default function useProtection() {
  const [isProtected, setIsProtected] = useState(false);

  useEffect(() => {
    // 1. DevTools Detection (Resize strategy)
    const checkDevTools = () => {
      const threshold = 160;
      const widthDiff = window.outerWidth - window.innerWidth > threshold;
      const heightDiff = window.outerHeight - window.innerHeight > threshold;
      
      if (widthDiff || heightDiff) {
        setIsProtected(true);
      } else {
        setIsProtected(false);
      }
    };

    // 2. Keyboard shortcuts block
    const handleKeyDown = (e) => {
      // Prevent F12
      if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        setIsProtected(true);
      }
      
      // Prevent Ctrl+U, Ctrl+S, Ctrl+C, Ctrl+Shift+I, Ctrl+Shift+J
      if (e.ctrlKey || e.metaKey) {
        const key = e.key.toLowerCase();
        if (key === 'u' || key === 's' || key === 'c') {
          // Allow copy in inputs
          if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            setIsProtected(true);
            setTimeout(() => setIsProtected(false), 2000); // Temporary warning
          }
        }
        if (e.shiftKey && (key === 'i' || key === 'j' || key === 'c')) {
          e.preventDefault();
          setIsProtected(true);
        }
      }
    };

    // 3. Right-click block
    const handleContextMenu = (e) => {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
      }
    };

    // 4. Drag block globally
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    // 5. Text Selection / Copy Block
    const handleCopy = (e) => {
      if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
      }
    };

    window.addEventListener('resize', checkDevTools);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('dragstart', handleDragStart);
    window.addEventListener('copy', handleCopy);
    window.addEventListener('cut', handleCopy);

    // Initial check
    checkDevTools();

    // Devtools Debugger timing trick
    let devtoolsOpen = false;
    const devtoolsDetector = setInterval(() => {
      const start = performance.now();
      // Only execute debugger if user opens console, this is the trick
      const check = new Function("debugger");
      check();
      if (performance.now() - start > 100) {
        devtoolsOpen = true;
        setIsProtected(true);
      }
    }, 2000);

    return () => {
      window.removeEventListener('resize', checkDevTools);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('copy', handleCopy);
      window.removeEventListener('cut', handleCopy);
      clearInterval(devtoolsDetector);
    };
  }, []);

  return isProtected;
}
