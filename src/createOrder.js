import axios from 'axios';

// 取得商品列表
async function getProductUIDs() {
    const res = await axios.get('http://domain.co/porduct_control.php?action=get_all');
    const products = res.data.data;
    return products.map(p => p.UID);
}

// 產生隨機整數
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 建立單一筆訂單
async function createOrder(apiUserId, productId, quantity) {
    try {
        const res = await axios.post(
            'https://domain.co/order_control_v2.php?action=create',
            {
                products_id: productId,
                quantity: String(quantity)
            },
            {
                headers: {
                    'api-user-id': apiUserId
                }
            }
        );
        return res.data;
    } catch (error) {
        console.error(`❌ 建立訂單失敗: ${error.message}`);
    }
}

// 主流程
async function main() {
    const productUIDs = await getProductUIDs();
    console.log(`✅ 取得 ${productUIDs.length} 筆商品`);

    const totalOrders = 10;

    for (let i = 0; i < totalOrders; i++) {
        const productId = productUIDs[getRandomInt(0, productUIDs.length - 1)];
        const userNumber = getRandomInt(1, 300);
        const quantity = getRandomInt(1, 3);

        const apiUserId = `user${userNumber}`;

        await createOrder(apiUserId, productId, quantity);

        if ((i + 1) % 100 === 0) {
            console.log(`✅ 已建立 ${i + 1} 筆訂單`);
        }
    }

    console.log('🎉 所有訂單建立完成');
}

main();
