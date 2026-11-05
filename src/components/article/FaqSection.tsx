'use client';

import React, { useState } from 'react';
import { FaqItem } from '@/types';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FaqSection: React.FC<{ faqs?: FaqItem[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section id="frequently-asked-questions" className="my-10">
      <div className="flex items-center gap-2 pb-3 mb-6 border-b border-ink-border">
        <HelpCircle className="w-5 h-5 text-editorial-accent" />
        <h3 className="font-serif font-bold text-2xl text-ink-heading">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-ink-border rounded-lg bg-white overflow-hidden transition-all shadow-xs"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-serif font-semibold text-ink-heading hover:text-editorial-accent transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg">{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-ink-muted transition-transform duration-200 shrink-0 ${
                    isOpen ? 'rotate-180 text-editorial-accent' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm text-ink-body font-sans leading-relaxed border-t border-ink-borderLight bg-paper-50/50">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

