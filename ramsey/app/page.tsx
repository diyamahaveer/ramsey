
//import Image from "next/image";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <main className="bg-primary-brown min-h-screen relative w-full overflow-hidden">
      <div className="shadow-lg w-full bg-primary-tan">
        <NavBar />
        <Hero/>
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