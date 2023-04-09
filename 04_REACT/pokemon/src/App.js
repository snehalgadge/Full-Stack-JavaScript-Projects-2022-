import React, {useState} from 'react'
// import Axios from 'axios';

const App = () => {

  const [PokemonName, setPokemonName] = useState("");

  const handleChange = (event) => {setPokemonName(event.target.value)};

  const searchPokemon = () =>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
    .then((response) => {
      console.log(response);
    })
    .catch(err => console.log('Error ', err));
  }

  return (
    <div className='flex justify-center' >
      <div className=''>
        <h1 className='font-aria font-bold text-[40px] '>Pokemon Stat</h1>
        <input type={Text} placeholder={'Enter Character'} onChange={handleChange} className='w-[100%] h-[50%]'/>
        <button onClick={searchPokemon}>Search Pokemon</button>
       </div>
    </div>
  )
}

export default App

