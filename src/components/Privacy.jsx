// src/components/Privacy.jsx
import React from "react";

const Privacy = () => {
  const siteUrl = "https://insta-ai-xi.vercel.app";
  const contactEmail = "prabhkiratsinghbusiness@gmail.com"; // replace with your real email

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-6 sm:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-400">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm text-center mt-2">
            Effective date: <strong>September 6, 2025</strong>
          </p>
        </header>

        <section className="prose prose-invert max-w-none text-gray-300">
          <h2>Introduction</h2>
          <p>
            Welcome to <strong>InstaAI</strong> ({siteUrl}). Your privacy matters.
            This Privacy Policy explains what information we collect, how we use it,
            who we share it with, and how you can control your information when you
            use our AI Instagram tools (captions, hashtags, bios, username generators and related pages).
          </p>

          <h2>Information We Collect</h2>
          <h3>1. Information You Provide</h3>
          <p>
            When you use our tools, you may voluntarily provide certain information,
            such as text inputs (e.g., caption topics, bio details, keywords), optional
            personal identifiers you choose to enter (e.g., a username for name generation),
            and feedback you submit via contact forms or email.
          </p>

          <h3>2. Automatically Collected Information</h3>
          <p>
            We automatically collect non-identifying technical data to keep the service working and to improve it:
          </p>
          <ul>
            <li>Device and browser details (user agent, screen size)</li>
            <li>IP address (used for basic security and analytics)</li>
            <li>Pages visited, timestamps, and basic usage metrics</li>
            <li>Performance and error logs</li>
          </ul>

          <h3>3. Cookies & Similar Technologies</h3>
          <p>
            We use cookies or similar technologies (local storage) to store user preferences
            and session information. You can control cookie settings in your browser. Cookies are
            used to improve UX and track anonymous usage patterns.
          </p>

          <h2>How We Use Your Information</h2>
          <ul>
            <li>To provide and maintain the service (generate captions, hashtags, bios, usernames).</li>
            <li>To analyze and improve features, performance, and reliability.</li>
            <li>To detect, prevent and respond to fraud, abuse, or security incidents.</li>
            <li>To communicate updates, changes to policies, or respond to support requests.</li>
          </ul>

          <h2>Third-Party Services & Analytics</h2>
          <p>
            We may use third-party services for analytics, hosting, monitoring, and other functions.
            These services may collect information about your device and usage. Example providers may include:
          </p>
          <ul>
            <li>Vercel (hosting and CDN)</li>
            <li>Vercel Analytics or other analytics tools</li>
            <li>Any other third-party APIs used for AI generation (if applicable)</li>
          </ul>
          <p>
            We do not sell your personal information to third parties. Any sharing is limited to:
            service providers who help us operate and improve the service (under contract), or where
            disclosure is required by law.
          </p>

          <h2>Data Retention</h2>
          <p>
            We retain data as long as necessary to provide the service, comply with legal obligations,
            resolve disputes, and enforce agreements. Automatically-collected usage data may be retained
            for analytics purposes in aggregated or anonymized form.
          </p>

          <h2>Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have rights such as:
          </p>
          <ul>
            <li>Request access to the personal information we hold about you.</li>
            <li>Request correction or deletion of your personal information.</li>
            <li>Object to or restrict processing of your personal information.</li>
            <li>Request portability of your personal information where applicable.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <a className="text-purple-300 underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            . We'll respond as required by law.
          </p>

          <h2>Children</h2>
          <p>
            Our services are not directed to children under 13 (or the minimum age in your jurisdiction).
            We do not knowingly collect personal information from children. If you believe we have collected
            personal information from a child, contact us and we will promptly delete it.
          </p>

          <h2>Security</h2>
          <p>
            We take reasonable measures to protect your information. However, no system is completely
            secure — we cannot guarantee absolute security of data transmitted to or from our service.
          </p>

          <h2>International Transfers</h2>
          <p>
            If you use our services from outside the hosting country, your information may be transferred
            and processed in other countries. By using our service you consent to those transfers.
          </p>

          <h2>Changes to this Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make changes, we will update the
            effective date at the top of this page. Significant changes will be posted or communicated via
            the website.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions, requests, or privacy concerns, please contact:
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a className="text-purple-300 underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            <br />
            <strong>Website:</strong>{" "}
            <a className="text-purple-300 underline" href={siteUrl}>
              {siteUrl}
            </a>
          </p>

          <hr className="border-gray-700 my-4" />

          <p className="text-xs text-gray-500">
            This Privacy Policy was last updated on <strong>September 6, 2025</strong>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Privacy;
