'use client';

import React, { useState } from 'react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { siteConfig } from '@/data/siteConfig';
import { Mail, MapPin, Send, CheckCircle2, Loader2, Shield } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    department: 'editorial',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (!formData.email.includes('@') || !formData.email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        department: 'editorial',
        message: '',
      });
    }, 700);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
      <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />

      <header className="max-w-3xl mb-12 pt-4">
        <span className="text-xs font-mono uppercase tracking-widest text-editorial-accent font-semibold">
          Communications Desk
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink-heading mt-2 mb-4">
          Connect with the Editorial Board
        </h1>
        <p className="text-sm sm:text-base text-ink-body font-sans leading-relaxed">
          Whether you have a technical news tip, a correction, or an inquiry regarding syndication
          and research partnerships, we value direct, thoughtful dialogue.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-ink-border rounded-xl p-6 sm:p-8 shadow-sm">
          {status === 'success' ? (
            <div className="py-12 text-center">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-serif font-bold text-2xl text-ink-heading mb-2">
                Message Dispatched Successfully
              </h3>
              <p className="text-sm text-ink-muted max-w-md mx-auto mb-6">
                Thank you for contacting Readora. Your message has been logged with our editorial
                desk. We review all correspondence within two business days.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="bg-ink-heading text-white px-5 py-2 rounded text-xs font-medium hover:bg-editorial-accent transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-ink-heading font-medium mb-1.5"
                  >
                    Your Name <span className="text-editorial-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Jane Doe"
                    className="w-full bg-paper-50 border border-ink-border px-3.5 py-2 rounded text-sm text-ink-heading focus:outline-none focus:ring-2 focus:ring-editorial-accent transition"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-ink-heading font-medium mb-1.5"
                  >
                    Email Address <span className="text-editorial-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="jane@organization.com"
                    className="w-full bg-paper-50 border border-ink-border px-3.5 py-2 rounded text-sm text-ink-heading focus:outline-none focus:ring-2 focus:ring-editorial-accent transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="department"
                    className="block text-xs font-mono uppercase tracking-wider text-ink-heading font-medium mb-1.5"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full bg-paper-50 border border-ink-border px-3 py-2 rounded text-sm text-ink-heading focus:outline-none focus:ring-2 focus:ring-editorial-accent transition"
                  >
                    <option value="editorial">Editorial Desk (Tips & Corrections)</option>
                    <option value="press">Press & Media Relations</option>
                    <option value="licensing">Syndication & Licensing</option>
                    <option value="technical">Engineering & Web Platform</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-ink-heading font-medium mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Brief description"
                    className="w-full bg-paper-50 border border-ink-border px-3.5 py-2 rounded text-sm text-ink-heading focus:outline-none focus:ring-2 focus:ring-editorial-accent transition"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-ink-heading font-medium mb-1.5"
                >
                  Message <span className="text-editorial-accent">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  placeholder="Detail your inquiry, proposed correction, or commentary..."
                  className="w-full bg-paper-50 border border-ink-border p-3.5 rounded text-sm text-ink-heading focus:outline-none focus:ring-2 focus:ring-editorial-accent transition"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-xs font-medium">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-2 bg-ink-heading text-white py-3 rounded text-xs font-sans uppercase tracking-widest font-semibold hover:bg-editorial-accent transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Editorial Board</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Directory & Policies Sidebar (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Email Cards */}
          <div className="bg-paper-100 border border-ink-border rounded-xl p-6 space-y-4">
            <h3 className="font-serif font-bold text-lg text-ink-heading">
              Direct Communication Lines
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <p className="font-mono uppercase text-ink-muted text-[10px]">
                  General Inquiries
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-sm font-semibold text-editorial-accent hover:underline flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {siteConfig.contact.email}
                </a>
              </div>

              <div>
                <p className="font-mono uppercase text-ink-muted text-[10px]">
                  Editorial & Corrections
                </p>
                <a
                  href={`mailto:${siteConfig.contact.editorialEmail}`}
                  className="text-sm font-semibold text-editorial-accent hover:underline flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {siteConfig.contact.editorialEmail}
                </a>
              </div>

              <div>
                <p className="font-mono uppercase text-ink-muted text-[10px]">
                  Office Location
                </p>
                <p className="text-xs text-ink-heading flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-ink-muted" />
                  {siteConfig.contact.location}
                </p>
              </div>
            </div>
          </div>

          {/* Whistleblower & Confidentiality Note */}
          <div className="bg-white border border-ink-border rounded-xl p-6">
            <div className="flex items-center gap-2 mb-2 text-editorial-accent">
              <Shield className="w-4 h-4" />
              <h4 className="font-serif font-bold text-sm text-ink-heading">
                Confidential News Tips
              </h4>
            </div>
            <p className="text-xs text-ink-muted leading-relaxed">
              If you have confidential documents or technical insider tips regarding software
              vulnerabilities or algorithmic governance, please note in your message if you require
              PGP-encrypted communication before sending sensitive materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

