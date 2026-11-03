'use client';

import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';
import { GoldDivider } from '../ui/GoldDivider';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    if (!agreed) {
      setStatus('error');
      setMessage('Please acknowledge the privacy policy consent to subscribe.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setMessage('Welcome to the ROYALORA Connoisseur Circle. Look for our welcome note in your inbox.');
      setEmail('');
    }, 600);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#F8F1E5] to-[#FAF6EF] border-t border-[#C49A42]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] font-semibold text-[#C49A42] mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Exclusive Privileges</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#321B11] tracking-wide mb-3">
          Join the ROYALORA Family
        </h2>

        <GoldDivider className="mx-auto max-w-xs mb-4" />

        <p className="text-sm sm:text-base text-[#7A685A] max-w-xl mx-auto leading-relaxed mb-8">
          Stay connected with premium nutrition, exciting launches, and royal offers.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-[#7A685A] absolute left-3.5 top-3.5" />
              <input
                type="email"
                placeholder="Enter your personal email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                className="w-full pl-10 pr-4 py-3 text-xs bg-white border border-[#C49A42]/40 rounded-lg text-[#321B11] placeholder:text-[#7A685A] focus:outline-none focus:border-[#C49A42] shadow-sm"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-[#321B11] hover:bg-[#C49A42] text-[#F8F1E5] hover:text-[#321B11] text-xs uppercase tracking-widest font-semibold rounded-lg shadow-royal transition-all duration-300 disabled:opacity-60"
            >
              {status === 'loading' ? 'Joining...' : 'Subscribe'}
            </button>
          </div>

          {/* Privacy Consent Checkbox */}
          <div className="flex items-start justify-center gap-2 text-left">
            <input
              type="checkbox"
              id="newsletter-agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 rounded border-[#C49A42] text-[#C49A42] focus:ring-[#C49A42]"
            />
            <label htmlFor="newsletter-agree" className="text-[11px] text-[#7A685A] leading-tight cursor-pointer">
              I agree to receive curated newsletters and accept the{' '}
              <a href="/privacy-policy" className="underline hover:text-[#C49A42]">
                Privacy Policy
              </a>
              . Unsubscribe anytime.
            </label>
          </div>

          {/* Feedback states */}
          {status === 'success' && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-800 text-xs rounded-lg flex items-center justify-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>{message}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
