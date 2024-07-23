export interface IMarvelDomain {
    getComics(limit: number, offset: number): Promise<any>;
}