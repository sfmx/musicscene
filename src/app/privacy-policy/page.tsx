import React from 'react';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';

export const metadata: Metadata = {
  title: 'Privacy Policy | MusicScene',
  description: 'Privacy Policy for MusicScene. Learn how we collect, use, and protect your information at musicscene.com.au.',
};

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="bg-gray-50/50 min-h-screen pb-16">
        <header className="relative h-64 bg-gray-950 overflow-hidden flex items-center justify-center text-center px-4">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent" />
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">Privacy Policy</h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              How we collect, use, and protect your information on MusicScene.
            </p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto mt-12 px-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="prose prose-lg prose-blue max-w-none text-gray-600">
              <p className="text-sm font-medium tracking-wide text-blue-600 uppercase mb-8">
                Last updated: April 24, 2026
              </p>

              <p className="lead text-xl text-gray-900 font-medium">
                Welcome to MusicScene ("we," "our," or "us"), accessible at <strong className="text-gray-900">musicscene.com.au</strong>. 
                We are committed to protecting your personal information and your right to privacy. 
                This Privacy Policy explains how our organization collects, uses, and discloses your information.
              </p>

              <hr className="my-8 border-gray-100" />

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>
              <p>
                We automatically collect certain information when you visit, use, or navigate the Website. 
                This information does not reveal your specific identity (like your name or contact information) 
                but may include device and usage information, such as your IP address, browser and device 
                characteristics, operating system, language preferences, referring URLs, device name, country, 
                location, information about how and when you use our Website, and other technical information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Cookies and Web Beacons</h2>
              <p>
                Like any other website, musicscene.com.au uses "cookies". These cookies are used to store 
                information including visitors' preferences, and the pages on the website that the visitor 
                accessed or visited. The information is used to optimize the users' experience by customizing 
                our web page content based on visitors' browser type and/or other information.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Third-Party Advertisers and Links</h2>
              <p>
                Third-party ad servers or ad networks (such as Google AdSense) uses technologies like cookies, 
                JavaScript, or Web Beacons that are used in their respective advertisements and links that appear 
                on musicscene.com.au, which are sent directly to users' browser. They automatically receive your 
                IP address when this occurs. These technologies are used to measure the effectiveness of their 
                advertising campaigns and/or to personalize the advertising content that you see on websites that 
                you visit.
              </p>
              <p>
                Note that musicscene.com.au has no access to or control over these cookies that are used by 
                third-party advertisers.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Amazon Affiliate Disclaimer</h2>
              <p>
                MusicScene is a participant in the Amazon Services LLC Associates Program, an affiliate advertising 
                program designed to provide a means for sites to earn advertising fees by advertising and linking 
                to Amazon.com.au. As an Amazon Associate, we earn from qualifying purchases.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights under applicable data protection laws, 
                including the right to access, correct, or delete your personal data. To exercise these rights, 
                please contact us.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Contact Information</h2>
              <p>
                If you have questions or comments about this notice, you may email us at{' '}
                <a href="mailto:privacy@musicscene.com.au" className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-4">privacy@musicscene.com.au</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}