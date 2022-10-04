import { Component } from "@angular/core";
import { POKEMONS } from "../shared/json/mock-pokemon-list";

@Component({
    selector: "app-page-not-found",
    template: `
        <div class="container center">
            <img [src]="melofee.picture" />
            <h1>404</h1>
            <h3>Error</h3>
            <a routerLink="/pokemons" class="waves-effect waves-teal btn-flat"
                >Retour à l'accueil</a
            >
        </div>
    `,
    styles: [],
})
export class PageNotFoundComponent {
    melofee = POKEMONS[10];
}
