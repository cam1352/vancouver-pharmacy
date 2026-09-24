"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Menu, X } from 'lucide-react';
import GoogleTranslate from './GoogleTranslate';

export default function Header({ title, colorClass }: { title: string, colorClass: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center">
      <header className="w-full max-w-5xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl md:rounded-full flex flex-col md:flex-row md:items-center justify-between p-4 md:px-6 md:h-16">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center gap-3 font-bold tracking-tight text-lg">
            <div className={`w-8 h-8 ${colorClass} rounded-full flex items-center justify-center text-white`}>
              <Sparkles className="w-4 h-4" />
            </div>
            {title}
          </div>
          
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row gap-6 mt-6 md:mt-0 text-sm font-medium text-gray-500`}>
          <Link href="#commercial" onClick={() => setIsOpen(false)} className="hover:text-black transition">Commercial</Link>
          <Link href="#residential" onClick={() => setIsOpen(false)} className="hover:text-black transition">Residential</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)} className="hover:text-black transition">FAQ</Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="hover:text-black transition">Blog</Link>
          
          {/* Mobile Only: Show Translate inside menu */}
          <div className="md:hidden mt-2 pt-4 border-t border-gray-100 flex flex-col gap-4">
            <p className="text-xs text-gray-400 font-bold uppercase">Language / Idioma</p>
            <GoogleTranslate />
            <Link href="/book" onClick={() => setIsOpen(false)} className={`mt-2 ${colorClass} text-white px-5 py-3 rounded-xl text-center font-bold`}>
              Get Free Quote
            </Link>
          </div>
        </nav>

        {/* Desktop Only: Show Translate & Button on right */}
        <div className="hidden md:flex items-center gap-4">
          <GoogleTranslate />
          <Link href="/book" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 hover:bg-emerald-600 transition-all duration-300">
            Free Quote
          </Link>
        </div>
      </header>
    </div>
  );
}
