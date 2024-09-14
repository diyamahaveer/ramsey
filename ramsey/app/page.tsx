
//import Image from "next/image";
import Hero from "./Hero";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <main className="overflow-hidden bg-primary-brown min-h-screen flex items-start justify-center realtive w-full">
      <div className="bg-secondary-tan mx-24 mt-20 shadow-lg max-w-3lg w-full">
        <NavBar/>
        <Hero/>
      </div>
    </main>
  );
}
