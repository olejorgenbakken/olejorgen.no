import Image from "next/image";

import Main from "@/app/components/Layout/Main/Main";
import Table from "@/app/components/Table/Table";
import Tag from "@/app/components/Tag/Tag";
import Heading from "@/app/components/Text/Heading/Heading";
import Small from "@/app/components/Text/Small/Small";

import { getPokemonByName } from "../data/pokemon";
import styles from "./page.module.css";

import type { Pokemon } from "../models/pokemon.model";
export default async function Page({ params }: { params: { name: string } }) {
    const pokemon: Pokemon = await getPokemonByName(params.name);

    return (
        <Main maxWidth="none">
            {pokemon ?
                <>
                    <title>{`${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} | Pokédex`}</title>
                    <header className={styles.pokemonHeader}>
                        {pokemon.sprites.front_default
                            ?
                            <figure className={styles.pokemonImage}><Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={96}
                                height={96}
                            /></figure>
                            : pokemon.sprites.other.showdown.front_default
                                ?
                                <figure className={styles.pokemonImage}><Image
                                    src={pokemon.sprites.other.showdown.front_default}
                                    alt={pokemon.name}
                                    width={96}
                                    height={96}
                                /></figure>
                                : pokemon.sprites.other.home.front_default
                                    ?
                                    <figure className={styles.pokemonImage}><Image
                                        src={pokemon.sprites.other.home.front_default}
                                        alt={pokemon.name}
                                        width={96}
                                        height={96}
                                    /></figure>
                                    : null
                        }
                        <Heading level="h1" className={styles.pokemonName}>{pokemon.name}</Heading>
                        <Small className={styles.pokemonDexNumber}>#{pokemon.id}</Small>
                        <ul className={styles.pokemonTypes}>
                            {pokemon.types.map((type) => (
                                <li key={type.type.name} className={styles.pokemonType}><Tag>{type.type.name}</Tag></li>
                            ))}
                        </ul>
                    </header>

                    <audio controls autoPlay>
                        <source src={`https://play.pokemonshowdown.com/audio/cries/${pokemon.name}.mp3`} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>

                    <Table title="Basics">
                        <tbody>
                            <tr>
                                <th>Height</th>
                                <td><strong>{pokemon.height / 10}</strong> <abbr title="meter(s)">m</abbr></td>

                            </tr>
                            <tr>
                                <th>Weight</th>
                                <td><strong>{pokemon.weight / 10}</strong> <abbr title="kilograms">kg</abbr></td>
                            </tr>
                        </tbody>
                    </Table>

                    <Table title="Abilities">
                        <thead>
                            <tr>
                                <th>Ability</th>
                                <th>Is hidden</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.abilities.map((ability) => (
                                <tr key={ability.ability.name}>
                                    <td>{ability.ability.name.replace("-", " ")}</td>
                                    <td>{ability.is_hidden ? "Yes" : "No"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <Table title="Stats">
                        <thead>
                            <tr>
                                <th>Stat</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.stats.map((stat) => (
                                <tr key={stat.stat.name}>
                                    <th>{stat.stat.name.replace("-", " ")}</th>
                                    <td>{stat.base_stat}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                    <section>
                        {pokemon.sprites.front_default &&
                            <Image
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                width={96}
                                height={96}
                            />
                        }
                        {pokemon.sprites.front_shiny &&
                            <Image
                                src={pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                width={96}
                                height={96}
                            />
                        }
                    </section>

                </>
                : "Loading..."
            }
        </Main >
    );
}