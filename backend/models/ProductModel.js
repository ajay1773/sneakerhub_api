const mongoose = require("mongoose");

const Product = new mongoose.Schema({
       name: { type: String, required: true },
       price: { type: String, required: true },
       desc: { type: String, required: true },
       brand: { type: String },
       imageURL: { type: Array }
});

const ProductModel = mongoose.model("Product", Product);
module.exports = ProductModel;