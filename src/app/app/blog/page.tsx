import Link from 'next/link';

export default function BlogIndex() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Link href="/" className="text-emerald-600 hover:underline mb-8 inline-block">&larr; Back Home</Link>
      <h1 className="text-4xl font-bold mb-12 text-slate-900">Cleaning Tips & Local News</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <p className="text-sm text-slate-500 mb-2">Coming Soon</p>
          <h2 className="text-xl font-bold">The Ultimate Guide to Commercial Sanitation in Vancouver</h2>
        </div>
      </div>
    </div>
  );
}
