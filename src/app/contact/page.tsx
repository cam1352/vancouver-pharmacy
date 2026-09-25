"use client";

import Header from "@/components/Header";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] font-sans selection:bg-blue-600 selection:text-white pb-32">
      <Header title="Vancouver Pharmacy" colorClass="bg-blue-600" />
      
      <div className="pt-32 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Info */}
        <div>
          <h1 className="text-5xl font-black text-slate-900 mb-6">Get in touch</h1>
          <p className="text-slate-500 text-lg mb-10 max-w-md">
            Have a question about a prescription, our delivery service, or clinical consultations? Our pharmacists are standing by to help.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Call Us</h3>
                <p className="text-slate-500">(604) 555-0199</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Delivery</h3>
                <p className="text-slate-500">Free Mail Delivery Across BC</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Email CTA */}
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50 p-8 flex flex-col justify-center text-center">
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-10 h-10" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Email Our Pharmacists</h2>
          <p className="text-slate-500 mb-8 max-w-sm mx-auto">
            You can reach our clinical team directly at:
            <br />
            <strong className="text-slate-900 text-lg block mt-2">pharmacy@mailorderpharmacy.io</strong>
          </p>

          <a 
            href="mailto:pharmacy@mailorderpharmacy.io?subject=Pharmacy%20Consultation%20Request&body=Patient%20Name%3A%0APhone%20Number%3A%0A%0A1.%20What%20symptoms%20or%20health%20issue%20can%20we%20help%20you%20with%3F%0A%0A%0A2.%20Are%20you%20currently%20taking%20any%20other%20medications%3F%0A%0A%0A3.%20What%20is%20your%20mailing%20address%20for%20delivery%3F%0A" 
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition shadow-lg shadow-blue-600/20"
          >
            Email a Pharmacist <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
