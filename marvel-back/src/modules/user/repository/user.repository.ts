import { UserModel } from "../../../models/User/user.model";
import { ComicModel } from '../../../models/Comic/comic.model';
import { FavoriteComic } from '../../../models/Favorite_Comics/favorite_comics.type';
import { FavoriteComicModel } from '../../../models/Favorite_Comics/favorite_comics.model';


export class UserRepository {
    async createUser(name: string, identification: string, email: string) {
        try {
            const user = await UserModel.create({ name, identification, email });
            return user;
        } catch (error) {
            throw error;
        }
    }

    async getUserByEmail(email: string) {
        return await UserModel.findOne({ where: { email } });
    }

    async createComic(title: string, description: string, creators: string, prices: string, thumbnail: string, user_id: number) {
        const transaction = await ComicModel.sequelize?.transaction();
        try {
            const comic = await ComicModel.create({ title, description, creators, prices, thumbnail }, { transaction });
            await FavoriteComicModel.create({ user_id: user_id, comic_id: comic.dataValues.id! }, { transaction });
            await transaction?.commit();
            return comic;
        } catch (error) {
            await transaction?.rollback();
            throw error;
        }
    }


    async getComicsUser(user_id: number) {
        try {
            const comics = await FavoriteComicModel.findAll({
                where: { user_id: user_id },
                include: [{ model: ComicModel }]
            });

            return comics.map(record => record.getDataValue('comic' as any));
        } catch (error) {
            throw error;
        }
    }


}
