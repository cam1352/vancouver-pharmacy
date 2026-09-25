import Link from 'next/link';
import { Sparkles, Calendar, ArrowRight, Star, ShieldCheck, MapPin, Pill, Stethoscope } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import servicesData from '@/data/services.json';
import locationsData from '@/data/locations.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111] font-sans selection:bg-blue-600 selection:text-white pb-32">
      {/* Floating Glass Header */}
      <Header title="Vancouver Pharmacy" colorClass="bg-blue-600" />

      {/* Modern Hero Section */}
      <section className="pt-40 pb-20 px-4 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-8 animate-in slide-in-from-bottom-4 duration-700">
          <Star className="w-4 h-4 fill-current" /> Clinical Pharmacy & Free Delivery
        </div>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter max-w-5xl leading-[1.05] mb-8">
          Direct connection <span className="text-gray-400">to your local</span> Vancouver Pharmacist.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl mb-10 leading-relaxed">
          Expert medication reviews, blister packaging, minor ailment prescribing, and free home delivery across the Lower Mainland.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="tel:+16045550199" className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:bg-blue-700 transition-all duration-300 shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2">
            Call a Pharmacist <ArrowRight className="w-5 h-5" />
          </a>
          <a href="mailto:pharmacy@mailorderpharmacy.io?subject=Pharmacy%20Consultation%20Request&body=Patient%20Name%3A%0APhone%20Number%3A%0A%0A1.%20What%20symptoms%20or%20health%20issue%20can%20we%20help%20you%20with%3F%0A%0A%0A2.%20Are%20you%20currently%20taking%20any%20other%20medications%3F%0A%0A%0A3.%20What%20is%20your%20mailing%20address%20for%20delivery%3F%0A" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center gap-2">
            Email a Pharmacist
          </a>
        </div>
        
        {/* Abstract Graphic */}
        <div className="mt-20 w-full max-w-6xl h-[400px] md:h-[600px] bg-gray-200 rounded-[3rem] overflow-hidden relative shadow-2xl">
           <Image src="/hero.jpg" alt="Pharmacy Vancouver Interior" fill className="object-cover hover:scale-105 transition-transform duration-1000" />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
           <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
             <div className="bg-white/20 backdrop-blur-md text-white border border-white/20 p-6 rounded-3xl max-w-sm hidden md:block">
               <p className="font-medium text-lg leading-snug">"The pharmacists here caught a major drug interaction my doctor missed. They saved my life."</p>
               <p className="text-sm opacity-70 mt-2 font-bold">- Sarah M., Yaletown</p>
             </div>
           </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="prescriptions" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-12">Clinical Services First.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {servicesData.slice(0, 30).map(service => (
            <Link href={`/services/${service.slug}`} key={service.id} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all group">
              <Pill className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 text-slate-800">{service.title}</h3>
              <p className="text-slate-500 text-sm">{service.description.substring(0, 80)}...</p>
            </Link>
          ))}
        </div>

        <h2 id="consultations" className="text-4xl md:text-5xl font-black tracking-tighter mb-12">Specialized Care</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-[2rem] p-10 shadow-sm border border-gray-100 relative overflow-hidden">
            <h3 className="text-3xl font-bold mb-4">Medication Reviews</h3>
            <p className="text-gray-500 text-lg mb-8 max-w-md">Comprehensive sit-down reviews of your entire medication profile to ensure safety and optimize your health outcomes.</p>
            <a href="mailto:pharmacy@mailorderpharmacy.io?subject=Medication%20Review%20Request&body=Patient%20Name%3A%0APhone%20Number%3A%0A%0APlease%20list%20the%20medications%20you%20would%20like%20reviewed%3A%0A" className="inline-flex bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition-colors">Request a Review</a>
          </div>
          <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col items-start">
            <Stethoscope className="w-8 h-8 text-gray-900 mb-4" />
            <h3 className="text-xl font-bold mb-2">Minor Ailments</h3>
            <p className="text-gray-500 mb-6">Skip the walk-in clinic. We can prescribe for UTIs, pink eye, cold sores, and more.</p>
          </div>
        </div>
      </section>

      {/* Areas We Service */}
      <section className="py-20 px-4 bg-slate-900 text-white rounded-[3rem] max-w-7xl mx-auto my-12">
        <div className="text-center mb-16 max-w-3xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Free Delivery Via Mail</h2>
          <p className="text-slate-400 text-lg">We securely package and deliver your prescriptions via mail directly to your door, completely free of charge, anywhere in British Columbia.</p>
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
