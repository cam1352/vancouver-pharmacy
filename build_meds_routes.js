const fs = require('fs');
const path = require('path');

const indexPage = `import Link from 'next/link';
import medicationsData from '@/data/medications.json';

export default function MedicationsIndex() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back Home</Link>
      <h1 className="text-4xl font-bold mb-12 text-slate-900">Medications We Dispense & Deliver</h1>
      <p className="text-slate-600 mb-12">Search our extensive list of common medications available for free delivery across the province.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {medicationsData.map((med) => (
          <Link href={\`/medications/\${med.slug}\`} key={med.id} className="bg-white p-3 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow transition text-sm font-medium text-slate-700 text-center">
            {med.name}
          </Link>
        ))}
      </div>
    </div>
  );
}`;

const slugPage = `import Link from 'next/link';
import { notFound } from 'next/navigation';
import medicationsData from '@/data/medications.json';

export function generateStaticParams() {
  return medicationsData.map((med) => ({
    slug: med.slug,
  }));
}

export default function MedicationPage({ params }: { params: { slug: string } }) {
  const med = medicationsData.find((p) => p.slug === params.slug);
  
  if (!med) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/medications" className="text-blue-600 hover:underline mb-8 inline-block">&larr; All Medications</Link>
      
      <article className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl">
        <h1 className="text-4xl font-black text-slate-900 mb-6">{med.name}</h1>
        <p className="text-xl text-slate-600 mb-8">{med.description}</p>
        
        <div className="prose prose-lg prose-blue text-slate-700">
          <p>{med.content}</p>
        </div>
      </article>

      <div className="mt-12 bg-blue-50 p-8 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-4">Need {med.name}?</h3>
        <a href="mailto:pharmacist@pharmacyvancouver.ca?subject=Transfer Request for {med.name}" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
          Transfer Your Prescription
        </a>
      </div>
    </div>
  );
}`;

const repos = ['vancouver-pharmacy', 'calgary-pharmacy', 'toronto-pharmacy'];

for (const repo of repos) {
  const medsDir = path.join(__dirname, '..', repo, 'src', 'app', 'medications');
  const slugDir = path.join(medsDir, '[slug]');
  
  if (!fs.existsSync(medsDir)) fs.mkdirSync(medsDir, { recursive: true });
  if (!fs.existsSync(slugDir)) fs.mkdirSync(slugDir, { recursive: true });

  fs.writeFileSync(path.join(medsDir, 'page.tsx'), indexPage, 'utf8');
  
  let currentSlugPage = slugPage;
  if (repo === 'calgary-pharmacy') {
    currentSlugPage = currentSlugPage.replace('pharmacist@pharmacyvancouver.ca', 'pharmacist@pharmacycalgary.ca');
  } else if (repo === 'toronto-pharmacy') {
    currentSlugPage = currentSlugPage.replace('pharmacist@pharmacyvancouver.ca', 'pharmacist@pharmacytoronto.ca');
  }

  fs.writeFileSync(path.join(slugDir, 'page.tsx'), currentSlugPage, 'utf8');
  console.log(`Created medication routes for ${repo}`);
}
