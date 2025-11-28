'use client';

import { AnimatePresence, motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const routeLabels = {
  '/': 'Home',
  '/works': 'Works',
  '/about': 'About',
};

export function PageTransition({ children }) {
  const pathname = usePathname();
  const [currentLabel, setCurrentLabel] = useState(
    routeLabels[pathname] ?? 'Julius San Jose'
  );
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setCurrentLabel(routeLabels[pathname] ?? 'Julius San Jose');
    setShowOverlay(true);
    const timer = setTimeout(() => setShowOverlay(false), 900);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className="page-transition-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key={currentLabel}
            className="page-transition-overlay"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {currentLabel}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
