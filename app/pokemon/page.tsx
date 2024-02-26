'use client'

import { useEffect, useState } from "react";

import Main from "../components/Layout/Main/Main";
import Heading from "../components/Text/Heading/Heading";
import Paragraph from "../components/Text/Paragraph/Paragraph";
import Pokedex from "./components/Pokedex";
import { fetchPokedex } from "./data/pokedex";

import type { Pokédex } from "./models/pokedex.model";

export default function Home() {
    const [nationalPokedex, setNationalPokedex] = useState<Pokédex>();

    const pokedexId = 1;
    const pokedexlanguage = "en";

    useEffect(() => {
        fetchPokedex(pokedexId)
            .then((data: Pokédex) => {
                console.log(data);
                setNationalPokedex(data);
            });
    }, []);

    return (
        <Main maxWidth="lg">
            {nationalPokedex ?
                <>
                    <header>
                        <Heading level="h1">{nationalPokedex.names.find((name) => name.language.name === pokedexlanguage)?.name} pokédex</Heading>
                        <Paragraph muted>{nationalPokedex.descriptions.find((desc) => desc.language.name === pokedexlanguage)?.description}</Paragraph>
                    </header>
                    <Pokedex pokedex={nationalPokedex} />
                </>
                : "Loading..."}
        </Main>
    );
}


