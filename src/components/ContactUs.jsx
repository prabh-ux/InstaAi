// src/components/ContactUs.jsx
import React from "react";

const ContactUs = () => {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 p-6 sm:p-12">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-400">
            Contact Us
          </h1>
          <p className="text-gray-400 mt-2">
            Have questions, feedback, or suggestions? We’d love to hear from you!
          </p>
        </header>

        {/* Contact Info */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
          <h2 className="text-xl font-semibold text-gray-200">Get in Touch</h2>
          <p>Email us anytime and we’ll get back to you as soon as possible:</p>
          <p className="text-purple-300 font-medium">
            📧 support@instaai.com
          </p>
        </section>

        {/* Contact Form */}
        <section className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
          <h2 className="text-xl font-semibold text-gray-200">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-300 font-medium">Your Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300 font-medium">Your Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-300 font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full p-3 rounded-xl bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-xl font-semibold text-white transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ContactUs;
