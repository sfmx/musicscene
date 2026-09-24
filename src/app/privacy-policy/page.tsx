import React from 'react';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'Privacy Policy | MusicScene',
  description:
    'Privacy Policy for MusicScene. Learn how we collect, use, and protect your information, and how Google AdSense and third-party advertising cookies operate at musicscene.com.au.',
};

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-16 text-slate-900 dark:text-slate-100 transition-colors">
        
        <Header
          title="Privacy Policy"
          subtitle="How we collect, use, and protect your information on MusicScene."
        />

        <div className="max-w-4xl mx-auto mt-12 px-6">
          <div className="bg-white dark:bg-slate-900/90 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12">
            <div className="prose prose-lg prose-blue dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
              <p className="text-sm font-medium tracking-wide text-blue-600 dark:text-blue-400 uppercase mb-8">
                Last updated: September 9, 2026
              </p>

              <p className="lead text-xl text-slate-900 dark:text-white font-medium">
                Welcome to MusicScene (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;), accessible at{' '}
                <strong className="text-slate-900 dark:text-white">musicscene.com.au</strong>. We are committed to protecting your
                privacy and ensuring you have a positive experience on our website. This Privacy Policy outlines our
                practices concerning the collection, use, and disclosure of personal information and explains the choices
                available to you regarding our use of your information, including third-party advertising cookies.
              </p>

              <hr className="my-8 border-slate-200 dark:border-slate-800" />

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">1. Information We Collect</h2>
              <p>
                When you visit and navigate MusicScene, we collect information in two ways: information you voluntarily
                provide to us and information collected automatically through cookies and tracking technologies.
              </p>
              <ul className="space-y-2">
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Voluntary Information:</strong> If you contact us directly via email
                  or submit an inquiry, we may collect your name, email address, and any details included in your
                  message.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Log and Usage Data:</strong> Like most websites, our servers
                  automatically log information when you access MusicScene. This may include your Internet Protocol (IP)
                  address, browser type and version, operating system, language preferences, referring URLs, pages
                  viewed, duration of visits, and timestamps.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Device Information:</strong> We may collect technical details about
                  the device you use to access the site (such as whether you are browsing on mobile, tablet, or desktop)
                  to optimize our responsive interactive fretboards and music notation renderers.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">2. Cookies and Web Beacons</h2>
              <p>
                MusicScene uses &ldquo;cookies&rdquo; and similar technologies (such as local storage and web beacons) to
                store visitor preferences, record user-specific information on which pages the visitor accesses or visits,
                and tailor our web page content to your browser type.
              </p>
              <p>
                A cookie is a small text file stored on your computer or mobile device when you visit a website. You can
                instruct your browser to refuse all cookies or indicate when a cookie is being sent. However, if you do
                not accept essential cookies, some interactive features of our musical tools and user preferences may
                not function as intended.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">3. Google AdSense &amp; Third-Party Advertising</h2>
              <p>
                MusicScene displays advertisements served by third-party advertising partners, including{' '}
                <strong className="text-slate-900 dark:text-white">Google AdSense</strong>. We comply strictly with Google&apos;s
                publisher policies and provide the following mandatory disclosures:
              </p>
              <div className="bg-blue-50/60 dark:bg-blue-950/30 border-l-4 border-blue-600 dark:border-blue-400 p-5 rounded-r-xl my-6 space-y-3 text-slate-700 dark:text-slate-300">
                <p>
                  <strong>Third-Party Vendors &amp; Google Cookies:</strong> Third-party vendors, including Google, use
                  cookies to serve ads based on a user&apos;s prior visits to your website or other websites across the
                  Internet.
                </p>
                <p>
                  <strong>Personalized Advertising:</strong> Google&apos;s use of advertising cookies enables it and its
                  partners to serve ads to users based on their visits to MusicScene and/or other sites on the Internet.
                </p>
                <p>
                  <strong>Opting Out of Personalized Advertising:</strong> Users may opt out of personalized advertising
                  at any time by visiting{' '}
                  <a
                    href="https://adssettings.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    Google Ads Settings (adssettings.google.com)
                  </a>
                  .
                </p>
                <p>
                  Alternatively, you can opt out of a third-party vendor&apos;s use of cookies for personalized advertising
                  by visiting the Digital Advertising Alliance&apos;s consumer choice tool at{' '}
                  <a
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    www.aboutads.info/choices/
                  </a>{' '}
                  or the Network Advertising Initiative opt-out page at{' '}
                  <a
                    href="https://optout.networkadvertising.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 font-semibold underline hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    optout.networkadvertising.org
                  </a>
                  .
                </p>
              </div>
              <p>
                These third-party ad servers or ad networks use technology in the advertisements and links that appear on
                MusicScene, which are sent directly to your browser. They automatically receive your IP address when this
                occurs. Other technologies (such as cookies, JavaScript, or Web Beacons) may also be used by the
                third-party ad networks to measure the effectiveness of their advertisements and to personalize the
                advertising content that you see. MusicScene has no access to or control over these cookies used by
                third-party advertisers.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">4. Amazon Associates &amp; Affiliate Links</h2>
              <p>
                MusicScene is a participant in the <strong className="text-slate-900 dark:text-white">Amazon Services LLC Associates Program</strong>,
                an affiliate advertising program designed to provide a means for sites to earn advertising fees by
                advertising and linking to Amazon.com.au and affiliated Amazon properties.
              </p>
              <p>
                When you click on an affiliate link for guitars, amplifiers, effects pedals, or accessories on our site,
                a tracking cookie is set by Amazon to track qualifying purchases. As an Amazon Associate, we earn from
                qualifying purchases at no extra cost to you. For full details on our editorial independence and
                monetization practices, please review our{' '}
                <a href="/affiliate-disclosure" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline">
                  Affiliate Disclosure
                </a>
                .
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">5. How We Use Your Information</h2>
              <p>We use the information we collect solely for lawful, legitimate educational and operational purposes, including:</p>
              <ul className="space-y-1">
                <li>Operating, maintaining, and improving our educational articles, song analyses, and music theory tools.</li>
                <li>Analyzing site traffic, trends, and user interactions to create better guitar instructional materials.</li>
                <li>Responding promptly to user inquiries, feedback, and content error submissions.</li>
                <li>Preventing malicious traffic, bot scraping, and security incidents.</li>
                <li>Delivering relevant advertisements and affiliate product links that support our free educational content.</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">6. Your Data Rights (GDPR &amp; CCPA/CPRA)</h2>
              <p>
                Depending on your geographical location, you may hold statutory rights under applicable privacy laws such
                as the General Data Protection Regulation (GDPR) or California Consumer Privacy Act (CCPA):
              </p>
              <ul className="space-y-2">
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Right to Access / Know:</strong> You may request details on what
                  personal information we hold about you.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Right to Rectification:</strong> You may request corrections to any
                  inaccurate or incomplete personal information.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Right to Erasure (&ldquo;Right to be Forgotten&rdquo;):</strong> You
                  may request deletion of your personal data under certain conditions.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Right to Restrict or Object to Processing:</strong> You may object to
                  or request the restriction of our processing of your personal data.
                </li>
                <li>
                  <strong className="text-slate-800 dark:text-slate-200">Non-Discrimination:</strong> We will never discriminate against you for
                  exercising any of your privacy rights.
                </li>
              </ul>
              <p>
                To exercise any of these statutory rights, please contact our data privacy officer at{' '}
                <a href="mailto:privacy@musicscene.com.au" className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300">
                  privacy@musicscene.com.au
                </a>
                . We respond to all verified requests within statutory time limits (generally 30 days).
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">7. Managing and Disabling Cookies</h2>
              <p>
                Most modern web browsers allow you to control and manage cookies through their preference settings. You
                can set your browser to block third-party cookies, alert you when a cookie is placed, or delete existing
                cookies. For instructions on how to manage cookies in popular web browsers, consult:
              </p>
              <ul className="space-y-1">
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    Google Chrome Cookie Settings
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    Mozilla Firefox Cookie Settings
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    Apple Safari Cookie Settings
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    Microsoft Edge Cookie Settings
                  </a>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">8. Third-Party External Links</h2>
              <p>
                Our lessons and song analyses contain links to external third-party websites (such as Spotify, YouTube,
                Apple Music, Ultimate Guitar, Songsterr, and Musicnotes). We have no control over and assume no
                responsibility for the content, privacy policies, or practices of any third-party sites. We strongly
                advise you to review the privacy policy of every website you visit.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">9. Contact Us</h2>
              <p>
                If you have questions, feedback, or concerns regarding this Privacy Policy, our cookie practices, or
                third-party ad networks, please contact us:
              </p>
              <div className="bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl p-6 not-prose text-slate-700 dark:text-slate-300 space-y-2">
                <p className="font-bold text-slate-900 dark:text-white">MusicScene Privacy Team</p>
                <p>Website: <a href="https://musicscene.com.au" className="text-blue-600 dark:text-blue-400 hover:underline">musicscene.com.au</a></p>
                <p>Email: <a href="mailto:privacy@musicscene.com.au" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">privacy@musicscene.com.au</a></p>
                <p>Location: New South Wales, Australia</p>
                <p>Location: Brisbane, Queensland, Australia</p>
                <p className="text-sm text-slate-500 dark:text-slate-400 pt-2">We strive to respond to all inquiries within 24 to 48 business hours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}