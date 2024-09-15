import React from 'react'
import Image from 'next/image'

export interface RecipeProps {
  title: string,
  thumbnail: string,
  ingredients: string[],
  duration: string,
  calories: string,
  url: string,
  changeView: (state: number) => void
}
const Recipe = ({ title, thumbnail, ingredients, duration, calories, url, changeView }: RecipeProps) => {
  return (
    <div className='flex flex-row gap-[1rem] w-auto rounded-[2em] border-[1px] border-black px-[2rem] py-[1rem]' onClick={() => { changeView(2) }}>
      <img alt="food image" src={thumbnail} className='w-[228px] h-[228px] object-cover' />
      <div className='flex flex-col justify-center'>
        <div className='font-bold text-[1.5rem]'>
          {title}
        </div>

        <div>
          <div className='flex flex-row justify-between'>
            {/* insert svg for the duration here */}
            <div className='flex flex-row gap-x-1 items-center text-[1.1rem]'>
              <Image src="./clock.svg" alt="cooking duration" width={30} height={30} />
              {duration}
            </div>
            <div className='flex flex-row items-center text-[1.1rem]'>
              Calories:
              <div className='border-[#F86900] rounded-lg border-[1px] p-1'>
                {calories}
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-y-2 text-xl font-bold text-[#7C7C7C]'>
          Ingredients
          <ul className='font-normal text-base'>
            {
              ingredients.map((ingredient, idx) => {
                return (
                  <li key={idx}>
                    • {ingredient}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div >
    </div >
  )
}

export default Recipe
