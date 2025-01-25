import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DressStyle = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        BROWSE BY DRESS STYLE
      </h1>
      {/* Wrapper for the styles */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center items-center">
        {/* Casual */}
        <div className="relative group w-full sm:w-1/2 md:w-auto">
          <Image
            src="/casual.png"
            alt="Casual"
            width={407}
            height={289}
            className="w-full h-48 md:h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="text-white font-semibold text-lg md:text-xl">
              <Link href="/casual">Casual</Link>
            </span>
          </div>
        </div>

        {/* Formal */}
        <div className="relative group w-full sm:w-1/2 md:w-auto">
          <Image
            src="/formal.png"
            alt="Formal"
            width={684}
            height={289}
            className="w-full h-48 md:h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="text-white font-semibold text-lg md:text-xl">
            <Link href="/casual">Formal</Link>
            </span>
          </div>
        </div>

        {/* Party */}
        <div className="relative group w-full sm:w-1/2 md:w-auto">
          <Image
            src="/party.png"
            alt="Party"
            width={684}
            height={289}
            className="w-full h-48 md:h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="text-white font-semibold text-lg md:text-xl">
            <Link href="/casual"> Party</Link>
            </span>
          </div>
        </div>

        {/* Gym */}
        <div className="relative group w-full sm:w-1/2 md:w-auto">
          <Image
            src="/gym.png"
            alt="Gym"
            width={409}
            height={289}
            className="w-full h-48 md:h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <span className="text-white font-semibold text-lg md:text-xl">
            <Link href="/casual">Gym</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
