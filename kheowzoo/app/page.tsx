import React from "react";
import Hero from "./components/Hero";
import Featured from "./components/Featured";

export default function Home() {
  return (
    <section id="home">
      <Hero />
      <Featured />
      {/* Add more sections below as needed */}
    </section>
  );
}
