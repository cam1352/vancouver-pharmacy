content = """"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon, ArrowRight, ArrowLeft, Home, Building2, CheckCircle2, Clock, MapPin, Sparkles, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function BookingPage() {
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('commercial');
  const [step, setStep] = useState(1);
  
  // Shared
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00 AM');

  // Residential State
  const [sqftRes, setSqftRes] = useState(1500);
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [frequencyRes, setFrequencyRes] = useState('biweekly');

  // Commercial State
  const [sqftCom, setSqftCom] = useState(10000);
  const [facilityType, setFacilityType] = useState('office');
  const [frequencyCom, setFrequencyCom] = useState('weekly');

  // Residential Pricing Logic
  const baseRateRes = 90;
  const sqftRateRes = (sqftRes / 500) * 20;
  const bedRate = bedrooms * 15;
  const bathRate = bathrooms * 25;
  let subtotalRes = baseRateRes + sqftRateRes + bedRate + bathRate;
  
  let discountRes = 0;
  if (frequencyRes === 'weekly') discountRes = 0.20;
  if (frequencyRes === 'biweekly') discountRes = 0.15;
  if (frequencyRes === 'monthly') discountRes = 0.05;
  const finalPriceRes = Math.round(subtotalRes * (1 - discountRes));

  // Commercial Pricing Logic
  // Commercial is usually priced per sq ft per clean, typically cheaper at scale.
  let pricePerSqFt = 0.12; 
  if (facilityType === 'medical') pricePerSqFt = 0.18; // Medical requires strict sanitation
  if (facilityType === 'industrial') pricePerSqFt = 0.08; // Warehouses are easier to sweep at scale
  
  let cleansPerMonth = 4;
  if (frequencyCom === 'nightly') cleansPerMonth = 20; // 5 days a week
  if (frequencyCom === 'weekly') cleansPerMonth = 4;
  if (frequencyCom === 'biweekly') cleansPerMonth = 2;
  if (frequencyCom === 'monthly') cleansPerMonth = 1;

  // Monthly Retainer = (SqFt * PricePerSqFt) * CleansPerMonth
  const subtotalCom = Math.round(sqftCom * pricePerSqFt);
  
  // Volume discount for nightly contracts
  let discountCom = 0;
  if (frequencyCom === 'nightly') discountCom = 0.30;
  if (frequencyCom === 'weekly') discountCom = 0.10;
  
  const finalPriceCom = Math.round((subtotalCom * cleansPerMonth) * (1 - discountCom));


  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black text-blue-600 flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> Vancouver Cleaning
          </Link>
          <div className="flex bg-slate-100 p-1 rounded-lg">
            <button 
              onClick={() => { setPropertyType('commercial'); setStep(1); }} 
              className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors flex items-center gap-2 ${propertyType === 'commercial' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>
              <Building2 className="w-4 h-4" /> Commercial
            </button>
            <button 
              onClick={() => { setPropertyType('residential'); setStep(1); }} 
              className={`px-4 py-1.5 text-sm font-bold rounded-md transition-colors flex items-center gap-2 ${propertyType === 'residential' ? 'bg-white shadow text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}>
              <Home className="w-4 h-4" /> Residential
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
              {propertyType === 'commercial' ? 'Enterprise & Office Cleaning' : 'Book your cleaning'}
            </h1>
            <p className="text-slate-500">
              {propertyType === 'commercial' ? 'Get an instant commercial retainer quote for facilities up to 100,000 sq ft.' : 'Get an instant quote and book your spot in 60 seconds.'}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            
            {step === 1 && propertyType === 'commercial' && (
              <div className="animate-in fade-in space-y-8">
                <h2 className="text-xl font-bold border-b pb-4">1. Facility Details</h2>
                
                <div>
                  <label className="block font-bold text-slate-700 mb-4">Facility Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['office', 'retail', 'industrial', 'medical'].map((type) => (
                      <button key={type} onClick={() => setFacilityType(type)} className={`py-3 px-4 rounded-xl border font-bold capitalize transition-all flex items-center justify-center gap-2 ${facilityType === type ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                        {type === 'office' && <Briefcase className="w-4 h-4" />}
                        {type === 'retail' && <MapPin className="w-4 h-4" />}
                        {type === 'industrial' && <Building2 className="w-4 h-4" />}
                        {type === 'medical' && <Sparkles className="w-4 h-4" />}
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-slate-700">Total Square Footage</label>
                    <span className="text-blue-600 font-bold">{sqftCom.toLocaleString()} sq ft</span>
                  </div>
                  <input type="range" min="1000" max="100000" step="1000" value={sqftCom} onChange={(e) => setSqftCom(Number(e.target.value))} className="w-full accent-blue-600" />
                  <div className="flex justify-between text-xs font-bold text-slate-400 mt-2">
                    <span>1,000 sqft</span>
                    <span>100,000+ sqft</span>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-4">Contract Frequency</label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {['nightly', 'weekly', 'biweekly', 'monthly'].map((freq) => (
                      <button key={freq} onClick={() => setFrequencyCom(freq)} className={`py-3 px-2 rounded-xl border font-bold capitalize transition-all text-sm ${frequencyCom === freq ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                        {freq}
                      </button>
                    ))}
                  </div>
                  {discountCom > 0 && <p className="text-sm text-green-600 font-bold mt-2">Volume discount applied ({discountCom * 100}% off standard rate).</p>}
                </div>

                <button onClick={() => setStep(2)} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                  Schedule Walkthrough <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step === 1 && propertyType === 'residential' && (
              <div className="animate-in fade-in space-y-8">
                <h2 className="text-xl font-bold border-b pb-4">1. Home Details</h2>
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-slate-700">Home Size (Sq Ft)</label>
                    <span className="text-blue-600 font-bold">{sqftRes} sq ft</span>
                  </div>
                  <input type="range" min="500" max="5000" step="100" value={sqftRes} onChange={(e) => setSqftRes(Number(e.target.value))} className="w-full accent-blue-600" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block font-bold text-slate-700 mb-2">Bedrooms</label>
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                      <button onClick={() => setBedrooms(Math.max(0, bedrooms - 1))} className="flex-1 px-4 py-2 bg-slate-50 hover:bg-slate-100 font-bold">-</button>
                      <div className="flex-1 text-center font-bold text-lg">{bedrooms}</div>
                      <button onClick={() => setBedrooms(bedrooms + 1)} className="flex-1 px-4 py-2 bg-slate-50 hover:bg-slate-100 font-bold">+</button>
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-2">Bathrooms</label>
                    <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                      <button onClick={() => setBathrooms(Math.max(1, bathrooms - 1))} className="flex-1 px-4 py-2 bg-slate-50 hover:bg-slate-100 font-bold">-</button>
                      <div className="flex-1 text-center font-bold text-lg">{bathrooms}</div>
                      <button onClick={() => setBathrooms(bathrooms + 1)} className="flex-1 px-4 py-2 bg-slate-50 hover:bg-slate-100 font-bold">+</button>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-4">How often do you need us?</label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {['weekly', 'biweekly', 'monthly', 'once'].map((freq) => (
                      <button key={freq} onClick={() => setFrequencyRes(freq)} className={`py-3 px-4 rounded-xl border font-bold capitalize transition-all ${frequencyRes === freq ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                        {freq}
                      </button>
                    ))}
                  </div>
                </div>
                <button onClick={() => setStep(2)} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition">
                  Choose Date & Time <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="animate-in fade-in space-y-8">
                <div className="flex items-center gap-4 border-b pb-4">
                  <button onClick={() => setStep(1)} className="p-2 hover:bg-slate-100 rounded-full"><ArrowLeft className="w-5 h-5" /></button>
                  <h2 className="text-xl font-bold">2. Select a Date</h2>
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-4">
                    {propertyType === 'commercial' ? 'When should we do the initial walkthrough?' : 'When should we arrive?'}
                  </label>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border border-slate-200 rounded-xl p-4 font-medium text-lg outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-4">Time Window</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['08:00 AM', '10:00 AM', '01:00 PM', '03:00 PM'].map((t) => (
                      <button key={t} onClick={() => setTime(t)} className={`py-3 rounded-xl border font-bold transition-all ${time === t ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}>
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <button onClick={() => setStep(3)} disabled={!date} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition disabled:opacity-50">
                  {propertyType === 'commercial' ? 'Confirm Walkthrough' : 'Continue to Checkout'} <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in space-y-8 text-center py-8">
                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-slate-900 mb-2">
                  {propertyType === 'commercial' ? 'Walkthrough Confirmed!' : 'Booking Confirmed!'}
                </h2>
                <p className="text-slate-500 max-w-sm mx-auto">
                  {propertyType === 'commercial' 
                    ? `Our commercial operations manager will meet you on ${date} at ${time} to finalize the contract.` 
                    : `We'll see you on ${date} at ${time}. You will receive an SMS confirmation shortly.`}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-80">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sticky top-24 shadow-xl">
            <h3 className="text-xl font-bold mb-6">Quote Summary</h3>
            
            {propertyType === 'residential' ? (
              <>
                <div className="space-y-4 mb-6 border-b border-slate-700 pb-6 text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <Home className="w-4 h-4 text-slate-400" />
                    <span>{bedrooms} Beds, {bathrooms} Baths, {sqftRes} sq ft</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="w-4 h-4 text-slate-400" />
                    <span className="capitalize">{frequencyRes} Cleaning</span>
                  </div>
                  {date && (
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>{date} @ {time}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>Base Cleaning</span>
                    <span>${Math.round(subtotalRes)}</span>
                  </div>
                  {discountRes > 0 && (
                    <div className="flex justify-between text-green-400 font-bold">
                      <span>{frequencyRes} discount</span>
                      <span>-${Math.round(subtotalRes * discountRes)}</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-end border-t border-slate-700 pt-6">
                  <div>
                    <div className="text-slate-400 text-sm mb-1">Total Due</div>
                    <div className="text-3xl font-black">${finalPriceRes}</div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-4 mb-6 border-b border-slate-700 pb-6 text-sm text-slate-300">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span className="capitalize">{facilityType} Facility ({sqftCom.toLocaleString()} sq ft)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CalendarIcon className="w-4 h-4 text-slate-400" />
                    <span className="capitalize">{frequencyCom} Contract</span>
                  </div>
                  {date && (
                    <div className="flex items-center gap-3 text-blue-400 font-bold">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Walkthrough on {date}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>Estimated Monthly Volume</span>
                    <span>{cleansPerMonth} Cleans/mo</span>
                  </div>
                </div>
                <div className="flex justify-between items-end border-t border-slate-700 pt-6">
                  <div>
                    <div className="text-blue-400 text-sm mb-1 font-bold">Est. Monthly Retainer</div>
                    <div className="text-3xl font-black text-white">${finalPriceCom.toLocaleString()}</div>
                    <div className="text-xs text-slate-500 mt-2 font-medium">Billed automatically on the 1st of every month. Final pricing pending onsite walkthrough.</div>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
"""
with open('src/app/book/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)