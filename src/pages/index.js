import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import OpenSource from '../components/OpenSource';
import BlogSection from '../components/BlogSection';
import Terminal from '../components/Terminal';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Saumay Khandelwal | Senior Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>
        <Hero />
        <Terminal />
        <Experience />
        <OpenSource />
        <Projects />
        <BlogSection posts={posts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.existsSync(postsDir)
    ? fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
    : [];

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
        excerpt: data.excerpt || plainText.slice(0, 160) + '…',
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return { props: { posts } };
}
