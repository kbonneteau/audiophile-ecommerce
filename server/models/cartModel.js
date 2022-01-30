const fs = require('fs');
const cartPath = "./data/carts.json"

const readCarts = () => JSON.parse(fs.readFileSync(cartPath));

const writeCarts = allCarts => fs.writeFileSync(cartPath, JSON.stringify(allCarts, null, 2));

module.exports = {
    readCarts,
    writeCarts
}