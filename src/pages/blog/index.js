import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Blog — Saumay Khandelwal</title>
        <meta name="description" content="Technical writing and occasional ramblings by Saumay Khandelwal." />
      </Head>
      <Navbar />

      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="section-tag mb-3">// Blog</p>
          <h1 className="text-4xl font-bold mb-4">
            Thoughts &amp; <span className="gradient-text">ramblings</span>
          </h1>
          <p className="text-slate-400 mb-12">
            Opinions are mine, not my employer&apos;s. Metaphors may or may not involve go-karts.
          </p>

          <div className="space-y-6">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                <div className="card group cursor-pointer">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-slate-500">{post.date}</span>
                    {post.tag && (
                      <span className="font-mono text-xs px-2 py-0.5 bg-accent-primary/10 text-accent-primary border border-accent-primary/20 rounded">
                        {post.tag}
                      </span>
                    )}
                  </div>
                  <h2 className="text-xl font-bold text-slate-100 group-hover:text-accent-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed">{post.excerpt}</p>
                  <span className="mt-3 font-mono text-sm text-accent-primary group-hover:translate-x-1 transition-transform duration-200 inline-block">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-dark-border">
            <Link href="/" className="font-mono text-sm text-slate-400 hover:text-accent-primary transition-colors">
              ← Back home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

  const posts = files
    .map(filename => {
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8');
      const { data, content } = matter(raw);
      const plainText = content.replace(/^#+.*$/gm, '').replace(/\n+/g, ' ').trim();
      return {
        slug:    filename.replace('.md', ''),
        title:   data.title   || 'Untitled',
        date:    data.date    || '',
        tag:     data.tag     || null,
        excerpt: data.excerpt || plainText.slice(0, 200) + '…',
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return { props: { posts } };
}
