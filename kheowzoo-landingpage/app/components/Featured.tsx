import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * 50) + 1;
  return `/WebGallery/img${randomIndex}.jpg`;
};

export default function Featured() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [randomImages, setRandomImages] = useState<string[]>([]);

  useEffect(() => {
    const images = [getRandomImage(), getRandomImage(), getRandomImage()];
    setRandomImages(images);
  }, []);

  return (
    <section id="featured" className="mt-8 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-color-primary">
          Learn More About the Project
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
            transition: { duration: 1.2 },
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className="bg-cover bg-center shadow-md rounded-lg p-6 flex flex-col items-center"
              style={{
                backgroundImage: `url(${randomImages[0]})`,
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">CoinGecko</h3>
              <p className="text-gray-300 text-center mb-4">
                View more about the project, its market data, and tokenomics.
              </p>
              <a
                href="https://www.coingecko.com/en/coins/khaokheowzoo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-color-primary text-color-bg py-2 px-6 rounded-lg text-lg hover:bg-opacity-90 transition transform hover:scale-105"
              >
                View on CoinGecko
              </a>
            </div>

            <div
              className="bg-cover bg-center shadow-md rounded-lg p-6 flex flex-col items-center"
              style={{
                backgroundImage: `url(${randomImages[1]})`,
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Dexscreener</h3>
              <p className="text-gray-300 text-center mb-4">
                Track real-time trading data and liquidity of the token.
              </p>
              <a
                href="https://dexscreener.com/solana/5tcgq8g9t7yxupjmmqbytdxq6fj8kbwfmrvahfb9thg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-color-primary text-color-bg py-2 px-6 rounded-lg text-lg hover:bg-opacity-90 transition transform hover:scale-105"
              >
                View on Dexscreener
              </a>
            </div>

            <div
              className="bg-cover bg-center shadow-md rounded-lg p-6 flex flex-col items-center"
              style={{
                backgroundImage: `url(${randomImages[2]})`,
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white">Dextools</h3>
              <p className="text-black-300 text-center mb-4">
                Analyze the trading pair and price performance of the token.
              </p>
              <a
                href="https://www.dextools.io/app/cn/solana/pair-explorer/5tCgQ8g9t7YxupJMmQBYTdXq6fJ8KbwFMrvAhfb9thG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-color-primary text-color-bg py-2 px-6 rounded-lg text-lg hover:bg-opacity-90 transition transform hover:scale-105"
              >
                View on Dextools
              </a>
            </div>
          </div>
        </motion.div>

        <div>
          <Link href="#">
            <p className="mt-4 text-lg font-bold text-center text-color-primary underline">
              Find out more
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
