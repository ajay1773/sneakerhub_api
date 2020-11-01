const mongoose = require("mongoose");
const ProductSchema = require("./ProductModel");
const CartSchema = require("./CartModel");
const User = new mongoose.Schema({
       name: { type: String, required: true },
       email: { type: String, required: true },
       password: { type: String, required: true },
       isAdmin: { type: Boolean, required: true, default: false },
       cart: { type: Array, default: 0 },
       savedAddresses: { type: Array }

       // [ {type: mongoose.Types.ObjectId, ref: ProductSchema},{numerOfProduct:{}} ]// { type: Array, default: 0 }
});

const UserModel = mongoose.model("User", User);
module.exports = UserModel;