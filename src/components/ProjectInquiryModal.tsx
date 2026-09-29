"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Send } from "lucide-react";
import { useLanguage } from "./LanguageContext";

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ProjectInquiryModal({
  isOpen,
  onClose,
  initialService,
}: ProjectInquiryModalProps) {
  const { t, isRTL, dir } = useLanguage();
  const m = t.modal;

  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceLine: initialService || m.serviceOptions[0],
    location: m.locationOptions[0],
    scope: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceLine: initialService }));
    } else {
      setFormData((prev) => ({
        ...prev,
        serviceLine: m.serviceOptions[0],
        location: m.locationOptions[0],
      }));
    }
  }, [initialService, m.serviceOptions, m.locationOptions]);

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
    }, 700);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
    >
      <div
        dir={dir}
        className={`relative w-full max-w-2xl bg-white rounded-none border border-gray-300 shadow-2xl overflow-hidden ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        {/* Header bar: Deep Teal */}
        <div className="bg-[#00A3A6] text-white px-6 py-5 flex flex-row items-center justify-between">
          <div>
            <div className="flex flex-row items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#74B743]"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                {m.badge}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mt-1">
              {m.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white hover:bg-white/20 transition-colors cursor-pointer rounded-none"
            aria-label={m.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 bg-white">
          {submitted ? (
            <div className="py-10 text-center flex flex-col items-center">
              <div className="w-14 h-14 bg-gray-50 border border-gray-200 text-[#74B743] flex items-center justify-center mb-4 rounded-none">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900">
                {m.successTitle}
              </h4>
              <p className="mt-2 text-gray-600 max-w-md text-sm leading-relaxed">
                {m.successMessage}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-6 px-8 py-2.5 bg-[#00A3A6] hover:bg-[#00878a] text-white font-semibold text-sm transition-colors cursor-pointer rounded-sm"
              >
                {m.close}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {m.fullName}
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={m.fullNamePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-none border border-gray-300 text-sm text-gray-900 focus:outline-hidden focus:border-[#00A3A6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {m.company}
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder={m.companyPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-none border border-gray-300 text-sm text-gray-900 focus:outline-hidden focus:border-[#00A3A6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {m.email}
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={m.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-none border border-gray-300 text-sm text-gray-900 focus:outline-hidden focus:border-[#00A3A6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {m.phone}
                  </label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={m.phonePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-none border border-gray-300 text-sm text-gray-900 tabular-nums focus:outline-hidden focus:border-[#00A3A6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {m.serviceLine}
                  </label>
                  <select
                    value={formData.serviceLine}
                    onChange={(e) => setFormData({ ...formData, serviceLine: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-none border border-gray-300 text-sm text-gray-900 bg-white focus:outline-hidden focus:border-[#00A3A6]"
                  >
                    {m.serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                    {m.location}
                  </label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-none border border-gray-300 text-sm text-gray-900 bg-white focus:outline-hidden focus:border-[#00A3A6]"
                  >
                    {m.locationOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                  {m.scope}
                </label>
                <textarea
                  rows={3}
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  placeholder={m.scopePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-none border border-gray-300 text-sm text-gray-900 focus:outline-hidden focus:border-[#00A3A6]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-sm border border-gray-300 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  {m.cancel}
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-7 py-2.5 rounded-sm bg-[#00A3A6] hover:bg-[#00878a] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>{m.submitting}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 rtl:rotate-180" />
                      <span>{m.submit}</span>
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
