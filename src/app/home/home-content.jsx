'use client';

import { motion } from 'motion/react';
import '../styles/home-content.scss';
import { ShaderGradientCard } from '../components/shader-gradient-card';
import { TechStackCard } from '../components/tech-stack-card';
import { FeaturedProjectsCard } from '../components/featured-projects-card';

export default function HomeContent() {
  return (
    <motion.main
      className="page-content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="bento-grid">
        <div className="item item1">
          <ShaderGradientCard />
          <div className="item-content">
            <h1>Welcome Stranger</h1>
          </div>
        </div>
        <div className="item item2">
          <TechStackCard />
        </div>
        <div className="item item3">
          <FeaturedProjectsCard />
        </div>
        <div className="item item4">Item 4</div>
        <div className="item item4">Item 5</div>
        <div className="item item4">Item 6</div>
      </div>
    </motion.main>
  );
}
