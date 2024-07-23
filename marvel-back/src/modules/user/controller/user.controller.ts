import { Request, Response, Router } from "express";
import { IUserDomain } from "../domain/user.domain.interface";
import { UserDomain } from "../domain/user.domain";

export const UserController = Router();

UserController.post('/get-user', async (req:Request, res:Response) => {
    const { email } = req.body;
    const domain: IUserDomain = new UserDomain();
    try {
        const user = await domain.getUserByEmail(email as string);
        res.status(200).send(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(400).send(`Error fetching user: ${error}`);
    }
})

UserController.post('/create-user', async (req: Request, res: Response) => {
    const { name, identification, email } = req.body;
    const domain: IUserDomain = new UserDomain();
    try {
        const user = await domain.createUser(name, identification, email);
        res.status(200).send(user);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(400).send(`Error creating user: ${error}`);
    }
})


UserController.post('/create-comic', async (req: Request, res: Response) => {
    const { title, description, creators, prices, thumbnail, user_id } = req.body;
    const domain: IUserDomain = new UserDomain();
    try {
        const comic = await domain.createComic(title, description, creators, prices, thumbnail, user_id);
        res.status(200).send(comic);
    } catch (error) {
        console.error('Error creating comic:', error);
        res.status(400).send(`Error creating comic: ${error}`);
    }
})


UserController.get('/get-comics-user', async (req: Request, res: Response) => {
    const { user_id } = req.query;
    const domain: IUserDomain = new UserDomain();
    try {
        const comic = await domain.getComicsUser(user_id as unknown as number);
        res.status(200).send(comic);
    } catch (error) {
        console.error('Error fetching comic:', error);
        res.status(400).send(`Error fetching comic: ${error}`);
    }
})