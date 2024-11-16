"use client";
import React, { useState } from "react";
import Image from "next/image"; // For optimized images in Next.js
import Link from "next/link";

// Sample placeholder data for the gallery previews
const videoPreviews = [
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" }, // Replace with an actual placeholder if needed
  { src: "https://www.w3schools.com/html/movie.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

const imagePreviews = [
  { src: "https://picsum.photos/400/300?random=1", alt: "Image Preview 1" }, // Random image from Picsum
  { src: "https://picsum.photos/400/300?random=2", alt: "Image Preview 2" }, // Another random image from Picsum
  { src: "https://picsum.photos/400/300?random=3", alt: "Image Preview 3" }, // Another random image from Picsum
];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("videos");

  return (
    <section className="py-8 bg-black" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Gallery
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("videos")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "videos" ? "text-green-500" : "text-gray-400"
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setActiveTab("images")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "images" ? "text-green-500" : "text-gray-400"
            }`}
          >
            Images
          </button>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeTab === "videos" &&
            videoPreviews.slice(0, 3).map((video, index) => (
              <div key={index} className="relative aspect-w-16 aspect-h-9">
                <video
                  src={video.src}
                  className="w-full h-full object-cover rounded-lg"
                  muted
                  loop
                  autoPlay
                />
              </div>
            ))}

          {activeTab === "images" &&
            imagePreviews.slice(0, 3).map((image, index) => (
              <div key={index} className="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-8">
          <Link
            href="#featured"
            className="inline-block bg-color-primary text-color-bg py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition"
          >
            View More In Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
