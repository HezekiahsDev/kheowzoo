import React from "react";
import "animate.css";

export default function Hero() {
  return (
    <div
      className="hero-section bg-cover bg-center text-white flex flex-col justify-center items-center h-[100vh] md:h-[100vh] relative"
      style={{ backgroundImage: `url('/bg-banner.jpg')` }} // Adding the background image
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>{" "}
      {/* Dark overlay for text contrast */}
      <div className="z-10 px-4 max-w-4xl text-center">
        <h1 className="text-3xl md:text-6xl font-bold mb-6 animate__animated animate__fadeIn animate__delay-1s">
          Welcome to Kheowzoo
        </h1>

        <p className="text-lg md:text-xl mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Explore the cutting edge of blockchain-powered conservation. Join a
          community redefining the future of wildlife and Web3 technology.
        </p>
        <p className="text-lg italic md:text-xl font-thin mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Empowering Wildlife Through Technology — One Block at a Time.
        </p>
        <a
          href="#featured"
          className="inline-block bg-color-primary text-color-bg py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition transform hover:scale-105 animate__animated animate__fadeIn animate__delay-3s"
        >
          Explore More
        </a>
      </div>
      <div className="absolute bottom-10 flex justify-center w-full">
        <a
          href="#about"
          className="text-color-primary text-xl animate-bounce animate__animated animate__fadeIn animate__delay-4s"
        >
          ↓ Scroll Down
        </a>
      </div>
    </div>
  );
}
