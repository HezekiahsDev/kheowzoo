import React from "react";
import Hero from "./components/Hero";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      {/* Featured Section */}
      <section id="features" className="scroll-mt-24">
        <Featured />
      </section>

      {/* Add more sections as needed, keeping the scroll-mt class for consistent scrolling behavior */}
    </>
  );
}
