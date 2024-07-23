export interface IUserDomain {
    
    getUserByEmail(email: string): Promise<any>;
    createUser(name: string, identification: string, email: string): Promise<any>;
    createComic(title: string, description: string, creators: string, prices: string, thumbnail: string, user_id: number): Promise<any>;
    getComicsUser(user_id: number): Promise<any>;
}