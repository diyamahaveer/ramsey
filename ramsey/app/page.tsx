"use client"
//import Image from "next/image";
import CuratedList from "./components/CuratedList";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Player from "./components/Player";
import React, { useState } from 'react';

export default function Home() {
  const [view, setViewState] = useState(0);

  function changeView(state: number) {
    setViewState(state);
  }

  function getView() {
    switch (view) {
      case 0:
        return <Hero/>
      case 1:
        return <CuratedList changeView={changeView}/>
      case 2: 
        return <Player />
      default:
        return <Hero />
    }
  }

  // isSearching ? <CuratedList /> : <Hero />;
  return (
    <main className="overflow-hidden bg-primary-brown min-h-screen relative w-full">
      <div className="shadow-lg w-full">
        <NavBar search={changeView} />
        {
          getView()
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