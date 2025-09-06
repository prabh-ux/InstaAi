import React from "react";
import { Link } from "react-router-dom";

const NameSEO = () => {
  const exampleUsernames = [
    "TechGuru_101",
    "TravelWithMe_",
    "MusicVibes_23",
    "FitLife.Journey",
    "FashionQueen_X",
    "FoodieAdventures",
    "DailyMotivation_",
    "PhotoLover_X",
    "CreativeMind_",
    "AdventureSeeker_",
  ];

  return (
    <main className="min-h-screen p-6 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center text-purple-400">
          AI Instagram Username Generator
        </h1>

        {/* Introduction */}
        <section className="space-y-4">
          <p>
            Struggling to find the perfect Instagram username? Our <strong>AI Instagram Username Generator</strong> helps you generate creative, catchy, and memorable Instagram usernames instantly. Stand out on social media with a username that reflects your personality, niche, or brand.
          </p>
          <p>
            Whether you want something professional, trendy, funny, or aesthetic, our AI tool generates a list of unique usernames to save you time and spark inspiration.
          </p>
        </section>

        {/* How it works */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-purple-300">How to Use the Instagram Username Generator</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Enter your interests, hobbies, or niche.</li>
            <li>Optionally add your real name or keywords to personalize usernames.</li>
            <li>Select a mood or style: fun, professional, aesthetic, or trendy.</li>
            <li>Click "Generate" to get a list of unique Instagram usernames.</li>
            <li>Pick your favorite username and start using it for your profile.</li>
          </ol>
        </section>

        {/* Tips */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-purple-300">Tips for Choosing the Perfect Instagram Username</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Keep it short, easy to spell, and memorable.</li>
            <li>Use underscores (_) or dots (.) if your preferred name is taken.</li>
            <li>Include keywords that reflect your niche or interests.</li>
            <li>Try combining your name with hobbies, personality traits, or numbers.</li>
            <li>Ensure it’s easy to read and pronounce for followers.</li>
          </ul>
        </section>

        {/* Examples */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-purple-300">Sample AI-Generated Instagram Usernames</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {exampleUsernames.map((name, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                {name}
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-purple-300">Frequently Asked Questions</h2>
          <div className="space-y-2 text-gray-300">
            <p><strong>Q:</strong> Can I generate multiple username ideas at once?</p>
            <p><strong>A:</strong> Yes! The AI generates 10+ unique usernames per query.</p>

            <p><strong>Q:</strong> Is this tool free?</p>
            <p><strong>A:</strong> Absolutely! You can generate unlimited Instagram usernames for free.</p>

            <p><strong>Q:</strong> Can the usernames be personalized for my niche?</p>
            <p><strong>A:</strong> Yes! Simply enter your niche or keywords and the AI will tailor the usernames accordingly.</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="space-y-4 text-center">
          <p className="text-gray-300">
            Ready to create the perfect Instagram username? Try our <strong>AI Username Generator</strong> now!
          </p>
          <Link
          state={{tab:"name"}}
            to="/"
            className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold text-white transition"
          >
            Generate Your Username
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
              <Link to="/bio-seo" className="text-purple-400 underline hover:text-purple-500">AI Instagram Bio Ideas Generator</Link>
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

export default NameSEO;
