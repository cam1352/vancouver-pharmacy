import Link from 'next/link';
import medicationsData from '@/data/medications.json';

export default function MedicationsIndex() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">&larr; Back Home</Link>
      <h1 className="text-4xl font-bold mb-12 text-slate-900">Medications We Dispense & Deliver</h1>
      <p className="text-slate-600 mb-12">Search our extensive list of common medications available for free delivery across the province.</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {medicationsData.map((med) => (
          <Link href={`/medications/${med.slug}`} key={med.id} className="bg-white p-3 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow transition text-sm font-medium text-slate-700 text-center">
            {med.name}
          </Link>
        ))}
      </div>
    </div>
  );
}