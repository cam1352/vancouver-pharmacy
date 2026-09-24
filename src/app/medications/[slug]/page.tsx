import Link from 'next/link';
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
}