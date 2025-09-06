import React from "react";
import { Link } from "react-router";

const FaqPage = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 sm:p-12">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          InstaAI FAQ – Frequently Asked Questions
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed text-center">
          Have questions about using InstaAI? Find answers to the most common questions about our AI Instagram tools, including captions, hashtags, bios, and name generators.
        </p>
      </header>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4">General Questions</h2>
        <div className="space-y-4 text-gray-400">
          <div>
            <strong>Q: What is InstaAI?</strong>
            <p>A: InstaAI is an AI-powered platform that helps you generate Instagram captions, hashtags, bios, and usernames quickly and efficiently.</p>
          </div>
          <div>
            <strong>Q: Is InstaAI free to use?</strong>
            <p>A: Yes, our demo tools are fully functional and free for generating Instagram content.</p>
          </div>
          <div>
            <strong>Q: Do I need to create an account?</strong>
            <p>A: No account is required to use the InstaAI demo tools.</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4">Tool-Specific Questions</h2>
        <div className="space-y-4 text-gray-400">
          <div>
            <strong>Q: Can I use the caption generator for reels and stories?</strong>
            <p>A: Absolutely! Our AI caption generator is optimized for posts, reels, stories, and carousels.</p>
          </div>
          <div>
            <strong>Q: How does the hashtag generator work?</strong>
            <p>A: The AI analyzes your topic, mood, and optional location to generate trending and niche-specific hashtags for maximum reach.</p>
          </div>
          <div>
            <strong>Q: Can the bio generator help me grow followers?</strong>
            <p>A: Yes! A well-crafted, keyword-optimized bio can improve discoverability and engagement on Instagram.</p>
          </div>
          <div>
            <strong>Q: What is the Instagram name generator for?</strong>
            <p>A: It helps you generate short, catchy, unique, and brandable usernames for Instagram.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center mb-10">
        <p className="text-gray-300 mb-4">
          Ready to try InstaAI and grow your Instagram effortlessly?
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold text-white transition"
        >
          Generate Now
        </Link>
      </section>

      <footer className="max-w-4xl mx-auto text-gray-400 text-xs leading-relaxed">
        <p>
          SEO Keywords: Instagram FAQ, AI Instagram tools FAQ, Instagram captions generator, AI Instagram hashtags, Instagram bio generator, Instagram username generator, social media growth tools, Instagram engagement tips, trending Instagram hashtags, Instagram marketing tips.
        </p>
        <p className="mt-2">
          Disclaimer: This page is designed to provide SEO-rich content to help users discover InstaAI’s tools and capabilities.
        </p>
      </footer>
    </main>
  );
};

export default FaqPage;
