import React from 'react'
import SearchBar from './components/SearchBar'

const NavBar = () => {
  return (
    <header className='w-full absolute z-10 pt-nav'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16'>
        <p className='product_name logo-style cursor-pointer font-bold text-4xl text-orange'>
          Ramsey
        </p>
        <SearchBar></SearchBar>
        <p className='profile_pic'>
          Profile Picture
        </p>
      </nav>

    </header>
  )
}

export default NavBar
