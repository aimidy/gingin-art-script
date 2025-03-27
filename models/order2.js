import { DataTypes } from 'sequelize';
import { sequelize } from './connection.js';


export const Order = sequelize.define('order2', {
    id: {
        type: DataTypes.STRING(128),
        primaryKey: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '會員id'
    },
    level: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: '等級'
    },
    products_id: {
        type: DataTypes.STRING(128),
        allowNull: true,
        comment: '商品id'
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '數量'
    },
    unit_price: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '單價'
    },
    discount: {
        type: DataTypes.DECIMAL(5, 2),
        allowNull: true,
        comment: '折扣 (0~1)'
    },
    original_amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '原始總金額 (未折扣)'
    },
    discount_amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '折扣金額'
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: '應付金額 (已折扣)'
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: true,
        comment: '狀態'
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'order2',
    timestamps: false
});
