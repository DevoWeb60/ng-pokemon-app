import { Pokemon } from "./../pokemon";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PokemonService } from "../pokemon.service";

@Component({
    selector: "app-edit-pokemon",
    template: `
        <h2>Editer {{ pokemon?.name }}</h2>
        <p class="center">
            <img *ngIf="pokemon" [src]="pokemon.picture" />
        </p>
        <app-pokemon-form
            *ngIf="pokemon"
            [pokemon]="pokemon"
        ></app-pokemon-form>
    `,
    styles: [],
})
export class EditPokemonComponent implements OnInit {
    pokemon: Pokemon | undefined;

    constructor(
        private pokemonService: PokemonService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const pokemonId: string | null = this.route.snapshot.paramMap.get("id");
        if (pokemonId) {
            this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
        } else {
        }
    }
}
