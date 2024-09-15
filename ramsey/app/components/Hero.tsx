"use client";
import Image from "next/image";
import pastaImage from "../../public/images/pasta1.jpeg";
import React from "react";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");
  };

  return (
    <div className='hero bg-primary-tan px-36 max-w-full'>
      <div className='grid grid-cols-2 gap-4 gap-x-0 pt-32 py-2 px-1 border-2 border-black-100 max-w-6xl mt-5 mb-5 items-top '>
        <div className="hero__text">
          <h1 className='hero__title -mt-10 -ml-24 font-bri text-left hover:text-orange'>
            Master the Kitchen with Ramsey <br/> 
          </h1>

          <p className="hero__subtitle -ml-40">
            Cooking isn't easy, so let us make it easy for you. <br/> Cooking is now faster, easier, and cleaner.
          </p>

          <CustomButton
            title="Give me pasta recipes"
            containerStyles="text-black font-bold pl-50 rounded-full mt-5 cursor-pointer hover:underline"
            handleClick={handleScroll}
          />
        </div>
        <div className="hero__image-container">
          <div className="hero__image w-full h-full relative -mt-32 ml-14">
            <Image
              src={pastaImage}
              alt="pasta"
              width={510}
              height={425}
              className="object-contain"
            />
          </div>
          </div>
      </div>
    </div>
  );
};

export default Hero;
