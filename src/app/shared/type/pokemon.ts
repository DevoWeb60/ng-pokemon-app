export class Pokemon {
    id: number;
    hp: number;
    cp: number;
    name: string;
    picture: string;
    types: Array<string>;
    created: Date;
    slug: string;

    constructor(
        name: string = "Barbatruc",
        hp: number = 10,
        cp: number = 15,
        picture: string = "077",
        types: string[] = ["Normal"],
        created: Date = new Date()
    ) {
        this.name = name;
        this.hp = hp;
        this.cp = cp;
        this.picture = picture;
        this.types = types;
        this.created = created;
    }
}
