import React from "react";
import Cards from "./Cards";
import Nav from "./Nav";
import logo from "../assets/Weather-rafiki.png"

export default function Home({ onSearch, onClose, cities }) {
  return (
    <div className="bg-gradient-to-b from-[#1B1B1B] to-[#0E76A8] w-full min-h-screen bg-fixed bg-no-repeat bg-cover bg-top">
      <Nav onSearch={onSearch} />
     {cities.length ? <Cards cities={cities} onClose={onClose} /> : <div className="w-full h-full pt-8 flex flex-col justify-center items-center"> <img src={logo} alt="guy with umbrella" className="w-[400px]"/> <p className="text-3xl text-[#DDDDDD] font-[Lato] font-bold pt-4">Search for a city above!</p> </div>}
    </div>
  );
}
