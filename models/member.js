import { DataTypes } from 'sequelize';
import { sequelize } from './connection.js';

export const Member = sequelize.define('member', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Username: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING(128),
        allowNull: false
    },
    Uid01: {
        type: DataTypes.STRING(128),
        allowNull: true
    },
    Email: {
        type: DataTypes.STRING(30),
    },
    Gender: {
        type: DataTypes.ENUM('male', 'female'),
    },
    Age: {
        type: DataTypes.ENUM('under18', '18_28', '29_40', '41_64', '65plus'),
    },
    City: {
        type: DataTypes.STRING(30),
    },
    Income: {
        type: DataTypes.ENUM('under39', '40_69', '70_99', '100_199', '200plus'),
    },
    Level: {
        type: DataTypes.ENUM('新芽', '小草', '小花', '大樹', '後台管理者'),
        defaultValue: '新芽'
    },
    status: {
        type: DataTypes.STRING(10),
    },
    Created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'member',
    timestamps: false
});
