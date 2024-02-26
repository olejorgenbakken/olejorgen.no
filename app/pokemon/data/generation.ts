import type { Generation } from '../models/generation.model';

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
