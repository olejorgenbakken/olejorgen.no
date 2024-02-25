'use client'

import { useEffect, useState } from "react";

import Main from "../components/Layout/Main/Main";
import PokemonList from "../components/Pokemon/PokemonList";
import Heading from "../components/Text/Heading/Heading";

import type { Pokemon } from "../models/pokemon.model";
function fetchPokemonCount(): Promise<any> {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=1600")
        .then((response) => response.json())
        .then((data) => {
            return data.count;
        });
}

export function fetchPokemon(id: number): Promise<Pokemon> {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            return data;
        });
}

export default function Home() {
    const [pokemonCount, setPokemonCount] = useState<any | null>(null);
    const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

    useEffect(() => {
        fetchPokemonCount()
            .then((pokemonCount) => setPokemonCount(pokemonCount))
            .then(() => {
                const ids = Array.from({ length: 920 }, (_, index) => index + 1);
                return Promise.all(ids.map((id) => fetchPokemon(id)))
                    .then((pokemonList) => {
                        setPokemonList(pokemonList)
                    })
            })
    }, []);

    return (
        <Main maxWidth="none">
            {pokemonCount ?
                <>
                    <section>
                        <Heading level="h1">Liste med Pokémon <small>({pokemonCount})</small></Heading>
                        <PokemonList pokemonList={pokemonList} />
                    </section>
                </>
                : "Loading..."}
        </Main>
    );
}


