import React from 'react';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <header className="w-full z-10 bg-primary-tan">
      <div className="max-w-[1200px] mx-auto border-t-2 border-b-2 border-black-100 py-4 px-6">
          <nav className="flex justify-between items-center mt-10">
            <p className="product_name logo-style cursor-pointer font-bold text-4xl text-orange">
              Ramsey
            </p>
            <SearchBar />
            <p className="profile_pic">Profile Picture</p>
          </nav>
        </div>
    </header>
  );
};

export default NavBar;
