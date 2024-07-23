import { DataTypes, Sequelize, Model, ModelDefined } from 'sequelize';
import { connection } from '../../config/db/db.sequelize';
import { User } from './user.type';

export const connectionUser = (
    sequelize: Sequelize
): ModelDefined<User, User> => {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        identification: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
    {
        tableName: 'users',
        createdAt: false,
        updatedAt: false
    });
}

export const UserModel = connectionUser(connection);
