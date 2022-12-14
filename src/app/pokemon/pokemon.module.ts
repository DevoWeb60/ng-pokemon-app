import { PokemonService } from "./pokemon.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { BorderCardDirective } from "../shared/directive/border-card.directive";
import { PokemonTypeColorPipe } from "../shared/pipe/pokemon-type-color.pipe";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { PokemonFormComponent } from "./pokemon-form/pokemon-form.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { AddPokemonComponent } from "./add-pokemon/add-pokemon.component";
import { SearchPokemonComponent } from "./search-pokemon/search-pokemon.component";
import { LoaderComponent } from "../loader/loader.component";

const pokemonRoutes: Routes = [
    {
        path: "pokemon/add",
        component: AddPokemonComponent,
    },
    {
        path: "pokemon/edit/:id",
        component: EditPokemonComponent,
    },
    {
        path: "pokemon/:id",
        component: DetailPokemonComponent,
    },
    {
        path: "pokemons",
        component: ListPokemonComponent,
    },
];

@NgModule({
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe,
        PokemonFormComponent,
        EditPokemonComponent,
        AddPokemonComponent,
        SearchPokemonComponent,
        LoaderComponent,
    ],
    imports: [CommonModule, FormsModule, RouterModule.forChild(pokemonRoutes)],
    providers: [PokemonService],
})
export class PokemonModule {}
