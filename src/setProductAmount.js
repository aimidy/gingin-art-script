import 'dotenv/config';
import { Product } from '../models/product.js';

async function main() {
    // 可用的商品金額清單
    const product_amounts = [500, 1000, 1500, 2000, 2500, 3000];


    do {
        const products = await Product.findAll({
            where: {
                amount: 0
            },
            limit: 1000
        });

        if (products.length === 0) {
            break;
        }

        for (const product of products) {
            const amount = product_amounts[Math.floor(Math.random() * product_amounts.length)];
            product.amount = amount;
            await product.save();
        }
    } while (true);
}

main();