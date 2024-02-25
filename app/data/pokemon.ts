import type { Pokemon } from '../models/pokemon.model';

export function fetchPokemonCount(): Promise<any> {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=1600')
    .then((response) => response.json())
    .then((data) => {
      return data.count;
    });
}

export function fetchPokemon(id: number): Promise<Pokemon> {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
