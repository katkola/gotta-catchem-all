import { useEffect, useState } from "react";

const Dugtrio = (props) =>{
    const [people, setPeople] = useState([]);
    const [pokemonList, setPokemon] = useState([]);
 
    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
            .then(console.log(people))
    }, []);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=800&offset=0')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
            .then(console.log(pokemonList))
    }, []);

    return (
        <div>

            {pokemonList.length > 0 && pokemonList.map((pokemon, index)=>{
                return (<li key={index}>{pokemon.name}</li>)
            })}
        </div>
    );
}
export default Dugtrio;
