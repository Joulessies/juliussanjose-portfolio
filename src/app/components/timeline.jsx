'use client';

import { motion } from 'motion/react';
import '../styles/timeline.scss';

const timelineData = [
  {
    id: 1,
    year: '2024',
    title: 'Capstone Project Lead',
    organization: 'TIP - IT 4-2',
    description:
      'Leading security-first development for final year capstone project. Implementing threat modeling and secure coding practices while maintaining polished UX.',
    type: 'project',
    tags: ['Leadership', 'Security', 'Full-Stack'],
  },
  {
    id: 2,
    year: '2023',
    title: 'React Fast Bento',
    organization: 'Open Source',
    description:
      'Published NPM package for creating beautiful bento grid layouts. Gained traction in the React community with clean API design.',
    type: 'achievement',
    tags: ['React', 'NPM', 'Open Source'],
  },
  {
    id: 3,
    year: '2022-Present',
    title: 'Information Technology Student',
    organization: 'Technological Institute of the Philippines',
    description:
      'Specializing in cybersecurity and software development. Focus on building secure systems, expressive interfaces, and developer tools.',
    type: 'education',
    tags: ['Cybersecurity', 'Software Dev', 'IT'],
  },
  {
    id: 4,
    year: '2023',
    title: 'Peer Mentor Program',
    organization: 'TIP IT Department',
    description:
      'Running mentoring circles on secure coding defaults and developer experience. Helping junior classmates ship dependable products faster.',
    type: 'achievement',
    tags: ['Mentorship', 'Teaching', 'Community'],
  },
  {
    id: 5,
    year: '2023',
    title: 'Daffodil Flower Shop',
    organization: 'Client Project',
    description:
      'Built custom e-commerce experience with branding integration. Focused on conversion optimization and seamless checkout flow.',
    type: 'project',
    tags: ['E-commerce', 'Next.js', 'Design'],
  },
];

const typeIcons = {
  education: '🎓',
  project: '💼',
  achievement: '🏆',
};

export function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-header">
        <p className="timeline-eyebrow">Journey</p>
        <h2>My Timeline</h2>
      </div>
      <div className="timeline">
        <div className="timeline-line" />
        {timelineData.map((item, index) => (
          <motion.div
            key={item.id}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="timeline-marker">
              <span className="timeline-icon">{typeIcons[item.type]}</span>
            </div>
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-organization">{item.organization}</p>
              <p className="timeline-description">{item.description}</p>
              <div className="timeline-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="timeline-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

