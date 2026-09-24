import os

# Create services page
os.makedirs("src/app/services/[slug]", exist_ok=True)
with open("src/app/services/[slug]/page.tsx", "w", encoding="utf-8") as f:
    f.write("""import servicesData from '@/data/services.json';
import Link from 'next/link';

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find(s => s.slug === params.slug);
  if (!service) return <div>Service not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back Home</Link>
      <h1 className="text-4xl font-bold mb-6 text-slate-900">{service.title} in Vancouver</h1>
      <p className="text-xl text-slate-600 mb-8">{service.description}</p>
      <div className="prose prose-lg text-slate-700">
        <p>{service.content}</p>
        <h2>Why Choose VanClean for {service.title}?</h2>
        <ul>
          <li>Specialized expertise in {service.title.lower()} protocols</li>
          <li>Eco-friendly and hospital-grade sanitization</li>
          <li>Flexible scheduling to avoid disruption</li>
          <li>Fully bonded and insured professionals</li>
        </ul>
      </div>
      <div className="mt-12 bg-blue-50 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to schedule your {service.title}?</h3>
        <a href="mailto:info@cleaningservicevancouver.ca" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition">Get a Free Quote</a>
      </div>
    </div>
  );
}
""")

# Create locations page
os.makedirs("src/app/locations/[slug]", exist_ok=True)
with open("src/app/locations/[slug]/page.tsx", "w", encoding="utf-8") as f:
    f.write("""import locationsData from '@/data/locations.json';
import Link from 'next/link';

export function generateStaticParams() {
  return locationsData.map((loc) => ({ slug: loc.slug }));
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const loc = locationsData.find(l => l.slug === params.slug);
  if (!loc) return <div>Location not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back Home</Link>
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
      <div className="mt-12 bg-blue-50 p-8 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-4">Book your cleaner in {loc.name} today</h3>
        <a href="mailto:info@cleaningservicevancouver.ca" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition">Get a Free Quote</a>
      </div>
    </div>
  );
}
""")

# Create FAQ page
os.makedirs("src/app/faq", exist_ok=True)
with open("src/app/faq/page.tsx", "w", encoding="utf-8") as f:
    f.write("""import faqsData from '@/data/faqs.json';
import Link from 'next/link';

export default function FaqPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back Home</Link>
      <h1 className="text-4xl font-bold mb-12 text-center text-slate-900">Frequently Asked Questions</h1>
      <div className="space-y-8">
        {faqsData.map((faq) => (
          <div key={faq.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-3">{faq.question}</h3>
            <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
""")

print("Created dynamic routes for Services, Locations, and FAQ")
