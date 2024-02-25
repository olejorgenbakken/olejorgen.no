import type { Generation } from '../models/generation.model';
import type { Pokemon } from '../models/pokemon.model';
import type { Pokédex } from '../models/pokedex.model';

export function fetchGen(id?: number): Promise<Generation> {
  return fetch(
    id
      ? `https://pokeapi.co/api/v2/generation/${id}`
      : 'https://pokeapi.co/api/v2/generation'
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export function fetchPokedex(id?: number): Promise<Pokédex> {
  return fetch(
    id
      ? `https://pokeapi.co/api/v2/pokedex/${id}`
      : 'https://pokeapi.co/api/v2/pokedex'
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

export function fetchPokemon(id?: number, name?: string): Promise<Pokemon> {
  return fetch(
    id
      ? `https://pokeapi.co/api/v2/pokemon/${id}`
      : `https://pokeapi.co/api/v2/pokemon/${name}`
  )
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}
