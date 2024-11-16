"use client";
import React, { useState } from "react";

export default function Contact() {
  const [activeTab, setActiveTab] = useState<
    "faq" | "leaveMessage" | "subscribe"
  >("faq");

  return (
    <section className="py-8" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-color-primary">
          Contact Us
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("faq")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "faq" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            FAQs
          </button>
          <button
            onClick={() => setActiveTab("leaveMessage")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "leaveMessage"
                ? "text-color-primary"
                : "text-gray-600"
            }`}
          >
            Leave a Message
          </button>
          <button
            onClick={() => setActiveTab("subscribe")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "subscribe" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Subscribe
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-center">
          {activeTab === "faq" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* FAQ Card 1 */}
              <div className="bg-gradient-to-t from-blue-500 to-blue-700 text-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">
                  What is Kheowzoo?
                </h4>
                <p>
                  Kheowzoo is a digital solution provider that empowers
                  businesses with innovative technology and exceptional services
                  to drive growth and efficiency.
                </p>
              </div>

              {/* FAQ Card 2 */}
              <div className="bg-gradient-to-t from-green-500 to-green-700 text-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">
                  How can I get started?
                </h4>
                <p>
                  To get started, simply sign up on our platform, explore the
                  services we offer, and reach out to us for personalized
                  solutions tailored to your business needs.
                </p>
              </div>

              {/* FAQ Card 3 */}
              <div className="bg-gradient-to-t from-orange-500 to-orange-700 text-white shadow-lg rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-4">
                  Do you offer customer support?
                </h4>
                <p>
                  Yes, we offer 24/7 customer support. You can reach out to our
                  team via email, chat, or phone for assistance with any
                  inquiries or issues you may encounter.
                </p>
              </div>
            </div>
          )}

          {activeTab === "leaveMessage" && (
            <div>
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
                    className="w-full p-3 border border-gray-300 rounded-lg"
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
                    className="w-full p-3 border border-gray-300 rounded-lg"
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
                    className="w-full p-3 border border-gray-300 rounded-lg"
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
            </div>
          )}

          {activeTab === "subscribe" && (
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Subscribe to Our Newsletter
              </h3>
              <p className="mb-8">
                Stay updated with the latest news and offers by subscribing to
                our newsletter.
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
                    className="w-full p-3 border border-gray-300 rounded-lg"
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
