import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
    debounceTime,
    distinctUntilChanged,
    Observable,
    Subject,
    switchMap,
} from "rxjs";
import { Pokemon } from "src/app/shared/type/pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
    selector: "app-search-pokemon",
    templateUrl: "./search-pokemon.component.html",
    styleUrls: ["./search-pokemon.component.scss"],
})
export class SearchPokemonComponent implements OnInit {
    searchTerms = new Subject<string>();
    pokemons$: Observable<Pokemon[]>;

    constructor(
        private pokemonService: PokemonService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.pokemons$ = this.searchTerms.pipe(
            // Attend 300ms après le keyup pour envoyer la requête
            debounceTime(300),
            // Attend un changement de valeur avant d'envoyer la requête
            distinctUntilChanged(),
            // Annule et ignore les requêtes précédentes en cours d'exécution
            switchMap((term) => this.pokemonService.searchPokemonList(term))
        );
    }

    search(term: string) {
        this.searchTerms.next(term);
    }

    goToDetail(pokemon: Pokemon) {
        const link = ["/pokemon", pokemon.id];
        this.router.navigate(link);
    }
}
