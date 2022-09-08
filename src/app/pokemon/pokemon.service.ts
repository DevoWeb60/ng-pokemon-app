import { Injectable } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Injectable()
export class PokemonService {
    pokemonList: Pokemon[] = POKEMONS;

    getPokemonList(): Pokemon[] {
        return this.pokemonList;
    }

    getPokemonById(id: number): Pokemon | undefined {
        return this.pokemonList.find((pokemon) => pokemon.id == id);
    }

    getPokemonTypeList(): string[] {
        return [
            "Plante",
            "Feu",
            "Eau",
            "Insecte",
            "Normal",
            "Electrik",
            "Poison",
            "Fée",
            "Vol",
            "Combat",
            "Psy",
        ];
    }
}
