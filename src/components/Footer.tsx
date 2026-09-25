import Link from 'next/link';
import { Pill, Mail, Phone } from 'lucide-react';
import locationsData from '@/data/locations.json';
import servicesData from '@/data/services.json';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16 border-b border-slate-800 pb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 font-bold text-white text-2xl hover:opacity-80 transition">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <Pill className="w-5 h-5" />
              </div>
              Vancouver Pharmacy
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your modern clinical pharmacy. Providing expert medication reviews, minor ailment prescribing, and free express delivery across all of British Columbia.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:pharmacy@mailorderpharmacy.io" className="flex items-center gap-2 hover:text-white transition">
                <Mail className="w-4 h-4 text-blue-500" /> pharmacy@mailorderpharmacy.io
              </a>
              <a href="tel:+16045550199" className="flex items-center gap-2 hover:text-white transition">
                <Phone className="w-4 h-4 text-blue-500" /> (604) 555-0199
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition">Pharmacy News</Link></li>
              <li><Link href="/medications" className="hover:text-blue-400 transition font-bold text-emerald-400">Medications A-Z</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Clinical Services</h3>
            <ul className="space-y-3 text-sm">
              {servicesData.slice(0, 6).map(service => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className="hover:text-blue-400 transition">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          
          {/* National Network */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Our National Network</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="https://pharmacyvancouver.ca" className="hover:text-blue-400 transition">Vancouver Pharmacy (BC)</a></li>
              <li><a href="https://pharmacycalgary.ca" className="hover:text-blue-400 transition">Calgary Pharmacy (AB)</a></li>
              <li><a href="https://pharmacytoronto.ca" className="hover:text-blue-400 transition">Toronto Pharmacy (ON)</a></li>
              <li><a href="mailto:pharmacy@mailorderpharmacy.io" className="hover:text-blue-400 transition font-bold text-blue-500">Free National Mail Delivery</a></li>
            </ul>
          </div>

          {/* Call to Action */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Transfer Today</h3>
            <p className="text-sm text-slate-400 mb-6">Switching to Vancouver Pharmacy is completely free and we handle all the paperwork.</p>
            <a href="mailto:pharmacy@mailorderpharmacy.io?subject=Prescription%20Transfer" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition">
              Transfer Prescription
            </a>
          </div>
        </div>

        {/* Massive SEO Locations Block */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg">Areas We Service Across BC</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
            {locationsData.map((loc, idx) => (
              <span key={loc.id} className="whitespace-nowrap">
                <Link href={`/locations/${loc.slug}`} className="hover:text-blue-400 transition">
                  {loc.name}
                </Link>
                {idx < locationsData.length - 1 && <span className="mx-2 opacity-30">|</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center text-xs text-slate-600">
          &copy; {new Date().getFullYear()} Vancouver Pharmacy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
