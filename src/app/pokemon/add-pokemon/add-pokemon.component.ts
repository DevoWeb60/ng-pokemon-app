import { Component, OnInit } from "@angular/core";
import { Pokemon } from "src/app/shared/type/pokemon";

@Component({
    selector: "app-add-pokemon",
    templateUrl: "./add-pokemon.component.html",
    styleUrls: ["./add-pokemon.component.scss"],
})
export class AddPokemonComponent implements OnInit {
    pokemon: Pokemon;

    ngOnInit(): void {
        this.pokemon = new Pokemon();
    }
}
