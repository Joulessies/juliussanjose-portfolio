'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import NavigationBar from '../components/navigationbar';
import '../styles/works.scss';

const daffodilWork = {
  title: 'Daffodil Flower Shop',
  subtitle: 'Freelance · 2023',
  description:
    'A full-stack flower shop e-commerce platform built with Next.js 15 (App Router), Supabase for secure OAuth authentication (Google, Microsoft, GitHub), real-time database, and Hugging Face AI integration, using Chakra UI for responsive React components powering product catalogs, checkout flows, and an AI-driven flower customization viewer.',
  badges: ['Branding', 'Ecommerce Experience', 'Custom API Integrations'],
  cta: {
    label: 'See Live Site',
    href: 'https://www.daffodilflower.page/',
    external: true,
  },
  secondaryCta: {
    label: 'Read Case Study',
    href: '/works/case_studies/daffodil-flower-shop',
  },
};

const reactFastBentoWork = {
  title: 'React Fast Bento',
  subtitle: 'NPM Package · 2023',
  description:
    'NPM toolkit for rapid bento layouts with motion-ready primitives, semantic tokens, and theme-aware gradients.',
  badges: ['NPM', 'Open Source', 'React'],
  cta: {
    label: 'View Package',
    href: 'https://www.npmjs.com/',
    external: true,
  },
};

const pitakapalWork = {
  title: 'Pitakapal',
  subtitle: 'School Project',
  description:
    'A mobile-friendly app for budget tracking and savings goals, helping users manage finances with a simple, visual approach.',
  badges: ['Web App', 'Finance', 'School Project'],
  cta: {
    label: 'View Project',
    href: '#',
    external: false,
  },
};

const olfuCommuteSmartWork = {
  title: 'OLFU Commute Smart',
  subtitle: 'Freelance · OLFU',
  description:
    'Commute and transport companion for the OLFU community—route info, jeepney and shuttle guidance, and campus transit tips to make getting around easier.',
  badges: ['Transport', 'Freelance', 'OLFU'],
  cta: {
    label: 'View Project',
    href: '#',
    external: false,
  },
};

const grapheNotetakingWork = {
  title: 'Graphe Notetaking App',
  subtitle: 'School Project',
  description:
    'A clean, focused notetaking app for capturing and organizing ideas—built for quick capture and easy retrieval.',
  badges: ['Notetaking', 'Productivity', 'School Project'],
  cta: {
    label: 'View Project',
    href: '#',
    external: false,
  },
};

const markdownTableRepairWork = {
  title: 'Markdown Table Repair',
  subtitle: 'Tool',
  description:
    'A tool that fixes and normalizes markdown tables—aligns columns, corrects delimiters, and repairs broken table syntax so tables render correctly.',
  badges: ['Markdown', 'Tool', 'Open Source'],
  cta: {
    label: 'View Project',
    href: '#',
    external: false,
  },
};

const allWorks = [
  daffodilWork,
  reactFastBentoWork,
  pitakapalWork,
  olfuCommuteSmartWork,
  grapheNotetakingWork,
  markdownTableRepairWork,
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function WorksPage() {
  return (
    <div className="works-page">
      <NavigationBar />
      <main className="works-page__content">
        <div className="page-content">
          <div className="bento-grid works-grid">
            {allWorks.map((work, index) => (
              <motion.article
                key={work.title}
                className="item work-item"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <h2>{work.title}</h2>
                <p className="work-item__subtitle">{work.subtitle}</p>
                <p className="work-item__description">{work.description}</p>

                <div className="work-item__badges">
                  {work.badges.map((badge) => (
                    <span key={badge}>{badge}</span>
                  ))}
                </div>

                <Link
                  href={work.cta.href}
                  className="work-item__cta"
                  target={work.cta.external ? '_blank' : undefined}
                  rel={work.cta.external ? 'noreferrer' : undefined}
                >
                  {work.cta.label}
                </Link>

                {work.secondaryCta && (
                  <Link
                    href={work.secondaryCta.href}
                    className="work-item__cta work-item__cta--secondary"
                  >
                    {work.secondaryCta.label}
                  </Link>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
