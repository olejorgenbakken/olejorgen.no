'use client'

import { useEffect, useState } from "react";

import Main from "../components/Layout/Main/Main";
import PokemonList from "../components/Pokemon/PokemonList";
import Heading from "../components/Text/Heading/Heading";
import { fetchPokemon, fetchPokemonCount } from "../data/pokemon";

import type { Pokemon } from "../models/pokemon.model";
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
                        {pokemonList ? <PokemonList pokemonList={pokemonList} /> : "Loading..."}
                    </section>
                </>
                : "Loading..."}
        </Main>
    );
}


