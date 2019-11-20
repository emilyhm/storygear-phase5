const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    product_image: {type: String, required: true },
    product_alt_desc: { type: String, required: true},
    category: { type: String, required: true },
    item_description: { type: String, required: true },
    price: { type: Number, required: true },
    monetary_value: { type: Number, required: true }
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;