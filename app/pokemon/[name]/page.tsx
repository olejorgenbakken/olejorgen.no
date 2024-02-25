'use client'
import { useEffect, useState } from "react";

import Main from "@/app/components/Layout/Main/Main";

import type { Pokemon } from "@/app/models/pokemon.model";
export default function Page({ params }: { params: { name: string } }) {
    const [pokemon, setPokemon] = useState<Pokemon>();

    useEffect(() => {
        console.log(params.name);
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then((response) => response.json())
            .then((data) => {
                setPokemon(data);
            })
            .catch((error) => {

                console.error("Error:", error);
            }
            )
    }, [params.name]);

    return (
        <Main maxWidth="none">
            {pokemon ?
                <>
                    <h1>{pokemon.name}</h1>
                    <figure><img src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} /></figure>
                    <ul>
                        {pokemon.types.map((type) => (
                            <li key={type.type.name}>{type.type.name}</li>
                        ))}
                    </ul>
                </>
                : "Loading..."}
        </Main>
    );
}