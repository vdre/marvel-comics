import { MarvelService } from "../services/marvel.service";
import { IMarvelDomain } from "./marvel.domain.interface";

export class MarvelDomain implements IMarvelDomain {
    
    private marvelService = new MarvelService();

    async getComics(limit:number, offset:number): Promise<any> {
        return await this.marvelService.getComics(limit, offset);
    }
}