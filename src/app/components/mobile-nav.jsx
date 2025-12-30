'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeToggle } from './theme-toggle';
import '../styles/mobile-nav.scss';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) return null;

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
      },
    }),
  };

  const links = [
    { href: '/', label: 'Home' },
    { href: '/works', label: 'Works' },
    { href: '/about', label: 'About' },
    {
      href: 'https://drive.google.com/file/d/1m4JXhGirK2zeWFgnubkfjFGeZ0cUAE6n/view?usp=sharing',
      label: 'Resume',
      external: true,
    },
    {
      href: 'https://github.com/Joulessies/juliussanjose-portfolio',
      label: 'Source',
      external: true,
      icon: Github,
    },
  ];

  return (
    <>
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              className="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mobile-menu-header">
                <p className="mobile-menu-title">Menu</p>
                <ThemeToggle />
              </div>

              <ul className="mobile-menu-links">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-menu-link"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.icon && <link.icon size={18} />}
                        <span>{link.label}</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="mobile-menu-link"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
