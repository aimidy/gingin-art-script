import { DataTypes } from 'sequelize';
import { sequelize } from './connection.js';


export const Product = sequelize.define('product', {
    UID: {
        type: DataTypes.STRING(128),
        primaryKey: true
    },
    version: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    category: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    showInfo: {
        type: DataTypes.JSON,
        allowNull: true
    },
    showUnit: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    discountInfo: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    descriptionFilterHtml: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    imageUrl: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    masterUnit: {
        type: DataTypes.JSON,
        allowNull: true
    },
    subUnit: {
        type: DataTypes.JSON,
        allowNull: true
    },
    supportUnit: {
        type: DataTypes.JSON,
        allowNull: true
    },
    otherUnit: {
        type: DataTypes.JSON,
        allowNull: true
    },
    webSales: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    sourceWebPromote: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    sourceWebName: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    startDate: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    endDate: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    hitRate: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    amount:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'products',
    timestamps: false
});
