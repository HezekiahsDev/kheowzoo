"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const events = {
  upcoming: [
    {
      id: 1,
      title: "Tech Conference 2024",
      description: "Join us for the latest in tech innovation and trends.",
      image: "https://picsum.photos/400/300?random=1",
    },
    {
      id: 2,
      title: "Web3 Meetup",
      description: "A gathering of blockchain enthusiasts and experts.",
      image: "https://picsum.photos/400/300?random=2",
    },
    {
      id: 3,
      title: "Tech Conference 2024",
      description: "Join us for the latest in tech innovation and trends.",
      image: "https://picsum.photos/400/300?random=5",
    },
  ],
  past: [
    {
      id: 1,
      title: "Developer Summit 2023",
      description: "A recap of the biggest tech summit of 2023.",
      image: "https://picsum.photos/400/300?random=3",
    },
    {
      id: 2,
      title: "AI Expo 2022",
      description:
        "Highlights from the Artificial Intelligence Expo held last year.",
      image: "https://picsum.photos/400/300?random=4",
    },
    {
      id: 3,
      title: "AI Expo 2022",
      description:
        "Highlights from the Artificial Intelligence Expo held last year.",
      image: "https://picsum.photos/400/300?random=6",
    },
  ],
};

export default function Events() {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <section className="py-8" id="events">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-color-primary">
          Events
        </h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "upcoming" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-6 py-2 font-semibold ${
              activeTab === "past" ? "text-color-primary" : "text-gray-600"
            }`}
          >
            Past Events
          </button>
        </div>

        {/* Events Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeTab === "upcoming" &&
            events.upcoming.map((event) => (
              <div
                key={event.id}
                className="relative bg-[#964B00] shadow-lg rounded-lg overflow-hidden"
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
                  <Link href="#" passHref>
                    <button className="mt-4 bg-color-primary text-white py-2 px-6 rounded-lg">
                      RSVP
                    </button>
                  </Link>
                </div>
              </div>
            ))}

          {activeTab === "past" &&
            events.past.map((event) => (
              <div
                key={event.id}
                className="relative bg-[#964B00] shadow-lg rounded-lg overflow-hidden"
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
                  <Link href="#" passHref>
                    <button className="mt-4 bg-gray-600 text-white py-2 px-6 rounded-lg">
                      View Highlights
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
