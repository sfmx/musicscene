import React from 'react';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with the MusicScene team. Send us feedback, report issues, or ask questions about our guitar lessons and content.',
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="bg-gray-50/50 min-h-screen">
        <header className="relative h-48 bg-gray-950 overflow-hidden flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent" />
          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold text-white tracking-tight">Contact Us</h1>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                We welcome feedback from players, educators, and visitors. Whether you have an observation on a song analysis,
                want to report an inaccurate chord transcription, or wish to suggest a new lesson topic, we are here to assist.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our editorial team aims to review and respond to all inquiries within <strong>24 to 48 business hours</strong>.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:contact@musicscene.com.au"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  contact@musicscene.com.au
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Publisher Details</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <span className="font-semibold text-gray-800 block">Organization:</span>
                    <span>MusicScene</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 block">Lead Editor:</span>
                    <span>Jason Smith</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 block">Location:</span>
                    <span>New South Wales, Australia</span>
                    <span>Brisbane, Queensland, Australia</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800 block">Privacy Inquiries:</span>
                    <a href="mailto:privacy@musicscene.com.au" className="text-blue-600 hover:underline">
                      privacy@musicscene.com.au
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
                Operating under Australian Consumer Law &amp; Copyright Act 1968 (Cth).
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Content Corrections</h3>
              <p className="text-gray-600 leading-relaxed">
                Found an incorrect chord, wrong tuning, or inaccurate tab? We take accuracy seriously.
                Let us know the specific song or lesson and what needs fixing, and we&apos;ll review and
                correct it promptly.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Song Requests</h3>
              <p className="text-gray-600 leading-relaxed">
                Want us to analyze a specific song? Tell us the song title and artist, and we&apos;ll
                add it to our content roadmap. We prioritize requests based on popularity and educational value.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Issues</h3>
              <p className="text-gray-600 leading-relaxed">
                Experiencing problems with the site, broken links, or rendering issues? Please include
                your browser, device type, and a description of the issue so we can investigate.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-3">General Feedback</h3>
              <p className="text-gray-600 leading-relaxed">
                Ideas for new features, lesson topics, or general thoughts about MusicScene? We&apos;re
                always looking for ways to improve and your feedback helps shape our roadmap.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
