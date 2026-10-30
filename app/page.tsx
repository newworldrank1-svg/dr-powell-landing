'use client';

import React, { useState } from 'react';
import { Phone, Clock, ShieldCheck, HeartPulse, UserCheck, Bot, Mic, Volume2 } from 'lucide-react';

export default function PrimaryCareDemo() {
  const [isCalling, setIsCalling] = useState(false);
  const [callStatus, setCallStatus] = useState("Click to test Voice AI");
  const [transcript, setTranscript] = useState<string[]>([]);

  const startVoiceDemo = () => {
    setIsCalling(true);
    setCallStatus("Connecting to Dr. Powell's AI Intake Assistant...");
    setTranscript([]);

    setTimeout(() => {
      setCallStatus("Connected - Live Call");
      setTranscript((prev) => [
        ...prev,
        "AI Agent: 'Hello! Thank you for calling South Atlanta Area Primary Care. I'm Dr. Powell's automated assistant. How can I assist you with your appointment or health inquiry today?'"
      ]);
    }, 1200);

    setTimeout(() => {
      setTranscript((prev) => [
        ...prev,
        "Patient (Simulated): 'Hi, I need to schedule a primary care checkup and ask about accepting Aetna insurance.'"
      ]);
    }, 3500);

    setTimeout(() => {
      setTranscript((prev) => [
        ...prev,
        "AI Agent: 'We do accept Aetna insurance plans! Dr. Powell has openings this Thursday at 10:00 AM or 2:30 PM. Would either of those work for you?'"
      ]);
    }, 6000);
  };

  const endVoiceDemo = () => {
    setIsCalling(false);
    setCallStatus("Call Ended - Lead Captured");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Top Address & Notice Bar */}
      <div className="bg-teal-900 text-teal-100 text-xs sm:text-sm py-2 px-4 flex flex-wrap justify-between items-center gap-2">
        <span>📍 777 Cleveland Ave SW, Suite 500, Atlanta, GA 30315</span>
        <span className="font-semibold text-teal-300">Accepting New Patients & Most Major Insurance</span>
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-8 h-8 text-teal-600" />
          <div>
            <h1 className="font-bold text-slate-900 text-lg leading-none">South Atlanta Area</h1>
            <p className="text-xs text-slate-500 font-medium">Primary Care • Dr. Otis S. Powell, MD</p>
          </div>
        </div>
        <button 
          onClick={startVoiceDemo}
          className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-4 py-2 rounded-lg flex items-center gap-2 shadow-sm transition-all"
        >
          <Phone className="w-4 h-4" />
          <span>Call AI Assistant Demo</span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-teal-100 text-teal-800 font-semibold text-xs uppercase px-3 py-1 rounded-full mb-4">
            37+ Years Serving Atlanta
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Compassionate, Comprehensive Primary Care for You & Your Family
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Led by Dr. Otis Samuel Powell, MD (Morehouse School of Medicine Alum), offering specialized care for diabetes management, chronic pain, vascular health, and preventive family medicine.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#ai-demo" 
              className="bg-teal-600 hover:bg-teal-700 text-white text-center font-bold px-6 py-3.5 rounded-lg shadow-md transition-all"
            >
              Book Appointment Online
            </a>
            <button 
              onClick={startVoiceDemo}
              className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 text-center font-bold px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <Mic className="w-5 h-5" />
              Try 24/7 Voice Receptionist
            </button>
          </div>
        </div>

        {/* AI Voice Receptionist Interactive Sandbox */}
        <div id="ai-demo" className="bg-white border border-slate-200 rounded-2xl shadow-xl p-6 relative">
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-teal-100 p-2.5 rounded-full text-teal-700">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">24/7 AI Voice Receptionist</h3>
                <p className="text-xs text-slate-500">Live Interactive Practice Demo</p>
              </div>
            </div>
            <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${isCalling ? 'bg-green-100 text-green-700 animate-pulse' : 'bg-slate-100 text-slate-600'}`}>
              {isCalling ? 'Live Call' : 'Ready'}
            </span>
          </div>

          <div className="bg-slate-900 text-slate-200 rounded-xl p-4 min-h-[180px] font-mono text-sm flex flex-col justify-between mb-4">
            <div className="space-y-2">
              <p className="text-slate-400 text-xs border-b border-slate-800 pb-2">Status: {callStatus}</p>
              {transcript.map((line, idx) => (
                <p key={idx} className={line.startsWith("AI Agent") ? "text-teal-300" : "text-amber-300"}>
                  {line}
                </p>
              ))}
            </div>
            {isCalling && (
              <div className="flex items-center gap-2 text-xs text-slate-400 pt-3">
                <Volume2 className="w-4 h-4 text-teal-400 animate-bounce" />
                <span>AI Voice Synthesis Active...</span>
              </div>
            )}
          </div>

          {!isCalling ? (
            <button 
              onClick={startVoiceDemo}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Phone className="w-5 h-5" />
              Simulate Patient Call Now
            </button>
          ) : (
            <button 
              onClick={endVoiceDemo}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              End Voice Demo
            </button>
          )}
        </div>
      </section>

      {/* Key Practice Features */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
            <ShieldCheck className="w-8 h-8 text-teal-600 mb-3" />
            <h4 className="font-bold text-slate-900 mb-2">37+ Years Experience</h4>
            <p className="text-sm text-slate-600">Graduated Medical College of Georgia, Residency at Morehouse School of Medicine.</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
            <Clock className="w-8 h-8 text-teal-600 mb-3" />
            <h4 className="font-bold text-slate-900 mb-2">Zero Missed Calls</h4>
            <p className="text-sm text-slate-600">Our 24/7 AI Voice Agent handles after-hours bookings, FAQs, and appointment reminders.</p>
          </div>
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
            <UserCheck className="w-8 h-8 text-teal-600 mb-3" />
            <h4 className="font-bold text-slate-900 mb-2">Comprehensive Primary Care</h4>
            <p className="text-sm text-slate-600">Specializing in Type 2 Diabetes, Chronic Pain Management, Vascular Disease, and Wellness.</p>
          </div>
        </div>
      </section>
    </div>
  );
}