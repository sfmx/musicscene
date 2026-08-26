import React from 'react';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description:
    'MusicScene affiliate disclosure. Learn how we earn revenue through Amazon Associates and other affiliate programs.',
};

export default function AffiliateDisclosurePage() {
  return (
    <Layout>
      <div className="bg-gray-50/50 min-h-screen">
        {/* Header */}
        <header className="relative h-64 bg-gray-950 overflow-hidden flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent" />
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Affiliate Disclosure
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Transparency is important to us. Here&apos;s how we fund MusicScene while keeping our editorial honest.
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <p className="text-sm text-gray-400 mb-10">Last updated: April 17, 2026</p>

          {/* Transparency promise callout */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 p-8 mb-14">
            <div className="flex items-start gap-4">
              <div className="shrink-0 mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Our Commitment</h2>
                <p className="text-gray-700 leading-relaxed">
                  MusicScene (<strong>musicscene.com.au</strong>) is committed to transparency.
                  This page discloses how we earn revenue through affiliate partnerships and how
                  this may affect the content you see on our site.
                </p>
              </div>
            </div>
          </div>

          {/* Main content grid */}
          <div className="grid gap-10 md:grid-cols-2 mb-14">
            {/* FTC Disclosure */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.789l1.599.799L9 4.323V3a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </span>
                <h2 className="text-xl font-bold text-gray-900">FTC Disclosure</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                In accordance with the Federal Trade Commission&apos;s guidelines concerning the use of
                endorsements and testimonials in advertising (16 CFR Part 255), some of the links on
                MusicScene are affiliate links. This means we may earn a commission if you click on a
                link and make a purchase — at <strong>no additional cost to you</strong>.
              </p>
            </div>

            {/* Amazon Associates */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  </svg>
                </span>
                <h2 className="text-xl font-bold text-gray-900">Amazon Associates</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                MusicScene is a participant in the <strong>Amazon Services LLC Associates Program</strong>,
                an affiliate advertising program designed to provide a means for sites to earn advertising
                fees by advertising and linking to Amazon.com.au.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When we recommend guitars, amps, pedals, or accessories, we may link to those products on
                Amazon. If you purchase through one of these links, Amazon pays us a small commission.
                The price you pay is the same whether you use our link or go directly to Amazon.
              </p>
            </div>
          </div>

          {/* Where affiliate links appear */}
          <section className="mb-14">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Where Affiliate Links Appear</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4 bg-white rounded-xl p-6 shadow-sm">
                <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V8z" clipRule="evenodd" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Gear Lesson Pages</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Product names, recommendations, and comparisons in our guitar, amp, effects,
                    recording, and accessories guides.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-white rounded-xl p-6 shadow-sm">
                <span className="shrink-0 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 text-violet-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Song Analysis Pages</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Equipment sections describing recommended guitars, amps, and effects for
                    recreating a song&apos;s tone.
                  </p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Affiliate links are visually distinguished and open product pages on Amazon.com.au when clicked.
            </p>
          </section>

          {/* Editorial Independence */}
          <section className="rounded-2xl bg-white p-8 shadow-sm mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900">Editorial Independence</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our affiliate partnerships do <strong>not</strong> influence our editorial content.
              We recommend products because we believe they are good choices for guitarists — not
              because of the commission we might earn. Many products on our site have no affiliate
              link at all; we mention them because they&apos;re relevant to the lesson.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">Our gear recommendations are based on:</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                'Tonal characteristics & playing style fit',
                'Build quality and reliability',
                'Value for money at different price points',
                'Artist usage & historical significance',
                'Our own playing experience and testing',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 text-green-500 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Other Revenue + Questions */}
          <div className="grid gap-10 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-100 text-sky-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </span>
                <h2 className="text-xl font-bold text-gray-900">Other Revenue</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                In addition to affiliate links, MusicScene may display advertisements served by
                third-party ad networks (such as Google AdSense). These advertisements are labeled
                and are separate from our editorial content.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                </span>
                <h2 className="text-xl font-bold text-gray-900">Questions?</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have questions about our affiliate relationships or how we earn revenue,
                we&apos;d love to hear from you.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Visit our Contact page
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
