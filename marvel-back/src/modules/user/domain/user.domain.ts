import { UserRepository } from "../repository/user.repository";
import { IUserDomain } from "./user.domain.interface";


export class UserDomain implements IUserDomain {
    private userRepository = new UserRepository();

    async getUserByEmail(email: string): Promise<any> {
        try {
            const user = await this.userRepository.getUserByEmail(email);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async createUser(name: string, identification: string, email: string): Promise<any> {
        try {
            const user = await this.userRepository.createUser(name, identification, email);
            return user;
        } catch (error) {
            throw error;
        }
    }


    async createComic(title: string, description: string, creators: string, prices: string, thumbnail: string, user_id: number): Promise<any> {
        try {
            const comic = await this.userRepository.createComic(title, description, creators, prices, thumbnail, user_id);
            return comic;
        } catch (error) {
            throw error;
        }
    }

    async getComicsUser(user_id: number): Promise<any> {
        try {
            const comic = await this.userRepository.getComicsUser(user_id);
            return comic;
        } catch (error) {
            throw error;
        }
    }
}