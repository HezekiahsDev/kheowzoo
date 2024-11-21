"use client";
import React, { useState } from "react";

export default function AboutKheowzoo() {
  const [activeTab, setActiveTab] = useState<"who" | "why" | "vision">("who");

  return (
    <section className="py-8 bg-black" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          About Kheowzoo
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("who")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "who" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Who We Are
          </button>
          <button
            onClick={() => setActiveTab("why")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "why" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Why Us
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "vision" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Vision and Mission
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-center">
          {activeTab === "who" && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Who We Are</h3>
              <p className="max-w-2xl mx-auto text-gray-300">
                Kheowzoo is a cutting-edge initiative blending modern Web3 technologies to create a seamless bridge between blockchain ecosystems and global communities. We aim to showcase our commitment to innovation and inclusivity through unique digital experiences.
              </p>
            </div>
          )}

          {activeTab === "why" && (
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Why Us</h3>
              <p className="max-w-2xl mx-auto text-gray-300">
                With a strong foundation in Web3 technology, Kheowzoo stands out for its focus on community engagement and transparency. From integrating seamless blockchain interactions to offering versatile content libraries, we are the go-to platform for innovation-driven solutions.
              </p>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="px-8">
              <h3 className="text-2xl font-bold mb-4 text-white">Vision and Mission</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div className="bg-[#964B00] shadow-lg rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold text-color-primary mb-4">
                    Our Vision
                  </h4>
                  <p className="text-white">
                    To lead the global Web3 revolution by creating a digital ecosystem that fosters innovation, collaboration, and inclusivity while delivering unparalleled value.
                  </p>
                </div>

                {/* Mission Card */}
                <div className="bg-[#964B00] shadow-lg rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold text-color-primary mb-4">
                    Our Mission
                  </h4>
                  <p className="text-white">
                    Empowering users and communities through state-of-the-art technology, providing tools and platforms that promote growth, creativity, and sustainability.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
