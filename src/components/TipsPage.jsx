import React from "react";
import { Link } from "react-router-dom";

const TipsPage = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-6 sm:p-12">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Instagram Growth Tips & Blog – InstaAI
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed text-center">
          Stay updated with the latest Instagram growth strategies, trending content ideas, and expert tips to boost engagement, followers, and reach on your posts, reels, stories, and profile.
        </p>
      </header>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4">Top Instagram Tips</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Optimize your Instagram bio with keywords and emojis for maximum discoverability.</li>
          <li>Post consistently and at peak engagement times to boost reach.</li>
          <li>Use trending hashtags, but mix them with niche-specific tags for best results.</li>
          <li>Create eye-catching reels and stories to drive engagement and shares.</li>
          <li>Engage with your followers through comments, polls, and DMs.</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-3xl font-bold mb-4">Content Ideas & Guides</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Viral reel ideas for travel, fitness, fashion, food, and lifestyle niches.</li>
          <li>Caption formulas that increase likes, saves, and shares.</li>
          <li>How to use Instagram SEO to appear on Explore and hashtag feeds.</li>
          <li>Step-by-step guides to creating branded posts and carousel content.</li>
          <li>Advanced tips for growing your following organically without bots.</li>
        </ul>
      </section>

      <section className="text-center mb-10">
        <p className="text-gray-300 mb-4">
          Ready to grow your Instagram effortlessly with AI-powered tools?
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold text-white transition"
        >
          Try InstaAI Tools Now
        </Link>
      </section>

      <footer className="max-w-4xl mx-auto text-gray-400 text-xs leading-relaxed">
        <p>
          SEO Keywords: Instagram tips, Instagram growth blog, trending Instagram content ideas, social media marketing, Instagram reels tips, Instagram captions generator, AI Instagram tools, Instagram hashtags AI, Instagram bio ideas, Instagram username generator.
        </p>
        <p className="mt-2">
          Disclaimer: This page is designed to provide SEO-rich content for Instagram growth. Content is for informational purposes to help users discover InstaAI’s capabilities.
        </p>
      </footer>
    </main>
  );
};

export default TipsPage;
