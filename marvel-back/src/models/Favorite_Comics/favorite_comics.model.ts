import { DataTypes, ModelDefined } from 'sequelize';
import { connection } from '../../config/db/db.sequelize';
import { FavoriteComic } from './favorite_comics.type';
import { ComicModel } from '../Comic/comic.model';
import { UserModel } from '../User/user.model';


export const FavoriteComicModel: ModelDefined<FavoriteComic, FavoriteComic> = connection.define('favorite_comics', {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true
    },
    comic_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'comics',
            key: 'id'
        },
        onDelete: 'CASCADE',
        primaryKey: true
    }
}, {
    tableName: 'favorite_comics',
    createdAt: false,
    updatedAt: false
});

FavoriteComicModel.belongsTo(ComicModel, { foreignKey: 'comic_id' });
FavoriteComicModel.belongsTo(UserModel, { foreignKey: 'user_id'});

ComicModel.hasMany(FavoriteComicModel, { foreignKey: 'comic_id'});
UserModel.hasMany(FavoriteComicModel, { foreignKey: 'user_id'});
