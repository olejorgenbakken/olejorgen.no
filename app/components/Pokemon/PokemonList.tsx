import type { Pokemon } from "@/app/models/pokemon.model";
import { PokemonItem } from "./PokemonItem";
import styles from "./PokemonList.module.css";

interface PokemonListProps {
    pokemonList: Pokemon[];
}

export default function PokemonList({ pokemonList }: PokemonListProps) {
    return (
        <ul className={styles.pokemonList}>
            {pokemonList.map((pokemon) => (
                <PokemonItem pokemon={pokemon} key={pokemon.id} />
            ))
            }
        </ul>
    )

}