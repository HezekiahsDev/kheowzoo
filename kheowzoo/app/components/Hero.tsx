import React from "react";
//import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero-section bg-cover bg-center text-white flex flex-col justify-center items-center h-[80vh] md:h-[100vh] relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
      {/* Overlay for text contrast */}
      <div className="z-10 px-4 max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Kheowzoo
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Discover the wonders of wildlife and nature like never before.
        </p>
        <a
          href="#about"
          className="inline-block bg-color-primary text-color-bg py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition"
        >
          Explore More
        </a>
      </div>
      <div className="absolute bottom-10 flex justify-center w-full">
        <a href="#about" className="text-color-primary text-xl animate-bounce">
          ↓ Scroll Down
        </a>
      </div>
    </div>
  );
}
