'use client';

import { motion } from 'motion/react';
import '../styles/featured-projects-card.scss';

const projects = [
  {
    name: 'Julius San Jose Portfolio',
    type: ['Next.js', 'Motion', 'SCSS'],
  },
  {
    name: 'React Fast Bento',
    type: ['NPM Package'],
  },
  {
    name: 'Daffodil Flower Shop',
    type: ['Branding', 'Ecommerce Experience', 'Custom Integrations'],
  },
  {
    name: 'Pitakapal',
    type: ['Web App', 'Finance', 'School Project'],
  },
  {
    name: 'OLFU Commute Smart',
    type: ['Transport', 'Freelance', 'OLFU'],
  },
  {
    name: 'Graphe Notetaking App',
    type: ['Notetaking', 'Productivity', 'School Project'],
  },
  {
    name: 'Markdown Table Repair',
    type: ['Markdown', 'Tool', 'Open Source'],
  },
];

export function FeaturedProjectsCard() {
  return (
    <div className="featured-projects-card">
      <motion.h2
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="projects-title"
      >
        Featured Projects
      </motion.h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="project-row"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: index * 0.08 }}
            whileHover={{ x: 6 }}
          >
            <span className="project-name">{project.name}</span>
            <span className="project-type">{project.type.join(' • ')}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
