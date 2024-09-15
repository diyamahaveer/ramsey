"use client"
import React from 'react'
import SearchBar from './SearchBar'

const NavBar = ({ search }) => {
  return (
    <header className="w-full z-10 bg-primary-tan">
      <div className="max-w-[1200px] mx-auto border-t-2 border-b-2 border-black-100 py-4 px-6">
          <nav className="flex justify-between items-center mt-10">
            <p className="product_name logo-style cursor-pointer font-bold text-4xl text-orange">
              Ramsey
              </p>
                <SearchBar search={search} ></SearchBar>
                <div class="flex items-center justify-center w-14 h-14 rounded-full bg-orange text-white text-2xl font-bold cursor-pointer">
                  LW
                </div>
          </nav>
        </div>
    </header>
  );
};

export default NavBar;
