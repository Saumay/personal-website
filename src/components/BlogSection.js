import Link from 'next/link';

export default function BlogSection({ posts }) {
  return (
    <section id="blog" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="section-tag mb-3">// Blog</p>
        <h2 className="text-4xl font-bold mb-4">
          Thoughts &amp;{' '}
          <span className="gradient-text">ramblings</span>
        </h2>
        <p className="text-slate-400 mb-12 max-w-xl">
          I write occasionally. Sometimes it&apos;s technical. Sometimes it&apos;s a metaphor
          about go-karting. You never really know.
        </p>

        {posts.length === 0 ? (
          <div className="card font-mono text-sm text-slate-500 max-w-xl">
            <p className="text-accent-primary mb-2">$ ls posts/</p>
            <p>No posts yet. First one coming soon.</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {posts.map(post => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block h-full">
                  <div className="card group cursor-pointer h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-mono text-xs text-slate-500">{post.date}</span>
                      {post.tag && (
                        <span className="font-mono text-xs px-2 py-0.5 bg-accent-primary/10 text-accent-primary border border-accent-primary/20 rounded">
                          {post.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-100 group-hover:text-accent-primary transition-colors mb-2 leading-snug flex-1">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="font-mono text-sm text-accent-primary group-hover:translate-x-1 transition-transform duration-200 inline-block">
                      Read more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <Link href="/blog" className="font-mono text-sm text-slate-400 hover:text-accent-primary transition-colors">
              View all posts →
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
