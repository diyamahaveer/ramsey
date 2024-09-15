"use client";
import Image from 'next/image';
import pastaImage from '../../public/images/pasta1.jpg';
import React from 'react';
import CustomButton from './CustomButton';

const Hero = () => {
      const handleScroll = () => {
      const nextSection = document.getElementById("discover");
    };

  return (
    <div className='hero bg-primary-tan justify-center items-center'>
      <div className='grid grid-cols-2 gap-4 pt-1 px-1 py-4 border-2 border-black-100 max-w-6xl mx-auto mt-5 max-h-96 items-center'>
        <div className="hero__text">
        <CustomButton
            title="Popular Pasta Recipes in Canada"
            containerStyles="text-black font-bold rounded-full mt-0 cursor pointer"
            handleClick={handleScroll}
          />
          <h1 className='hero__title'>
            Fresh Pasta <br/> 
          </h1>
          <h1 className='hero__secondt'>
              served with special pesto sauce.
          </h1>

          <p className='hero__subtitle'>
            When was the last time you cooked a great pasta that tasted better than it looked.
          </p>

            <CustomButton
              title="Give me pasta recipes"
              containerStyles="text-black font-bold pl-50 rounded-full mt-5 cursor pointer"
              handleClick={handleScroll}
            />
          </div>
            <div className="hero__image-container">
              <div className="hero__image relative w-full h-full">
                <Image src={pastaImage} alt="pasta" className="scale-50 object-contain" />
              </div>
              <div className="hero__image-overlay" />
            </div>
        </div>
    </div>
    );
};

export default Hero;

