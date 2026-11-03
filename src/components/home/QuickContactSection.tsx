'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export const QuickContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#FAF6EF] border-t border-[#C49A42]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Royal Concierge"
          title="Connect With ROYALORA"
          subtitle="Have questions about our dry fruits powders, bulk culinary orders, or customized gift hampers? Our concierge team is at your service."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Info Card with Placeholders */}
          <div className="lg:col-span-5 bg-[#F4EBDD] p-8 sm:p-10 rounded-2xl border border-[#C49A42]/30 shadow-royal space-y-6">
            <h3 className="font-serif text-2xl text-[#321B11] font-medium">
              Concierge Desk
            </h3>
            <p className="text-xs text-[#7A685A] leading-relaxed">
              We welcome your inquiries. For retail assistance, chef collaborations, or corporate nutrition hampers, contact our dedicated desk.
            </p>

            <div className="space-y-4 pt-2 border-t border-[#C49A42]/20 text-xs">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C49A42] mt-0.5" />
                <div>
                  <span className="font-bold text-[#321B11] block">Customer Inquiries:</span>
                  <a href="mailto:care@royalora.com" className="text-[#7A685A] hover:text-[#C49A42] transition-colors">
                    care@royalora.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#C49A42] mt-0.5" />
                <div>
                  <span className="font-bold text-[#321B11] block">Support Phone:</span>
                  <span className="text-[#7A685A]">+91 [Business Phone Placeholder]</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C49A42] mt-0.5" />
                <div>
                  <span className="font-bold text-[#321B11] block">Registered Office:</span>
                  <span className="text-[#7A685A]">ROYALORA Private Limited, [Registered City &amp; State, India]</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#C49A42] mt-0.5" />
                <div>
                  <span className="font-bold text-[#321B11] block">Concierge Hours:</span>
                  <span className="text-[#7A685A]">Monday – Saturday, 9:30 AM – 6:30 PM IST</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#E9D9BA]/50 rounded-xl border border-[#C49A42]/30 text-[11px] text-[#321B11]">
              <p className="font-semibold mb-1">Corporate &amp; Wedding Hampers</p>
              <p className="text-[#7A685A]">
                Custom embossed gold packaging available for corporate gifting and regal weddings with 2-week advance scheduling.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-[#C49A42]/30 shadow-royal">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl text-[#321B11] font-medium">
                  Message Received with Honor
                </h3>
                <p className="text-xs text-[#7A685A] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to ROYALORA. Our concierge desk will review your inquiry and reply within 24 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-[#321B11] text-[#E9D9BA] text-xs uppercase tracking-widest font-semibold rounded hover:bg-[#C49A42] hover:text-[#321B11] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#321B11] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maharani Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#321B11] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#321B11] mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#321B11] mb-1">
                      Subject *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Product inquiry, bulk order, etc."
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#321B11] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us how we can assist your culinary or nutrition journey..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF6EF] border border-[#C49A42]/30 rounded-lg text-[#321B11] focus:outline-none focus:border-[#C49A42]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-widest font-semibold rounded-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>{loading ? 'Transmitting Inquiries...' : 'Send Message to Concierge'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
