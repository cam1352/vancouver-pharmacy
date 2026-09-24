import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogsData from '@/data/blogs.json';

export function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogsData.find((p) => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back to Articles</Link>
      
      <article className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50">
        <header className="mb-10 text-center border-b border-slate-100 pb-10">
          <div className="text-slate-500 mb-4 font-medium uppercase tracking-widest text-sm">{post.date} &middot; {post.author}</div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">{post.title}</h1>
        </header>
        
        <div className="prose prose-lg prose-blue max-w-none text-slate-700 leading-relaxed">
          {post.content.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-6">{paragraph}</p>
          ))}
        </div>
      </article>

      <div className="mt-12 bg-blue-50 p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Have questions?</h3>
        <p className="text-slate-600 mb-6">Our clinical pharmacists are ready to help.</p>
        <a href="mailto:pharmacist@pharmacyvancouver.ca" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
          Email a Pharmacist
        </a>
      </div>
    </div>
  );
}