"use client";
import Image from 'next/image';
import pastaImage from '../../public/images/pasta1.jpeg';
import React from 'react';
import CustomButton from './CustomButton';

const Hero = () => {
      const handleScroll = () => {
      const nextSection = document.getElementById("discover");
    };

  return (
    <div className='hero bg-primary-tan px-36 max-w-full'>
      <div className='grid grid-cols-2 gap-4 gap-x-0 pt-40 py-4 px-1 border-2 border-black-100 max-w-6xl mt-5 items-top max-h-128'>
        <div className="hero__text">
        <CustomButton
            title="Popular Pasta Recipes in Canada"
            containerStyles="text-black font-bold rounded-full -mt-36 cursor pointer hover:underline text-bold"
            handleClick={handleScroll}
          />
          
          <h1 className='hero__title -ml-24 text-left hover:text-orange'>
            Fresh Pasta <br/> 
          </h1>
          <h1 className='hero__title2 -ml-24 text-left'>
              served with special pesto sauce.
          </h1>

          <p className='hero__subtitle -ml-24'>
            When was the last time you cooked a great pasta that tasted better than it looked.
          </p>

            <CustomButton
              title="Give me pasta recipes"
              containerStyles="text-black font-bold pl-50 rounded-full mt-5 cursor pointer hover:underline"
              handleClick={handleScroll}
            />
          </div>
            <div className="hero__image-container">
              <div className="hero__image w-full h-full relative -mt-40 ml-1">
                <Image src={pastaImage} alt="pasta" width={600} height={300}className="object-contain"/>
              </div>
              <div className="hero__image-overlay" />
            </div>
        </div>
        <div className="banner bg-gray-300 shadow-lg flex items-center justify-center">

        </div>

      </div>
  );
};

export default Hero;


