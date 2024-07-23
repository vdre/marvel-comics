import { DataTypes, ModelDefined } from 'sequelize';
import { connection } from '../../config/db/db.sequelize';
import { Comic } from './comic.type';

export const ComicModel: ModelDefined<Comic, Comic> = connection.define('comics', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    },
    creators: {
        type: DataTypes.TEXT
    },
    prices: {
        type: DataTypes.TEXT
    },
    thumbnail: {
        type: DataTypes.TEXT
    }
}, {
    tableName: 'comics',
    createdAt: false,
    updatedAt: false
});
