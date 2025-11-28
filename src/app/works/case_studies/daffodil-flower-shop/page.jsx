import Link from 'next/link';
import NavigationBar from '../../../components/navigationbar';
import '../../../styles/case-study.scss';

const heroData = {
  title: 'Daffodil Flower Shop',
  tagline:
    'Full-stack e-commerce platform with AI-powered bouquet customization',
  metadata: [
    { label: 'Role', value: 'Project Leader' },
    { label: 'Timeline', value: '6 months · 2025' },
    { label: 'Tech', value: 'Next.js 15 · Supabase · Chakra UI' },
  ],
};

const projectScope = {
  eyebrow: 'Project Scope',
  heading: 'Solo full-stack development',
  points: [
    'Designed and built entire platform independently',
    'Integrated 3rd-party APIs (Supabase, Hugging Face, Stripe)',
    'Delivered production-ready deployment in 6 months',
    'Zero prior e-commerce experience',
  ],
};

const techStack = {
  eyebrow: 'Tech Stack',
  heading: 'Technologies used',
  categories: [
    {
      title: 'Frontend',
      items: ['Next.js 15 (App Router)', 'Chakra UI', 'React Query'],
    },
    {
      title: 'Backend & Data',
      items: [
        'Supabase (Auth, Database, Realtime)',
        'Postgres with RLS policies',
      ],
    },
    {
      title: 'Integrations',
      items: ['Hugging Face AI', 'Stripe payments', 'Custom SMS/Email APIs'],
    },
  ],
};

const keyFeatures = {
  eyebrow: 'Key Features',
  heading: 'What makes it stand out',
  features: [
    'AI-powered bouquet customization with Hugging Face models',
    'Real-time inventory tracking with Supabase Realtime',
    'Multi-provider OAuth authentication (Google, Microsoft, GitHub)',
    'Secure checkout with Stripe payment integration',
  ],
};

const challenges = {
  eyebrow: 'Challenges Overcome',
  heading: 'Learning through complexity',
  items: [
    'Implementing OAuth without prior authentication experience',
    'Optimizing AI response times to under 250ms',
    'Managing concurrent inventory updates in real-time',
    'Deploying production infrastructure solo',
  ],
};

const callToAction = {
  eyebrow: "Let's Connect",
  heading: 'Interested in collaborating?',
  body: "I'm always excited to work on challenging projects that combine technical depth with real-world impact. Whether you're looking for a developer or want to discuss this project further, let's connect.",
  actions: [
    {
      label: 'View Live Site',
      href: 'https://www.daffodilflower.page/',
      external: true,
      primary: true,
    },
    {
      label: 'Email Me',
      href: 'mailto:hello@juliussanjose.com',
      external: false,
      primary: false,
    },
    {
      label: 'Back to Works',
      href: '/works',
      external: false,
      primary: false,
    },
  ],
};

export default function DaffodilCaseStudyPage() {
  return (
    <div className="case-study-page">
      <NavigationBar />
      <main className="case-study-page__content">
        <div className="page-content">
          <div className="bento-grid case-study-grid">
            <article className="item case-study-hero-card">
              <h1>{heroData.title}</h1>
              <p className="hero-tagline">{heroData.tagline}</p>

              <div className="hero-metadata">
                {heroData.metadata.map((meta) => (
                  <div className="meta-badge" key={meta.label}>
                    <span className="meta-label">{meta.label}</span>
                    <span className="meta-value">{meta.value}</span>
                  </div>
                ))}
              </div>

              <div className="hero-actions">
                <Link
                  href="https://www.daffodilflower.page/"
                  className="hero-cta hero-cta--primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Live Site
                </Link>
                <Link href="/works" className="hero-cta hero-cta--secondary">
                  Back to Works
                </Link>
              </div>
            </article>

            <article className="item case-study-scope-card">
              <p className="scope-eyebrow">{projectScope.eyebrow}</p>
              <h2>{projectScope.heading}</h2>
              <ul className="scope-list">
                {projectScope.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </article>

            <article className="item case-study-tech-card">
              <p className="tech-eyebrow">{techStack.eyebrow}</p>
              <h2>{techStack.heading}</h2>
              <div className="tech-categories">
                {techStack.categories.map((category) => (
                  <div className="tech-category" key={category.title}>
                    <h3>{category.title}</h3>
                    <ul>
                      {category.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>

            <article className="item case-study-features-card">
              <p className="features-eyebrow">{keyFeatures.eyebrow}</p>
              <h2>{keyFeatures.heading}</h2>
              <ul className="features-list">
                {keyFeatures.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </article>

            <article className="item case-study-challenges-card">
              <p className="challenges-eyebrow">{challenges.eyebrow}</p>
              <h2>{challenges.heading}</h2>
              <ul className="challenges-list">
                {challenges.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="item case-study-cta-card">
              <p className="cta-eyebrow">{callToAction.eyebrow}</p>
              <h2>{callToAction.heading}</h2>
              <p className="cta-body">{callToAction.body}</p>
              <div className="cta-actions">
                {callToAction.actions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className={`cta-button ${action.primary ? 'cta-button--primary' : 'cta-button--secondary'}`}
                    target={action.external ? '_blank' : undefined}
                    rel={action.external ? 'noreferrer' : undefined}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
