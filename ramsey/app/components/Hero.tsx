"use client";
// import Link from 'next/link';
// import Image from 'next/image';
import React from 'react';

const Hero = () => {
  // const handleScroll = () => {
  //     // Scroll handling logic
  // };

  return (
    <div className="hero min-h-screen bg-secondary-tan flex flex-col items-center pt-10">

      <div className="flex flex-col items-center max-w-4xl mx-auto pt-40">

        <div className='absolute'>

          <p className="text-left text-black font-bold cursor-pointer text-400">
            Popular Pasta Recipes in Canada
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">

          <div className="textbox flex flex-col justify-center p-4 rounded-lg">

            <h1 className="hero__title text-4xl md:text-5xl lg:text-7xl mb-4">
              Fresh Pasta
            </h1>
            <h1 className="hero__title text-4xl md:text-5xl lg:text-7xl">
              served with special pesto sauce.
            </h1>
            <p className="hero__subtitle text-lg md:text-xl lg:text-xl">
              When was the last time you cooked a great pasta that tasted better than it looked.
            </p>

          </div>
        </div>
        <div className="banner bg-gray-300 shadow-lg flex items-center justify-center">

        </div>

      </div>
    </div>
  );
};

export default Hero;
