import './App.css'
import { useState, useEffect } from 'react'
import { ImageComponent } from './img';


const App = () => {

    let [pokemonNumber, setNumber] = useState(1010);
    let [pokemonName, setPokemonName ] = useState("");
    let [pokemonImg, setPokemonImg] = useState("");
    
    
    function increaseNumber(){

        setNumber(pokemonNumber + 1)
        console.log('valor con useStateNext: '+ pokemonNumber)
        
    }

    function decreaseNumber(){

        setNumber(pokemonNumber > 1 ? pokemonNumber - 1 : 1)
        console.log('valor con useStatePrevious: ' + pokemonNumber)

        
        
    }

    useEffect(() => {
        console.log('valor con useEffect: ' + pokemonNumber);
        // Aquí debemos llamar al API
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
        <div className='general'>
        
            <ul className='lista'>

                <li>{"Nombre: " + pokemonName} </li>
                <li>{ "Número: " + pokemonNumber} </li>
                <li><ImageComponent imageUrl={pokemonImg}/></li>
            </ul>
        
        
        
            <div className='botones'>
                <button onClick={decreaseNumber}>Previous</button>   
                <button onClick={increaseNumber}>Next</button> 
            </div>

        </div>   
    </>
    )}

export { App }