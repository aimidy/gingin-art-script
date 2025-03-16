import { sequelize } from "../models/connection.js";
import { Product } from "../models/product.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import _ from "lodash";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
    try {
        const filePath = path.resolve(__dirname, "./product.json");
        const data = fs.readFileSync(filePath, "utf8");
        const products = JSON.parse(data).map((product) => {
            const {
                UID,
                version,
                title,
                category,
                showInfo,
                showUnit,
                descriptionFilterHtml,
                masterUnit,
                subUnit,
                supportUnit,
                otherUnit,
                webSales,
                sourceWebPromote,
                sourceWebName,
                startDate,
                endDate,
                hitRate,
                ...rest
            } = product;

            return {
                UID,
                version,
                title,
                category,
                showInfo,
                showUnit,
                descriptionFilterHtml,
                masterUnit,
                subUnit,
                supportUnit,
                otherUnit,
                webSales,
                sourceWebPromote,
                sourceWebName,
                startDate,
                endDate,
                hitRate,
            };
        });

        await sequelize.authenticate();

        for (const chunk of _.chunk(products, 100)) {
            await Product.bulkCreate(chunk);
        }
    } catch (err) {
        console.error(err);
    } finally {
        await sequelize.close();
    }
}

main();
