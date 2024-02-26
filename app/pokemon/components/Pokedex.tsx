import type { Pokédex } from "../models/pokedex.model";
import styles from "./Pokedex.module.css";

interface PokedexProps {
    pokedex: Pokédex;
}

export default function Pokedex({ pokedex }: PokedexProps) {
    return (
        <ul className={styles.pokedex}>
            {pokedex.pokemon_entries.map((pokemon) => (
                <li key={pokemon.entry_number}>
                    <a href={`/pokemon/${pokemon.pokemon_species.name}`}>Pokedex no.{pokemon.entry_number} - {pokemon.pokemon_species.name}</a>
                </li>
            ))
            }
        </ul>
    )

}