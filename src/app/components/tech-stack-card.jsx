'use client';

import { motion } from 'motion/react';
import Marquee from 'react-fast-marquee';
import '../styles/tech-stack-card.scss';

const techStack = [
  {
    name: 'Next.js',
    logo: 'https://skillicons.dev/icons?i=nextjs',
    category: 'Framework',
  },
  {
    name: 'React',
    logo: 'https://skillicons.dev/icons?i=react',
    category: 'Framework',
  },
  {
    name: 'TypeScript',
    logo: 'https://skillicons.dev/icons?i=ts',
    category: 'Language',
  },
  {
    name: 'Three.js',
    logo: 'https://skillicons.dev/icons?i=threejs',
    category: '3D',
  },
  {
    name: 'SCSS',
    logo: 'https://skillicons.dev/icons?i=scss',
    category: 'Styling',
  },
  {
    name: 'Node.js',
    logo: 'https://skillicons.dev/icons?i=nodejs',
    category: 'Backend',
  },
  {
    name: 'Git',
    logo: 'https://skillicons.dev/icons?i=git',
    category: 'Tools',
  },
  {
    name: 'GitHub',
    logo: 'https://skillicons.dev/icons?i=github',
    category: 'Tools',
  },
  {
    name: 'Python',
    logo: 'https://skillicons.dev/icons?i=python',
    category: 'Language',
  },
  {
    name: 'JavaScript',
    logo: 'https://skillicons.dev/icons?i=js',
    category: 'Language',
  },
  {
    name: 'HTML',
    logo: 'https://skillicons.dev/icons?i=html',
    category: 'Markup',
  },
  {
    name: 'CSS',
    logo: 'https://skillicons.dev/icons?i=css',
    category: 'Styling',
  },
];

export function TechStackCard() {
  return (
    <div className="tech-stack-card">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="tech-stack-title"
      >
        Tech Stack
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="tech-stack-description"
      >
        I chose these technologies for their modern capabilities, performance,
        and ability to create engaging user experiences. Next.js provides
        server-side rendering and optimal performance, React enables
        component-based development, TypeScript ensures type safety, Three.js
        powers immersive 3D graphics, and SCSS offers powerful styling
        capabilities.
      </motion.p>

      <div className="marquee-container">
        <Marquee speed={50} gradient={false} pauseOnHover={true}>
          {techStack.map((tech, index) => (
            <div key={`${tech.name}-${index}`} className="tech-item">
              <div className="tech-logo">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <span className="tech-name">{tech.name}</span>
              <span className="tech-category">{tech.category}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
