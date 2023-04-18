import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonData, setPokemonData] = useState({});

  const handleChange = (event) => {
    setPokemonName(event.target.value);
  };

  const searchPokemon = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
          setPokemonData(response.data);
        }
      });
  };

  return (
    <div className="container mx-auto justify-center">
      <h1 className="mt-4 font-aria font-bold text-[40px]">Pokemon Stats</h1>
      <div className="flex mx-5 align-middle">
        <input
          type="text"
          placeholder="Enter Character"
          onChange={handleChange}
          className="mr-3 px-3 py-2 bg-white border shadow-sm border-slate-200 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[40%] rounded-md sm:text-sm focus:ring-1 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
        />
        <button
          className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
          onClick={searchPokemon}
        >
          Search Pokemon
        </button>
      </div>
    </div>
  );
};

export default App;

