import { PokemonService } from "./../pokemon.service";
import { Component, Input, OnInit } from "@angular/core";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";

@Component({
    selector: "app-pokemon-form",
    templateUrl: "./pokemon-form.component.html",
    styleUrls: ["./pokemon-form.component.css"],
})
export class PokemonFormComponent implements OnInit {
    @Input() pokemon: Pokemon;
    types: string[];

    constructor(
        private pokemonService: PokemonService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.types = this.pokemonService.getPokemonTypeList();
    }

    hasType(type: string): boolean {
        return this.pokemon.types.includes(type);
    }

    selectType($event: Event, type: string): void {
        const isChecked = ($event.target as HTMLInputElement).checked;

        if (isChecked) {
            this.pokemon.types.push(type);
        } else {
            this.pokemon.types = this.pokemon.types.filter((t) => t !== type);
        }
    }

    isTypesValid(type: string): boolean {
        if (
            (this.pokemon.types.length == 1 && this.hasType(type)) ||
            (this.pokemon.types.length >= 3 && !this.hasType(type))
        ) {
            return false;
        }
        return true;
    }

    onSubmit() {
        console.log("Submit form");
        this.router.navigate(["/pokemon", this.pokemon.id]);
    }
}
