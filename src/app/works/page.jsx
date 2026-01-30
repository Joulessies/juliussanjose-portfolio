import Link from 'next/link';
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

const placeholderSlots = Array.from({ length: 1 }, (_, index) => index);

export default function WorksPage() {
  return (
    <div className="works-page">
      <NavigationBar />
      <main className="works-page__content">
        <div className="page-content">
          <div className="bento-grid works-grid">
            <article className="item work-item">
              <h2>{daffodilWork.title}</h2>
              <p className="work-item__subtitle">{daffodilWork.subtitle}</p>
              <p className="work-item__description">
                {daffodilWork.description}
              </p>

              <div className="work-item__badges">
                {daffodilWork.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>

              <Link
                href={daffodilWork.cta.href}
                className="work-item__cta"
                target={daffodilWork.cta.external ? '_blank' : undefined}
                rel={daffodilWork.cta.external ? 'noreferrer' : undefined}
              >
                {daffodilWork.cta.label}
              </Link>

              {daffodilWork.secondaryCta && (
                <Link
                  href={daffodilWork.secondaryCta.href}
                  className="work-item__cta work-item__cta--secondary"
                >
                  {daffodilWork.secondaryCta.label}
                </Link>
              )}
            </article>

            <article className="item work-item">
              <h2>{reactFastBentoWork.title}</h2>
              <p className="work-item__subtitle">
                {reactFastBentoWork.subtitle}
              </p>
              <p className="work-item__description">
                {reactFastBentoWork.description}
              </p>

              <div className="work-item__badges">
                {reactFastBentoWork.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>

              <Link
                href={reactFastBentoWork.cta.href}
                className="work-item__cta"
                target={reactFastBentoWork.cta.external ? '_blank' : undefined}
                rel={reactFastBentoWork.cta.external ? 'noreferrer' : undefined}
              >
                {reactFastBentoWork.cta.label}
              </Link>
            </article>

            <article className="item work-item">
              <h2>{pitakapalWork.title}</h2>
              <p className="work-item__subtitle">{pitakapalWork.subtitle}</p>
              <p className="work-item__description">
                {pitakapalWork.description}
              </p>
              <div className="work-item__badges">
                {pitakapalWork.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
              <Link
                href={pitakapalWork.cta.href}
                className="work-item__cta"
                target={pitakapalWork.cta.external ? '_blank' : undefined}
                rel={pitakapalWork.cta.external ? 'noreferrer' : undefined}
              >
                {pitakapalWork.cta.label}
              </Link>
            </article>

            <article className="item work-item">
              <h2>{olfuCommuteSmartWork.title}</h2>
              <p className="work-item__subtitle">
                {olfuCommuteSmartWork.subtitle}
              </p>
              <p className="work-item__description">
                {olfuCommuteSmartWork.description}
              </p>
              <div className="work-item__badges">
                {olfuCommuteSmartWork.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
              <Link
                href={olfuCommuteSmartWork.cta.href}
                className="work-item__cta"
                target={olfuCommuteSmartWork.cta.external ? '_blank' : undefined}
                rel={olfuCommuteSmartWork.cta.external ? 'noreferrer' : undefined}
              >
                {olfuCommuteSmartWork.cta.label}
              </Link>
            </article>

            <article className="item work-item">
              <h2>{grapheNotetakingWork.title}</h2>
              <p className="work-item__subtitle">
                {grapheNotetakingWork.subtitle}
              </p>
              <p className="work-item__description">
                {grapheNotetakingWork.description}
              </p>
              <div className="work-item__badges">
                {grapheNotetakingWork.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
              <Link
                href={grapheNotetakingWork.cta.href}
                className="work-item__cta"
                target={grapheNotetakingWork.cta.external ? '_blank' : undefined}
                rel={grapheNotetakingWork.cta.external ? 'noreferrer' : undefined}
              >
                {grapheNotetakingWork.cta.label}
              </Link>
            </article>

            {placeholderSlots.map((slot) => (
              <div
                key={slot}
                className="item works-placeholder"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
