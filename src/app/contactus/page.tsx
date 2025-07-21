'use client';

import React, { useState, useEffect } from 'react';

export default function ContactUsPage() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    plan: '',
    message: '',
  });

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const businessPhoneNumber = '+919211062253';

    const fullMessage = `Hello,

I'm interested in subscribing to your Tiffin Service. Please find my details below:

Name: ${form.fullName}
Phone: ${form.phone}
Email: ${form.email}
Address: ${form.address}
Looking For: ${form.plan} Plan

Message:
${form.message}

Please get in touch. Thank you!`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${businessPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <section className="max-w-6xl mx-auto text-left mb-14 fade-up opacity-0 translate-y-6 transition-all duration-700">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#fb5607]">
          Contact BiteRout Tiffin Service
        </h1>
        <p className="text-gray-700 max-w-2xl">
          Craving fresh, home-cooked food delivered daily? Fill out your details and we’ll help you get started with your ideal tiffin plan!
        </p>
        <p className="text-gray-600 mt-4 max-w-3xl">
          We offer hygienic, vegetarian meals with daily, weekly, and monthly plans. Custom delivery based on your needs.
        </p>
      </section>

      <form onSubmit={handleSubmit}>
        <section className="max-w-6xl mx-auto bg-[#fffaf0] border border-orange-300 rounded-2xl p-10 md:p-16 space-y-8 fade-up opacity-0 translate-y-6 transition-all duration-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} />
            <FormField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} type="tel" />
            <FormField label="Email" name="email" value={form.email} onChange={handleChange} type="email" />
            <FormField label="Address" name="address" value={form.address} onChange={handleChange} />
          </div>

          <div>
            <label className="block mb-1 text-base">Looking For</label>
            <select
              name="plan"
              value={form.plan}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-lg bg-white border border-gray-400 text-gray-800 focus:ring-1 focus:ring-[#fb5607] transition"
              required
            >
              <option value="">Select a Plan</option>
              <option>Daily Plan</option>
              <option>Weekly Plan</option>
              <option>Monthly Plan</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-base">Additional Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Mention any specific food preferences, delivery instructions, or timing."
              className="w-full px-5 py-3 rounded-lg bg-white border border-gray-400 text-gray-800 resize-none focus:ring-1 focus:ring-[#fb5607] transition"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4">
            <label className="flex items-center gap-2 text-gray-600 text-base">
              <input type="checkbox" required className="accent-[#fb5607] scale-110" />
              I agree to the <a href="#" className="text-[#fb5607] underline">Terms</a> & <a href="#" className="text-[#fb5607] underline">Privacy Policy</a>
            </label>

            <button
              type="submit"
              className="bg-[#fb5607] hover:bg-orange-700 text-white text-base font-semibold px-8 py-3 rounded-lg transition shadow hover:shadow-orange-400/50"
            >
              Send via WhatsApp
            </button>
          </div>
        </section>
      </form>

      <style jsx>{`
        .fade-up {
          will-change: transform, opacity;
        }
      `}</style>
    </main>
  );
}

type FormFieldProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormField({ label, name, value, onChange, type = 'text' }: FormFieldProps) {
  return (
    <div>
      <label className="block mb-1 text-base">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label}`}
        className="w-full px-5 py-3 rounded-lg bg-white border border-gray-400 text-gray-800 focus:ring-1 focus:ring-[#fb5607] transition"
        required
      />
    </div>
  );
}
