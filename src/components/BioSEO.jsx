import React from "react";
import { Link } from "react-router-dom";

const BioSEO = () => {
  const exampleBios = [
    "Dreamer ✨ | Coffee addict ☕ | Travel lover 🌍",
    "Digital creator 💻 | Fitness enthusiast 💪 | Music lover 🎶",
    "Fashion addict 👗 | Cat mom 🐱 | Coffee first ☕",
    "Entrepreneur 🚀 | Life optimizer 💡 | Adventure seeker 🏞️",
    "Foodie 🍕 | Photographer 📸 | Explorer ✈️",
  ];

  return (
    <main className="min-h-screen p-6 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-purple-400">
          AI Instagram Bio Ideas Generator
        </h1>

        {/* Introduction */}
        <section className="space-y-4">
          <p>
            Are you struggling to craft the perfect Instagram bio? Our <strong>AI Instagram Bio Generator</strong> helps you create unique, catchy, and creative Instagram bio ideas instantly. Boost your profile engagement and attract more followers with a bio that truly represents you.
          </p>
          <p>
            Whether you want a professional bio, a fun personality-driven bio, or a trendy aesthetic vibe, our tool generates multiple Instagram bio ideas using AI, saving you hours of brainstorming.
          </p>
        </section>

        {/* How it works */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-purple-300">How to Use the AI Instagram Bio Generator</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Enter a few details about your personality, interests, or niche.</li>
            <li>Select the mood you want your bio to convey (fun, professional, aesthetic, motivational, etc.).</li>
            <li>Click "Generate Bio" and watch AI craft multiple unique Instagram bio ideas for you.</li>
            <li>Pick your favorite bio and copy it directly to your Instagram profile.</li>
          </ol>
        </section>

        {/* Tips */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-purple-300">Tips for Writing Engaging Instagram Bios</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Keep it short and catchy—aim for 100–150 characters.</li>
            <li>Use emojis to visually represent your personality or niche.</li>
            <li>Highlight your interests, passions, or profession.</li>
            <li>Add a subtle call-to-action (CTA), like "Follow for tips" or "DM for collabs".</li>
            <li>Be authentic—your bio should reflect your personality.</li>
          </ul>
        </section>

        {/* Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-purple-300">Sample AI-Generated Instagram Bios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exampleBios.map((bio, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                {bio}
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-purple-300">Frequently Asked Questions</h2>
          <div className="space-y-2 text-gray-300">
            <p><strong>Q:</strong> Can I generate multiple bio ideas at once?</p>
            <p><strong>A:</strong> Yes! Our AI generates 5–10 bio suggestions per query.</p>

            <p><strong>Q:</strong> Is this tool free to use?</p>
            <p><strong>A:</strong> Absolutely! You can generate unlimited Instagram bio ideas for free.</p>

            <p><strong>Q:</strong> Can the bios be personalized for my niche?</p>
            <p><strong>A:</strong> Yes, enter your niche or interests and the AI will tailor the bios accordingly.</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="space-y-4 text-center">
          <p className="text-gray-300">
            Ready to create your perfect Instagram bio? Try our <strong>AI Bio Generator</strong> now!
          </p>
          <Link
          state={{tab:"bio"}}
            to="/"
            className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold text-white transition"
          >
            Generate Your Bio
          </Link>
        </section>

        {/* Internal linking for SEO */}
        <section className="space-y-2 text-gray-400 text-sm">
          <p>Explore other AI Instagram tools:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <Link to="/captions-seo" className="text-purple-400 underline hover:text-purple-500">AI Instagram Captions Generator</Link>
            </li>
            <li>
              <Link to="/hashtags-seo" className="text-purple-400 underline hover:text-purple-500">AI Instagram Hashtags Generator</Link>
            </li>
            <li>
              <Link to="/seo-demo" className="text-purple-400 underline hover:text-purple-500">AI Instagram Tools Overview</Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default BioSEO;
