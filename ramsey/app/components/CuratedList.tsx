"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./Recipe";

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
  query: string;
}

export default function CuratedList({ changeView, query }: CuratedListProps) {
  const [recipes, setRecipes] = useState<RecipeData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (query) {
      const fetchRecipes = async () => {
        try {
          setLoading(true);
          const response = await axios.get(
            `http://10.36.135.93:8080/api/search/?query=${query}`
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
    <div className="hero min-h-screen bg-secondary-tan flex flex-col items-center pt-10">
      <div className="w-full flex flex-col items-center mx-auto pt-40">
        {loading ? (
          <p>Loading...</p>
        ) : (
          recipes.map((recipe, index) => (
            <Recipe
              key={index}
              title={recipe.title}
              thumbnail={recipe.thumbnail}
              ingredients={recipe.ingredients}
              duration={recipe.duration}
              calories={recipe.calories}
              url={recipe.url}
              changeView={changeView}
            />
          ))
        )}
      </div>
    </div>
  );
}
