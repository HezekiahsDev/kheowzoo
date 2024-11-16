"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const events = {
  upcoming: [
    {
      id: 1,
      title: "Tech Conference 2024",
      description: "Join us for the latest in tech innovation and trends.",
      image: "https://picsum.photos/400/300?random=1",
      link: "/rsvp/tech-conference-2024",
    },
    {
      id: 2,
      title: "Tech Conference 2024",
      description: "Join us for the latest in tech innovation and trends.",
      image: "https://picsum.photos/400/300?random=2",
      link: "/rsvp/tech-conference-2024",
    },
    {
      id: 3,
      title: "Tech Conference 2024",
      description: "Join us for the latest in tech innovation and trends.",
      image: "https://picsum.photos/400/300?random=3",
      link: "/rsvp/tech-conference-2024",
    },
  ],
  past: [
    {
      id: 1,
      title: "Developer Summit 2023",
      description: "A recap of the biggest tech summit of 2023.",
      image: "https://picsum.photos/400/300?random=4",
      link: "/highlights/dev-summit-2023",
    },
    {
      id: 2,
      title: "Developer Summit 2023",
      description: "A recap of the biggest tech summit of 2023.",
      image: "https://picsum.photos/400/300?random=5",
      link: "/highlights/dev-summit-2023",
    },
    {
      id: 3,
      title: "Developer Summit 2023",
      description: "A recap of the biggest tech summit of 2023.",
      image: "https://picsum.photos/400/300?random=6",
      link: "/highlights/dev-summit-2023",
    },
  ],
};

export default function Events() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  // Animation controls
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.2, // 20% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      id="events"
      className="py-8"
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-color-primary">
          Events
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          {["upcoming", "past"].map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab as "upcoming" | "past")}
              className={`px-6 py-2 font-semibold capitalize ${
                activeTab === tab ? "text-color-primary" : "text-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {tab} Events
            </motion.button>
          ))}
        </div>

        {/* Events Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events[activeTab].map((event) => (
            <motion.div
              key={event.id}
              className="relative bg-[#964B00] shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform"
              initial="hidden"
              animate="visible"
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h3 className="text-2xl font-bold">{event.title}</h3>
                <p className="mt-2">{event.description}</p>
                <Link href={event.link} passHref>
                  <button className="mt-4 bg-color-primary text-white py-2 px-6 rounded-lg">
                    {activeTab === "upcoming" ? "RSVP" : "View Highlights"}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
