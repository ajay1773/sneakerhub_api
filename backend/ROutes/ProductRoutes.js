const express = require("express");
const ProductSchema = require("../models/ProductModel");
const UserSchema = require("../models/UserModel");
const router = express.Router();
const config = require("../config");
const jwt = require("jsonwebtoken");
const CartSchema = require("../models/CartModel");
router.post("/addproduct", (req, res) => {
       console.log(req.body);
       new ProductSchema({
              name: req.body.name,
              price: req.body.price,
              desc: req.body.desc,
              brand: req.body.brand,
              imageURL: req.body.URL
       }).save((err, result) => {
              if (err) {
                     console.log(err);
                     res.status(401).send({ Message: "Could not save" })
              }
              else {
                     console.log(result);
                     res.send(result)
              }
       })
});

router.get("/removefromcart", (req, res) => {
       console.log(req.query);
       UserSchema.findById(req.query.userID).then(doc => {
              const cart = doc.cart;
              const refinedCart = cart.filter((item) => item._id != req.query.id)
              UserSchema.findByIdAndUpdate(req.query.userID, { $set: { cart: refinedCart } }).then(newdoc => { res.send({ doc: doc, newdoc: newdoc }) }).catch(err => { console.log(err) });
              //UserSchema.findById(req.query.userID).then(newdoc => { res.send({ doc: doc, newdoc: newdoc }) }).catch(err => console.log(err))

       })
              .catch(err => { console.log(err) })
})

router.get('/product', (req, res) => {
       console.log(req.query);
       req.query.userID ?

              ProductSchema.findById(req.query.id).then(
                     doc => { UserSchema.findByIdAndUpdate(req.query.userID, { $push: { cart: doc } }).then(user => { res.send(doc) }).catch(err => console.log(err)) }
              ).catch(err => { console.log("error occured in finding the user", err) })


              : req.query.bname && req.query.bname !== 'all' ? ProductSchema.find({ brand: { $regex: req.query.bname, $options: 'i' } }).then(docs => { res.send(docs); }).catch(err => { console.log(err) })
                     : req.query.bname === 'all' ? ProductSchema.find({}).then(docsArray => res.send(docsArray)) : ProductSchema.findById(req.query.id).then(doc => res.send(doc)).catch(err => console.log(err))
})

router.get("/getcart", (req, res) => {
       console.log(req.query.userId);
       UserSchema.findById(req.query.userId).then(doc => res.send(doc)).catch(er => console.log(er));
})

module.exports = router;