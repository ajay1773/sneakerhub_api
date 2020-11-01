const mongoose = require('mongoose');
const ProductSchema = require("./ProductModel");
const CartSchema = new mongoose.Schema({

       productId: { type: mongoose.Types.ObjectId, ref: ProductSchema, unique: true },
       numberOfProduct: { type: Number, default: 0 },


});
const cart = mongoose.model("Cart", CartSchema);
module.exports = {
       cart: cart,
       CartSchema: CartSchema
};
