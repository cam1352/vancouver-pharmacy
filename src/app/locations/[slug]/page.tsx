import locationsData from '@/data/locations.json';
import Link from 'next/link';

export function generateStaticParams() {
  return locationsData.map((loc) => ({ slug: loc.slug }));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const loc = locationsData.find(l => l.slug === resolvedParams.slug);
  if (!loc) return <div>Location not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/" className="text-emerald-600 hover:underline mb-8 inline-block">&larr; Back Home</Link>
      <h1 className="text-4xl font-bold mb-6 text-slate-900">Commercial & Residential Cleaning in {loc.name}</h1>
      <p className="text-xl text-slate-600 mb-8">{loc.description}</p>
      <div className="prose prose-lg text-slate-700">
        <p>{loc.content}</p>
        <h2>Our {loc.name} Cleaning Services</h2>
        <ul>
          <li>Commercial & Office Cleaning</li>
          <li>Restaurant & Clinic Deep Cleaning</li>
          <li>Strata & Multi-Tenant Building Maintenance</li>
          <li>Move-In / Move-Out Cleaning</li>
        </ul>
        <p>We are proud to serve the {loc.name} community with top-tier, reliable cleaning solutions.</p>
      </div>
      <div className="mt-12 bg-emerald-50 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-4">Book your cleaner in {loc.name} today</h3>
        <a href="mailto:info@cleaningservicevancouver.ca" className="inline-block bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-emerald-700 transition">Get a Free Quote</a>
      </div>
    </div>
  );
}
