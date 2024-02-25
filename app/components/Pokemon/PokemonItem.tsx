import type { Pokemon } from "@/app/models/pokemon.model";
import Image from "next/image";
import Link from "next/link";

import Tag from "../Tag/Tag";
import Paragraph from "../Text/Paragraph/Paragraph";
import Small from "../Text/Small/Small";
import styles from "./PokemonItem.module.css";

interface PokemonProps {
    pokemon: Pokemon;
}

export function PokemonItem({ pokemon }: PokemonProps) {
    return (
        <li className={styles.pokemon}>
            <figure className={styles.sprite}><Image className={styles.image} src={pokemon.sprites.other.showdown.front_default} alt={pokemon.name} fill sizes="64px" /></figure>
            <div className={styles.info}>
                <header className={styles.header}>
                    <Paragraph className={styles.name}>
                        <Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                    </Paragraph>
                    <ul className={styles.types}>
                        {pokemon.types.map((type) => (
                            <li key={type.type.name}><Tag className={styles.type}>{type.type.name}</Tag></li>
                        ))}
                    </ul>
                </header>
                <Small className={styles.number}>No. {pokemon.id}</Small>
            </div>
        </li >
    );
}