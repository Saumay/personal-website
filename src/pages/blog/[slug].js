import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function BlogPost({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} — Saumay Khandelwal</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <Navbar />

      <main className="min-h-screen pt-28 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Post header */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-slate-500">{post.date}</span>
              {post.tag && (
                <span className="font-mono text-xs px-2 py-0.5 bg-accent-primary/10 text-accent-primary border border-accent-primary/20 rounded">
                  {post.tag}
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
              {post.title}
            </h1>
          </div>

          {/* Markdown content */}
          <article className="
            prose prose-invert prose-cyan max-w-none
            prose-headings:font-bold prose-headings:text-slate-100
            prose-p:text-slate-400 prose-p:leading-relaxed
            prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline
            prose-code:text-accent-primary prose-code:bg-dark-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-dark-surface prose-pre:border prose-pre:border-dark-border
            prose-blockquote:border-l-accent-primary prose-blockquote:text-slate-400
            prose-strong:text-slate-200
            prose-li:text-slate-400
            prose-hr:border-dark-border
          ">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </article>

          <div className="mt-16 pt-8 border-t border-dark-border">
            <Link href="/blog" className="font-mono text-sm text-slate-400 hover:text-accent-primary transition-colors">
              ← All posts
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  return {
    paths: files.map(f => ({ params: { slug: f.replace('.md', '') } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const raw = fs.readFileSync(
    path.join(process.cwd(), 'posts', `${params.slug}.md`),
    'utf-8'
  );
  const { data, content } = matter(raw);
  const plainText = content.replace(/^#+.*$/gm, '').replace(/\n+/g, ' ').trim();

  return {
    props: {
      post: {
        ...data,
        content,
        excerpt: data.excerpt || plainText.slice(0, 200),
        slug: params.slug,
      },
    },
  };
}
