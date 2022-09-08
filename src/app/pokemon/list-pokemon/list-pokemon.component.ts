import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
    selector: "app-list-pokemon",
    templateUrl: "list-pokemon.component.html",
    styles: [],
})
export class ListPokemonComponent implements OnInit {
    title = "Pokemon";
    pokemonList: Pokemon[];

    constructor(
        private router: Router,
        private pokemonService: PokemonService
    ) {}

    ngOnInit() {
        this.pokemonList = this.pokemonService.getPokemonList();
    }

    goToPokemon(pokemon: Pokemon) {
        this.router.navigate(["/pokemon", pokemon.id]);
    }
}