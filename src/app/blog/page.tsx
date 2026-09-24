import Link from 'next/link';
import blogsData from '@/data/blogs.json';

export default function BlogIndex() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back Home</Link>
      <h1 className="text-4xl font-bold mb-12 text-slate-900">Pharmacy News & Health Tips</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogsData.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.id} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-lg transition group">
            <p className="text-sm text-slate-500 mb-2">{post.date} &middot; {post.author}</p>
            <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition">{post.title}</h2>
            <p className="text-slate-600 text-sm leading-relaxed">{post.excerpt}</p>
            <div className="mt-4 text-blue-600 font-bold text-sm flex items-center gap-1">
              Read Article &rarr;
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
