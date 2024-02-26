import type { Pokédex } from '../models/pokedex.model';

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
