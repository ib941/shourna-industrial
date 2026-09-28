"use client";

import React, { useState, useEffect } from "react";
import { Translations } from "@/types/content";
import { X, CheckCircle, Send, Building, MapPin, Phone, Mail, User } from "lucide-react";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  t: Translations["modal"];
}

export default function ProjectInquiryModal({
  isOpen,
  onClose,
  initialService = "",
  t,
}: ProjectInquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceLine: initialService || "Industrial Projects",
    location: "Riyadh",
    scope: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceLine: initialService }));
    }
  }, [initialService]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-left rtl:text-right">
        
        {/* Header bar with Deep Teal highlight */}
        <div className="bg-slate-900 text-white px-6 py-5 flex flex-row items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex flex-row items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7CB342]"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-[#009698] uppercase">
                SICS Technical RFP
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">{t.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#7CB342]/20 text-[#7CB342] flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                {t.successTitle}
              </h4>
              <p className="mt-2 text-slate-600 max-w-md">
                {t.successMessage}
              </p>
              <div className="mt-6 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-500 font-mono">
                Reference ID: SICS-RFP-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-8 px-6 py-2.5 rounded-md bg-[#009698] hover:bg-[#008183] text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                {t.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                {t.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.fullName} *
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. Eng. Khalid Al-Otaibi"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:border-[#009698] focus:ring-1 focus:ring-[#009698]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.company} *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    placeholder="e.g. Saudi Aramco / Red Sea Global"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:border-[#009698] focus:ring-1 focus:ring-[#009698]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.email} *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="k.otaibi@company.sa"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:border-[#009698] focus:ring-1 focus:ring-[#009698]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.phone} *
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+966 5X XXX XXXX"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:border-[#009698] focus:ring-1 focus:ring-[#009698]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.serviceLine}
                  </label>
                  <select
                    value={formData.serviceLine}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceLine: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-hidden focus:border-[#009698] focus:ring-1 focus:ring-[#009698]"
                  >
                    <option value="Industrial Projects">Industrial Projects (Civil & Steel)</option>
                    <option value="Facade Maintenance">Facade Maintenance & Sealant</option>
                    <option value="Facade Cleaning">Facade Cleaning (Cleanova Standard & BMU)</option>
                    <option value="Agriculture Services">Agriculture Services & Irrigation</option>
                    <option value="Full Facility Contract">Integrated Industrial Facilities Contract</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t.location}
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-hidden focus:border-[#009698] focus:ring-1 focus:ring-[#009698]"
                  >
                    <option value="Riyadh">Riyadh Region</option>
                    <option value="Eastern Province">Eastern Province (Dammam / Khobar / Jubail)</option>
                    <option value="Western Region">Western Region (Jeddah / Makkah / Yanbu)</option>
                    <option value="NEOM / Tabuk">NEOM / Tabuk / Red Sea Project</option>
                    <option value="Southern Region">Southern Region / Asir</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t.scope}
                </label>
                <textarea
                  rows={3}
                  value={formData.scope}
                  onChange={(e) =>
                    setFormData({ ...formData, scope: e.target.value })
                  }
                  placeholder="Outline dimensions, building height, steel tonnage, or target start date..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-hidden focus:border-[#009698] focus:ring-1 focus:ring-[#009698]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-7 py-2.5 rounded-lg bg-[#009698] hover:bg-[#008183] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md shadow-[#009698]/30 transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>{t.submitting}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 rtl:rotate-180" />
                      <span>{t.submit}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
