'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

import Main from "@/app/components/Layout/Main/Main";
import Heading from "@/app/components/Text/Heading/Heading";
import Small from "@/app/components/Text/Small/Small";

import styles from "./page.module.css";

import type { Pokemon } from "@/app/pokemon/models/pokemon.model";
export default function Page({ params }: { params: { name: string } }) {
    const [pokemon, setPokemon] = useState<Pokemon>();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPokemon(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            })
    }, [params.name]);

    return (
        <Main maxWidth="none">
            {pokemon ?
                <>
                    <header className={styles.pokemonHeader}>
                        {pokemon.sprites.other?.home.front_default &&
                            <Image
                                src={pokemon.sprites.other.home.front_default}
                                alt={`${pokemon.name} front`}
                                width={124}
                                height={124}
                            />
                        }
                        <Heading level="h1">{pokemon.name} <Small>#{pokemon.id}</Small></Heading>
                    </header>
                    {pokemon.sprites.front_default &&
                        <section>
                            <h2>Sprites</h2>

                            <table className={styles.pokemonSprites}>
                                <thead>
                                    <tr>
                                        <td></td>
                                        {pokemon.sprites.front_default && <th>Front</th>}
                                        {pokemon.sprites.front_shiny && <th>Front Shiny</th>}
                                        {pokemon.sprites.back_default && <th>Back</th>}
                                        {pokemon.sprites.back_shiny && <th>Back Shiny</th>}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Default</th>
                                        {pokemon.sprites.front_default &&
                                            <td>
                                                <Image
                                                    src={pokemon.sprites.front_default}
                                                    alt={`${pokemon.name} front`}
                                                    width={96}
                                                    height={96}
                                                />
                                            </td>
                                        }
                                        {pokemon.sprites.front_shiny &&
                                            <td>
                                                <Image
                                                    src={pokemon.sprites.front_shiny}
                                                    alt={`${pokemon.name} front shiny`}
                                                    width={96}
                                                    height={96}
                                                />
                                            </td>
                                        }
                                        {pokemon.sprites.back_default &&
                                            <td>
                                                <Image
                                                    src={pokemon.sprites.back_default}
                                                    alt={`${pokemon.name} back`}
                                                    width={96}
                                                    height={96}
                                                />
                                            </td>
                                        }
                                        {pokemon.sprites.back_shiny &&
                                            <td>
                                                <Image
                                                    src={pokemon.sprites.back_shiny}
                                                    alt={`${pokemon.name} back shiny`}
                                                    width={96}
                                                    height={96}
                                                />
                                            </td>
                                        }
                                    </tr>
                                    {pokemon.sprites.other.home.front_default &&
                                        <tr>
                                            <th scope="row">Home</th>
                                            <td>
                                                <Image
                                                    src={pokemon.sprites.other.home.front_default}
                                                    alt={`${pokemon.name} home`}
                                                    width={96}
                                                    height={96}
                                                />
                                            </td>
                                        </tr>
                                    }

                                    {pokemon.sprites.other.showdown.front_default &&
                                        <tr>
                                            <th scope="row">Showdown</th>
                                            <td>
                                                <Image
                                                    src={pokemon.sprites.other.showdown.front_default}
                                                    alt={`${pokemon.name} showdown`}
                                                    width={64}
                                                    height={64}
                                                />
                                            </td>
                                            <td></td>
                                            {pokemon.sprites.other.showdown.back_default &&
                                                <td>
                                                    <Image
                                                        src={pokemon.sprites.other.showdown.back_default}
                                                        alt={`${pokemon.name} showdown back`}
                                                        width={64}
                                                        height={64}
                                                    />
                                                </td>
                                            }
                                        </tr>
                                    }

                                    {pokemon.sprites.other.dream_world.front_default &&
                                        <tr>
                                            <th scope="row">Dream World</th>
                                            <td>
                                                <Image
                                                    src={pokemon.sprites.other.dream_world.front_default}
                                                    alt={`${pokemon.name} dream world`}
                                                    width={96}
                                                    height={96}
                                                />
                                            </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </section>
                    }

                    <section>
                        <Heading level="h2">Cry</Heading>
                        <audio controls>
                            <source src={`https://play.pokemonshowdown.com/audio/cries/${pokemon.name}.mp3`} type="audio/mpeg" />
                            Your browser does not support the audio element.
                        </audio>
                    </section>

                    {pokemon.forms.length > 1 &&
                        <section>
                            <h2>Forms</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pokemon.forms.map((form) => (
                                        <tr key={form.name}>
                                            <td>{form.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    }

                    <section>
                        <h2>Basics</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Height (Meters)</th>
                                    <td>{pokemon.height / 10}</td>

                                </tr>
                                <tr>
                                    <th>Weight (Kg)</th>
                                    <td>{pokemon.weight / 10}</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h2>Types</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Type 1</th>
                                    <td>{pokemon.types[0].type.name}</td>
                                </tr>
                                {pokemon.types[1] &&
                                    <tr>
                                        <th>Type 2</th>
                                        <td>{pokemon.types[1].type.name}</td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h2>Abilities</h2>
                        <table>
                            <thead>
                                <tr>
                                    <td></td>
                                    <th>Ability 1</th>
                                    <th>Ability 2</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Default</th>
                                    {pokemon.abilities.filter((ability) => !ability.is_hidden).map((ability) => (
                                        <td key={ability.ability.name}>{ability.ability.name}</td>
                                    ))}
                                </tr>

                                <tr>
                                    <th scope="row">Hidden</th>
                                    {pokemon.abilities.filter((ability) => ability.is_hidden).map((ability) => (
                                        <td key={ability.ability.name}>{ability.ability.name}</td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h2>Stats</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Stat</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pokemon.stats.map((stat) => (
                                    <tr key={stat.stat.name}>
                                        <th>{stat.stat.name}</th>
                                        <td>{stat.base_stat}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>

                </>
                : "Loading..."}
        </Main>
    );
}