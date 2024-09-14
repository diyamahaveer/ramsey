"use client";
import React from 'react'
//import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => {
        

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <p className="pasta_redirect_top text-black font-bold rounded-full mt-10 cursor-pointer pl-52 text-2xl">
                Popular Pasta Recipes in Canada
            </p>
            <div className="grid grid-cols-2 gap-4">
                <div className='textbox flex flex-col justify-center'>
                    <h1 className="hero__title pl-72 text-7xl pt-20">
                        Fresh Pasta
                    </h1>
                    <h1 className="hero__title pl-72 text-7xl">
                        served with special pesto sauce.
                    </h1>
                    <p className="hero__subtitle text-3xl p-7 pl-72">
                        When was the last time you cooked a great pasta that tasted better than it looked.
                    </p>
                </div>
                <div className='banner bg-gray-300'>

                </div>
            </div>
            
            <p className="pasta_redirect_bottom text-2xl pl-96 p-3 cursor-pointer">
                Give me pasta recipes
            </p>

        </div>
        
    </div>
  )
}

export default Hero



