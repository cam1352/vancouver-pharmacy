const fs = require('fs');
const path = require('path');

const bookCode = `"use client";

import { useState } from 'react';
import { Calendar as CalendarIcon, ArrowRight, ArrowLeft, Home, Building2, CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [sqft, setSqft] = useState(1500);
  const [bedrooms, setBedrooms] = useState(3);
  const [bathrooms, setBathrooms] = useState(2);
  const [frequency, setFrequency] = useState('biweekly');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('09:00 AM');

  const baseRate = 90;
  const sqftRate = (sqft / 500) * 20;
  const bedRate = bedrooms * 15;
  const bathRate = bathrooms * 25;
  
  let subtotal = baseRate + sqftRate + bedRate + bathRate;
  
  let discount = 0;
  if (frequency === 'weekly') discount = 0.20;
  if (frequency === 'biweekly') discount = 0.15;
  if (frequency === 'monthly') discount = 0.05;

  const finalPrice = Math.round(subtotal * (1 - discount));

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-black text-blue-600 flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> Vancouver Cleaning
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
        
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Book your cleaning</h1>
            <p className="text-slate-500">Get an instant quote and book your spot in 60 seconds.</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            
            {step === 1 && (
              <div className="animate-in fade-in space-y-8">
                <h2 className="text-xl font-bold border-b pb-4">1. Home Details</h2>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-bold text-slate-700">Home Size (Sq Ft)</label>
                    <span className="text-blue-600 font-bold">{sqft} sq ft</span>
                  </div>
                  <input 
                    type="range" min="500" max="5000" step="100" 
                    value={sqft} onChange={(e) => setSqft(Number(e.target.value))}
                    className="w-full accent-blue-600"
                  />
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
                      <button 
                        key={freq}
                        onClick={() => setFrequency(freq)}
                        className={`py-3 px-4 rounded-xl border font-bold capitalize transition-all ${frequency === freq ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
                      >
                        {freq}
                      </button>
                    ))}
                  </div>
                  {discount > 0 && <p className="text-sm text-green-600 font-bold mt-2">You save {discount * 100}% with this plan!</p>}
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
                  <label className="block font-bold text-slate-700 mb-4">When should we arrive?</label>
                  <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl p-4 font-medium text-lg outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-4">Arrival Time Window</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['08:00 AM', '10:00 AM', '01:00 PM', '03:00 PM'].map((t) => (
                      <button 
                        key={t}
                        onClick={() => setTime(t)}
                        className={`py-3 rounded-xl border font-bold transition-all ${time === t ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button onClick={() => setStep(3)} disabled={!date} className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition disabled:opacity-50">
                  Continue to Checkout <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="animate-in fade-in space-y-8 text-center py-8">
                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Booking Confirmed!</h2>
                <p className="text-slate-500 max-w-sm mx-auto">We'll see you on {date} at {time}. You will receive an SMS confirmation shortly.</p>
                <button onClick={() => setStep(1)} className="mt-8 text-blue-600 font-bold hover:underline">Book another clean</button>
              </div>
            )}

          </div>
        </div>

        <div className="w-full md:w-80">
          <div className="bg-slate-900 text-white rounded-2xl p-6 sticky top-24 shadow-xl">
            <h3 className="text-xl font-bold mb-6">Booking Summary</h3>
            
            <div className="space-y-4 mb-6 border-b border-slate-700 pb-6 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Home className="w-4 h-4 text-slate-400" />
                <span>{bedrooms} Beds, {bathrooms} Baths, {sqft} sq ft</span>
              </div>
              <div className="flex items-center gap-3">
                <CalendarIcon className="w-4 h-4 text-slate-400" />
                <span className="capitalize">{frequency} Cleaning</span>
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
                <span>${Math.round(subtotal)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-400 font-bold">
                  <span>{frequency} discount</span>
                  <span>-${Math.round(subtotal * discount)}</span>
                </div>
              )}
            </div>

            <div className="flex justify-between items-end border-t border-slate-700 pt-6">
              <div>
                <div className="text-slate-400 text-sm mb-1">Total Due</div>
                <div className="text-3xl font-black">${finalPrice}</div>
              </div>
            </div>
            
            <div className="mt-6 text-xs text-slate-500 flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-green-500" />
              <span>No hidden fees. You won't be charged until the cleaning is complete.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/app/book/page.tsx', bookCode);