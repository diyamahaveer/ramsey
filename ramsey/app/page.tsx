"use client"
//import Image from "next/image";
import CuratedList from "./components/CuratedList";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import React, { useState } from 'react';

export default function Home() {
  const [isSearching, setIsSearching] = useState(false);

  function search(enable: boolean) {
    setIsSearching(enable);
  }

  return (
    <main className="bg-primary-brown min-h-screen relative w-full">
      <div className="shadow-lg w-full">
        <NavBar search={search} />
        {
          isSearching ?
            <CuratedList />
            :
            <Hero />
        }
      </div>
    </main>
  );
}


/*
"use client";
import React from 'react';
import Hero from "./Hero";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <main className="overflow-hidden bg-primary-brown min-h-screen flex items-center justify-center relative w-full p-4">
      <div className="bg-secondary-tan mx-4 md:mx-8 lg:mx-24 mt-10 md:mt-16 lg:mt-20 p-4 rounded-lg shadow-lg max-w-3xl w-full">
        <NavBar />
        <Hero />
      </div>
    </main>
  );
}
*/