import React from 'react';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Terms of Service for MusicScene. Review the terms and conditions governing your use of musicscene.com.au.',
};

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className="bg-gray-50/50 min-h-screen pb-16">
        <header className="relative h-64 bg-gray-950 overflow-hidden flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent" />
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Terms of Service</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              The rules and guidelines for using MusicScene's educational resources.
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto mt-12 px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="prose prose-lg prose-blue max-w-none text-gray-600">
              <p className="text-sm font-medium tracking-wide text-blue-600 uppercase mb-8">
                Last updated: April 23, 2026
              </p>

              <p className="lead text-xl text-gray-900 font-medium">
                Welcome to MusicScene. By accessing or using the website at{' '}
                <strong className="text-gray-900">musicscene.com.au</strong> (the &ldquo;Site&rdquo;), you agree to be bound by these
                Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please do not
                use the Site.
              </p>

              <hr className="my-8 border-gray-100" />

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Use of the Site</h2>
              <p>
                MusicScene provides guitar education content including song analysis, music theory lessons,
                gear guides, and practice tools (&ldquo;Content&rdquo;). The site is operated by an individual creator based in Australia. You may use the Site and its Content
                for your personal, non-commercial educational purposes.
              </p>
              <p className="font-medium text-gray-900 mt-6 mb-2">You agree not to:</p>
              <ul className="space-y-2 marker:text-blue-500">
                <li>Reproduce, distribute, or republish Content without written permission.</li>
                <li>Use the Site in any way that violates applicable local or international laws.</li>
                <li>Attempt to interfere with the proper functioning or security of the Site.</li>
                <li>Use automated systems (bots, scrapers) to extract data without prior consent.</li>
                <li>Misrepresent your identity or affiliation when contacting us.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Intellectual Property & Fair Dealing</h2>
              <p>
                The original educational Content on this Site (including text explanations, custom graphics, fretboard diagrams,
                tutorial structure, and site design) is the property of MusicScene.
              </p>
              <p>
                Under the <em>Copyright Act 1968</em> (Cth) of Australia, we utilize principles of &ldquo;fair dealing&rdquo; for the purpose of research and study, criticism, and review. 
                Song titles, artist names, album names, and snippet musical notations referenced in our educational content remain the
                property of their respective owners. MusicScene provides educational analysis and critical commentary, and does not reproduce complete, licensed sheet music works.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Educational Disclaimer</h2>
              <p>
                The Content on this Site is provided for educational and informational purposes only. While
                we strive for high accuracy in our song analysis, theory explanations, and technique tutorials,
                we make no guarantees regarding your progression as a musician. Guitar playing relies heavily on individual practice and physical conditioning.
              </p>
              <p>
                If you suffer discomfort or pain while practicing techniques shown on the Site, stop immediately. We are not liable for any physical injuries resulting from practice.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Affiliate Links & Advertising</h2>
              <p>
                The Site contains affiliate links, notably to Amazon.com.au. When you click
                these links and make a purchase, we may earn a small commission at no extra cost to you. 
                Our participation in the Amazon Associates program helps keep our core educational content free. Review our <a href="/affiliate-disclosure" className="text-blue-600 hover:underline">Affiliate Disclosure</a> for full details.
              </p>
              <p>
                Additionally, the Site displays third-party advertisements (such as Google AdSense). We do not directly endorse the products or services shown in dynamically generated advertisements, nor are we responsible for the terms and privacy practices of those third-party advertisers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. User Submissions</h2>
              <p>
                If you submit feedback, suggestions, or other communications to us (via the contact form
                or email), you grant MusicScene a non-exclusive, royalty-free license
                to use such submissions for the purpose of improving the Site and its Content.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by Australian law, MusicScene and its creator shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages arising from your use
                of the Site, including but not limited to:
              </p>
              <ul className="space-y-2 marker:text-blue-500">
                <li>Errors, delays, or inaccuracies in the Content.</li>
                <li>Personal injury or property damage related to your implementation of the Site&apos;s educational material.</li>
                <li>Unauthorized access to our systems or your data.</li>
                <li>Issues arising from external products or services purchased through affiliate links.</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Disclaimer of Warranties</h2>
              <p>
                The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis.
                MusicScene makes no warranties, express or implied—including statutory consumer guarantees where exclusion is permitted—regarding the Site&apos;s operation,
                availability, or the absolute technical precision of its musical transcriptions.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Australia,
                without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Australia.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Contact Information</h2>
              <p>
                If you have questions about these Terms of Service, please reach out to us via our{' '}
                <a href="/contact" className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-4">Contact page</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}