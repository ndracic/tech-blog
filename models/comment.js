const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
        },
        post_id: {
            type: DataTypes.INTEGER,
            refereneces: {
                model: 'post',
                key: 'id',

            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        modelName: 'comment',
    }
);
module.exports = Comment;