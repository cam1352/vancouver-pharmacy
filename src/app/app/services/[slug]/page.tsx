import servicesData from '@/data/services.json';
import Link from 'next/link';

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = servicesData.find(s => s.slug === resolvedParams.slug);
  if (!service) return <div>Service not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/" className="text-emerald-600 hover:underline mb-8 inline-block">&larr; Back Home</Link>
      <h1 className="text-4xl font-bold mb-6 text-slate-900">{service.title} in Vancouver</h1>
      <p className="text-xl text-slate-600 mb-8">{service.description}</p>
      <div className="prose prose-lg text-slate-700">
        <p>{service.content}</p>
        <h2>Why Choose VanClean for {service.title}?</h2>
        <ul>
          <li>Specialized expertise in {service.title.toLowerCase()} protocols</li>
          <li>Eco-friendly and hospital-grade sanitization</li>
          <li>Flexible scheduling to avoid disruption</li>
          <li>Fully bonded and insured professionals</li>
        </ul>
      </div>
      <div className="mt-12 bg-emerald-50 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to schedule your {service.title}?</h3>
        <a href="mailto:info@cleaningservicevancouver.ca" className="inline-block bg-emerald-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-emerald-700 transition">Get a Free Quote</a>
      </div>
    </div>
  );
}
