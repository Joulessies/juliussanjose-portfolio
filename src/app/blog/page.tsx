import Link from 'next/link';
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '@root/keystatic.config';
import NavigationBar from '../components/navigationbar';
import '../styles/blog.scss';

const reader = createReader(process.cwd(), keystaticConfig);

export const metadata = {
  title: 'Writing — Julius San Jose',
  description:
    'Notes on software, design, and the craft of building things.',
};

export default async function BlogPage() {
  const slugs = await reader.collections.posts.list();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const post = await reader.collections.posts.read(slug);
      return { slug, ...post };
    })
  );

  // Sort newest first
  const sorted = posts
    .filter((p) => p && p.date)
    .sort((a, b) => (a.date! < b.date! ? 1 : -1));

  return (
    <div className="blog-page">
      <NavigationBar />

      <main className="blog-page__content">
        <header className="blog-page__header">
          <h1>Writing</h1>
          <p>
            Notes on software, design, and the craft of building things. Mostly
            sourced from links that made me think.
          </p>
        </header>

        <div className="blog-list" role="list">
          {sorted.map((post, index) => (
            <div 
              key={post.slug} 
              role="listitem"
              style={{ animationDelay: `${index * 0.1}s` }}
              className="blog-card"
            >
              <Link href={`/blog/${post.slug}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <div className="blog-card__meta">
                  <time
                    className="blog-card__date"
                    dateTime={post.date ?? undefined}
                  >
                    {post.date
                      ? new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                      : ''}
                  </time>
                  {(post.tags ?? []).slice(0, 2).map((tag) => (
                    <span key={tag} className="blog-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="blog-card__title">{post.title}</h2>
                <p className="blog-card__excerpt">{post.excerpt}</p>

                <div className="blog-card__footer">
                  <span className="blog-card__read-time">{post.readTime}</span>
                  <span className="blog-card__arrow" aria-hidden="true">
                    →
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
