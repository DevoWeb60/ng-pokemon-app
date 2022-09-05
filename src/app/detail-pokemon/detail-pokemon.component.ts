import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { POKEMONS } from "../mock-pokemon-list";
import { Pokemon } from "../pokemon";

@Component({
    selector: "app-detail-pokemon",
    templateUrl: "./detail-pokemon.component.html",
    styles: [],
})
export class DetailPokemonComponent implements OnInit {
    pokemon: Pokemon;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        const pokemonSlug: string | null =
            this.route.snapshot.paramMap.get("slug");

        if (pokemonSlug) {
            const pokemon: Pokemon | undefined = POKEMONS.find(
                (pokemon) => pokemon.slug === pokemonSlug.toLowerCase()
            );
            if (pokemon) {
                this.pokemon = pokemon;
            }
        }
    }

    goToPokemonList() {
        this.router.navigate(["/pokemons"]);
    }
}
