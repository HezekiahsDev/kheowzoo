import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Featured() {
  return (
    <section id="featured" className="mt-8 py-8 ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-color-primary">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-[#964B00] shadow-md rounded-lg p-6 flex flex-col items-center">
            <Image
              src="https://picsum.photos/120/120?random=1" // Random image from picsum
              alt="Feature 1"
              width={120}
              height={120}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-color-text">
              Feature Title 1
            </h3>
            <p className="text-gray-600 text-center">
              Brief description of this amazing feature that captivates the
              audience.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#964B00] shadow-md rounded-lg p-6 flex flex-col items-center">
            <Image
              src="https://picsum.photos/120/120?random=2" // Random image from picsum
              alt="Feature 2"
              width={120}
              height={120}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-color-text">
              Feature Title 2
            </h3>
            <p className="text-gray-600 text-center">
              Brief description of this amazing feature that captivates the
              audience.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#964B00] shadow-md rounded-lg p-6 flex flex-col items-center">
            <Image
              src="https://picsum.photos/120/120?random=3" // Random image from picsum
              alt="Feature 3"
              width={120}
              height={120}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-color-text">
              Feature Title 3
            </h3>
            <p className="text-gray-600 text-center">
              Brief description of this amazing feature that captivates the
              audience.
            </p>
          </div>
        </div>
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
