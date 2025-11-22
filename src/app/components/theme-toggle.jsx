'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import '../styles/theme-toggle.scss';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const iconVariants = {
    initial: {
      scale: 0,
      rotate: -180,
      opacity: 0,
    },
    animate: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
    exit: {
      scale: 0,
      rotate: 180,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonVariants = {
    tap: {
      scale: 0.95,
    },
    hover: {
      scale: 1.1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <motion.button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="theme-toggle"
      aria-label="Toggle theme"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <AnimatePresence mode="wait">
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="icon-wrapper"
          >
            <Sun className="theme-icon" size={20} />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="icon-wrapper"
          >
            <Moon className="theme-icon" size={20} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
