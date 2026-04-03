"use client";

import { useState } from "react";

const inquiryTypes = [
  "General Question",
  "Speaking & Events",
  "School or Counselor Interest",
  "Media & Collaboration",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Wire up to your form handler (e.g. Formspree, Netlify Forms, or API route)
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-3xl p-8 md:p-12 text-center glow-teal">
        <div className="w-16 h-16 mx-auto rounded-full bg-teal-100 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3
          className="text-2xl font-bold text-ocean-800"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Thank You
        </h3>
        <p className="mt-3 text-ocean-600 max-w-md mx-auto">
          Your message has been received. Dr. Schmitt will respond to your
          inquiry with care and thoughtfulness.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 md:p-12 glow-ocean">
      <div className="grid gap-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ocean-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-ocean-200/60 bg-white/60 text-ocean-800 placeholder-ocean-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-all"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ocean-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-ocean-200/60 bg-white/60 text-ocean-800 placeholder-ocean-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-all"
              placeholder="you@example.com"
            />
          </div>
        </div>
        <div>
          <label htmlFor="inquiryType" className="block text-sm font-medium text-ocean-700 mb-2">
            Type of Inquiry
          </label>
          <select
            id="inquiryType"
            required
            value={formData.inquiryType}
            onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-ocean-200/60 bg-white/60 text-ocean-800 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-all appearance-none"
          >
            <option value="">Select a category</option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-ocean-700 mb-2">
            Your Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-ocean-200/60 bg-white/60 text-ocean-800 placeholder-ocean-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 focus:border-teal-400 transition-all resize-none"
            placeholder="Share your thoughts, questions, or how you'd like to connect..."
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-teal-500 to-aqua-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
          >
            Send Message
          </button>
          <p className="mt-3 text-xs text-ocean-500">
            Your information is handled with care and never shared with third parties.
          </p>
        </div>
      </div>
    </form>
  );
}
