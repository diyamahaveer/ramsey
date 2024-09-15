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
    <div className="min-h-screen bg-primary-tan flex flex-col justify-start items-left pt-10">
      <div className="results_title animate-fadeInLeft">
        Here are your results...
      </div>
      <div className="w-[70%]">
        <div className="pt-20 pl-32">
          
            {loading ? (
            <div className="flex items-center justify-center ml-40 min-w-full">
                <iframe
                    src="https://giphy.com/embed/H96YgqpevPlew2m68m"
                    width="480"
                    height="480"
                    className="giphy-embed"
                    allowFullScreen
                    title="Load"
                ></iframe>
          </div>
          
            ) : (
              recipes.map((recipe, index) => (
                <div className="flex flex-col items-left bg-mx-40 cursor pointer animate-fadeInLeftRecipe">
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
                </div>
              ))
            )}
            
          </div>
        </div>
      </div>
 
  );
}



// return (
//         <div className="min-h-screen bg-primary-tan flex flex-col justify-start items-left pt-10">
//             <div className="results_title animate-fadeInLeft">
//                 Here are your results...
//             </div>
//             <div className="w-[70%]">
//                 <div className="pt-20 pl-32">
//                     <div className="flex flex-col items-left bg-mx-40 curosr pointer animate-fadeInLeftRecipe">
//                         <Recipe
//                             title={defaultProps.title}
//                             thumbnail={defaultProps.thumbnail}
//                             ingredients={defaultProps.ingredients}
//                             duration={defaultProps.duration}
//                             calories={defaultProps.calories}
//                             url={defaultProps.url}
//                             changeView={changeView}
//                         />
//                     </div>
//                 </div>
//                 /*
//             <div className="recipe-sorting flex flex-col mx-40 pt-20">
//                 <div className="filters results_title ">
                    
//                 </div>
                

//             </div>


//             </div>
            
//         </div>
//     )
// } <div class="flex justify-center items-center min-h-screen bg-gray-100">
 