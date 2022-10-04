import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, of, tap } from "rxjs";
import { Pokemon } from "../shared/type/pokemon";

@Injectable()
export class PokemonService {
    httpOptions = {
        headers: new HttpHeaders({ "Content-Type": "application/json" }),
    };

    constructor(private http: HttpClient) {}

    getPokemonList(): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>("api/pokemons").pipe(
            tap((pokemonList) => this.log(pokemonList)),
            catchError((error) => this.handleError(error, []))
        );
    }

    getPokemonById(id: number): Observable<Pokemon | undefined> {
        return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
            tap((pokemon) => this.log(pokemon)),
            catchError((error) => this.handleError(error, undefined))
        );
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon | null> {
        return this.http
            .put<Pokemon>("api/pokemons", pokemon, this.httpOptions)
            .pipe(
                tap((response) => this.log(response)),
                catchError((error) => this.handleError(error, null))
            );
    }

    deletePokemonById(id: number): Observable<null> {
        return this.http.delete<Pokemon>(`api/pokemons/${id}`).pipe(
            tap((pokemon) => this.log(pokemon)),
            catchError((error) => this.handleError(error, null))
        );
    }

    addPokemon(pokemon: Pokemon): Observable<Pokemon> {
        return this.http
            .post<Pokemon>("api/pokemons", pokemon, this.httpOptions)
            .pipe(
                tap((response) => this.log(response)),
                catchError((error) => this.handleError(error, null))
            );
    }

    searchPokemonList(term: string): Observable<Pokemon[]> {
        if (term.length < 2) {
            return of([]);
        }
        return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
            tap((response) => this.log(response)),
            catchError((error) => this.handleError(error, []))
        );
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

    private log(response: Pokemon[] | Pokemon | any) {
        console.table(response);
    }

    private handleError(error: Error, errorValue: any) {
        console.log(error);
        return of(errorValue);
    }
}
