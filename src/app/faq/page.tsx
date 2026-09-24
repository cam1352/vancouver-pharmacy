import faqsData from '@/data/faqs.json';
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
