import { useEffect, useState } from 'react';
import './App.css';

const baseapi = 'https://pokeapi.co/api/v2/'

function App() {
  const [pokemons, setPokemons] = useState([])

  async function captarPokemons() {
    let resposta = await fetch(`${baseapi}pokemon`)
    let dados = await resposta.json()

    console.log(dados)
    setPokemons(dados.results)
  }

  /* async function captarPokemon(nomePokemon) {
    let resposta = await fetch(`${baseapi}pokemon/${nomePokemon}`)
    let pokemon = await resposta.json()

    return pokemon
  } */
  
  useEffect(() => {
  /* async function callApi() {
    let dadosPokemons = await captarPokemons()
    let arr = []

    for(let item of dadosPokemons) {
      let pk = await captarPokemon(item.name)

      arr.push(pk)
    }

    setPokemons(arr)
  }

  callApi() */
  captarPokemons()

}, [])

  return (
    <div className="App">
    {
      pokemons.map(pokemon => {
        return <h1>{pokemon.name}</h1>
      })
    }
    <button onClick={captarPokemons}>Chamar</button>
    </div>
  );
}

export default App;
