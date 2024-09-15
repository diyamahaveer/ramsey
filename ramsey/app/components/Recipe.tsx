import React from 'react'
import Image from 'next/image'

interface RecipeProps {
  title: string,
  thumbnail: string,
  ingredients: string[],
  duration: string,
  calories: string,
  url: string,
}
const Recipe = ({ title, thumbnail, ingredients, duration, calories, url }: RecipeProps) => {
  return (
    <div className='flex flex-row gap-[1rem] w-auto p-[2rem] rounded-[2em] border-[1px] border-black' onClick={() => { console.log("replace me!"); }}>
      <img alt="food image" src={thumbnail} className='object-cover relative size-72 rounded-lg' />
      <div className='flex flex-col justify-center'>
        <div className='font-bold text-[1.5rem]'>
          {title}
        </div>

        <div>
          <div>
            {/* insert svg for the duration here */}
            <div className='flex flex-row gap-x-2'>
              <Image src="./clock.svg" alt="cooking duration" width={20} height={20} />
              {duration}
            </div>
            {calories}
          </div>
        </div>

        <div>
          <ul>
            {
              ingredients.map((ingredient, idx) => {
                return (
                  <li key={idx}>
                    {ingredient}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Recipe
