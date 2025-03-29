import { Order } from '../models/order2.js'; // 載入訂單模型
import { Op } from 'sequelize';

// 產生隨機日期
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

async function updateOrderTimestamps() {
    try {
        const orders = await Order.findAll();

        for (const order of orders) {
            const randomCreatedAt = randomDate(new Date('2025-02-01'), new Date('2025-03-29'));

            await order.update({
                created_at: randomCreatedAt,
                updated_at: randomCreatedAt
            });
        }

        console.log('訂單建立與更新時間已全部更新 ✅');
    } catch (error) {
        console.error('更新訂單時間時出錯 ❌', error);
    }
}

updateOrderTimestamps();
