"use client";
import React from 'react';

const Hero = () => {
    // const handleScroll = () => {
    //     // Scroll handling logic
    // };

    return (
        <div className="hero min-h-screen bg-secondary-tan flex flex-col items-center pt-10">
            <div className="flex flex-col items-center max-w-4xl mx-auto">
                <p className="text-black font-bold rounded-full mt-10 cursor-pointer text-xl md:text-2xl lg:text-2xl">
                    Popular Pasta Recipes in Canada
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
                    <div className="textbox flex flex-col justify-center p-4 rounded-lg ">
                        <h1 className="hero__title text-4xl md:text-5xl lg:text-7xl mb-4">
                            Fresh Pasta
                        </h1>
                        <h1 className="hero__title text-4xl md:text-5xl lg:text-7xl mb-4">
                            served with special pesto sauce.
                        </h1>
                        <p className="hero__subtitle text-lg md:text-xl lg:text-2xl p-4">
                            When was the last time you cooked a great pasta that tasted better than it looked.
                        </p>
                    </div>
                    <div className="banner bg-gray-300 shadow-lg">
                        {/* Add content or images to the banner */}
                    </div>
                </div>
                <p className="pasta_redirect_bottom text-lg md:text-xl lg:text-2xl mt-8 cursor-pointer">
                    Give me pasta recipes
                </p>
            </div>
        </div>
    );
};

export default Hero;
