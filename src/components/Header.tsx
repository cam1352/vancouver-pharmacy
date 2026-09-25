"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Pill, Menu, X } from 'lucide-react';
import GoogleTranslate from './GoogleTranslate';

export default function Header({ title, colorClass }: { title: string, colorClass: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center">
      <header className="w-full max-w-5xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl md:rounded-full flex flex-col md:flex-row md:items-center justify-between p-4 md:px-6 md:h-16">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="flex items-center gap-3 font-bold tracking-tight text-lg hover:opacity-80 transition">
            <div className={`w-8 h-8 ${colorClass} rounded-full flex items-center justify-center text-white`}>
              <Pill className="w-4 h-4" />
            </div>
            {title}
          </Link>
          
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 mt-6 md:mt-0 text-sm font-medium text-gray-500`}>
          <Link href="#prescriptions" onClick={() => setIsOpen(false)} className="hover:text-black transition">Prescriptions</Link>
          <Link href="#consultations" onClick={() => setIsOpen(false)} className="hover:text-black transition">Consultations</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="hover:text-black transition">FAQ</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-black transition font-bold text-blue-600">Contact</Link>
          
          {/* Mobile Only: Show Translate inside menu */}
          <div className="md:hidden mt-2 pt-4 border-t border-gray-100 flex flex-col gap-4">
            <p className="text-xs text-gray-400 font-bold uppercase">Language / Idioma</p>
            <GoogleTranslate />
            <a href="mailto:pharmacy@mailorderpharmacy.io?subject=Pharmacy%20Consultation%20Request&body=Patient%20Name%3A%0APhone%20Number%3A%0A%0AHow%20can%20we%20help%20you%3F%0A" onClick={() => setIsOpen(false)} className={`mt-2 ${colorClass} text-white px-5 py-3 rounded-xl text-center font-bold`}>
              See a Pharmacist
            </a>
          </div>
        </nav>

        {/* Desktop Only: Show Translate & Button on right */}
        <div className="hidden md:flex items-center gap-4">
          <GoogleTranslate />
          <a href="mailto:pharmacy@mailorderpharmacy.io?subject=Pharmacy%20Consultation%20Request&body=Patient%20Name%3A%0APhone%20Number%3A%0A%0AHow%20can%20we%20help%20you%3F%0A" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 hover:bg-emerald-600 transition-all duration-300">
            See a Pharmacist
          </a>
        </div>
      </header>
    </div>
  );
}
