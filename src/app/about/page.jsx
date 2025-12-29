import Image from 'next/image';
import Link from 'next/link';
import NavigationBar from '../components/navigationbar';
import { Timeline } from '../components/timeline';
import '../styles/about.scss';

const stats = [
  { label: 'Team projects led', value: '6' },
  { label: 'Peer rating', value: '4.9/5' },
  { label: 'Average response time', value: '< 24h' },
];

const skillAreas = [
  {
    title: 'Security-first engineering',
    description:
      'Threat modeling, secure authentication flows, and OWASP remediation baked into every sprint.',
    tags: ['Threat modeling', 'OWASP', 'Auth flows'],
  },
  {
    title: 'Product experience & UI polish',
    description:
      'Translate messy founder briefs into expressive interfaces using Next.js, motion, and meticulous detail.',
    tags: ['UX writing', 'Interaction design', 'Next.js'],
  },
  {
    title: 'Developer tooling & DX',
    description:
      'Dashboards, docs, and automation that keep classmates and clients shipping confidently.',
    tags: ['Automation', 'Docs', 'CI/CD'],
  },
];

const principles = [
  {
    title: 'Security is a design constraint',
    description:
      'Surface risk early, document trade-offs, and keep code reviews focused on integrity—not just visuals.',
  },
  {
    title: 'Tight feedback loops',
    description:
      'Ship small slices, share progress async, and welcome critique so teams always know where we stand.',
  },
  {
    title: 'Clarity over noise',
    description:
      'Every artifact—tickets, docs, prototypes—should reduce cognitive load for whoever reads it next.',
  },
];

const workflowSteps = [
  {
    title: 'Discovery & alignment',
    description:
      'Define the real constraint, success metrics, and security considerations before any code is written.',
  },
  {
    title: 'Build, test, harden',
    description:
      'Pair design + engineering to ship usable increments, run security checklists, and document coverage.',
  },
  {
    title: 'Polish & handoff',
    description:
      'Refine microinteractions, capture decisions, and leave teams with clear next steps and docs.',
  },
];

const contactLinks = [
  {
    label: 'Email',
    href: 'mailto:hello@juliussanjose.com',
    subtext: 'Replies within 24 hours',
  },
  {
    label: 'Book a call',
    href: 'https://cal.com/julius-san-jose/meeting',
    subtext: '30-minute intro on Cal.com',
    external: true,
  },
  {
    label: 'Discord',
    href: 'https://discord.com/channels/1284452446466347029/1284452446466347032',
    subtext: '@joulessies',
    external: true,
  },
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <NavigationBar />
      <main className="about-page__content">
        <div className="about-grid">
          <section className="about-panel about-panel--timeline">
            <Timeline />
          </section>

          <section className="about-panel about-panel--profile">
            <p className="about-eyebrow">Profile</p>
            <div className="about-profile__header">
              <div className="about-avatar">
                <Image
                  src="/profilepicture.png"
                  alt="Portrait of Julius San Jose"
                  width={96}
                  height={96}
                  priority
                />
              </div>
              <div>
                <h2>Julius San Jose</h2>
                <p>Cybersecurity & Software Development Student</p>
                <span className="about-location">Manila • UTC+8</span>
              </div>
            </div>
            <p className="about-profile__bio">
              I build secure-by-default experiences for student teams, founders,
              and freelance partners. Whether it&apos;s a school project or a
              production delivery, I blend expressive UI with hardened
              infrastructure and crisp documentation.
            </p>
            <div className="about-stats">
              {stats.map((stat) => (
                <div className="about-stat" key={stat.label}>
                  <span className="about-stat__value">{stat.value}</span>
                  <span className="about-stat__label">{stat.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="about-panel about-panel--skills">
            <div className="about-panel__heading">
              <p className="about-eyebrow">Focus</p>
              <h2>How I help teams</h2>
            </div>
            <div className="skills-grid">
              {skillAreas.map((area) => (
                <article className="skill-card" key={area.title}>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <div className="skill-tags">
                    {area.tags.map((tag) => (
                      <span className="skill-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="about-panel about-panel--values">
            <div className="about-panel__heading">
              <p className="about-eyebrow">Principles</p>
              <h2>Operating system</h2>
            </div>
            <div className="values-list">
              {principles.map((principle) => (
                <article className="value-item" key={principle.title}>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="about-panel about-panel--workflow">
            <div className="about-panel__heading">
              <p className="about-eyebrow">Workflow</p>
              <h2>From kickoff to handoff</h2>
            </div>
            <div className="workflow-list">
              {workflowSteps.map((step, index) => (
                <article className="workflow-step" key={step.title}>
                  <span className="workflow-step__badge">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="about-panel about-panel--contact">
            <div className="about-panel__heading">
              <p className="about-eyebrow">Let&apos;s work</p>
              <h2>Stay in touch</h2>
            </div>
            <p className="about-panel__copy">
              Accepting select freelance and collaboration requests for Q1 2026.
              Based in Manila, I typically reply within a day and love projects
              that mix security, design, and developer tools.
            </p>
            <div className="contact-actions">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  className="contact-action"
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                >
                  <span className="contact-action__label">{link.label}</span>
                  <span className="contact-action__subtext">
                    {link.subtext}
                  </span>
                </a>
              ))}
            </div>
            <div className="contact-footer">
              <Link href="/works" className="contact-secondary">
                View selected work
              </Link>
              <span className="contact-note">
                Currently booking for January–March 2026
              </span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
