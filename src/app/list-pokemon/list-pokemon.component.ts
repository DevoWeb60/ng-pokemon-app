import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemon";

@Component({
    selector: "app-list-pokemon",
    templateUrl: "./list-pokemon.component.html",
    styles: [],
})
export class ListPokemonComponent implements OnInit {
    title = "Pokemon";
    pokemonList = POKEMONS;

    constructor(private router: Router) {}

    ngOnInit() {
        console.table(this.pokemonList);
    }

    goToPokemon(pokemon: Pokemon) {
        this.router.navigate(["/pokemon", pokemon.slug]);
    }
}
