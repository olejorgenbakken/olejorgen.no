'use client'

import React from "react";

import Main from "../components/Layout/Main/Main";
import Heading from "../components/Text/Heading/Heading";
import Paragraph from "../components/Text/Paragraph/Paragraph";

import type { Pokemon } from "../models/pokemon.model";
function fetchPokemonCount(): Promise<any> {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=1600")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });
}

export default function Home() {
    const [pokemonList, setPokemonList] = React.useState<any | null>(null);

    React.useEffect(() => {
        fetchPokemonCount().then((pokemonList) => setPokemonList(pokemonList));
    }, []);

    return (
        <Main>
            {pokemonList ?
                <>
                    <section>
                        <Heading level="h1">Liste med Pokémon <small>({pokemonList.count})</small></Heading>
                        <ul>
                            {pokemonList.results.slice(0, pokemonList.count).map((pokemon: Pokemon, index: number) => (
                                <li key={pokemon.name}>
                                    <Paragraph><small>No. {index + 1}:</small> {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</Paragraph>
                                </li>
                            ))}
                        </ul>
                    </section>
                </>
                : "Loading..."}
        </Main>
    );
}