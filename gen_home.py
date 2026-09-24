import os

with open("src/app/page.tsx", "w", encoding="utf-8") as f:
    f.write("""import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, Star, ShieldCheck, MapPin, Building, Globe } from 'lucide-react';
import Image from 'next/image';
import GoogleTranslate from '@/components/GoogleTranslate';
import servicesData from '@/data/services.json';
import locationsData from '@/data/locations.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-sans selection:bg-blue-600 selection:text-white pb-32">
      {/* Floating Glass Header */}
      <div className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center">
        <header className="w-full max-w-5xl bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full h-16 flex items-center justify-between px-6">
          <div className="flex items-center gap-3 font-bold tracking-tight text-lg">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            Vancouver Cleaning
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
            <Link href="#commercial" className="hover:text-black transition">Commercial</Link>
            <Link href="#residential" className="hover:text-black transition">Residential</Link>
            <Link href="/faq" className="hover:text-black transition">FAQ</Link>
            <Link href="/blog" className="hover:text-black transition">Blog</Link>
          </nav>
          <div className="flex items-center gap-4">
            <GoogleTranslate className="hidden sm:block" />
            <Link href="/book" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 hover:bg-blue-600 transition-all duration-300">
              Free Quote
            </Link>
          </div>
        </header>
      </div>

      {/* Modern Hero Section */}
      <section className="pt-40 pb-20 px-4 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8 animate-in slide-in-from-bottom-4 duration-700">
          <Star className="w-4 h-4 fill-current" /> Premier B2B & Residential Cleaners
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter max-w-5xl leading-[1.05] mb-8">
          Commercial sanitation <span className="text-gray-400">and</span> premium residential cleaning.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mb-10 leading-relaxed">
          From strata buildings and restaurants to Deep Cove homes. Fully bonded, insured, and compliant.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/book" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
            Get an instant commercial quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        {/* Abstract Graphic */}
        <div className="mt-20 w-full max-w-6xl h-[400px] md:h-[600px] bg-gray-200 rounded-[3rem] overflow-hidden relative shadow-2xl">
           <Image src="/vanclean_hero_1790110372640.jpg" alt="Commercial Cleaning Vancouver" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
           <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
             <div className="bg-white/20 backdrop-blur-md text-white border border-white/20 p-6 rounded-3xl max-w-sm hidden md:block">
               <p className="font-medium text-lg leading-snug">"Our restaurant passed health inspections flawlessly since hiring VanClean."</p>
               <p className="text-sm opacity-70 mt-2 font-bold">- Marcus T., Gastown Cafe</p>
             </div>
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="commercial" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">Commercial Cleaning First.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {servicesData.slice(0, 30).map(service => (
            <Link href={`/services/${service.slug}`} key={service.id} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all group">
              <Building className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-slate-800">{service.title}</h3>
              <p className="text-slate-500 text-sm">{service.description.substring(0, 80)}...</p>
            </Link>
          ))}
        </div>

        <h2 id="residential" className="text-4xl md:text-5xl font-black tracking-tighter mb-12">Residential Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-4">Deep Residential</h3>
            <p className="text-gray-500 text-lg mb-8 max-w-md">Comprehensive cleaning for condos, townhouses, and detached homes across the Lower Mainland.</p>
            <Link href="/book" className="inline-flex bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">Book Residential</Link>
          </div>
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col items-start">
            <Calendar className="w-8 h-8 text-gray-900 mb-4" />
            <h3 className="text-xl font-bold mb-2">Move-In / Out</h3>
            <p className="text-gray-500 mb-6">Get your deposit back with our rigorous turnover protocol.</p>
          </div>
        </div>
      </section>

      {/* Areas We Service */}
      <section className="py-20 px-4 bg-slate-900 text-white rounded-[3rem] max-w-7xl mx-auto my-12">
        <div className="text-center mb-16 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Areas We Service</h2>
          <p className="text-slate-400 text-lg">We cover the entire Lower Mainland, from the city centers to specific neighborhoods like Deep Cove, Lynn Valley, and Yaletown.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 px-8">
          {locationsData.map((loc) => (
            <Link href={`/locations/${loc.slug}`} key={loc.id} className="text-slate-300 hover:text-white text-sm hover:underline flex items-center gap-2">
              <MapPin className="w-3 h-3 text-blue-500" /> {loc.name}
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
""")
print("Re-wrote page.tsx")
