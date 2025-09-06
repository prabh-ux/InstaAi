// src/components/Conditions.jsx
import React from "react";

const Conditions = () => {
  const siteName = "InstaAI";
  const siteUrl = "https://insta-ai-xi.vercel.app";
  const contactEmail = "prabhkiratsinghbusiness@gmail.com"; // replace with your real email

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-6 sm:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-400">
            Terms & Conditions
          </h1>
          <p className="text-gray-400 text-sm text-center mt-2">
            Effective date: <strong>September 6, 2025</strong>
          </p>
        </header>

        <section className="prose prose-invert max-w-none text-gray-300">
          <h2>Acceptance of Terms</h2>
          <p>
            By accessing or using <strong>{siteName}</strong> ({siteUrl}), you agree to
            comply with and be bound by these Terms & Conditions. If you do not agree,
            you may not use the website or its services.
          </p>

          <h2>Use of Services</h2>
          <ul>
            <li>
              Our tools (caption generator, hashtag generator, bio ideas, username
              generator, etc.) are provided for personal and business use.
            </li>
            <li>
              You agree not to misuse the services, including attempting to disrupt
              functionality or gain unauthorized access to systems.
            </li>
            <li>
              Content generated is for creative/entertainment purposes only. You are
              responsible for how you use it on platforms like Instagram.
            </li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All trademarks, logos, branding, design, and code on this site belong to{" "}
            {siteName}. You may not copy, reproduce, or redistribute our materials
            without written permission.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            The services are provided on an "as is" and "as available" basis. We do not
            guarantee uninterrupted, error-free, or secure operation of the service.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, {siteName} shall not be liable for
            any damages arising out of your use or inability to use the website,
            including loss of data, profits, or business opportunities.
          </p>

          <h2>Third-Party Links & Services</h2>
          <p>
            Our site may contain links to third-party websites. We are not responsible
            for the content, privacy policies, or practices of any third-party services.
          </p>

          <h2>Termination</h2>
          <p>
            We may suspend or terminate access to our services at any time, without
            prior notice, if you violate these Terms.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update or modify these Terms & Conditions at any time. Updates will
            be posted on this page with a new effective date. Continued use of the site
            after updates means you accept the changes.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of
            your jurisdiction, without regard to its conflict of law principles.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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
            This Terms & Conditions page was last updated on{" "}
            <strong>September 6, 2025</strong>.
          </p>
        </section>
      </div>
    </main>
  );
};

export default Conditions;
