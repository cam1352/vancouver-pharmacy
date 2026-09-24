"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Building2, Home, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const COMMERCIAL_TYPES = [
  "Standard Office / Corporate Workspace",
  "Restaurant / Bar / Pub",
  "Cafe / Coffee Shop",
  "Gym / Fitness Center / Yoga Studio",
  "Hair Salon / Barbershop / Spa",
  "Car Dealership / Showroom",
  "Doctor's Office / Dental Clinic",
  "Hospital / Medical Facility",
  "Strata Building / Condominium Common Areas",
  "Retail Store / Boutique",
  "Warehouse / Industrial Facility",
  "School / Daycare / Educational Facility",
  "Bank / Financial Institution",
  "Church / Place of Worship",
  "Event Venue / Theater"
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState<"residential" | "commercial" | null>(null);
  
  // Residential State
  const [resData, setResData] = useState({
    bedrooms: 1,
    bathrooms: 1,
    sqft: 1000,
    serviceType: "standard",
    extras: [] as string[]
  });

  // Commercial State
  const [comData, setComData] = useState({
    facilityType: "",
    sqft: 2000,
    frequency: "weekly"
  });

  // Contact Info
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [finalQuote, setFinalQuote] = useState<number | null>(null);

  const calculateQuote = () => {
    let total = 0;

    if (propertyType === "residential") {
      const base = 99;
      const bedCost = resData.bedrooms * 20;
      const bathCost = resData.bathrooms * 30;
      const sqftCost = resData.sqft > 1000 ? (resData.sqft - 1000) * 0.05 : 0;
      
      let subtotal = base + bedCost + bathCost + sqftCost;
      
      if (resData.serviceType === "deep") subtotal *= 1.5;
      if (resData.serviceType === "move") subtotal *= 1.75;

      const extrasCost = resData.extras.length * 35; // Rough average for extras
      total = subtotal + extrasCost;
    } else {
      // Commercial Calculation (Rough estimate based on sqft and frequency)
      // Usually between $0.10 to $0.20 per sqft per clean
      let perSqft = 0.15;
      
      // Medical facilities and restaurants cost more to clean
      if (comData.facilityType.includes("Medical") || comData.facilityType.includes("Hospital") || comData.facilityType.includes("Dental")) {
        perSqft = 0.25;
      } else if (comData.facilityType.includes("Restaurant") || comData.facilityType.includes("Cafe")) {
        perSqft = 0.20;
      }

      total = comData.sqft * perSqft;

      // Adjust slightly based on frequency (discounts for more frequent)
      if (comData.frequency === "daily") total *= 0.8;
      if (comData.frequency === "monthly") total *= 1.2;
    }

    setFinalQuote(Math.round(total));
    setStep(4);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b py-4">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-emerald-600">Vancouver Cleaning Service</Link>
          <div className="text-sm text-gray-500">Step {step} of 4</div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl p-6 sm:p-10">
          
          {/* STEP 1: Property Type */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <h1 className="text-3xl font-bold text-center mb-2">What needs cleaning?</h1>
              <p className="text-gray-500 text-center mb-8">Select the type of property you need services for.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <button 
                  onClick={() => { setPropertyType("residential"); setStep(2); }}
                  className={`p-8 border-2 rounded-xl flex flex-col items-center gap-4 transition hover:border-emerald-600 hover:bg-emerald-50 ${propertyType === "residential" ? "border-emerald-600 bg-emerald-50" : "border-gray-200"}`}
                >
                  <Home className="w-12 h-12 text-emerald-600" />
                  <span className="text-xl font-semibold">Residential</span>
                  <span className="text-sm text-gray-500 text-center">Homes, Apartments, Townhouses</span>
                </button>

                <button 
                  onClick={() => { setPropertyType("commercial"); setStep(2); }}
                  className={`p-8 border-2 rounded-xl flex flex-col items-center gap-4 transition hover:border-emerald-600 hover:bg-emerald-50 ${propertyType === "commercial" ? "border-emerald-600 bg-emerald-50" : "border-gray-200"}`}
                >
                  <Building2 className="w-12 h-12 text-emerald-600" />
                  <span className="text-xl font-semibold">Commercial</span>
                  <span className="text-sm text-gray-500 text-center">Offices, Restaurants, Retail, etc.</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Details */}
          {step === 2 && propertyType === "residential" && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
              <button onClick={() => setStep(1)} className="text-gray-500 mb-6 flex items-center gap-2 hover:text-gray-900">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <h2 className="text-2xl font-bold mb-6">Tell us about your home</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
                    <input type="number" min="0" className="w-full border p-2 rounded-md" value={resData.bedrooms} onChange={e => setResData({...resData, bedrooms: parseInt(e.target.value) || 0})} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
                    <input type="number" min="0" className="w-full border p-2 rounded-md" value={resData.bathrooms} onChange={e => setResData({...resData, bathrooms: parseInt(e.target.value) || 0})} />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Approximate Square Footage</label>
                  <input type="number" step="100" className="w-full border p-2 rounded-md" value={resData.sqft} onChange={e => setResData({...resData, sqft: parseInt(e.target.value) || 0})} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                  <select className="w-full border p-2 rounded-md bg-white" value={resData.serviceType} onChange={e => setResData({...resData, serviceType: e.target.value})}>
                    <option value="standard">Standard Maintenance Clean</option>
                    <option value="deep">Deep Clean (Recommended for first time)</option>
                    <option value="move">Move-In / Move-Out Clean</option>
                  </select>
                </div>

                <button onClick={() => setStep(3)} className="w-full bg-emerald-600 text-white py-3 rounded-md font-semibold flex justify-center items-center gap-2 hover:bg-emerald-700">
                  Continue <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && propertyType === "commercial" && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
               <button onClick={() => setStep(1)} className="text-gray-500 mb-6 flex items-center gap-2 hover:text-gray-900">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <h2 className="text-2xl font-bold mb-6">Tell us about your facility</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type of Facility</label>
                  <select className="w-full border p-2 rounded-md bg-white" value={comData.facilityType} onChange={e => setComData({...comData, facilityType: e.target.value})}>
                    <option value="" disabled>Select a facility type...</option>
                    {COMMERCIAL_TYPES.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Approximate Square Footage</label>
                  <input type="number" step="500" className="w-full border p-2 rounded-md" value={comData.sqft} onChange={e => setComData({...comData, sqft: parseInt(e.target.value) || 0})} />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Desired Frequency</label>
                  <select className="w-full border p-2 rounded-md bg-white" value={comData.frequency} onChange={e => setComData({...comData, frequency: e.target.value})}>
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="biweekly">Bi-weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>

                <button 
                  disabled={!comData.facilityType}
                  onClick={() => setStep(3)} 
                  className="w-full bg-emerald-600 text-white py-3 rounded-md font-semibold flex justify-center items-center gap-2 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed">
                  Continue <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Contact Info */}
          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4">
               <button onClick={() => setStep(2)} className="text-gray-500 mb-6 flex items-center gap-2 hover:text-gray-900">
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
              <h2 className="text-2xl font-bold mb-2">Where should we send your quote?</h2>
              <p className="text-gray-500 mb-6">Enter your details to view your instant estimate.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" className="w-full border p-2 rounded-md" placeholder="John Doe" value={contact.name} onChange={e => setContact({...contact, name: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full border p-2 rounded-md" placeholder="john@example.com" value={contact.email} onChange={e => setContact({...contact, email: e.target.value})} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                  <input type="tel" className="w-full border p-2 rounded-md" placeholder="(604) 555-0123" value={contact.phone} onChange={e => setContact({...contact, phone: e.target.value})} />
                </div>

                <button 
                  disabled={!contact.name || !contact.email}
                  onClick={calculateQuote} 
                  className="w-full bg-green-600 text-white py-3 rounded-md font-semibold mt-4 hover:bg-green-700 disabled:opacity-50 transition">
                  Get My Instant Quote
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Results */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 text-center">
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Your Estimate</h2>
              <p className="text-gray-500 mb-6">Based on the details provided for your {propertyType} property.</p>
              
              <div className="bg-gray-50 border rounded-xl p-8 mb-8">
                <div className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-2">
                  {propertyType === 'commercial' ? `Estimated Cost per ${comData.frequency} clean` : 'Estimated Total'}
                </div>
                <div className="text-5xl font-extrabold text-gray-900">
                  ${finalQuote}
                </div>
                {propertyType === 'commercial' && (
                   <p className="text-sm text-gray-500 mt-4 max-w-xs mx-auto">
                     Commercial quotes are subject to an on-site walkthrough for exact pricing.
                   </p>
                )}
              </div>

              <div className="space-y-3">
                <button className="w-full bg-emerald-600 text-white py-3 rounded-md font-semibold hover:bg-emerald-700 transition">
                  Request Contract & Book
                </button>
                <button onClick={() => setStep(1)} className="w-full border border-gray-300 text-gray-700 py-3 rounded-md font-semibold hover:bg-gray-50 transition">
                  Start Over
                </button>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
