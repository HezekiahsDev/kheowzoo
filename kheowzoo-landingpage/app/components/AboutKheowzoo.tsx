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
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="max-w-2xl mx-auto">
                We are a passionate team dedicated to transforming the digital
                landscape. At Kheowzoo, we blend creativity, innovation, and
                technology to provide exceptional solutions that meet the needs
                of businesses and individuals alike.
              </p>
            </div>
          )}

          {activeTab === "why" && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Us</h3>
              <p className="max-w-2xl mx-auto">
                With our industry expertise, cutting-edge technology, and
                commitment to excellence, Kheowzoo offers unmatched value. Our
                team thrives on solving complex challenges and delivering
                innovative solutions that ensure customer satisfaction and
                long-term success.
              </p>
            </div>
          )}

          {activeTab === "vision" && (
            <div className="px-8">
              <h3 className="text-2xl font-bold mb-4">Vision and Mission</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Vision Card */}
                <div className="bg-[#964B00] shadow-lg rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold text-color-primary mb-4">
                    Our Vision
                  </h4>
                  <p>
                    Our vision is to become a global leader in innovative
                    solutions, delivering exceptional value to our clients and
                    making a meaningful impact on the world.
                  </p>
                </div>

                {/* Mission Card */}
                <div className="bg-[#964B00] shadow-lg rounded-lg p-6 text-center">
                  <h4 className="text-xl font-semibold text-color-primary mb-4">
                    Our Mission
                  </h4>
                  <p>
                    Our mission is to empower businesses and individuals through
                    technology, providing reliable, scalable, and sustainable
                    solutions that drive growth, efficiency, and positive
                    change.
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
