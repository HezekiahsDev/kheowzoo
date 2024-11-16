import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer"; // To detect when element is in view

export default function Featured() {
  // Scroll trigger setup using useInView hook
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will happen only once when it comes into view
    threshold: 0.3, // Element is considered in view when 30% is visible
  });

  return (
    <section id="featured" className="mt-8 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-color-primary">
          Our Key Features
        </h2>

        <motion.div
          ref={ref} // Attach the ref to the element to track its visibility
          initial={{ opacity: 0, y: 50 }} // Start position: hidden and offset
          animate={{
            opacity: inView ? 1 : 0, // When in view, opacity becomes 1
            y: inView ? 0 : 50, // When in view, the element moves to its final position
            transition: { duration: 1.2 }, // Smooth transition for the effect
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#8B5C29] shadow-md rounded-lg p-6 flex flex-col items-center">
              <Image
                src="https://picsum.photos/120/120?random=1" // Random image from picsum
                alt="Feature 1"
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Feature Title 1
              </h3>
              <p className="text-gray-300 text-center">
                Brief description of this amazing feature that captivates the
                audience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#8B5C29] shadow-md rounded-lg p-6 flex flex-col items-center">
              <Image
                src="https://picsum.photos/120/120?random=2" // Random image from picsum
                alt="Feature 2"
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Feature Title 2
              </h3>
              <p className="text-gray-300 text-center">
                Brief description of this amazing feature that captivates the
                audience.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#8B5C29] shadow-md rounded-lg p-6 flex flex-col items-center">
              <Image
                src="https://picsum.photos/120/120?random=3" // Random image from picsum
                alt="Feature 3"
                width={120}
                height={120}
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Feature Title 3
              </h3>
              <p className="text-gray-300 text-center">
                Brief description of this amazing feature that captivates the
                audience.
              </p>
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
