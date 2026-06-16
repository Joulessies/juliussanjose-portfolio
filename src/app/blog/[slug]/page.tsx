import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createReader } from '@keystatic/core/reader';
import { MDXRemote } from 'next-mdx-remote/rsc';
import keystaticConfig from '@root/keystatic.config';
import NavigationBar from '../../components/navigationbar';
import { ReadingProgress } from '../../components/reading-progress';
import { CodeBlock } from '../../components/code-block';
import '../../styles/blog.scss';

const reader = createReader(process.cwd(), keystaticConfig);

const mdxComponents = {
  pre: ({ children }: { children: React.ReactElement }) => {
    const code = children?.props;
    const lang = (code?.className ?? '').replace('language-', '').toUpperCase() || 'CODE';
    const content = code?.children ?? '';
    return <CodeBlock lang={lang} code={String(content).trimEnd()} />;
  },
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote>{children}</blockquote>
  ),
};

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Julius San Jose`,
    description: post.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) notFound();

  const content = await post.content();
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    : '';

  return (
    <div className="article-page">
      <ReadingProgress />
      <NavigationBar />

      <main className="article-page__content">
        <Link href="/blog" className="article-back">
          <span className="article-back__arrow">←</span>
          All posts
        </Link>

        <header className="article-header">
          <div className="article-header__meta">
            {post.date && (
              <time className="article-header__date" dateTime={post.date}>
                {formattedDate}
              </time>
            )}
            {(post.tags ?? []).map((tag) => (
              <span key={tag} className="article-header__tag">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="article-header__title">{post.title}</h1>

          {post.excerpt && (
            <p className="article-header__subtitle">{post.excerpt}</p>
          )}
        </header>

        <article className="article-prose">
          <MDXRemote source={content} components={mdxComponents} />
        </article>

        <footer className="article-footer">
          <div className="article-footer__tags">
            {(post.tags ?? []).map((tag) => (
              <span key={tag} className="article-footer__tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="article-footer__nav">
            <Link href="/blog" className="article-footer__back">
              ← Back to writing
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
