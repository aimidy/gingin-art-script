import { Member } from '../models/member.js';
import { Op } from 'sequelize';

// 可選的 Level 值
const levels = ['新芽', '小草', '小花', '大樹'];

// 產生隨機日期（2025/04/01 ~ 2025/04/30）
function getRandomDateInApril2025() {
    const start = new Date('2025-04-01T00:00:00');
    const end = new Date('2025-04-30T23:59:59');
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

async function updateUsers() {
    try {
        const users = await Member.findAll({
            where: {
                Username: {
                    [Op.like]: 'user%'
                }
            }
        });

        for (const user of users) {
            await user.update({
                Uid01: user.Username,
                Level: levels[Math.floor(Math.random() * levels.length)],
                Created_at: getRandomDateInApril2025()
            });
        }

        console.log(`✅ 成功更新 ${users.length} 筆資料`);
    } catch (error) {
        console.error('❌ 更新發生錯誤:', error);
    }
}

updateUsers();
