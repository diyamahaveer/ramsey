"use client"
import React from "react"
import Recipe from "./Recipe"
export default function CuratedList({changeView}) {
    const defaultProps = {
        "title": "How to...Make a Perfect Fried Egg",
        "thumbnail": "https://i.ytimg.com/vi_webp/J5_HmfZyhKo/sddefault.webp",
        "ingredients": [
            "eggs",
            "butter",
            "salt",
            "pepper"
        ],
        "duration": "5-7 minutes",
        "calories": "180-220 kcal",
        "url": "https://www.youtube.com/watch?v=J5_HmfZyhKo"
    }

    return (
        <div className="min-h-screen bg-primary-tan flex flex-col justify-start items-left pt-10">
            <div className="results_title animate-fadeInLeft">
                Here are your results...
            </div>
            <div className="w-[70%]">
                <div className="pt-20 pl-32">
                    <div className="flex flex-col items-left bg-mx-40 curosr pointer animate-fadeInLeftRecipe">
                        <Recipe
                            title={defaultProps.title}
                            thumbnail={defaultProps.thumbnail}
                            ingredients={defaultProps.ingredients}
                            duration={defaultProps.duration}
                            calories={defaultProps.calories}
                            url={defaultProps.url}
                            changeView={changeView}
                        />
                    </div>
                </div>
                /*
            <div className="recipe-sorting flex flex-col mx-40 pt-20">
                <div className="filters results_title ">
                    
                </div>
                

            </div>


            </div>
            
        </div>
    )
}