import { Request, Response, Router } from "express";
import { IMarvelDomain } from "../domain/marvel.domain.interface";
import { MarvelDomain} from "../domain/marvel.domain";
export const MarvelController = Router();


MarvelController.get('/get-list-comics', async (req: Request, res: Response) => {
    const { limit = 10, offset = 0 } = req.query;
    const domain:IMarvelDomain = new MarvelDomain();
    try {
        const response = await domain.getComics(limit as number, offset as number);
        res.send(response);
    } catch (error) {
        res.status(400).send('Error fetching comics');
    }
})