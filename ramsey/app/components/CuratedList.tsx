"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import loadingGIF from "../../public/images/loadingGIF.webp";
import Recipe from './Recipe'
import Image from "next/image";

interface RecipeData {
  title: string;
  thumbnail: string;
  ingredients: string[];
  duration: string;
  calories: string;
  url: string;
}

interface CuratedListProps {
  changeView: (state: number) => void;
  changeURL: (url: string) => void;
  query: string;
}

export default function CuratedList({ changeView, changeURL, query }: CuratedListProps) {
  const [recipes, setRecipes] = useState<RecipeData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (query) {
      const fetchRecipes = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            `http://192.168.50.136:8080/api/search/?query=${query}`
          );
          setRecipes(response.data.response);
          console.log(response.data);
        } catch (error) {
          console.error("Error fetching recipes:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchRecipes();
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-primary-tan flex flex-col justify-start items-left pt-10">
      <div className="results_title animate-fadeInLeft">
        Here are your results...
      </div>
      <div className="w-[70%]">
        <div className="pt-5 pl-32">
          
            {loading ? (
            <div className="flex items-center justify-center ml-48 min-w-full">
                <Image
                src={loadingGIF}
                alt="Loading..."
                width="480"
                height="480"
                className="giphy-embed"
                />
            </div>
          
            ) : (
              recipes.map((recipe, index) => (
                <div className="flex flex-col items-left bg-mx-40 pb-5 cursor pointer animate-fadeInLeftRecipe">
                <Recipe
                  key={index}
                  title={recipe.title}
                  thumbnail={recipe.thumbnail}
                  ingredients={recipe.ingredients}
                  duration={recipe.duration}
                  calories={recipe.calories}
                  url={recipe.url}
                  changeView={changeView}
                  changeURL={changeURL}
                />
                </div>
              ))
            )}
            
          </div>
        </div>
      </div>
 
  );
}