import { Btn } from './Btn';
import { useState, useEffect } from 'react'

const App = () => {

    let [pokemonNumber, setNumber] = useState(10);
    let [pokemonName, setPokemonName ] = useState("");
    let [pokemonImg, setPokemonImg] = useState("");
    
    function increaseNumber(){

        setNumber(pokemonNumber + 1)
        console.log('valor antes del nuevo render: '+ pokemonNumber)
        
    }

    useEffect(() => {
        console.log('valor actualizado: ' + pokemonNumber);
        // Aquí debemos llamar al API
        /**/

        searchPokemon(pokemonNumber)

    }, [pokemonNumber])

    let searchPokemon = async pokemonNumber => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}/`)
        const data = await response.json()
        setPokemonName(data.name)
        setPokemonImg(data.sprites.front_default)
    }

    return( 
    <>
        <button onClick={increaseNumber}>Next</button>
        
        <div>{pokemonNumber} - {pokemonName} - {pokemonImg} </div>

        <>
        <Btn text= "Adelante" />
        <Btn text= "Atras" />
        </>       
    </>
    )}

export { App }