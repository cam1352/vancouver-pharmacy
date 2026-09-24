"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ConsultPage() {
  const [step, setStep] = useState(1);
  const [requestType, setRequestType] = useState<"consultation" | "transfer">("consultation");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmission = () => {
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-blue-600 selection:text-white pb-32">
      <Header title="Vancouver Pharmacy" colorClass="bg-blue-600" />
      
      <div className="pt-32 max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-black text-slate-900 mb-2">Pharmacy Services</h1>
        <p className="text-slate-500 text-lg mb-8">Book a clinical consultation or easily transfer your prescriptions to us.</p>

        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-6 md:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block font-bold text-slate-700 mb-3">What do you need help with?</label>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <button 
                    onClick={() => setRequestType("consultation")}
                    className={`p-4 rounded-xl border-2 text-center font-bold transition ${requestType === "consultation" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-500 hover:border-slate-300"}`}
                  >
                    Clinical Consultation
                  </button>
                  <button 
                    onClick={() => setRequestType("transfer")}
                    className={`p-4 rounded-xl border-2 text-center font-bold transition ${requestType === "transfer" ? "border-blue-600 bg-blue-50 text-blue-700" : "border-slate-200 text-slate-500 hover:border-slate-300"}`}
                  >
                    Transfer Prescription
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-2">Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="w-full border border-slate-200 rounded-xl p-3 font-medium mb-4 outline-none focus:border-blue-600" />

                <label className="block font-bold text-slate-700 mb-2">Phone Number</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="(604) 555-0123" className="w-full border border-slate-200 rounded-xl p-3 font-medium mb-4 outline-none focus:border-blue-600" />
                
                <label className="block font-bold text-slate-700 mb-2">Preferred Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full border border-slate-200 rounded-xl p-3 font-medium mb-8 outline-none focus:border-blue-600" />
              </div>

              <button 
                onClick={handleSubmission} 
                disabled={!name || !phone || !date} 
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition disabled:opacity-50"
              >
                Submit Request <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
              <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Request Confirmed!</h2>
              <p className="text-slate-500 max-w-sm mx-auto">
                Thank you, {name}. One of our clinical pharmacists will call you at {phone} on {date} to finalize your {requestType === "consultation" ? "consultation" : "prescription transfer"}.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
