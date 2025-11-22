'use client';

import { useTheme } from 'next-themes';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import '../styles/theme-background.scss';

export function ThemeBackground() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="theme-background">
      <motion.div
        className="background-gradient"
        animate={{
          background:
            theme === 'dark'
              ? 'radial-gradient(circle at 20% 50%, rgba(120, 60, 255, 0.15) 0%, transparent 50%)'
              : 'radial-gradient(circle at 80% 50%, rgba(255, 200, 100, 0.1) 0%, transparent 50%)',
        }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      />
      <motion.div
        className="background-gradient-2"
        animate={{
          background:
            theme === 'dark'
              ? 'radial-gradient(circle at 80% 80%, rgba(60, 120, 255, 0.1) 0%, transparent 50%)'
              : 'radial-gradient(circle at 20% 20%, rgba(100, 200, 255, 0.08) 0%, transparent 50%)',
        }}
        transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
      />
    </div>
  );
}
