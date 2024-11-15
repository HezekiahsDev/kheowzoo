import React from "react";
import Image from "next/image";

export default function Featured() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-color-primary">
          Our Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <Image
              src="/feature1.png"
              alt="Feature 1"
              width={80}
              height={80}
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
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <Image
              src="/feature2.png"
              alt="Feature 2"
              width={80}
              height={80}
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
          <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
            <Image
              src="/feature3.png"
              alt="Feature 3"
              width={80}
              height={80}
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
      </div>
    </section>
  );
}
