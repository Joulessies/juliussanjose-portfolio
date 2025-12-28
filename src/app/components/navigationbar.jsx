'use client';

import Link from 'next/link';
import { Github } from 'lucide-react';
import '../styles/navigationbar.scss';
import { ThemeToggle } from './theme-toggle';
import { MobileNav } from './mobile-nav';
import { motion } from 'motion/react';

export default function NavigationBar() {
  return (
    <motion.nav
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0 }}
      className="navbar"
    >
      <div className="navbar-logo">
        <p className="logo-text">Julius San Jose</p>
      </div>

      <ul className="navbar-links desktop-only">
        <li className="navbar-item">
          <Link className="navbar-link" href="/">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" href="/works">
            Works
          </Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" href="/about">
            About
          </Link>
        </li>
        <li className="navbar-item">
          <a
            className="navbar-link source-link"
            href="https://github.com/Joulessies/juliussanjose-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
            <span>Source</span>
          </a>
        </li>
      </ul>

      <div className="navbar-actions desktop-only">
        <ThemeToggle />
      </div>

      <MobileNav />
    </motion.nav>
  );
}
