'use client';

import { motion } from 'motion/react';
import '../styles/home-content.scss';
import { ShaderGradientCard } from '../components/shader-gradient-card';
import { TechStackCard } from '../components/tech-stack-card';
import { FeaturedProjectsCard } from '../components/featured-projects-card';
import Link from 'next/link';
import Image from 'next/image';

export default function HomeContent() {
  return (
    <main className="page-content">
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
        <div className="item item4">
          <div className="about-card">
            <p className="about-eyebrow">About Me</p>
            <div className="about-header">
              <div className="about-avatar">
                <Image
                  src="/profilepicture.png"
                  alt="Julius San Jose"
                  fill
                  sizes="96px"
                  priority
                />
              </div>
              <div>
                <h3>Julius San Jose</h3>
                <span>Cybersecurity & Software Dev Student</span>
              </div>
            </div>
            <p>
              I’m Julius San Jose, an Information Technology student at the
              Technological Institute of the Philippines focusing on
              cybersecurity and software development. I love building secure
              systems, expressive interfaces, and tools that help founders ship
              with confidence.
            </p>
            <motion.div
              whileHover={{ x: 4, y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              className="about-link-wrapper"
            >
              <Link href="/about" className="about-link">
                <span>Click here to see more</span>
                <span className="about-link-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="item item4">
          <div className="availability-card">
            <p className="availability-eyebrow">Availability</p>
            <h3>Accepting select freelance projects for Q1 2026.</h3>
            <p>
              Based in Manila (UTC+8). I typically reply within 24 hours on
              weekdays. Let’s talk about security-focused builds, immersive
              product experiences, or dev tooling experiments.
            </p>
            <div className="availability-actions">
              <Link href="mailto:hello@juliussanjose.com">Email Me</Link>
              <Link
                href="https://cal.com/julius-san-jose/meeting"
                target="_blank"
                rel="noreferrer"
              >
                Book a Call
              </Link>
              <Link
                href="https://discord.com/channels/1284452446466347029/1284452446466347032"
                target="_blank"
                rel="noreferrer"
              >
                Discord
              </Link>
            </div>
          </div>
        </div>
        <div className="item item6">
          <div className="trust-card">
            <p className="trust-eyebrow">Why teams trust me</p>
            <div className="trust-stats">
              <div>
                <h4>6</h4>
                <span>Team projects led</span>
              </div>
              <div>
                <h4>18</h4>
                <span>Security labs hardened</span>
              </div>
              <div>
                <h4>4.9/5</h4>
                <span>Peer feedback</span>
              </div>
            </div>
            <blockquote>
              “Julius led our TIP capstone squad with security-first thinking
              and still shipped polished UX. He caught bugs before our profs and
              kept morale high.”{' '}
              <span>— M. Santos, Classmate & Frontend Lead</span>
            </blockquote>
            <div className="trust-proof">
              <span>🎓 Top section lead for TIP IT 4-2</span>
              <span>🤝 Mentor for junior classmates</span>
              <span>🛡️ Cybersecurity focus on every sprint</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
