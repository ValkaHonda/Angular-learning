import { Article } from "./Article";


export class Data {

    items: Iterable<Article>;
    constructor(){
        this.items = [
            new Article('Honda','It is car','Valka','n/a'),
            new Article('VW','It is nicer car','Valka','n/a'),
            new Article('Lada','It is nicer car','Valka','n/a'),
            new Article('BMW','It is nicer car','Valka','n/a'),
            new Article('Toyota','It is nicer car','Valka','n/a'),
            new Article('ford','It is nicer car','Valka','n/a'),
            new Article('subaru','It is nicer car','Valka','n/a'),
        ];
    }
}