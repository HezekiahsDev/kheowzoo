"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<
    "faq" | "leaveMessage" | "subscribe"
  >("faq");

  return (
    <section className="py-8 bg-gray-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-color-primary">
          Contact Us
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("faq")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "faq" ? "text-color-primary" : "text-gray-500"
            }`}
          >
            FAQs
          </button>
          <button
            onClick={() => setActiveTab("leaveMessage")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "leaveMessage"
                ? "text-color-primary"
                : "text-gray-500"
            }`}
          >
            Leave a Message
          </button>
          <button
            onClick={() => setActiveTab("subscribe")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "subscribe" ? "text-color-primary" : "text-gray-500"
            }`}
          >
            Subscribe
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-center">
          {activeTab === "faq" && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="bg-gradient-to-t from-blue-500 to-blue-700 shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">What is Kheowzoo?</h4>
                <p>
                  Kheowzoo is a Web3-powered platform offering cutting-edge solutions to bridge the gap between blockchain ecosystems and communities.
                </p>
              </div>
              <div className="bg-gradient-to-t from-green-500 to-green-700 shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">
                  How can I collaborate with Kheowzoo?
                </h4>
                <p>
                  Collaboration is simple—connect with us through our contact form or email to explore how we can create value together in the Web3 space.
                </p>
              </div>
              <div className="bg-gradient-to-t from-orange-500 to-orange-700 shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">
                  What services do you provide?
                </h4>
                <p>
                  We offer blockchain integrations, NFT solutions, and community engagement tools tailored to meet diverse client needs.
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "leaveMessage" && (
            <motion.div
              key="leaveMessage"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Leave a Message</h3>
              <form className="max-w-lg mx-auto space-y-4">
                <div>
                  <label htmlFor="name" className="block text-lg">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                    placeholder="Type your message here"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-color-primary text-white py-2 px-6 rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          )}

          {activeTab === "subscribe" && (
            <motion.div
              key="subscribe"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                Subscribe to Our Updates
              </h3>
              <p className="mb-8">
                Be the first to know about our latest developments, launches, and exclusive content.
              </p>
              <form className="max-w-lg mx-auto space-y-4">
                <div>
                  <label htmlFor="subscribeEmail" className="block text-lg">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="subscribeEmail"
                    name="subscribeEmail"
                    className="w-full p-3 border border-gray-700 rounded-lg bg-gray-800 text-white"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-color-primary text-white py-2 px-6 rounded-lg"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
