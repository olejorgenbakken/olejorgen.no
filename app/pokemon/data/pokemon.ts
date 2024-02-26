import type { Pokemon } from '../models/pokemon.model';
import type { PokemonColor } from '../models/pokemoncolor.model';

export function getPokemonByName(name: string): Promise<Pokemon> {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export function getPokemonById(id: number): Promise<Pokemon> {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export function getPokemonColorByName(name: string): Promise<PokemonColor> {
  return fetch(`https://pokeapi.co/api/v2/pokemon-color/${name}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export function getPokemonColorById(id: number): Promise<PokemonColor> {
  return fetch(`https://pokeapi.co/api/v2/pokemon-color/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
