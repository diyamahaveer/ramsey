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
        <div className="hero min-h-screen bg-secondary-tan flex flex-col items-center pt-10">
            <div className="w-full flex flex-col items-center mx-auto pt-40">
                hello world test
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
    )
}