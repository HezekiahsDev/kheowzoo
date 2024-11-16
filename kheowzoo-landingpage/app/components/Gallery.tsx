"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer"; // For detecting visibility
import { motion } from "framer-motion"; // For animations

const videoPreviews = [
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" }, // Replace with an actual placeholder if needed
  { src: "https://www.w3schools.com/html/movie.mp4" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4" },
];

const imagePreviews = [
  { src: "https://picsum.photos/400/300?random=1", alt: "Image Preview 1" },
  { src: "https://picsum.photos/400/300?random=2", alt: "Image Preview 2" },
  { src: "https://picsum.photos/400/300?random=3", alt: "Image Preview 3" },
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
            className={`px-6 py-2 font-semibold text-lg ${
              activeTab === "videos" ? "text-green-500" : "text-gray-400"
            } hover:text-green-400 transition`}
          >
            Videos
          </button>
          <button
            onClick={() => setActiveTab("images")}
            className={`px-6 py-2 font-semibold text-lg ${
              activeTab === "images" ? "text-green-500" : "text-gray-400"
            } hover:text-green-400 transition`}
          >
            Images
          </button>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeTab === "videos" &&
            videoPreviews.slice(0, 3).map((video, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.5,
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 50,
                  }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-w-16 aspect-h-9"
                >
                  <video
                    src={video.src}
                    className="w-full h-full object-cover rounded-lg"
                    muted
                    loop
                    autoPlay
                  />
                </motion.div>
              );
            })}

          {activeTab === "images" &&
            imagePreviews.slice(0, 3).map((image, index) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.5,
              });

              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: inView ? 1 : 0,
                    y: inView ? 0 : 50,
                  }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </motion.div>
              );
            })}
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
