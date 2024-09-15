"use client";
import CuratedList from "./components/CuratedList";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Player from "./components/Player";
import React, { useState } from 'react';

export default function Home() {
  const [view, setViewState] = useState<number>(0);
  const [query, setQuery] = useState<string>("");
  const [selectedURL, selectURL] = useState("");

  function changeView(state: number) {
    setViewState(state);
  }

  function handleSearch(query: string) {
    setQuery(query);
    changeView(1);
  }

  function changeURL(url: string) {
    selectURL(url);
  }

  function getView() {
    switch (view) {
      case 0:
        return <Hero />;
      case 1:
        return <CuratedList changeView={changeView} changeURL={changeURL} query={query} />
      case 2:
        return <Player url={selectedURL} />
      default:
        return <Hero />;
    }
  }

  return (
    <main className="overflow-hidden bg-primary-brown min-h-screen relative w-full">
      <div className="shadow-lg w-full">
        <NavBar search={handleSearch} />
        {getView()}
      </div>
    </main>
  );
}
