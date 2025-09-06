// src/components/AboutUs.jsx
import React from "react";

const AboutUs = () => {
  const siteName = "InstaAI";
  const siteUrl = "https://insta-ai-xi.vercel.app";

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-6 sm:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-purple-400">
            About Us
          </h1>
          <p className="text-gray-400 text-sm text-center mt-2">
            Learn more about {siteName}, our mission, and the team behind the tool.
          </p>
        </header>

        <section className="prose prose-invert max-w-none text-gray-300 space-y-4">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>{siteName}</strong>! We are passionate about helping
            creators, businesses, and influencers grow their presence on Instagram
            using the power of AI. Our tools are designed to make content creation
            faster, easier, and more effective.
          </p>

          <h2>Our Mission</h2>
          <p>
            Our mission is simple: <em>to empower Instagram users with smart, AI-driven
            tools that save time and boost engagement.</em> From generating captions
            and hashtags to creating bios and usernames, we aim to simplify your
            creative process.
          </p>

          <h2>What We Offer</h2>
          <ul>
            <li>AI-powered Instagram Captions Generator</li>
            <li>Trending and niche-specific Hashtags Generator</li>
            <li>Creative Instagram Bio Ideas</li>
            <li>Unique Instagram Username Generator</li>
            <li>Guides, tips, and strategies for growth</li>
          </ul>

          <h2>Why Choose Us?</h2>
          <p>
            Unlike generic tools, <strong>{siteName}</strong> uses AI to generate
            personalized and relevant content ideas. Whether you’re an influencer,
            small business, or just starting out on Instagram, our tools are built to
            help you stand out.
          </p>

          <h2>Our Vision</h2>
          <p>
            We believe the future of content creation will be AI-assisted. Our vision
            is to be the go-to platform for creators who want to save time and create
            engaging posts without creative block.
          </p>

          <h2>Get in Touch</h2>
          <p>
            We’d love to hear from you! Whether it’s feedback, suggestions, or
            questions, feel free to reach out to us anytime.
          </p>
          <p>
            <strong>Website:</strong>{" "}
            <a href={siteUrl} className="text-purple-300 underline">
              {siteUrl}
            </a>
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
